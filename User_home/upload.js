// import React, {Component} from 'react'
// import {DropzoneArea} from 'material-ui-dropzone'
 
// class DropzoneAreaExample extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       files: []
//     };
//   }
//   handleChange(files){
//     this.setState({
//       files: files
//     });
//   }
//   render(){
//     return (
//       <DropzoneArea
//         onChange={this.handleChange.bind(this)}
//         />
//     )
//   }
// }
 
// export default DropzoneAreaExample;

// import React, { Component } from 'react'
// import {DropzoneDialog} from 'material-ui-dropzone'
// import Button from '@material-ui/core/Button';
 
// export default class DropzoneDialogExample extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false,
//             files: []
//         };
//     }
 
//     handleClose() {
//         this.setState({
//             open: false
//         });
//     }
 
//     handleSave(files) {
//         //Saving files to state for further use and closing Modal.
//         this.setState({
//             files: files,
//             open: false
//         });
//     }
 
//     handleOpen() {
//         this.setState({
//             open: true,
//         });
//     }
 
//     render() {
//         return (
//             <div>
//                 <Button onClick={this.handleOpen.bind(this)}>
//                   Add Image
//                 </Button>
//                 <DropzoneDialog
//                     open={this.state.open}
//                     onSave={this.handleSave.bind(this)}
//                     acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
//                     showPreviews={true}
//                     maxFileSize={5000000}
//                     onClose={this.handleClose.bind(this)}
//                 />
//             </div>
//         );
//     }
// }

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
	const dropZoneElement = inputElement.closest(".drop-zone");

	dropZoneElement.addEventListener("click", (e) => {
		inputElement.click();
	});

	inputElement.addEventListener("change", (e) => {
		if (inputElement.files.length) {
			updateThumbnail(dropZoneElement, inputElement.files[0]);
		}
	});

	dropZoneElement.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropZoneElement.classList.add("drop-zone--over");
	});

	["dragleave", "dragend"].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove("drop-zone--over");
		});
	});

	dropZoneElement.addEventListener("drop", (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
		}

		dropZoneElement.classList.remove("drop-zone--over");
	});
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

	// First time - remove the prompt
	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		dropZoneElement.querySelector(".drop-zone__prompt").remove();
	}

	// First time - there is no thumbnail element, so lets create it
	if (!thumbnailElement) {
		thumbnailElement = document.createElement("div");
		thumbnailElement.classList.add("drop-zone__thumb");
		dropZoneElement.appendChild(thumbnailElement);
	}

	thumbnailElement.dataset.label = file.name;

	// Show thumbnail for image files
	if (file.type.startsWith("image/")) {
		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onload = () => {
			thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
		};
	} else {
		thumbnailElement.style.backgroundImage = null;
	}
}
// // Import the model
// const model = await tf.loadModel('model.h5');

// // When the form is submitted, predict the disease of the plant
// document.querySelector('form').addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // Get the image file
//   const image = await document.querySelector('input[name="image"]').files[0];

//   // Convert the image to a tensor
//   const tensor = tf.image.decodeBmp(image);

//   // Predict the disease of the plant
//   const prediction = await model.predict(tensor);

//   // Display the prediction
//   document.querySelector('#results').innerHTML = prediction;
// })
