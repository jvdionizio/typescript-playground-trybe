import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instancesMage = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._instancesMage += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._instancesMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;