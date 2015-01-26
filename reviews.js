/*Create a feature in Javascript for posting a review on a specific product.
- Pseudo-code every part needed for completing the challenge.
- User must be able select a specific item from a list/dictionary(JSON) of items,
    and add a review. The type of review will be up to you.
- User should be able to query(retrieve) the review for a specific product.
- Feel free to add any other cool methods.
- Be creative. Think about the end-user; the person who is using your feature
when developing your app. */

var itemList = [];

function Games (name, genre){
    this.name = name;
    this.genre = genre;

    this.addGame = function() {
      var obj = {};
        obj.name = this.name;
        obj.genre = this.genre;
        obj.review = this.review;
        itemList.push(obj);
    };

    //add a review to the item
    this.addReview = function(review) {
        //var review = prompt("What kind of review do you want to leave?");
        this.review = review;
    };

    //enable users to retrieve the review
    this.getReview = function() {
        return this.review;
    };
};

console.log(itemList);

var minecraft = new Games("Minecraft","Adventure");
minecraft.addReview("gimme ma diamonds!");
minecraft.addGame();

var darksouls = new Games("Dark Souls","Adventure");
darksouls.addReview("PRAISE THE SUN!");
darksouls.addGame();

console.log(itemList);
console.log(darksouls.getReview());