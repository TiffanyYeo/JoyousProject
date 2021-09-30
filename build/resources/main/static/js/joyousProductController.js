//Crete a ProductController Class
//Attribute : items object array with items of: name, description, imageURL, category, price

let tempArray;

class joyousProductController {

    constructor() {         // at the start is an empty constructor
        this._items = [];   //empty objects to hold the values that will pass from addItem
    }

    //Create addItem method to add the product item to the _items object 
    //current method is used on Front-end coding. subsequently will be done at back-end instead

    addItem(name, description, imageURL, category, price, storeImage) {
        //POST HTTP Method
        var productController = this;

        const formData = new FormData();
        // key/value pair, e.g. key 'name' is the form field n need to match with the @RequestParam from the
        //PostMapping in your ItemController.java class.
        //value is the parameter that is passed from the productForm.js (e.g. New T-Shirt)
        formData.append('name', name);      // append - add a field
        formData.append('description', description);
        formData.append('imageURL', imageURL);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('imagefile', storeImage);

//        fetch('http://localhost:8080/productlist/add', {
            fetch('https://joyousteamproject.herokuapp.com/productlist/add', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert("Successfully added to Product")
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Error adding item to Product")
            });
    }
    /*   const item = {          //item object created to hold properties & values
           id: id,
           name: name,        //passes thru addItem method
           description: description,
           imageURL: imageURL,
           category: category,
           price: price
       }

       this._items.push(item);     //item object values are pushed into _items
   
   }
*/
    //Display the product items on the webpage
    filterItem(filterValue) {

        console.log(filterValue);
        console.log(typeof (filterValue));

        if (typeof (filterValue) == 'undefined' || filterValue == "All") {
            //console.log("filter value is undefined");
            tempArray = this._items;
        } else {
            //console.log("filter value is defined");
            const categoryListFiltered = this._items.filter(e => e.category == filterValue);

            tempArray = categoryListFiltered;
            console.log(tempArray);
        }
        product.renderProductPage(filterValue);
    }
    /*
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
    */

    displayItem()   //To fetch the data
    {
        var productController = this;
        productController._items = [];

        //fetch data from database using the REST API endpoint from Spring Boot
        //fetch('http://127.0.0.1:8080/productlist/all')     //calling the getMapping
            fetch('https://joyousteamproject.herokuapp.com/productlist/all')
            .then((resp) => resp.json())
            .then(function (data) {
                console.log("2. receive data")
                console.log(data);
                data.forEach(function (item, index) {

                    const itemObj = {       //convert json file to Js object
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        imageURL: item.imageURL,
                        category: item.category,
                        price: item.price
                    };
                    productController._items.push(itemObj);     //push the itemObj into

                });

                productController.renderProductPage(null);    //calling the renderProductPage to display

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //displayItem()
    renderProductPage(select)     //To display item on Page
    {   //pass in a parameter to renderproductpage
        // if parameter = 1, then for-loop use this._items to display
        // if-else statement
        //if parameter = 2, then use the tempArray in the for-loop, tempArray.length
        //set #row to '' to reset
        var productHTMLList = [];

        if (select == null) {

            // document.querySelector('#row').innerHTML = '';

            for (var i = 0; i < this._items.length; i++) {
                const item = this._items[i];            //assign the individual item to the variable

                const productHTML = createHTMLCard(i, item.name, item.description, item
                    .category, item.imageURL);

                productHTMLList.push(productHTML);
            }

            //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#row').innerHTML = pHTML;

            //addEventListener - click
            for (var i = 0; i < this._items.length; i++) {
                const item = this._items[i];
                document.getElementById(i).addEventListener("click", function () {
                    displayProductDetail(item);
                });
            }
        }

        else {

            document.querySelector('#row').innerHTML = '';

            for (var i = 0; i < tempArray.length; i++) {
                const item = tempArray[i];            //assign the individual item to the variable

                const productHTML = createHTMLCard(i, item.name, item.description, item
                    .category, item.imageURL);

                productHTMLList.push(productHTML);
            }

            //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#row').innerHTML = pHTML;

            //addEventListener - click
            for (var i = 0; i < tempArray.length; i++) {
                const item = tempArray[i];
                document.getElementById(i).addEventListener("click", function () {
                    displayProductDetail(item);
                });
            }
        }  
    }
}

//End of ProductController Class 

//2) Call a function to create the HTML elements for the card display
//A ` backpick arrow function is used to return the whole HTML element with values that is passed in throgh the parameter
const createHTMLCard = (index, name, description, category, imageURL) =>
    `
            <div  class="col-sm-4">
            <div class="card">
            <img src=${imageURL} class="card-img-top"
                alt="image">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${category}</p>
                <button id="${index}" class="btn btn-accent" type="button"
                data-toggle="modal" data-target="#productModal">See Details</button>
            </div>
        </div>
    </div>
`;

function displayProductDetail(item) {
    console.log("display product details");
    document.getElementById("modalName").innerText = item.name;
    document.getElementById("modalCategory").innerText = item.category;
    document.getElementById("modalDescription").innerText = item.description;
    document.getElementById("modalImg").src = item.imageURL;
    document.getElementById("modalPrice").innerText = item.price;

}