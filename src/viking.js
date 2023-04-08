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



receiveDemage(demage){
super.receiveDamage(damage);
if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
} else {
    return `${this.name} has died in act of combat`
}
};

battleCry (){
return `Odin Owns You All`
};


};



// Saxon
class Saxon extends Soldier {
receiveDamage(damage){
if (this.health > 0) {
    return `A Saxon has received ${damage} points of damage`;
}
else {
    return `A Saxon has died in combat`;
}
}
};


// War
class War {}







 
