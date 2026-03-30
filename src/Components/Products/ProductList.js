import TShirt1 from '../../assets/9.png'
import TShirt2 from '../../assets/5.png'
import TShirt3 from '../../assets/7.png'
import TShirt4 from '../../assets/8.png'
import TShirt5 from '../../assets/9.png'
import TShirt6 from '../../assets/16.png'
import TShirt7 from '../../assets/10.png'
import TShirt8 from "../../assets/15.png";
import TShirt9 from '../../assets/23.png'
import TShirt10 from "../../assets/5.png";
import TShirt11 from '../../assets/20.png';
import TShirt12 from "../../assets/21.png";
import TShirt13 from "../../assets/22.png";
import TShirt14 from '../../assets/24.png'
import TShirt15 from "../../assets/3.png";
import TShirt16 from "../../assets/25.png";
import TShirt17 from "../../assets/26.png";
import TShirt18 from "../../assets/27.png";
import TShirt19 from "../../assets/28.png";
import TShirt20 from "../../assets/29.png";
import TShirt21 from "../../assets/1.png"
import TShirt22 from "../../assets/2.png"
import TShirt23 from "../../assets/4.png";
import TShirt24 from "../../assets/11.png"
import TShirt25 from "../../assets/12.png";
import TShirt26 from "../../assets/6.png"
import TShirt27 from "../../assets/13.png"
import TShirt28 from "../../assets/14.png"
import TShirt29 from "../../assets/17.png"
import TShirt30 from "../../assets/19.png";




const Product = [
  {
    id: 1,
    name: "T-shirt(gray)",
    price: 775,
    oldPrice: 1000,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: TShirt1,
  },
  {
    id: 2,
    name: "T-shirt(blue)",
    price: 775,
    oldPrice: 1000,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: TShirt2,
  },
  {
    id: 3,
    name: "T-shirt(red)",
    price: 775,
    oldPrice: 1000,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: TShirt3,
  },
  {
    id: 4,
    name: "T-shirt(print)",
    price: 775,
    oldPrice: 1000,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: TShirt4,
  },
  {
    id: 5,
    name: "T-shirt(gray)",
    price: 775,
    oldPrice: 1000,
    onSale: true,
    newArrival: false,
    category: "Men",
    image: TShirt5,
  },
  {
    id: 6,
    name: "T-shirt(angle)",
    price: 1000,
    onSale: false,
    newArrival: true,
    category: "Men",
    image: TShirt6,
  },
  {
    id: 7,
    name: "T-shirt(blue)",
    price: 1000,
    onSale: false,
    newArrival: true,
    category: "Men",
    image: TShirt7,
  },
  {
    id: 8,
    name: "T-shirt(black)",
    price: 1000,
    onSale: false,
    newArrival: true,
    category: "Men",
    image: TShirt8,
  },
  {
    id: 9,
    name: "T-shirt(maroon)",
    price: 1000,
    onSale: false,
    newArrival: true,
    category: "Men",
    image: TShirt9,
  },

  {
    id: 10,
    name: "T-shirt(navy blue)",
    price: 1000,
    onSale: false,
    newArrival: true,
    category: "Men",
    image: TShirt10,
  },
  {
    id: 11,
    name: "T-shirt(orange)",
    price: 555,
    oldPrice: 700,
    onSale: true,
    newArrival: false,
    category: "Kids",
    image: TShirt11,
  },
  {
    id: 12,
    name: "T-shirt(black)",
    price: 555,
    oldPrice: 700,
    onSale: true,
    newArrival: false,
    category: "Kids",
    image: TShirt12,
  },
  {
    id: 13,
    name: "T-shirt(red)",
    price: 555,
    oldPrice: 700,
    onSale: true,
    newArrival: false,
    category: "Kids",
    image: TShirt13,
  },
  {
    id: 14,
    name: "T-shirt(blue)",
    price: 555,
    oldPrice: 700,
    onSale: true,
    newArrival: false,
    category: "Kids",
    image: TShirt14,
  },
  {
    id: 15,
    name: "T-shirt(blue)",
    price: 555,
    oldPrice: 1000,
    onSale: true,
    newArrival: false,
    category: "Kids",
    image: TShirt15,
  },
  {
    id: 16,
    name: "T-shirt(orange)",
    price: 800,
    onSale: false,
    newArrival: true,
    category: "Kids",
    image: TShirt16,
  },
  {
    id: 17,
    name: "T-shirt(white)",
    price: 800,
    onSale: false,
    newArrival: true,
    category: "Kids",
    image: TShirt17,
  },
  {
    id: 18,
    name: "T-shirt(black)",
    price: 800,
    onSale: false,
    newArrival: true,
    category: "Kids",
    image: TShirt18,
  },
  {
    id: 19,
    name: "T-shirt(white)",
    price: 880,
    onSale: false,
    newArrival: true,
    category: "Kids",
    image: TShirt19,
  },
  {
    id: 20,
    name: "T-shirt(white)",
    price: 880,
    onSale: false,
    newArrival: true,
    category: "Kids",
    image: TShirt20,
  },
  {
    id: 21,
    name: "T-shirt(black)",
    price: 855,
    oldPrice: 1050,
    onSale: true,
    newArrival: false,
    category: "Women",
    image: TShirt21,
  },
  {
    id: 22,
    name: "T-shirt(t-pink)",
    price: 855,
    oldPrice: 1050,
    onSale: true,
    newArrival: false,
    category: "Women",
    image: TShirt22,
  },
  {
    id: 23,
    name: "T-shirt(pink)",
    price: 855,
    oldPrice: 1050,
    onSale: true,
    newArrival: false,
    category: "Women",
    image: TShirt23,
  },
  {
    id: 24,
    name: "T-shirt(skin)",
    price: 855,
    oldPrice: 1050,
    onSale: true,
    newArrival: false,
    category: "Women",
    image: TShirt24,
  },
  {
    id: 25,
    name: "T-shirt(white)",
    price: 855,
    oldPrice: 1000,
    onSale: true,
    newArrival: false,
    category: "Women",
    image: TShirt25,
  },
  {
    id: 26,
    name: "T-shirt(blue)",
    price: 1050,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: TShirt26,
  },
  {
    id: 27,
    name: "T-Shirt(black)",
    price: 1050,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: TShirt27,
  },
  {
    id: 28,
    name: "T-shirt(brown)",
    price: 1050,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: TShirt28,
  },
  {
    id: 29,
    name: "T-shirt(dark gray)",
    price: 1050,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: TShirt29,
  },
  {
    id: 30,
    name: "T-shirt(navy blue)",
    price: 1050,
    onSale: false,
    newArrival: true,
    category: "Women",
    image: TShirt30,
  },
];

export default Product