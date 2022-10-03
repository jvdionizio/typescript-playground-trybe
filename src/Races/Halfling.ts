import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static _instancesHalfling = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instancesHalfling += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instancesHalfling;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;