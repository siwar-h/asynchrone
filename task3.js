const fetch = require('node-fetch');


async function getActivities() {
  console.log("Fetching data from API...");

  try {
    const response = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Activities');

  
    console.log("API Response:", response);
  } catch (error) {
    console.error("An error occurred while fetching data. Please try again later.", error.message);
  }
}
async function postActivities() {
    console.log("Fetching data from API...");
  
    try {
      const response = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors');
  
    
      console.log("API Response:", response);
    } catch (error) {
      console.error("An error occurred while fetching data. Please try again later.", error.message);
    }
  }
  async function getBooks() {
    console.log("Fetching data from API...");
  
    try {
      const response = await fetch('https://fakerestapi.azurewebsites.net/api/v1/Books');
  
    
      console.log("API Response:", response);
    } catch (error) {
      console.error("An error occurred while fetching data. Please try again later.", error.message);
    }
  }


  async function chainedAsyncFunctions() {
    await getActivitie();
    await postActivities();
    await getBooks();
  }
  
  
  chainedAsyncFunctions();