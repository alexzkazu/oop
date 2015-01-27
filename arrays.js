//Once you complete a problem, open up Chrome and check the answer in the console.

function Test() {

//Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.
    this.first = function(arr){
        return arr[0];
    };

//Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.

    this.last = function(arr){
        return arr[arr.length -1];
    };

//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.
    this.looper = function(arr){

        for(i = 0; i < arr.length; i++){
            //console.log(i);

            console.log(arr[i]);
        }
    };

//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.
    this.reversedLooper = function(){
        for(var j = this.letters.length - 1; j >= 0; j--){
            console.log(this.letters[j]);
        }
    };


//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.
    this.evenFinder = function(){
        var evenNums = [];
        for(i = 0; i < this.nums.length; i++ ) {
            if(this.nums[i] % 2 === 0){
                evenNums.push(this.nums[i]);
            }
        }
        return evenNums;
    };


//Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item
//in the array being the evens array (all the even values from nums)
//and the second item in the Array being the odds array(all the odd values from nums).
    this.divider = function(nums, evens, odds){
        //console.log(evens);
        //console.log(odds);
        //console.log(nums);
        for(i = 0; i < nums.length; i++) {
            if(nums[i] % 2 === 0){
                evens.push(nums[i]);
            } else {
                odds.push(nums[i]);
            }
        }
        return [evens,odds];
    };



    var getRandomArbitrary = function () {
        return Math.floor(Math.random() * (30 - 0) + 0);
    };

//Above your given a function that will return a random number between 0 and 30, and an array full of numbers.
// Your job is to write a function named finder that will get a random number,
// then loop through the array to see if that random number is in the array.
// If it is, return true, if it's not, return false

    this.finder = function(arr){
        var check = false;
        var num = getRandomArbitrary();
        console.log(num);
        for (var i=0; i< arr.length; i++){
            if(num === arr[i]){
                console.log('true');
                check = true;
            } else {
                console.log('failed');
            }
        }
        if (check === true){
            return true;
        } else { return false;}
    };


//Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed

    //Code Here
    this.reverseString = function(str){
        var result = [];
        var splited = str.split("");
        for( var i = splited.length -1; i >= 0; i--){
            result.push(splited[i]);
        }
        return result.join("");
    };


    //
    //Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
    //and adding new items to our list. Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
    //second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
    //remove that item from the your grocery list and return the new, updated grocery list. Once you do that,
    //write another function called addItem that is given two arguments, the first is myGroceryList
    //and the second is an item to add to your grocery list. In addItem add the item you passed in to
    //myGroceryList then return the new, updated grocery list.
    //

    this.removeItem = function(myGroceryList,remove){
        for (var i=0; i< myGroceryList.length; i++){
            if (myGroceryList[i] === remove ){
                myGroceryList.splice(i,1);
                i--;
            }
            return myGroceryList;
        }
    };

    this.addItem = function(myGroceryList,add){
        var exists = false;
        for (var i=0; i<myGroceryList.length; i++){
            if (myGroceryList[i] === add) {
                exists = true;
            }
        }
        if (!exists) {
            myGroceryList.push(add);
        }
        return myGroceryList;
    };


     //Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

    this.maker = function(){
        var arr = [];
        var i=1;
        while (i<=215){
            arr.push(i);
            i++;
        }
        return arr;
    };

     ////Write a function called addTen that is given 'numbers' as it's only argument and returns a new
     ////array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]


    this.addTen = function(arr){
        var result = [];
        for (var i=0; i < arr.length; i++){
            var num= Number(arr[i]) + 10;
            result.push(num);
        }
        return result;
    };


     ////Above is some code that adds a random number to both arr1 and arr2.
     ////Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.
        this.firstNum = Math.floor(Math.random() * (30 - 0) + 0);
        this.secondNum = Math.floor(Math.random() * (30 - 0) + 0);
        this.array1 = [];
        this.array2 = [];

        this.longest = function(arr1,arr2){

            for (var i = 0; i < arr1; i++) {
                this.array1.push(i);
            }
            for (var i = 0; i < arr2; i++) {
                this.array2.push(i);
            }

            if (this.array1.length > this.array2.length) {
                return this.array1;
            } else {
                return this.array2;
            }
        };


     //   As a continuation of the previous problem, write another function called 'both'.
     //     Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example)
     //     'both' should return a new array full of numbers that are found in both arr1 and arr2.
     //      //Code Here
     //  */

}

//create new instance of test Object - Super Class
var t = new Test();

//var arr = [10, 20, 30];
//console.log(t.first(arr));

//var arr1 = [40, 50, 60, 70, 80, 90];
//console.log(t.last(arr1));

//var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//console.log(t.looper(family));

//var letters = ['A', 'B', 'C', 'D', 'E'];
//console.log(t.reversedLooper(letters));

//var numbers = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
//console.log(t.evenFinder(numbers));

//var nums = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
//var evens = [];
//var odds = [];
//console.log(t.divider(nums,evens,odds));

//var numbers2 = [0, 3, 4, 5, 6, 7, 9, 14, 17, 24, 25, 26, 29, 30];
//t.finder(numbers2);

//var str = 'this is my sentence';
//console.log(t.reverseString(str));

//var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//console.log(t.removeItem(myGroceryList,'chips'));
//console.log(t.addItem(myGroceryList,'mmmMilk'));

//console.log(t.maker());

//var numbers3 = [5, '9', 16, 19, '25', '34', 48];
//console.log(t.addTen(numbers3));

//console.log(t.longest(t.firstNum, t.secondNum));

