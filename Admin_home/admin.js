const patients = [
  {
    name: "Aman Yadav",
    age: "35",
    username: "AmanYadav",
    photo: "Aman Photo.jpg",
    idProof: "idproof1.jpg",
    generatedId: "ABC123"
  }
];

// Function to display patient details
function displayPatientDetails() {
  const tableBody = document.getElementById("patientTableBody");
  patients.forEach((patient, index) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = patient.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = patient.age;
    row.appendChild(ageCell);

    const usernameCell = document.createElement("td");
    usernameCell.textContent = patient.username;
    row.appendChild(usernameCell);

    const photoCell = document.createElement("td");
    const photoImg = document.createElement("img");
    photoImg.src = patient.photo;
    photoImg.alt = "Patient Photo";
    photoCell.appendChild(photoImg);
    row.appendChild(photoCell);

    const idProofCell = document.createElement("td");
    const idProofImg = document.createElement("img");
    idProofImg.src = patient.idProof;
    idProofImg.alt = "ID Proof";
    idProofCell.appendChild(idProofImg);
    row.appendChild(idProofCell);

    const generatedIdCell = document.createElement("td");
    generatedIdCell.textContent = patient.generatedId;
    row.appendChild(generatedIdCell);

    // Add View Patient Record button
    const actionCell = document.createElement("td");
    const viewButton = document.createElement("button");
    viewButton.textContent = "View";
    viewButton.classList.add("view-button");
    viewButton.addEventListener("click", function () {
      viewPatientRecord(index);
    });
    actionCell.appendChild(viewButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

// Call the function to display patient details
displayPatientDetails();

// Go Back function
function goBack() {
  window.history.back();
}

// Function to view patient record
function viewPatientRecord(index) {
  // Perform actions to view the patient record
  console.log("Viewing patient record at index:", index);
}
