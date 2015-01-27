//Once you complete a problem, open up Chrome and check the answer in the console.

function Test() {


//Create an object called ME. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

    this.ME= {
        name: "Alex",
        age: 27
    };

    this.alertName = function() {
        //alert(this.ME);
        console.log(this.ME.name);
    };

//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

    this.favoriteThing = {
        band: "Sigur Ros",
        food: "Sushi",
        person: "Unsure",
        book: "Asano Inio",
        movie: "Interstellar",
        holiday: "Christmas"
    };


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

    this.favoriteThing.car = "Toyota";
    this.favoriteThing.brand = "Some Brand";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

    this.favoriteThing.food = "Lettuce";
    this.favoriteThing.book = "50 Shades of Gray";



    /*Create an empty Object called backPack. Now, create a variable called 'item' and
     set it equal to firstPocket. Now, using bracket notation, add whatever 'item' represents
     as a property (or key) on the backPack object and set it's value equal to 'chapstick'.
     Now using dot notation add a key (or property) to your backPack object that is named color,
     with the value being the color of your backpack. */

    this.backPack = { item: "firstPocket" };
    this.backPack.item = "chapstick";
    this.backPack.color = "red";


//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

    this.me = {
        name: "Alex",
        age: "27",
        height: "6inches",
        gender: "Male",
        married: false,
        eyeColor: "hazel",
        hairColor: "brown"
    };

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

    this.loopObject = function(){
        for (var a in this.me) {
            console.log(this.me[a]);
        }
    };

//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

    this.album = {
        idontknow: "3:00",
        hehehe: "4:00",
        haha: "300"
    };

//Now, loop through your album object alerting every song title individually.

    this.loopAlbum = function() {
      for (var a in this.album){
          console.log(a);
      }
    };

//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

    this.states = {
        california: 22223224224,
        nevada: 232323423242,
        florida: 23232323,
        newyork: 2323231323323,
        montana: 33
    };

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

    this.loopStates = function(){
        for (var v in this.states){
            if(this.states[v] > 30000) {
                console.log(v);
            }
        }
    };

    this.user2 = {
        name: 'Tyler McGinnis',
        email: null,
        pwHash: 'U+Ldlngx2BYQk',
        birthday: undefined,
        username: 'tylermcginnis33',
        age: 0
    };
    /*Above you're given a user object. Loop through the user object checking to make sure
     that each value is truthy. If it's not truthy, remove it from the object. */

    this.removeUntruthy = function(){
        for(var a in this.user2){
            if (!this.user2[a]) {
                //console.log(this.user2[a]);
                delete this.user2[a];
            }
        }
    return this.user2;
    };

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

    this.loopAndChange = function(result){
        result.name = "Alex";
        result.pwHash = "daklwdkaw;;daw;d";
        result.username = "moomoofarm";
        return result;
    };

    this.user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function () {
            console.log('Email is : ' + this.email);
        }
    };

//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

    this.user2.name = "Tyler S. McGinnis";
    this.user2.email = "tyler.mcginnis@devmounta.in";

//Create an empty object called methodCollection.

    //Code Here

    /*Now add two methods (functions that are properties on objects) to your methodCollection
     object. One called 'alertHello' which alerts 'hello' and another method called logHello
     which logs 'hello' to the console. */

    //Code Here

//Now call your alertHello and logHello methods.

    //Code Here


//NEXT PROBLEM


    var devMountainEmployees = [];

    var tyler = {
        name: 'Tyler',
        position: 'Lead Instructor/Engineer',
        spiritAnimal: 'Honey Badger'
    };

    var cahlan = {
        name: 'Cahlan',
        position: 'CEO',
        spiritAnimal: 'butterfly'
    };

    var ryan = {
        name: 'Ryan',
        position: 'Marketing',
        spiritAnimal: 'fox'
    };

    var colt = {
        name: 'Colt',
        position: 'Everything really',
        spiritAnimal: 'Young Male Horse'
    }

    /*Above you're given an empty array with four objects. Fill the devMountainEmployees
     array with those four objects. After that console.log the length of the Array and make
     sure that it's equal to 4. */

    //Code Here

    /*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
     Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

    //Code Here


//NEXT PROBLEM


    /*Now we're going to combine what we've learned today (objects) with what we learned
     yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
     Let's think back to our itunes example (tylermcginnis.com/itunes).
     Notice that when you type in an artist name, iTunes gives us back a LOT of data.
     What they're really giving us is an Array full of Objects. It probably looks something
     like this. */

    var data = [
        {
            artist: 'shakira',
            album: 'hips don\'t lie',
            tracks: 16,
        },
        {
            artist: 'shakira',
            album: 'mariposa',
            tracks: 12,
        },
        {
            artist: 'shakira',
            album: 'greatest hits',
            tracks: 19
        }
    ];


    /*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
     of Data is to have an Array full of objects. */

//Create an empty array called users.

    //Code Here

    /*Now add three user objects to your users array. Each user object should contain the
     following properties. name, email, password, username.*/

//include this object as one of your indices in your array.
    var user1 = {
        name: 'Tyler McGinnis',
        email: 'tylermcginnis33@gmail.com',
        password: 'iLoveJavaScript',
        username: 'infiniateLoop'
    }

//Your Code Here

    /*Now you have a very common data structure. Twitter is a good use case.
     It's easy to imagine that your followers list on Twitter is an Array full or objects
     and those objects contain properties about the specific person you follow.*/

    /*Now let's say that Tyler decided to delete his account. Loop through your array of
     objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
     Once you find the particular indice he's located in, delete him from the array.*/

    //Code Here

//The activity we just did is very much how data works in 'the real world'.

}

var t = new Test();

//t.alertName();

//console.log(t.backPack);

//t.loopObject();

//t.loopAlbum();

//t.loopStates();

//console.log(t.removeUntruthy());
//console.log(t.loopAndChange(t.removeUntruthy()));

t.user2.sayName();
