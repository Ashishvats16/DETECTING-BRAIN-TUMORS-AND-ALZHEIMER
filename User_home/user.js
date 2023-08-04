// Get the input elements for photo and ID proof
const photoInput = document.getElementById("photo");
const idProofInput = document.getElementById("id-proof");

// Add event listeners for file uploads
photoInput.addEventListener("change", handleFileUpload);
idProofInput.addEventListener("change", handleFileUpload);

// Function to handle file upload
function handleFileUpload(event) {
  const file = event.target.files[0];

  // Perform file validation or further processing as needed
  // For example, you can access the file using 'file' variable and upload it to a server

  console.log("File uploaded:", file);
}

// For saving the path of the image
function displayFilePath(inputId) {
  const input = document.getElementById(inputId);
  const file = input.files[0];
  const filePath = file ? file.name : "";
  const spanId = inputId + "-path";
  document.getElementById(spanId).textContent = filePath;
}