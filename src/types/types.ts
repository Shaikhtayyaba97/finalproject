// types.ts

export type ProductDetail = {
    h1Heading: string;
    price: number;
    h2Heading1: string;
    paragraph: string;
    list: string[];
    h2Heading2: string;
    dimensions: {
      height: string;
      width: string;
      depth: string;
    };
    addToCart: {
      amount: number;
      incrementButton: string;
      decrementButton: string;
      defaultValue: number;
    };
  };