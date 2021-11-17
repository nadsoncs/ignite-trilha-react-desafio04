export interface FoodData {
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string,
}

export type FoodInput = Omit<FoodData, 'id' | 'available'>;