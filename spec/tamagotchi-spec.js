import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {

  beforeEach(function() {
    jasmine.clock().install();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name, a food level of 10 and can play when it is created', function() {
    let eggie = new Tamagotchi("Eggie");
    expect(eggie.name).toEqual("Eggie");
    expect(eggie.health).toEqual(100);
    expect(eggie.canPlay).toEqual(true);
    expect(eggie.happiness).toEqual(100);
    expect(eggie.cleanliness).toEqual(100);
    expect(eggie.foodLevel).toEqual(100);
  });

  it('should decrease in health by 2 every ten seconds', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.gameInterval();
    jasmine.clock().tick(10001);
    expect(eggie.health).toEqual(98);
  });

  it('should increase in health by 5 every time it is played with', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.health = 90;
    eggie.play();
    expect(eggie.health).toEqual(95);
  });

  it('should only be able to be played with every minute', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.play();
    jasmine.clock().tick(60001);
    expect(eggie.canPlay).toEqual(true);
  });

  it('should decrease clean by 5 when played', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.play();
    expect(eggie.cleanliness).toEqual(95);
  });

  it('should add 10 to clean when cleaned', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.cleanliness = 50;
    eggie.clean();
    expect(eggie.cleanliness).toEqual(60);
  });

  it('should reduce health by 1 point every minute if cleanliness is below 40', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.cleanliness = 40;
    eggie.tooDirty();
    jasmine.clock().tick(60001);
    jasmine.clock().tick(60001);
    expect(eggie.health).toEqual(98);
  });

  it('should reduce health by 5 if foodLevel is above 100', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.feed();
    eggie.tooFull();
    expect(eggie.health).toEqual(95);
    expect(eggie.foodLevel).toEqual(120);
  });

  it ('should stop reducing health by 1, once pet cleanliness is above 41', function() {
    let eggie = new Tamagotchi("Eggie");
    eggie.cleanliness = 39;
    eggie.tooDirty();
    jasmine.clock().tick(60001);
    expect(eggie.health).toEqual(99);
    eggie.clean();
    eggie.tooDirty();
    jasmine.clock().tick(60001);
    expect(eggie.cleanliness).toEqual(49);

  });





});
