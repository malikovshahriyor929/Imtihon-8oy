export interface ChildrenType {
  children: React.ReactNode;
}
export type ProductType = {
  id: string;
  name: string;
  currentPrice: number;
  price: number;
  discount: number;
  img: string;
  rate: number;
  size: string[];
  color: string[];
};