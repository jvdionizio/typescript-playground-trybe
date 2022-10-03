import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instancesWarrior = 0;

  constructor(name: string) {
    super(name);
    Warrior._instancesWarrior += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instancesWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;