import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instancesRager = 0;

  constructor(name: string) {
    super(name);
    Ranger._instancesRager += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._instancesRager;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;