import { Product } from '../models/product.interface';
export interface CartProduct {
    product: Product;
    count: number;
}
