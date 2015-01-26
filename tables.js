/*Create a feature in Javascript for making a reservation.
- Pseudo-code every part needed for completing the challenge.
- User must be able to select a table from a list of inactive tables.
- Upon selection, the once inactive table will become active.
- User should be able to view a list of inactive/active tables.
- Feel free to add any other cool methods.
- Be creative. Think about the end-user; the person who is using your feature
when developing your app. */

var activeTables = [];
var inactiveTables = [];

function Table (number){
    this.number = number;

    this.addTable = function() {
        inactiveTables.push(this.number);
    };

    //User must be able to select a table from a list of inactive tables.
    this.selectTable = function (){
        for(var i=0; i<inactiveTables.length; i++){
            //Upon selection, the once inactive table will become active.
            if (inactiveTables[i] === this.number) {
                var index= inactiveTables.indexOf(this.number);
                if(index> -1){
                    inactiveTables.splice(index,1);
                    activeTables.push(this.number);
                }
            }
        }
    };

};

//view list of inactive, active tables
function viewActive (){
    return "Current active tables: "+ activeTables;
}

function viewInactive (){
    return "Current inactive tables: "+ inactiveTables;
}

var table1 = new Table(1);
var table2 = new Table(2);

table1.addTable();
table2.addTable();

console.log(viewActive());
console.log(viewInactive());

table1.selectTable();

console.log(viewActive());
console.log(viewInactive());

table2.selectTable();

console.log(viewActive());
console.log(viewInactive());