
//hardcode way to add product items into the product items using
//productController template. Subsequently should be done later at back-end instead.

//Create an instance of ProductController class
const product = new joyousProductController();
//product _items currently is empty

function loadData() {
    product.displayItem();
}

loadData();

// On Select Filter Dropdown

const select = document.querySelector("#selectCategory");

select.addEventListener("change", function () {
    const selectValue = select.value;
    product.filterItem(selectValue); 
});