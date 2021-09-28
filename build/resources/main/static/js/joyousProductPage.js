
//hardcode way to add product items into the product items using
//productController template. Subsequently should be done later at back-end instead.

//Create an instance of ProductController class
const product = new joyousProductController();
//product _items currently is empty

function loadData()
{
//Start adding products into product_items
/*
product.addItem(1, "Dream of my Li", "A collection of rose..", "images/Floral Arrangement/Birth01.jpg", "Birthday", "$180");
product.addItem(2, "Beauty in a Box", "A collection of rose..", "images/Floral Arrangement/Birth02.jpg", "Birthday", "$180");
product.addItem(3, "Path of Joys", "Walking in the Shade of", "images/Floral Arrangement/Birth03.jpg", "Birthday", "$180");
product.addItem(4, "Bouquet of Dreams", "A collection of rose..", "images/Floral Arrangement/Birth04.jpg", "Birthday", "$180");
product.addItem(5, "Pots of Gold & Luck", "A collection of rose..", "images/Floral Arrangement/Birth05.jpg", "Birthday", "$180");
product.addItem(6, "Sparkling Joys", "A collection of rose..", "images/Floral Arrangement/Birth06.jpg", "Birthday", "$180");

product.addItem(7, "Dream of my Life", "A collection of rose..", "images/Floral Arrangement/Anniver01.jpg", "Anniversary", "$120");
product.addItem(8, "Dream of my Life", "A collection of rose..", "images/Floral Arrangement/Anniver02.jpg", "Anniversary", "$120");
product.addItem(9, "Dream of my Life", "A collection of rose..", "images/Floral Arrangement/Anniver03.jpg", "Anniversary", "$120");
product.addItem(10,"Dream of my Life", "A collection of rose..", "images/Floral Arrangement/Anniver04.jpg", "Anniversary", "$120");
product.addItem(11,"Dream of my Life", "A collection of rose..", "images/Floral Arrangement/Anniver05.jpg", "Anniversary", "$120");
product.addItem(12,"Dream of my Life", "A collection of rose..", "images/Floral Arrangement/Anniver06.jpg", "Anniversary", "$120");

product.addItem(13,"Heavenly Hope", "A collection of rose..", "images/Floral Arrangement/Congrat01.jpg", "Congratulatory", "$150");
product.addItem(14,"Heavenly Hope", "A collection of rose..", "images/Floral Arrangement/Congrat02.jpg", "Congratulatory", "$150");   
product.addItem(15,"Heavenly Hope", "A collection of rose..", "images/Floral Arrangement/Congrat03.jpg", "Congratulatory", "$150");
product.addItem(16,"Heavenly Hope", "A collection of rose..", "images/Floral Arrangement/Congrat04.jpg", "Congratulatory", "$150");
product.addItem(17,"Heavenly Hope", "A collection of rose..", "images/Floral Arrangement/Congrat05.jpg", "Congratulatory", "$150");
product.addItem(18,"Heavenly Hope", "A collection of rose..", "images/Floral Arrangement/Congrat07.jpg", "Congratulatory", "$150");
*/
product.displayItem();
}
loadData();

// On Select Filter Dropdown
const select = document.querySelector("#selectCategory");
select.addEventListener("change", function() { 
    const selectValue = select.value;

    product.filterItem(selectValue);
});