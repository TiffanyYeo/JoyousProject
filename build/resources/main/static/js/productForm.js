
const productsControl = new joyousProductController();
const imgPreview = document.getElementById("img-preview");
var storeImage = "";

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newItemNameInput = document.querySelector('#name');
    const newItemDescription = document.querySelector('#description');
    const newItemCategory = document.querySelector('#category');
    const newItemPrice = document.querySelector('#price');
    const newItemImageUrl = document.querySelector('#imageURL');

    /*
        Do the Validation code here
    */
        if (!isSelected) {
            document.querySelector("#category").setCustomValidity("Please select at least ONE catergory");
            document.querySelector("#category").reportValidity();
        } else {
            console.log("Form submitted");
        

    // Get the values of the inputs - variable names to be same as MySQL columns
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const category = newItemCategory.value;
    const price = newItemPrice.value;
    const imageURL = "images/" + newItemImageUrl.value.replace("C:\\fakepath\\", "");
    
    
    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemCategory.value = '';
    newItemPrice.value = '';
    newItemImageUrl.value = '';

    // Add the task to the task manager
    productsControl.addItem(name, description, category, price, imageURL, storeImage);
        }

});

// select file input
const input = document.querySelector('#imageURL');

// add event listener
input.addEventListener('change', () => {
    storeImage = input.files[0];
});
