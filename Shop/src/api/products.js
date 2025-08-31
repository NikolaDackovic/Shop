import slika1 from "../assets/images/slika1.jpg";
import slika2 from "../assets/images/slika2.jpg";
import slika3 from "../assets/images/slika3.jpg";
import slika4 from "../assets/images/slika4.jpg";
import slika5 from "../assets/images/slika5.jpg";
import slika6 from "../assets/images/slika6.jpg";
import slika7 from "../assets/images/slika7.jpg";
import slika8 from "../assets/images/slika8.jpg";
import slika9 from "../assets/images/slika9.jpg";
import slika10 from "../assets/images/slika10.jpg";
import slika11 from "../assets/images/slika11.jpg";
import slika12 from "../assets/images/slika12.jpg";
import slika13 from "../assets/images/slika13.jpg";
import slika14 from "../assets/images/slika14.jpg";
import slika15 from "../assets/images/slika15.jpg";
import slika16 from "../assets/images/slika16.jpg";
import slika17 from "../assets/images/slika17.jpg";
import slika18 from "../assets/images/slika18.jpg";
import slika19 from "../assets/images/slika19.jpg";
import slika20 from "../assets/images/slika20.jpg";
import slika21 from "../assets/images/slika21.jpg";
import slika22 from "../assets/images/slika22.jpg";

export const products = [
  { id: 1, name: "Puzzle", price: 12.99, image: slika1, category: "Puzzle" },
  { id: 2, name: "Lego Robot", price: 55.99, image: slika2, category: "Lego" },
  { id: 6, name: "Lego EC500", price: 20.99, image: slika6, category: "Lego" },
  { id: 7, name: "Ferrari Car Toy", price: 29.99, image: slika7, category: "Car" },
  { id: 8, name: "Model Ship", price: 49.99, image: slika8, category: "Ship" },
  { id: 9, name: "Plane Model Red", price: 39.99, image: slika9, category: "Plane" },
  { id: 10, name: "Plane Model White", price: 39.99, image: slika10, category: "Plane" },
  { id: 11, name: "Military Ambulance", price: 39.99, image: slika11, category: "Game" },
  { id: 12, name: "BigsShock Pistol", price: 19.99, image: slika12, category: "Pistol Toy" },
  { id: 13, name: "Car 7.5 CM ASST", price: 39.99, image: slika13, category: "Car" },
  { id: 14, name: "Spidey Hulk", price: 23.6, image: slika14, category: "Game" },
  { id: 15, name: "Adidas Ball UCL", price: 40.0, image: slika15, category: "Sport" },
  { id: 16, name: "Toddler Bike", price: 90.0, image: slika16, category: "Bike" },
  { id: 17, name: "Firehouse Play Tent", price: 31.9, image: slika17, category: "Game" },
  { id: 18, name: "Best Luck Basket", price: 24.5, image: slika18, category: "Sport" },
  { id: 19, name: "Dinosaurus", price: 25.99, image: slika19, category: "Animals set" },
  { id: 20, name: "Lion Costume", price: 39.99, image: slika20, category: "Costume" },
  { id: 21, name: "Hero Costume", price: 39.99, image: slika21, category: "Costume" },
  { id: 22, name: "Turtle Costume", price: 39.99, image: slika22, category: "Costume" },
];

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}