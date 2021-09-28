const formList = []; // store all the values into the Object Array
let isSelected = false; // set for drop down validity check
let selectOption = document.querySelector("#category"); // drop down variable
const chooseFile = document.getElementById("imageURL"); // image file source
const imgPreview = document.getElementById("img-preview"); // image file preview

// Create form object
function addForm() {
    console.log("in the function");
    const name = document.querySelector("#name").value;
    const category = document.querySelector("#category").value;
    const price = document.querySelector("#price").value;
    const description = document.querySelector("#description").value;
    const imageURL = document.querySelector("#imageURL").value

    // Drop down selection check
    if (!isSelected) {
        document.querySelector("#category").setCustomValidity("Please select at least ONE catergory");
        document.querySelector("#category").reportValidity();
    }
    else {
        console.log("Form is submitted");
        addToList(name, category, price, description, imageURL);
    }
} // end of addForm

function addToList(name, category, price, description, imageURL) {
    // Adding the list of item into formList object
    const item = {
        name: name,
        category: category,
        price: price,
        description: description,
        imageURL: imageURL
    } 

    // push item to formList
    formList.push(item);
    clearForm();
    console.log(`Total Submission: ${formList.length}:`, formList);
} // end of addToList

// display image preview
function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
} // end of image preview

// Clear the form after submission
function clearForm() {
    const name = document.querySelector("#name").value = "";
    const price = document.querySelector("#price").value = "";
    const description = document.querySelector("#description").value = "";
    const price = document.querySelector("#price").value = "";
    const imageURL = document.querySelector("#imageURL").value = "";
    imgPreview.style.display = "none";
    
    // Set drop down menu to Index 0
    document.querySelector("#category").selectedIndex = 0;
} // end of clear form

// add eventlistener for image select
chooseFile.addEventListener("change", function () {
    getImgData();
}) // end of eventlistener for image select

// add eventlistener for drop down check
selectOption.addEventListener("change", function() {
    if (selectOption.value == "Select Category") {
        isSelected = false;
    }

    else {
        selectOption.setCustomValidity("");
        selectOption.reportValidity();
        isSelected = true;
    }
}); // end of eventlistener for drop down check