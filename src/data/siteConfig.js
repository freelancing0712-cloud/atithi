export const OWNER_WHATSAPP_NUMBER = "918007614614";
export const OWNER_PHONE_DISPLAY = "+91 8007614614";

export const hotelInfo = {
  name: "Hotel Atithi",
  city: "Solapur",
  address: "No 1001, North Kasaba, Balives Road, Solapur - 413002, Maharashtra",
  mapsUrl: "https://maps.app.goo.gl/3BqtGKeK2g5614aJ7",
  openingHours: "11:00 AM - 11:00 PM",
};

export const defaultAvailability = {
  table: true,
  food: true,
  banquet: true,
};

const imageFor = (query) => `https://source.unsplash.com/900x700/?${encodeURIComponent(query)},indian food,vegetarian`;

const sectionDescriptions = {
  "Nat Khat Jam": "Comforting soups with bright spice, tang, and warmth.",
  "Shuruwat Snacks": "Crisp, saucy, and tandoori starters made for sharing.",
  "Pakoda Snacks": "Golden fried tea-time favorites served hot.",
  "Chinimini Thali": "Indo-Chinese rice and noodle plates with bold wok flavor.",
  "Atithi Special": "House special sabjis with rich gravies and festive spice.",
  "Hamari Khasiyat": "Kaju-rich preparations with creamy restaurant-style gravies.",
  "Paneer Sabji": "Classic paneer curries prepared in Atithi's pure veg kitchen.",
};

const menuSections = [
  {
    category: "Nat Khat Jam",
    items: [
      ["Hot & Sour Soup", 90, "hot sour soup"],
      ["Man Chow Soup", 90, "manchow soup"],
      ["Tomato Soup", 90, "tomato soup"],
    ],
  },
  {
    category: "Shuruwat Snacks",
    items: [
      ["Paneer Tikka", 200, "paneer tikka"],
      ["Paneer Manchurian", 160, "paneer manchurian"],
      ["Paneer Chilly", 160, "chilli paneer"],
      ["Paneer 65", 160, "paneer 65"],
      ["Veg. Manchurian", 110, "veg manchurian"],
      ["Gobi Manchurian", 110, "gobi manchurian"],
      ["Gobi 65", 130, "gobi 65"],
      ["Veg 65", 130, "veg 65 starter"],
      ["Bombay Chat", 90, "bombay chaat"],
      ["Finger Chips", 90, "french fries"],
      ["Masala Papad", 30, "masala papad"],
      ["Fry Papad", 20, "fried papad"],
      ["Roasted Papad", 20, "roasted papad"],
      ["Green Salad", 40, "green salad indian"],
    ],
  },
  {
    category: "Pakoda Snacks",
    items: [
      ["Cheese Pakoda", 140, "cheese pakoda"],
      ["Paneer Pakoda", 140, "paneer pakora"],
      ["Onion Pakoda", 90, "onion pakoda"],
      ["Chilli Pakoda", 90, "mirchi pakoda"],
    ],
  },
  {
    category: "Chinimini Thali",
    items: [
      ["Veg. Shejwan Fried Rice", 160, "schezwan fried rice"],
      ["Veg Fried Rice", 140, "veg fried rice"],
      ["Veg Shejwan Noodles", 150, "schezwan noodles"],
      ["Veg. Hakka Noodles", 130, "veg hakka noodles"],
    ],
  },
  {
    category: "Atithi Special",
    items: [
      ["Veg Anjana", 260, "vegetable curry indian"],
      ["Paneer Birbali", 260, "paneer curry"],
      ["Veg Mumtaj", 260, "veg kofta curry"],
    ],
  },
  {
    category: "Hamari Khasiyat",
    items: [
      ["Kaju Kurma", 190, "kaju korma"],
      ["Kaju Paneer", 190, "kaju paneer curry"],
      ["Kaju Mutter", 190, "kaju matar"],
      ["Kaju Masala", 190, "kaju masala curry"],
      ["Kaju Curry", 190, "cashew curry indian"],
    ],
  },
  {
    category: "Paneer Sabji",
    items: [
      ["Chees Anguriya", 180, "cheese curry indian"],
      ["Paneer Aurangabadi", 180, "paneer aurangabadi"],
      ["Paneer Tikka Masala", 180, "paneer tikka masala"],
      ["Paneer Kofta", 180, "paneer kofta"],
      ["Paneer Palak", 180, "palak paneer"],
      ["Paneer Jalfrezi", 180, "paneer jalfrezi"],
      ["Paneer Burji", 180, "paneer bhurji"],
      ["Paneer Butter Masala", 180, "paneer butter masala"],
      ["Paneer Mutter Masala", 180, "matar paneer"],
    ],
  },
];

export const defaultMenuItems = menuSections.flatMap((section, sectionIndex) =>
  section.items.map(([name, price, imageQuery], itemIndex) => ({
    id: sectionIndex * 100 + itemIndex + 1,
    category: section.category,
    name,
    priceAmount: price,
    price: `Rs. ${price}`,
    image: imageFor(imageQuery),
    description: sectionDescriptions[section.category],
  })),
);
