async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getPost();