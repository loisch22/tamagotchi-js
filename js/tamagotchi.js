let dirtyInterval;
let happinessInterval;

export class Tamagotchi {


constructor (name) {
  this.name = name;
  this.health = 100;
  this.canPlay = true;
  this.happiness = 100;
  this.cleanliness = 100;
  this.foodLevel = 100;
  this.isDead = false;
}


  gameInterval() {
    setInterval(() => {
      this.health -= 2;
      this.foodLevel -=1;
      this.happiness -=2;

      this.tooDirty();
      this.tooBored();
      this.tooFull();
      this.tooHungry();
      this.dead();
      
    }, 10000);
  }

  dead() {
    if (this.health <= 0) {
      this.isDead = true;
    }
  }

  play() {
    if (this.canPlay === true && this.health <= 100) {
      this.health += 5;
      this.cleanliness -= 5;
      this.foodLevel -= 5;
      this.canPlay = false;
      this.happiness += 30;
      setTimeout(() => {
        this.canPlay = true;
      }, 60000);
    }
  }

  tooBored() {
    if (this.happiness < 50) {
      this.health -= 10;
    }
  }

  clean() {
    if (this.cleanliness > 60 && this.cleanliness < 100) {
      this.cleanliness += 0;
    } else {
      this.cleanliness += 10;
    }
  }

  tooDirty() {
    if (this.cleanliness <= 40) {
    dirtyInterval = setInterval(() => {
        this.health -= 1;
      }, 60000);
      alert("You're Tamagotchi is too dirty, please clean. They will lose one health point every minute until they reach 40 cleanliness");

    } else {
      clearInterval(dirtyInterval);
    }
  }

  feed() {
    this.foodLevel += 20;
    this.happiness += 10;
  }

  tooFull() {

    if (this.foodLevel > 100) {
      this.health -= 5;
      happinessInterval = setInterval(() => {
        this.happiness -= 1;
      }, 60000);
      alert("You're Tamagotchi is overfed. This will lose five health points. Play with your pet to help it lose weight.");
    } else if (this.happiness < 100){
      clearInterval(happinessInterval);
    }
  }

  tooHungry() {
      if (this.foodLevel < 40) {
      setInterval(() => {
        this.health -= 1;
      }, 60000);
      alert("You're Tamagotchi is hungry. They will lose one health point every minute until they reach 40 food level.");
  }
}

}
