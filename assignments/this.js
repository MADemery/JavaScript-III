/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding is "this" shown as the whole object where 'this' can be found

* 2. Implicit Binding is "this" binded to a specific key inside of an object

* 3. In  New Binding "this" is being used in constructor functions which are called by using the keyword new
    What that means is "this" is found in the constructor function but used in multiple objects created with the keyword new.

* 4. Explicit Binding 
.call .apply .bind takes the properties from one object and applies it to the object using .call .apply or.bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {   
hello: "Hello, how's your day going?",

conversation: function(emoji){
    console.log(`${this.hello} ${emoji}`);}

};

myObj.conversation(" B-D ");

// "this" is binded to the implicit hello key pair value 

// Principle 3

// code example for New Binding
function athlete(sport, name){

this.sport = sport;
this.name = name;
this.likes = function (){
    console.log( `${this.name} likes to play ${this.sport}`);
};

}

const male = new athlete("hockey", "Bob",);

const female = new athlete("soccer", "Brooke");

male.likes();
female.likes(); 

// ||

function trivia(obj){
    this.player = obj.player;
    this.team = obj.team;
    this.answer = function(){
        console.log(`${this.player} plays for The ${this.team}`);
    };
};

const reporter = new trivia({player: "Tom Brady", team: "Patriots"});

const fan = new trivia({player: "LeBron James", team: "Lakers" });

reporter.answer(); 
fan.answer();





// Principle 4

// code example for Explicit Binding

male.likes.call(female);

// ||

fan.answer.apply(reporter);

    