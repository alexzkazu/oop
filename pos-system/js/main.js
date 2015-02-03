//$(document).ready(function(){

function Product(){
    this.name='';
    this.price=0.00;
}

function Collection(list_category){
    var temp=list_category; //saves the category (array?) being passed into temp
    this.addProduct=function(name, price){ // method
        var product = new Product(); //creates a new instance of product, saves it to product
        product.name = name; // takes the new instance, and saves name/price to the object
        product.price = price;
        temp.push(product); //object is pushed into the list
    };
    this.removeProduct=function(name){
        for (var i=0; i < temp.length; i++) {
            if (temp[i].name == name) {
                temp.splice(i,1);
            }
        }
    };
    this.editProduct=function(name,prop,value){
        for (var i=0; i<temp.length; i++){
            if (temp[i].name === name) {
                temp[i][prop] = value;
            }
        }
    };
    this.updateCategory = function(){
        return temp; //return the modified array
    };
}

function Inventory(list_inventory) {
    this.addCollection = function(major, type, array){
        list_inventory[major][type] = array;
    };
    this.searchCollection = function(type){
        return list_inventory[type];
    }
    this.removeCollection = function(type){
        delete list_inventory[type]
    };
}

var waterList=[];
var sodaList = [];
var appleList = [];


//var options = ["Beverages","Electronics"]

var collectionList = { beverages: {}, electronics: {}};

var water= new Collection(waterList);
water.addProduct('Crystal Geiser', 2.00);
water.addProduct('Agua Florida', 2.00);
water.addProduct('Mineral Yums', 2.00);
water.removeProduct('Mineral Yums');
water.editProduct('Agua Florida','price',10.00);
waterList = water.updateCategory();


//create soda collection
var soda= new Collection(sodaList);
soda.addProduct('Sprite',1.50);
soda.addProduct('Dr.Pepper',1.50);
soda.editProduct('Dr.Pepper','price',900);
sodaList = soda.updateCategory();

//create apple collection
var apple = new Collection(appleList);
apple.addProduct('iPod',199.99);
apple.addProduct('MacBook Pro',2000.00);
appleList = apple.updateCategory();

//console.log(sodaList);

//instantiate frys from inventory const
var frys = new Inventory(collectionList);
frys.addCollection('beverages','water',waterList);
frys.addCollection('beverages','soda',sodaList);
frys.addCollection('electronics','apple',appleList);

console.log(collectionList);

// Create Users Object

function User(name, password, id){
    this.name = name;
    this.id = id;
    var password = password;
}

// Inherit Admin from Users

function Admin(){
    User.apply(this,arguments);

    this.setRole = function(role){
        this.role = role;
    };

}

// Employee

function Employee(){
    User.apply(this,arguments);
}

// Customer

function Customer(){
    User.apply(this,arguments);
    this.products = [];
    this.addProduct = function(name,collection){
        for (var a in collection){
            //console.log(a);
            for (var b in collection[a]) {
                for (var i=0;i<collection[a][b].length; i++){
                    if (collection[a][b][i].name === name) {
                        console.log('yep');
                        this.products.push(collection[a][b][i]);
                    }
                    console.log(collection[a][b][i]);
                }
            }
        }
        console.log(this.products);
    }
}

var admin = new Admin("Super","wee","1");
//console.log(admin.id);
admin.setRole("Superadmin");
//console.log(admin);

var cust1 = new Customer("Alex","lol","2");
cust1.addProduct("Crystal Geiser", collectionList);



//

//$('#submitProduct').on('click',function(){
//
//    water.addProduct($('#productName').val(),$('#productPrice').val());
//    waterList = water.update();
//    console.log(waterList);
//});

//});