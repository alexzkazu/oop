Parse.initialize("3R7g0eCMyAs7NPiffHdkxq3sBHfteRQulMBNEOFI", "bQpE1wxSXDuUxuJhaftt4WDWUx3FACW13YabO4o7");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}, {
        sucess: function(object){
            console.log('worked');
            $('.sucess').show();
        },
        error: function(model,error){
            console.log('faaaail');
            $('.error').show();
        }

    });

$(document).ready(function(){

function Product(){
    this.name='';
    this.price=0.00;
    this.description='';
}

function Collection(list_category){
    var temp=list_category; //saves the category (array?) being passed into temp
    this.addProduct=function(name, price, description){ // method
        var product = new Product(); //creates a new instance of product, saves it to product
        product.name = name; // takes the new instance, and saves name/price to the object
        product.price = price;
        product.description = description;
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
    this.addCollection = function(type, array){
        list_inventory[type] = array;
    };
    this.searchCollection = function(name){
        for (var a in collectionList) {
            for (var b = 0; b < collectionList[a].length; b++){
                if(collectionList[a][b].name === name){
                    return collectionList[a][b];
                }
            }
        }
        // return list_inventory[type];
    };
    this.removeCollection = function(type){
        delete list_inventory[type]
    };
}

var waterList=[];
var sodaList = [];
var electronicsList = [];


//var options = ["Beverages","Electronics"]

var collectionList = {};

var water= new Collection(waterList);
water.addProduct('Crystal Geiser', 2.00,'Crystal clear water. Lovely.');
water.addProduct('Agua Florida', 2.00, 'Water from Florida. Yum.');
water.addProduct('Mineral Yums', 2.00, "Yummy mineral water.");
water.removeProduct('Mineral Yums');
water.editProduct('Agua Florida','price',10.00);
waterList = water.updateCategory();


//create soda collection
var soda= new Collection(sodaList);
soda.addProduct('Sprite',1.50,'Mmm sprite.');
soda.editProduct('Sprite','price',900);
sodaList = soda.updateCategory();

//create electronics collection
var electronics = new Collection(electronicsList);
electronics.addProduct('iPod',199.99,'Nice.');
electronics.addProduct('Macbook Pro',2000.00, 'Wow look at that. Shiny.');
electronicsList = electronics.updateCategory();

//console.log(sodaList);

//instantiate frys from inventory const
var frys = new Inventory(collectionList);
frys.addCollection('water',waterList);
frys.addCollection('soda',sodaList);
frys.addCollection('electronics',electronicsList);

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
            for (var b in collection[a]) {
                for (var i=0;i<collection[a][b].length; i++){
                    if (collection[a][b][i].name === name) {
                        this.products.push(collection[a][b][i]);
                    }
                }
            }
        }
    }
}

var admin = new Admin("Super","wee","1");
//console.log(admin.id);
admin.setRole("Superadmin");
//console.log(admin);

var cust1 = new Customer("Alex","lol","2");
cust1.addProduct("Crystal Geiser", collectionList);



// Product Selection //

$('a.list-product').on('click',function(){
    var title = $(this).text();
    var result = frys.searchCollection(title);
    
    console.log(result);

    $('#products-intro').css({'display':'none'});

    $('#product-info').find('h2').text(result.name);
    $('#product-info').find('.price').text(result.price);
    $('#product-info').find('.description').text(result.description);
    $('#product-info').css({'display':'block'});

});


// $('.searchButton').on('click',function(){
//     var opt = $('.searchSelect').val();
//     var opt2 = $('.searchSelect2').val();
//     var inp = $('.searchInput').val();

//    // water.addProduct($('#productName').val(),$('#productPrice').val());
//    // waterList = water.update();
//    console.log(waterList);
//    console.log(frys.searchCollection('beverages'));
// });

// $('.createUser').on('click',function(){

//     var UserObject = Parse.Object.extend("UserObject");
//     var userObject = new UserObject();

//     var name = $('.name').val();
//     var username = $('.username').val();
//     var email = $('.email').val();
//     var password = $('.password').val();

//     userObject.save({ name: name, username: username, email:email, password:password }, {
//         sucess: function(object){
//             console.log('worked');
//             $('.sucess').show();
//         },
//         error: function(model,error){
//             console.log('faaaail');
//             $('.error').show();
//         }

//     });
// });

});