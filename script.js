// Fetch the JSON data
fetch('http://localhost:3000/heroes')
  .then(response => response.json())
  .then(data => {
    // Call a function to display the JSON data
    displayJSON(data);
  })
  .catch(error => console.error('Error:', error));

// Function to display the JSON data
function displayJSON(data) {
  // Get the container element
  const container = document.getElementById('jsonContainer');

  // Convert the JSON object to a string with indentation for readability
  

  // Set the HTML content of the container to the JSON string

}

//the json is not displaying the information like I was hoping. And I messed up again. 
