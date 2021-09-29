const productsControl = new joyousProductController();
var storeImage = ""

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

    let isSelected = false; // set for drop down validity check
    let selectOption = document.querySelector("#category"); // drop down variable
    const chooseFile = document.getElementById("imageURL"); // image file source
    const imgPreview = document.getElementById("img-preview"); // image file preview

    // Do the Validation code here
    // Drop down selection check
    if (!isSelected) {
        document.querySelector("#category").setCustomValidity("Please select at least ONE catergory");
        document.querySelector("#category").reportValidity();
    }
    else {
        console.log("Form is submitted");
        addToList(name, category, price, description, imageURL);
    }

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

    // Get the values of the inputs - variable names to be same as MySQL columns
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const imageUrl = "FloralArrangement/" + newItemImageURL.value.replace("C:\\fakepath\\", "");
    const category = newItemCategory.value;
    const price = newItemPrice.value;
    

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemImageUrl.value = '';
    newItemStyle.value = '';
    newItemPrice.value = '';
    imgPreview.style.display = "none";

     // Set drop down menu to Index 0
     document.querySelector("#category").selectedIndex = 0;

    // Add the task to the task manager
    productsControl.addItem(name, description, imageUrl, style, price, storeImage);

});

// select file input
const input = document.querySelector('#imageURL');

// add event listener
input.addEventListener('change', () => {
    storeImage = input.files[0];
})

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
