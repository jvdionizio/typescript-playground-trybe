import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get name() : string {
    return this._name; 
  }

  public get dexterity() : number {
    return this._dexterity; 
  }

  public get race() : Race {
    return this._race;
  }

  public get archetype() : Archetype {
    return this._archetype;
  }

  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }

  public get defense() : number {
    return this._defense;
  }

  public get energy() : Energy {
    return {
      // estava usando .energy - sendo que é ._energy
      amount: this._energy.amount,
      type_: this._archetype.energyType,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damagePoints = attackPoints - this.defense;
    if (damagePoints > 0) {
      this._lifePoints -= damagePoints;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter) : void {
    enemy.receiveDamage(this.strength);
  }
  
  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}
