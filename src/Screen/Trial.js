const handleSubmit = async () => {
  try {
      // Validation for name
      if (name === "") {
          setIsNameValid(true);
          return;
      } else {
          setIsNameValid(false);
      }

      // Validation for phone number
      const phoneRegex = /^[6-9]\d{9}$/;
      const valid = phoneRegex.test(phone);
      if (!valid) {
          setIsPhoneValid(true);
          return;
      } else {
          setIsPhoneValid(false);
      }

      // Validation for password
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      const passwordValid = passwordRegex.test(password);

      if (!passwordValid) {
          setIsPasswordValid(true);
          return;
      } else {
          setIsPasswordValid(false);
      }

      // Code for calling the API
      const getAPI = 'http://10.0.2.2:5600/signup';
      const callAPI = await fetch(getAPI, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, phone, password })
      });

      // Converting callAPI to JSON
      const response = await callAPI.json();

      if (!response.message) {
          setSnackVisible(true);
      } else {
          navigation.navigate('DrawerMiddle');
      }
  } catch (error) {
      // Handle any errors here
      console.error(error);
  }
}
