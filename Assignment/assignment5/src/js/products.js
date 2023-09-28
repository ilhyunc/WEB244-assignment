/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    //category 1
    id: "P1",
    name: "FAT TIRE",
    description: "All Terrain Fat Tire E-Bike",
    price: 209900,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P2",
    name: "STEP-THRU",
    description: "Step-Thru City Commuting E-Bike",
    price: 149900,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P3",
    name: "MOUNTAIN",
    description: "Power-Assist Electric Mountain Bike",
    price: 199900,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P4",
    name: "FOLDING",
    description: "Compact Foldable Electric Bike",
    price: 174900,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P5",
    name: "FULL SUSPENSION",
    description: "Premium Large Frame E-Bike",
    price: 499900,
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "P6",
    name: "CARGO",
    description: "Large Capacity Cargo E-Bike",
    price: 149900,
    discontinued: true,
    categories: ["c1"]
  },

  //category 2
  {
    id: "P1",
    name: "KNIGHT TURBO",
    description: "Compact Size Electric Motorcycle",
    price: 274900,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P2",
    name: "GANDAN TURBO",
    description: "Electric Motorcycle With Bluetooth Exhaust",
    price: 309900,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P3",
    name: "DX",
    description: "Dual Removable Battery E-Motorcycle",
    price: 309900,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P4",
    name: "KAMEN",
    description: "84V Utility Electric Motorcycle",
    price: 339900,
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "P5",
    name: "ZONE GTS",
    description: "Full-Size Sports Electric Motorcycle",
    price: 329900,
    discontinued: false,
    categories: ["c2"]
  },

  //category 3
  {
    id: "P1",
    name: "HORNET X",
    description: "Minimum maintenance required, it maximizes performance.",
    price: 199900,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "P2",
    name: "ADO",
    description:
      "Give maximum torque performance and best riding experience on varying road conditions.",
    price: 189900,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P3",
    name: "URBAN T2",
    description:
      "New compact, with a length of only 145cm, making it perfect for small elevators and narrow spaces.",
    price: 159900,
    discontinued: true,
    categories: ["c3"]
  },
  {
    id: "P4",
    name: "MONSTER S - 84V",
    description:
      "500W Brushless QS Super Torque Motor, it ensures that the bike can stand the test of time for years.",
    price: 279900,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P5",
    name: "MONSTER S - 72V",
    description: "Reliable stopping power with large brake disks and hydraulic brakes.",
    price: 249900,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P6",
    name: "HORNET 6.0",
    description: "Up to 100KM on one charge.",
    price: 219900,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P7",
    name: "KOOGO",
    description: "Strengthened Suspension Fork.",
    price: 289900,
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "P8",
    name: "GT84",
    description:
      "10x3.5 Tubeless Tire. Compared to traditional tubed tires, they are more resilient and reliable",
    price: 269900,
    discontinued: false,
    categories: ["c3"]
  },

  //category 4
  {
    id: "P1",
    name: "T48",
    description: "MOBILITY SCOOTER",
    price: 299900,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P2",
    name: "ET-4 LS",
    description:
      "Premium and stylish, equipped with a roof canopy to keep the rider protected from all kinds of weather.",
    price: 369500,
    discontinued: true,
    categories: ["c4"]
  },
  {
    id: "P3",
    name: "ET-4 LX",
    description:
      "New compact, with a length of only 145cm, making it perfect for small elevators and narrow spaces.",
    price: 349500,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P4",
    name: "ET-4 CRUISE",
    description:
      "Fully enclosed, Equipped with a front windshield wiper, and rearview camera, it offers excellent functionalities.",
    price: 849500,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P5",
    name: "ET-4 COMPACT",
    description: "Powerful and compact, perfect for those who value practicality and convenience.",
    price: 349500,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P6",
    name: "ET-4 CLASSIC",
    description: "Classic, designed for maximum comfort and convenience.",
    price: 349500,
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "P7",
    name: "ET-4 RIO",
    description: "Designed to make driving easy and comfortable. ",
    price: 369500,
    discontinued: false,
    categories: ["c4"]
  },

  //category 5, 3 WHEELS
  {
    id: "P1",
    name: "ET-3 LS",
    description:
      "Equipped with a roof canopy to keep the rider protected from all kinds of weather.",
    price: 329500,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "P2",
    name: "ET-3 LX",
    description:
      "Powerful and stylish,  With rear-wheel drive and differential, it offers excellent handling and control.",
    price: 299500,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "P3",
    name: "ET-3 ES",
    description: "It is perfect for those who are looking for a more practical option.",
    price: 239500,
    discontinued: false,
    categories: ["c5"]
  },
  {
    id: "P4",
    name: "ET-3 COMMANDER",
    description:
      "This mobility scooter comes with an optional roof canopy to keep you protected from the weather.",
    price: 309500,
    discontinued: true,
    categories: ["c5"]
  },
  {
    id: "P5",
    name: "ET-3 CITY",
    description: "A super compact and foldable 3-wheeler perfect for both indoor and outdoor use.",
    price: 179500,
    discontinued: true,
    categories: ["c5"]
  },
  {
    id: "P6",
    name: "ET-3 CLASSIC",
    description: "With rear-wheel drive and a differential, this scooter offers optimal stability.",
    price: 299500,
    discontinued: false,
    categories: ["c5"]
  },

  //category 6
  {
    id: "P1",
    name: "HELMET 310",
    description: "Half face design. Convenient to put on.",
    price: 5900,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P2",
    name: "HELMET 118",
    description: "Flip-Up design.",
    price: 13900,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P3",
    name: "HELMET 128",
    description: "Clear removable visor.",
    price: 13900,
    discontinued: true,
    categories: ["c6"]
  },
  {
    id: "P4",
    name: "HELMET 218",
    description: "Pull-down smoked sun shield.",
    price: 8900,
    discontinued: true,
    categories: ["c6"]
  },
  {
    id: "P5",
    name: "HELMET 202",
    description: "Open face design.",
    price: 8900,
    discontinued: true,
    categories: ["c6"]
  },
  {
    id: "P6",
    name: "48V-84V SLA CHARGER - UNIVERSAL PLUG",
    description: "48V-84V",
    price: 5900,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P7",
    name: "LICENSE PLATE",
    description: "Pre-drilled holes on top, Resilient and durable",
    price: 1000,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P8",
    name: "ALARM CABLE LOCK",
    description: "Built-In alarm system. Two working modes.",
    price: 4900,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P9",
    name: "ALARM CHAIN LOCK",
    description: "Corrosion-Resistant 110dB alarm lock, can work in silent mode as well.",
    price: 19900,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P10",
    name: "CELLPHONE HOLDER",
    description: "Easy installation. Compatible with most smart phones",
    price: 2900,
    discontinued: false,
    categories: ["c6"]
  },
  {
    id: "P11",
    name: "DELIVERY BAG",
    description: "Waterproof exterior layer. Thermal insulation interior to keep the food fresh.",
    price: 7900,
    discontinued: false,
    categories: ["c6"]
  }
];
