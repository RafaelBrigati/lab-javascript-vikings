// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strenght = strength;
    }



attack() {
    return this.strength;
};

receiveDemage(demage) {
this.health -= demage;
};

};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    
} 
attack() {
    return this.strength;
  }



receiveDemage(demage){
    this.health -= damage;
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${damage} points of damage`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}


// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health <= 0) {
        return "A Saxon has died in combat";
      }
      return `A Saxon has received ${damage} points of damage`;
    }
  }

// War
class War {
    constructor() {
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
    addViking(vikingObj) {
      this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj) {
      this.saxonArmy.push(saxonObj);
    }
    vikingAttack() {
      let randomViking =
        this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  
      let randomSaxon =
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  
      let battle1 = randomSaxon.receiveDamage(randomViking.strength);
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxon, 1);
      }
      return battle1;
    }

saxonAttack() {
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let battle2 = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }
    return battle2;
 
}
showStatus(){
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}

