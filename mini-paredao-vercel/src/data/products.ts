import miniParedaoImg from "@/assets/mini-paredao.webp";
import miniParedao2Img from "@/assets/mini-paredao-2.webp";
import miniParedao3Img from "@/assets/mini-paredao-3.webp";
import miniParedao4Img from "@/assets/mini-paredao-4.webp";
import miniParedao5Img from "@/assets/mini-paredao-5.webp";
import miniParedao6Img from "@/assets/mini-paredao-6.webp";

import p2r1 from "@/assets/review-p2-1.png";
import p2r2 from "@/assets/review-p2-2.png";
import p2r3 from "@/assets/review-p2-3.png";
import p2r4 from "@/assets/review-p2-4.png";
import p2r5 from "@/assets/review-p2-5.png";
import p2r6 from "@/assets/review-p2-6.png";
import p2r7 from "@/assets/review-p2-7.png";
import p2r8 from "@/assets/review-p2-8.png";
import p2r9 from "@/assets/review-p2-9.png";

import p3r1 from "@/assets/review-p3-1.png";
import p3r2 from "@/assets/review-p3-2.png";
import p3r3 from "@/assets/review-p3-3.png";
import p3r4 from "@/assets/review-p3-4.png";
import p3r5 from "@/assets/review-p3-5.png";
import p3r6 from "@/assets/review-p3-6.png";
import p3r7 from "@/assets/review-p3-7.png";
import p3r8 from "@/assets/review-p3-8.png";

import p4r1 from "@/assets/review-p4-1.png";
import p4r2 from "@/assets/review-p4-2.png";
import p4r3 from "@/assets/review-p4-3.png";
import p4r4 from "@/assets/review-p4-4.png";
import p4r5 from "@/assets/review-p4-5.png";
import p4r6 from "@/assets/review-p4-6.png";

import p5r1 from "@/assets/review-p5-1.png";
import p5r2 from "@/assets/review-p5-2.png";
import p5r3 from "@/assets/review-p5-3.png";
import p5r4 from "@/assets/review-p5-4.png";
import p5r5 from "@/assets/review-p5-5.png";

import p6r1 from "@/assets/review-p6-1.png";
import p6r2 from "@/assets/review-p6-2.png";
import p6r3 from "@/assets/review-p6-3.png";
import p6r4 from "@/assets/review-p6-4.png";
import p6r5 from "@/assets/review-p6-5.png";

export type Product = {
  slug: string;
  name: string;
  image: string;
  price: string;
  priceNumeric: string; // sem "R$ " para o banner laranja
  oldPrice: string;
  discount: string; // "-93%"
  discountPercent: string; // "93% OFF"
  rating: string;
  reviewsCount: number;
  sold: string;
  checkoutUrl: string;
  reviewPhotos?: string[][];
};

export const PRODUCTS: Product[] = [
  {
    slug: "mini-paredao-1",
    name: "MINI PAREDÃO #1",
    image: miniParedaoImg,
    price: "R$ 67,81",
    priceNumeric: "67,81",
    oldPrice: "R$ 249,00",
    discount: "-93%",
    discountPercent: "93% OFF",
    rating: "4,9",
    reviewsCount: 54,
    sold: "7894 vendido(s)",
    checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/2c37f20b-855a-44ab-bc7a-c49a2c4d9a72",
  },
  {
    slug: "mini-paredao-2",
    name: "MINI PAREDÃO #2",
    image: miniParedao2Img,
    price: "R$ 83,26",
    priceNumeric: "83,26",
    oldPrice: "R$ 289,00",
    discount: "-92%",
    discountPercent: "92% OFF",
    rating: "4,8",
    reviewsCount: 42,
    sold: "5321 vendido(s)",
    checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/fca1c9a6-5619-4f31-b896-86464c286cc5",
    reviewPhotos: [
      [p2r1, p2r2],
      [p2r4, p2r5],
      [p2r6, p2r7],
      [p2r8],
    ],
  },
  {
    slug: "mini-paredao-3",
    name: "MINI PAREDÃO #3",
    image: miniParedao3Img,
    price: "R$ 97,43",
    priceNumeric: "97,43",
    oldPrice: "R$ 319,00",
    discount: "-91%",
    discountPercent: "91% OFF",
    rating: "4,9",
    reviewsCount: 67,
    sold: "6210 vendido(s)",
    checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/27628840-1dcd-414f-8c2c-24d32eaac694",
    reviewPhotos: [
      [p3r1],
      [p3r3, p3r4],
      [p3r5, p3r6],
      [p3r7],
    ],
  },
  {
    slug: "mini-paredao-4",
    name: "MINI PAREDÃO #4",
    image: miniParedao4Img,
    price: "R$ 113,88",
    priceNumeric: "113,88",
    oldPrice: "R$ 349,00",
    discount: "-90%",
    discountPercent: "90% OFF",
    rating: "4,7",
    reviewsCount: 31,
    sold: "3812 vendido(s)",
    checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/322af278-9f56-4d27-8dac-0d1c7ccb6a27",
    reviewPhotos: [
      [p4r1, p4r2],
      [p4r3],
      [p4r4, p4r5],
      [p4r6],
    ],
  },
  {
    slug: "mini-paredao-5",
    name: "MINI PAREDÃO #5",
    image: miniParedao5Img,
    price: "R$ 136,57",
    priceNumeric: "136,57",
    oldPrice: "R$ 389,00",
    discount: "-89%",
    discountPercent: "89% OFF",
    rating: "4,9",
    reviewsCount: 58,
    checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/87f1e1b2-88dc-4a7f-b8a1-252f88ecfdcd",
    reviewPhotos: [
      [p5r1, p5r2],
      [p5r3],
      [p5r4],
      [p5r5],
    ],
    sold: "4905 vendido(s)",
  },
  {
    slug: "mini-paredao-6",
    name: "MINI PAREDÃO #6",
    image: miniParedao6Img,
    price: "R$ 169,32",
    priceNumeric: "169,32",
    oldPrice: "R$ 449,00",
    discount: "-88%",
    discountPercent: "88% OFF",
    rating: "4,8",
    reviewsCount: 39,
    sold: "2987 vendido(s)",
    checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/52a49500-be0d-4de2-b584-840149d8a695",
    reviewPhotos: [
      [p6r1, p6r2],
      [p6r3],
      [p6r4],
      [p6r5],
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
