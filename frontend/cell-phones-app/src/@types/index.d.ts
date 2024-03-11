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

type FilterParams = {
  name: string;
  brand: string;
  color: string;
  minPrice: number;
  maxPrice: number;
};

type FiltersModalParams = {
  updateParams: (params: Partial<FilterParams>) => void;
  open: boolean;
  closeModal: () => void;
  colors?: Option[];
  brands?: Option[];
};

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
type TextInputProps<T> = {
  setState: SetState<T>;
  state: T;
};

type OnChangeType = React.ChangeEvent<HTMLInputElement>;

type InputFields = Partial<Omit<Product, "id">>;
