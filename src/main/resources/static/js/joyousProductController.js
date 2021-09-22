//Crete a ProductController Class
//Attribute : items object array with items of: name, description, imageURL, style, price

class joyousProductController {

    constructor() {         // at the start is an empty constructor
        this._items = [];   //empty objects to hold the values that will pass from addItem
    }

    //Create addItem method to add the product item to the _items object 
    //current method is used on Front-end coding. subsequently will be done at back-end instead

    addItem(productIdValue, name, description, imageURL, category, price) {

        const item = {          //item object created to hold properties & values 
            productId: productIdValue,
            name: name,        //passes thru addItem method
            description: description,
            imageURL: imageURL,
            category: category,
            price: price
        }

        this._items.push(item);     //item object values are pushed into _items
    
    }

    //Display the product items on the webpage
    displayItem(filterValue) {

        console.log(filterValue);
        console.log(typeof(filterValue));

        let tempArray;

        if(typeof(filterValue) == 'undefined' || filterValue == "All") {
            //console.log("filter value is undefined");
            tempArray = this._items;
        } else {
            //console.log("filter value is defined");
            const categoryListFiltered = this._items.filter(e => e.category == filterValue);

            tempArray = categoryListFiltered;
        }

        //console.log(this._items);

        //Display the information on the card
        //1) For loop to loop thru the _items (currently hold 18 items in it)
        //2) Call a function to create the HTML elements for the card
        //3) insert the HTML elements of the cards to the row (#row)

        const productHTMLList = [];     
        // array created to store the HTML code in each createHTMLCard
       
        //1) The For Loop will loop through 18 times as there are 18 products entered
        for (let i = 0; i < tempArray.length; i++)
        {
            const item = tempArray[i];    // retrieve individual item from the _items object
            //e.g. if i=0
            
            const productHTML = createHTMLCard(item); // a function to display the item
            // passing i as an agrument to createHTMLCard function to use as an index later
            // passing item is the set of elements in the array _items

            productHTMLList.push(productHTML); 
            // add the card created each time in the loop to the array productHTMLList

            
            // console.log(productHTMLList);

        } //end of for-loop
        console.log(productHTMLList);

        // (1) Append the cards created to th #row id
        const pHTML = productHTMLList.join("\n");   
        // pHTML is a string to hold all the array values in productHTMLList, ("\n") is a line break 
        //console.log(pHTML);

        // (2) to list the HTML code into the html file
        document.querySelector("#row").innerHTML = pHTML;

        // (3) create a loop to add the event listener to each 'more' button in the card displayed
        for (let j = 0; j < tempArray.length; j++)
        {
            const item = tempArray[j];

            document.getElementById(item.productId).addEventListener("click", function() {displayProductDetail(item);});
            //create an event listener for a click to display the product detail in a popup modal
            // a event function, displayProductDetail,  is created to do the display
        }
    }// End of displayItem method

} //End of ProductController Class 

//2) Call a function to create the HTML elements for the card display
//A ` backpick arrow function is used to return the whole HTML element with values that is passed in throgh the parameter
const createHTMLCard = (item) => `        
            <div  class="col-sm-4">
            <div class="card">
            <img src="${item.imageURL}" class="card-img-top"
                alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">${item.category}</p>                
                <button id="${item.productId}" class="btn btn-accent" type="button" data-toggle="modal" data-target="#productModal">See Details</button>   
            </div>
        </div>
    </div>
`;
/*
<div  class="col-lg-4">
            <div class="card" style="max-width: 18rem;">
            <img src="${item.imageURL}" class="card-img-top"
                alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text">${item.category}</p>                
                <button id="${item.productId}" class="btn btn-accent" type="button" data-toggle="modal" data-target="#productModal">See Details</button>   
            </div>
        </div>
    </div>
*/
function displayProductDetail(item)
{
console.log("display product details");
document.getElementById("modalName").innerText = item.name;
document.getElementById("modalCategory").innerText = item.category;
document.getElementById("modalDescription").innerText = item.description;
document.getElementById("modalImg").src = item.imageURL;
document.getElementById("modalPrice").innerText = item.price;

}