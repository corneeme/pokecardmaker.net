export type AbilitySymbol = 'normal' | 'v' | 'vstar';
export type NameSymbol = 'vmax' | 'v' | 'star' | 'vstar';
export type TextColor = 'white' | 'black';
export type Size = 'sm' | 'lg';

export interface Placement {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  height?: string;
  width?: string;
  'line-height'?: string;
  'flex-direction'?: string;
}

export interface Positions {
  name?: Placement;
  description?: Placement;
}

export interface CardStyles {
  /**
   * @default none
   */
  nameOutline?: TextColor;
  /**
   * @default none
   */
  hpOutline?: TextColor;
  /**
   * @default none
   */
  movesOutline?: TextColor;
  /**
   * Illustrator, set icon, rotation icon, card number, rarity icon
   * @default none
   */
  cardInfoOutline?: TextColor;
  /**
   * @default black
   */
  nameTextColor: TextColor;
  /**
   * @default black
   */
  hpTextColor: TextColor;
  /**
   * @default black
   */
  movesTextColor: TextColor;
  /**
   * The bar that shows weakness & resistance
   * @default black
   */
  typeBarTextColor: TextColor;
  /**
   * Illustrator, set icon, rotation icon, card number, rarity icon
   * @default black
   */
  cardInfoTextColor: TextColor;
  /**
   * @default black
   */
  rarityIconColor: TextColor;
  /**
   * @default none
   */
  nameSymbol?: NameSymbol;
  /**
   * @default false
   */
  alignMovesBottom: boolean;
  /**
   * @default 'sm'
   */
  hpSize: Size;
  /**
   * @default none
   */
  abilitySymbol?: AbilitySymbol;
  /**
   * Used to change position of items displayed on the card \
   * For example, `Name` is displayed differently on a Pokémon and a Trainer
   */
  positions: Partial<Positions>;
}
