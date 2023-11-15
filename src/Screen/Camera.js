import { React, useState, useEffect } from 'react'
import cameraStyle from '../Style/CameraStyle'
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { launchCamera } from 'react-native-image-picker';
import { Button } from 'react-native-paper';

function Camera() {
  // State to hold extracted text and loadingStatus

  const [extractedText, setExtractedText] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [showContent, setShowContent] = useState(false);
  const pickImageCamera = async () => {

    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Perform OCR on the captured image 
        setExtractedText("")
        setLoadingStatus(true)
        performOCR(response.assets[0]);
      }
    });
  };

  // Function to perform OCR on an image 
  // and extract text 
  const performOCR = (file) => {
    let myHeaders = new Headers();
    myHeaders.append(
      "apikey",

      // ADDD YOUR API KEY HERE 
      "FEmvQr5uj99ZUvk3essuYb6P5lLLBS20"
    );
    myHeaders.append(
      "Content-Type",
      "multipart/form-data"
    );

    let raw = file;
    let requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: myHeaders,
      body: raw,
    };

    // Send a POST request to the OCR API 
    fetch(
      "https://api.apilayer.com/image_to_text/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        // Set the extracted text in state 
        setLoadingStatus(false)
        setExtractedText(result["all_text"]);
      })
      .catch((error) => console.log("error", error));
  };

  // code for useeffect
  useEffect(() => {
    pickImageCamera()
  }, [])
  return (
    <View style={cameraStyle.mainView}>
      
      <Text style={{ fontSize: 25, marginTop: 10, color: "orangered", fontWeight: "normal" }}>Select Price</Text>
      <ActivityIndicator size="large" animating={loadingStatus} />
      <ScrollView>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Text style={cameraStyle.detectedText}>
            {extractedText}
          </Text>
        </View>
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 30 }}>

        <Button icon={require('../Img/cross.png')} mode="outlined" color='red' style={{ borderRadius: 2, backgroundColor: "white", width: '45%' }} dark={true} >
          Cancel
        </Button>


        <Button icon="add" mode="contained" style={{ borderRadius: 2, backgroundColor: 'green', width: '45%' }}>
          Add Manually
        </Button>


      </View>

    </View>
  )
}

export default Camera
