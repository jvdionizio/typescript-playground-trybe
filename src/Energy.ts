interface Energy {
  type_: EnergyType;
  amount: number;
}

type EnergyType = 'stamina' | 'mana';

export { EnergyType };
export default Energy;