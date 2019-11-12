import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public categories: string[] = ["footwear", "clothes", "electronics", "furnitures"];

  private _products: BehaviorSubject<Product[]> = new BehaviorSubject([
    {
      name: "nikex3aa2",
      image: "https://dks.scene7.com/is/image/dkscdn/17NWBWFLCRNRGZXXXWLK_Black_White_is?wid=1080&fmt=jpg",
      description: `casual shoe Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis unde exercitation
    quis autem ea molestias perferendis eius omnis recusandae ipsa ullam asperiores quisquam, velit, eos
    repellendus voluptas cupiditate nemo!`,
      price: 2345.00,
      category: "footwear"
    },
    {
      name: "adidass a2w3",
      image: "https://sslimages.shoppersstop.com/sys-master/images/hf1/h30/13365098020894/204953512_9308.jpg_230Wx334H",
      description: `formal shoe Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis unde exercitation
    quis autem ea molestias perferendis eius omnis recusandae ipsa ullam asperiores quisquam, velit, eos
    repellendus voluptas cupiditate nemo!`,
      price: 3453.00,
      category: "footwear"
    },
    {
      name: "adidassx36zx",
      image: "https://rukminim1.flixcart.com/image/714/857/jvmpci80/shoe/g/d/y/cl4154-10-adidas-cblack-ftwwht-original-imafghjrg37vfzxc.jpeg?q=50",
      description: `formal shoe Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis unde exercitation
  quis autem ea molestias perferendis eius omnis recusandae ipsa ullam asperiores quisquam, velit, eos
  repellendus voluptas cupiditate nemo!`,
      price: 4345.00,
      category: "footwear"
    },
    {
      name: "table234",
      image: "https://s7d4.scene7.com/is/image/roomandboard/?layer=0&src=698884_wood_W&layer=comp",
      description: `casual shoe Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis unde exercitation
    quis autem ea molestias perferendis eius omnis recusandae ipsa ullam asperiores quisquam, velit, eos
    repellendus voluptas cupiditate nemo!`,
      price: 7345.00,
      category: "furnitures"
    },
    {
      name: "Harry Potter",
      image: "http://trendzplanet.com/image/cache/catalog/TP%20Designs/The%20boy%20who%20lived/The%20boy%20who%20lived%20Hanging%20Mockup-847x1100.jpg",
      description: `casual shoe Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis unde exercitation
    quis autem ea molestias perferendis eius omnis recusandae ipsa ullam asperiores quisquam, velit, eos
    repellendus voluptas cupiditate nemo!`,
      price: 1345.00,
      category: "clothes"
    },
    {
      name: "nokia1103",
      image: "https://http2.mlstatic.com/D_NQ_NP_739725-MCO31536945899_072019-V.jpg",
      description: `mobile fone Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis unde exercitation
    quis autem ea molestias perferendis eius omnis recusandae ipsa ullam asperiores quisquam, velit, eos
    repellendus voluptas cupiditate nemo!`,
      price: 12345.00,
      category: "electronics"
    },
  ]);

  constructor() { }


  /**
   * fghgfhgf
   * 
   * @param 
   * @return Observable 
   * @author 
   */
  get products(): Observable<Product[]> {
    return this._products.asObservable();
  }
}
