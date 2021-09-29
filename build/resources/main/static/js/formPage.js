//Create an instance object of ProductsController
const productsControl = new joyousProductController();
let storeImage = ""; //this will store the image object that is uploaded and passed to
//product controller
let isSelected = false; // set for drop down validity check
let selectOption = document.querySelector("#category"); // drop down variable
const imgPreview = document.getElementById("img-preview"); // image file preview

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newItemNameInput = document.querySelector('#name');
    const newItemDescription = document.querySelector('#description');
    const newItemImageURL = document.querySelector('#imageURL');
    const newItemCategory = document.querySelector('#category');
    const newItemPrice = document.querySelector('#price');

    //Drop down selection check validation
    if (!isSelected) {
        document.querySelector("#category").setCustomValidity("Please select at least ONE category");
        document.querySelector("#category").reportValidity();
    }
    else {
        console.log("Form is submitted");

       // addToList(name, category, price, description, imageURL);

       // Get the values of the inputs - variable names to be same as MySQL columns
           const name = newItemNameInput.value;
           const description = newItemDescription.value;
           const imageURL = "FloralArrangement/" + newItemImageURL.value.replace("C:\\fakepath\\", "");
           // /images/T-shirt.jpg
           const category = newItemCategory.value;
           const price = newItemPrice.value;

           // Add the task to the task manager
                   productsControl.addItem(name, description, imageURL, category, price, storeImage);

       // Clear the form
           newItemNameInput.value = '';
           newItemDescription.value = '';
           newItemImageURL.value = '';
           newItemCategory.selectedIndex = 0;
           newItemPrice.value = '';
           imgPreview.style.display = "none";
    }
})

// select file input
const input = document.querySelector('#imageURL');

// display image preview
function getImgData() {
    storeImage = input.files[0];
    if (storeImage) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(storeImage);
        fileReader.addEventListener("load", function () {
        imgPreview.style.display = "block";
        imgPreview.innerHTML = '<img src="' + this.result + '" />';
        });
    }
}

// add event listener
input.addEventListener('change', () => {
    //File object representing the file(s) selected by the user
    getImgData();    //this sends the image to the product controller above
    //productsControl
})

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
    });