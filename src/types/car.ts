export interface CarSpec {
    icon: string;
    label: string;
  }
  
export interface Car {
    id: number;
    name: string;
    year: string;
    price: string;
    img: string;
    spec: CarSpec[];
    type: string;
}
  