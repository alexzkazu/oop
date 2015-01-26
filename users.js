// Need a list to store users

var userList = [];

// Create an object that will represent a User Profile
function User(name,email,birthday, gender, password) {
    this.name = name;
    this.email = email;
    this.birthday = birthday;
    this.gender = gender;
    this.password = password;

    this.getInfo = function(field) {
        return this[field];
    };

    this.addUser = function() {
        var json = {};
        json.name = this.name;
        json.email = this.email;
        json.gender = this.gender;
        json.birthday = this.birthday;
        json.password = this.password;

        userList.push(json);
    };
}

function getUser (property, filter) {
    for (var i=0; i < userList.length; i++) {
        if (userList[i][property] === filter) {
            console.log(userList[i]);
        }
    }
}

var user1 = new User("kai","something@gmail.com","july", "male", "helloworld")
var user2 = new User("weee","something@gmail.com","august", "male", "helloworld");
var user3 = new User("moo","something@gmail.com","june", "male", "helloworld");

user1.addUser();
user2.addUser();
user3.addUser();

console.log(user2.getInfo("name"));

getUser("name", "kai"); // filter out a user


