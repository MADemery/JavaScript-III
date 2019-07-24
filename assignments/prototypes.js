/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(obj){
  this.createdAt = obj.createdAt;
  this.name = obj.name;
  this.dimensions = obj.dimensions;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(obj){
  GameObject.call(this, obj);
  this.healthPoints = obj.healthPoints;
  
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid(obj){
  CharacterStats.call(this, obj);
  this.team = obj.team;
  this.weapons = obj.weapons;
  this.language = obj.language;
  }

  
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
CharacterStats.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);

GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game.`;
};
CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};
Humanoid.prototype.greet = function() {
   return  `${this.name} offers a greeting in ${this.language}`;
  };
// Test you work by un-commenting these 3 objects and the list of console logs below:

// /*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
// */

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Villian(obj){
    Humanoid.call(this, obj);
   this.punch = obj.punch;
   this.kick = obj.kick;
   this.block = obj.block;
  }

  function Hero(obj){
    Humanoid.call(this, obj);
    this.punch = obj.punch;
    this.kick = obj.kick;
    this.block = obj.block;
  }

  Villian.prototype = Object.create(Humanoid.prototype);
  Hero.prototype = Object.create(Humanoid.prototype);
  
  Villian.prototype.hit = function(){

   return  `${this.punch} knocked down Spidey.`
  }

  Hero.prototype.sweep = function(){ 
    return `${this.kick} made Dormamu fall.`
  }

  const Spiderman = new Hero({   
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Spiderman',
    team: 'Wakanda',
    weapons: [
      'Web',
      'Bomb',
    ],
    language: 'English',
    kick: "Leg Sweep",});

    const Dormamu = new Villian({   
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Dormamu',
      team: 'Avengers',
      weapons: [
        'Fireball',
        'Firechain',
      ],
      language: 'Dark Matter',
    
      punch: "FireFist",});



      
      console.log(Dormamu.hit());
      console.log(Spiderman.sweep());
      console.log(Spiderman.takeDamage()); 
      console.log(Dormamu.takeDamage());
      console.log(Spiderman.destroy());