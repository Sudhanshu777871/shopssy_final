const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./config");
require("dotenv").config();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
// applying the middleware
app.use(express.json());
app.use(cors());

// CREATING THE LOGIN API
app.post("/login", (req, res) => {
  if (req.body.phone && req.body.password) {
    const { phone, password } = req.body;

    // Query the database to find the user by phone
    config.query(
      "SELECT * FROM account WHERE Phone = ?",
      [phone],
      async (error, results) => {
        if (error) {
          throw error;
        } else if (results.length === 0) {
          res.status(401).send({ errMsg: "User not found" });
        } else {
          const user = results[0];
          const storedPassword = user.Password;

          // Compare the provided password with the hashed password
          try {
            const passwordMatch = await bcrypt.compare(password, storedPassword);

            if (passwordMatch) {
              res.send(true);
            } else {
              res.status(401).send({ errMsg: "Invalid password" });
            }
          } catch (err) {
            console.error(err);
            res.status(500).send({ errMsg: "Login failed" });
          }
        }
      }
    );
  } else {
    res.status(400).send({ errMsg: "Please Enter Both Phone and Password" });
  }
});

// code for api for signup
app.post("/signup", (req, res) => {
  if (req.body.name && req.body.phone && req.body.password) {
    const { name, phone, password } = req.body;

    // Check if the phone number is already registered
    config.query(
      "SELECT * FROM account WHERE phone = ?",
      [phone],
      async (error, results) => {
        if (error) {
          throw error;
        } else if (results.length > 0) {
          res.status(400).send({ errMsg: "Phone number is already registered" });
        } else {
          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);

          // Insert the new user into the database
          config.query(
            "INSERT INTO account (name, phone, password) VALUES (?, ?, ?)",
            [name, phone, hashedPassword],
            (error) => {
              if (error) {
                throw error;
              }
              res.send(true);
            }
          );
        }
      }
    );
  } else {
    res.status(400).send({ errMsg: "Please Enter Name, Phone, and Password" });
  }
});

// code for api for signup
app.post("/support", (req, res) => {
  if (req.body.msg && req.body.phone) {
    const { msg, phone } = req.body;
    // code for running the query
    config.query("INSERT INTO support (Phone, Msg) VALUES (?, ?)", [phone, msg], (err, result) => {
      if (err) throw err;
      // sending the result
      res.send(true);
    });
  } else {
    res.status(400).send({ errMsg: "Please Send Message And Phone No" });
  }
});

// code for making API for profile name
app.post('/profile', (req, res) => {
  if (req.body.phone) {
    const { phone } = req.body;
    // running query
    config.query("SELECT Name FROM account WHERE Phone=?", [phone], (err, result) => {
      if (err) throw err
      // sending the result
      res.send(result)
    })
  } else {
    res.status(400).send("Please Send Phone No")
  }
})

// CODE FOR MAKING API OF CHANGE PASSWORD
// app.post('/update_password', (req, res) => {
//   if (req.body.currentPass && req.body.newPass && req.body.phone) {
//     const { currentPass, newPass, phone } = req.body;
//     // running query
//     config.query("SELECT Password FROM account WHERE Phone = ?", [phone], async (error, result) => {
//       if (error) {
//         res.send({ message: "Some Problem Occured" });
//       }
//       else {
//         const checkPass = await bcrypt.compare(currentPass, result[0].Password);
//         // code for checking current pass
//         if (checkPass) {
//           const hashPass = await bcrypt.hash(newPass, 10);
//           config.query("UPDATE account SET Password = ? WHERE Phone = ?", [phone], (error, result) => {
//             if (error) throw error
//             // seding the result
//             res.send({ message: "Password Is Updated Successfully" })
//           })
//         }
//         else {
//           res.send({ message: "Invalid Current Password" })
//         }
//       }
//     })
//   }
//   else {
//     res.send({ message: "Please Send All Details" });
//   }
// })

app.post('/update_password', [
  check('currentPass').notEmpty(),
  check('newPass').isLength({ min: 6 }),
  check('phone').isMobilePhone(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { currentPass, newPass, phone } = req.body;

  try {
    const result = await getUserPasswordByPhone(phone);

    if (!result || !result[0]) {
      return res.status(404).json({ message: 'Account not found' });
    }

    const hashPass = result[0].Password;
    const passwordMatch = await bcrypt.compare(currentPass, hashPass);

    if (passwordMatch) {
      const newHashPass = await bcrypt.hash(newPass, 10);
      await updatePasswordByPhone(phone, newHashPass);
      res.send(true);
    } else {
      res.status(401).json({ message: 'Invalid current password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Encapsulated database query functions
async function getUserPasswordByPhone(phone) {
  return new Promise((resolve, reject) => {
    config.query('SELECT Password FROM account WHERE Phone = ?', [phone], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

async function updatePasswordByPhone(phone, newHashPass) {
  return new Promise((resolve, reject) => {
    config.query('UPDATE account SET Password = ? WHERE Phone = ?', [newHashPass, phone], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// Listening The App
app.listen(process.env.RUNNING_PORT);
