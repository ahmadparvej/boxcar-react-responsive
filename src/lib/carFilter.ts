import { Car } from '../types/car'; // Assuming you have the types in a separate file

export const getTopFourCars = (cars: Car[]): Car[] => {
  return cars.slice(0, 4);
};

export const getCarsInDescendingOrder = (cars: Car[]): Car[] => {
  return [...cars].sort((a, b) => (b.id) - (a.id));
};
