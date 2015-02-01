$(document).ready(function(){


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
    this.update = function(){
        return temp; //return the modified array
    };
}

var waterList=[];
var sodaList = [];

var water= new Collection(waterList);
water.addProduct('Crystal Geiser', 2.00);
water.addProduct('Agua Florida', 2.00);
water.addProduct('Mineral Yums', 2.00);
water.removeProduct('Mineral Yums');
water.editProduct('Agua Florida','price',10.00);
waterList = water.update();

console.log(waterList);

var soda= new Collection(sodaList);
soda.addProduct('Sprite',1.50);
soda.addProduct('Dr.Pepper',1.50);
soda.editProduct('Dr.Pepper','price',900);
sodaList = soda.update();

console.log(sodaList);

$('#submitProduct').on('click',function(){

    water.addProduct($('#productName').val(),$('#productPrice').val());
    waterList = water.update();
    console.log(waterList);
});

});