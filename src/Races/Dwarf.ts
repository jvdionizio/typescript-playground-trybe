import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _instancesDwarf = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instancesDwarf += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instancesDwarf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;