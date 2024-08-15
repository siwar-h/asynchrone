const fetch = require('node-fetch'); 
async function awaitCall() {
  console.log("Fetching data from API...");
  
  try {
    const response = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Activities');
    

    console.log("API Response:", response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

awaitCall();