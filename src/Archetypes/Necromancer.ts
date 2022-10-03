import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instancesNecromancer = 0;

  constructor(name: string) {
    super(name);
    Necromancer._instancesNecromancer += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instancesNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;