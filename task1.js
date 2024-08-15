function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function iterateWithAsyncAwait(array) {
    for (const element of array) {
      console.log(element);
      await delay(1000);
    }
  }
  
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);
