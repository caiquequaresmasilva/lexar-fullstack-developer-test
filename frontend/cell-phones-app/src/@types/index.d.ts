type Product = {
  id: string;
  name: string;
  brand: string;
  model: string;
  color: string;
  price: number;
};

type Option = {
  id: number;
  name: string;
};

type ProductType2 = {
  name: string;
  details: {
    brand: string;
    model: string;
    color: string;
  };
  price: number;
};

type ProductType3 = {
  name: string;
  brand: string;
  model: string;
  data: {
    price: number;
    color: string;
  }[];
};
