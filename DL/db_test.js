// this is a file to create fake data and insert it to the DB
// actions: connect to DB >> import the model >> call a function to create the data

let users = [
    {
        "email": "john.doe@example.com",
        "fullName": "John Doe",
        "password": "abc1234",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "jane.smith@example.com",
        "fullName": "Jane Smith",
        "password": "def5678",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "michael.johnson@example.com",
        "fullName": "Michael Johnson",
        "password": "ghi9012",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "emily.davis@example.com",
        "fullName": "Emily Davis",
        "password": "jkl3456",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "david.wilson@example.com",
        "fullName": "David Wilson",
        "password": "mno7890",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "sarah.moore@example.com",
        "fullName": "Sarah Moore",
        "password": "pqr1234",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "chris.taylor@example.com",
        "fullName": "Chris Taylor",
        "password": "stu5678",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "ashley.anderson@example.com",
        "fullName": "Ashley Anderson",
        "password": "vwx9012",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "james.thomas@example.com",
        "fullName": "James Thomas",
        "password": "yz12345",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "amanda.jackson@example.com",
        "fullName": "Amanda Jackson",
        "password": "67890ab",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "daniel.white@example.com",
        "fullName": "Daniel White",
        "password": "cde1234",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "jessica.harris@example.com",
        "fullName": "Jessica Harris",
        "password": "fgh5678",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "matthew.martin@example.com",
        "fullName": "Matthew Martin",
        "password": "ijk9012",
        "permission": "admin",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "olivia.lee@example.com",
        "fullName": "Olivia Lee",
        "password": "lmn3456",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    },
    {
        "email": "joshua.walker@example.com",
        "fullName": "Joshua Walker",
        "password": "opq7890",
        "permission": "user",
        "created": "2024-05-22T00:00:00Z",
        "isActive": true
    }
]

const items = [
    // Dairy Products
    {
      name: "Camembert Cheese",
      category: "dairy",
      subCategory: "Soft Cheese",
      emoji: "🧀",
      price: 25.0
    },
    {
      name: "Almond Milk",
      category: "dairy",
      subCategory: "Plant Milk",
      emoji: "🥛",
      price: 12.0
    },
    {
      name: "Natural Yogurt",
      category: "dairy",
      subCategory: "Yogurt",
      emoji: "🥛",
      price: 8.0
    },
    {
      name: "Butter",
      category: "dairy",
      subCategory: "Butter",
      emoji: "🧈",
      price: 15.0
    },
    {
      name: "Whipping Cream",
      category: "dairy",
      subCategory: "Cream",
      emoji: "🥛",
      price: 18.0
    },
    {
      name: "Mozzarella Cheese",
      category: "dairy",
      subCategory: "Semi-Hard Cheese",
      emoji: "🧀",
      price: 22.0
    },
    {
      name: "Parmesan Cheese",
      category: "dairy",
      subCategory: "Hard Cheese",
      emoji: "🧀",
      price: 30.0
    },
    {
      name: "Greek Yogurt",
      category: "dairy",
      subCategory: "Yogurt",
      emoji: "🥛",
      price: 10.0
    },
    {
      name: "Cheddar Cheese",
      category: "dairy",
      subCategory: "Hard Cheese",
      emoji: "🧀",
      price: 20.0
    },
    {
      name: "Cottage Cheese",
      category: "dairy",
      subCategory: "Fresh Cheese",
      emoji: "🧀",
      price: 12.0
    },
    {
      name: "Blue Cheese",
      category: "dairy",
      subCategory: "Blue Cheese",
      emoji: "🧀",
      price: 28.0
    },
    {
      name: "Brie Cheese",
      category: "dairy",
      subCategory: "Soft Cheese",
      emoji: "🧀",
      price: 26.0
    },
    {
      name: "Swiss Cheese",
      category: "dairy",
      subCategory: "Semi-Hard Cheese",
      emoji: "🧀",
      price: 24.0
    },
    {
      name: "Ricotta Cheese",
      category: "dairy",
      subCategory: "Fresh Cheese",
      emoji: "🧀",
      price: 14.0
    },
    {
      name: "Sour Cream",
      category: "dairy",
      subCategory: "Cream",
      emoji: "🥛",
      price: 7.0
    },
  
    // Alcohol Products
    {
      name: "Red Wine",
      category: "alcohol",
      subCategory: "Wine",
      emoji: "🍷",
      price: 40.0
    },
    {
      name: "White Wine",
      category: "alcohol",
      subCategory: "Wine",
      emoji: "🍷",
      price: 35.0
    },
    {
      name: "Beer",
      category: "alcohol",
      subCategory: "Beer",
      emoji: "🍺",
      price: 5.0
    },
    {
      name: "Whiskey",
      category: "alcohol",
      subCategory: "Spirit",
      emoji: "🥃",
      price: 50.0
    },
    {
      name: "Vodka",
      category: "alcohol",
      subCategory: "Spirit",
      emoji: "🍸",
      price: 45.0
    },
    {
      name: "Gin",
      category: "alcohol",
      subCategory: "Spirit",
      emoji: "🍸",
      price: 42.0
    },
    {
      name: "Tequila",
      category: "alcohol",
      subCategory: "Spirit",
      emoji: "🥃",
      price: 55.0
    },
    {
      name: "Champagne",
      category: "alcohol",
      subCategory: "Sparkling Wine",
      emoji: "🍾",
      price: 60.0
    },
    {
      name: "Rosé Wine",
      category: "alcohol",
      subCategory: "Wine",
      emoji: "🍷",
      price: 38.0
    },
    {
      name: "Cognac",
      category: "alcohol",
      subCategory: "Spirit",
      emoji: "🥃",
      price: 65.0
    },
    {
      name: "Rum",
      category: "alcohol",
      subCategory: "Spirit",
      emoji: "🥃",
      price: 48.0
    },
    {
      name: "Sake",
      category: "alcohol",
      subCategory: "Rice Wine",
      emoji: "🍶",
      price: 32.0
    },
    {
      name: "Prosecco",
      category: "alcohol",
      subCategory: "Sparkling Wine",
      emoji: "🍾",
      price: 45.0
    },
  
    // Fruits
    {
      name: "Apple",
      category: "fruits",
      subCategory: "Pome",
      emoji: "🍎",
      price: 3.0
    },
    {
      name: "Banana",
      category: "fruits",
      subCategory: "Tropical",
      emoji: "🍌",
      price: 2.0
    },
    {
      name: "Orange",
      category: "fruits",
      subCategory: "Citrus",
      emoji: "🍊",
      price: 4.0
    },
    {
      name: "Strawberry",
      category: "fruits",
      subCategory: "Berry",
      emoji: "🍓",
      price: 6.0
    },
    {
      name: "Grapes",
      category: "fruits",
      subCategory: "Berry",
      emoji: "🍇",
      price: 5.0
    },
    {
      name: "Pineapple",
      category: "fruits",
      subCategory: "Tropical",
      emoji: "🍍",
      price: 8.0
    },
    {
      name: "Watermelon",
      category: "fruits",
      subCategory: "Melon",
      emoji: "🍉",
      price: 7.0
    },
    {
      name: "Blueberry",
      category: "fruits",
      subCategory: "Berry",
      emoji: "🫐",
      price: 10.0
    },
    {
      name: "Lemon",
      category: "fruits",
      subCategory: "Citrus",
      emoji: "🍋",
      price: 3.0
    },
    {
      name: "Mango",
      category: "fruits",
      subCategory: "Tropical",
      emoji: "🥭",
      price: 6.0
    },
    {
      name: "Peach",
      category: "fruits",
      subCategory: "Stone Fruit",
      emoji: "🍑",
      price: 5.0
    },
    {
      name: "Pear",
      category: "fruits",
      subCategory: "Pome",
      emoji: "🍐",
      price: 4.0
    },
    {
      name: "Cherry",
      category: "fruits",
      subCategory: "Stone Fruit",
      emoji: "🍒",
      price: 9.0
    },
    {
      name: "Kiwi",
      category: "fruits",
      subCategory: "Berry",
      emoji: "🥝",
      price: 4.0
    },
  
    // Vegetables
    {
      name: "Tomato",
      category: "vegetables",
      subCategory: "Fruit Vegetable",
      emoji: "🍅",
      price: 3.0
    },
    {
      name: "Carrot",
      category: "vegetables",
      subCategory: "Root Vegetable",
      emoji: "🥕",
      price: 2.0
    },
    {
      name: "Broccoli",
      category: "vegetables",
      subCategory: "Cruciferous",
      emoji: "🥦",
      price: 5.0
    },
    {
      name: "Spinach",
      category: "vegetables",
      subCategory: "Leafy Green",
      emoji: "🥬",
      price: 4.0
    },
    {
      name: "Potato",
      category: "vegetables",
      subCategory: "Root Vegetable",
      emoji: "🥔",
      price: 3.0
    },
    {
      name: "Onion",
      category: "vegetables",
      subCategory: "Bulb Vegetable",
      emoji: "🧅",
      price: 2.0
    },
    {
      name: "Garlic",
      category: "vegetables",
      subCategory: "Bulb Vegetable",
      emoji: "🧄",
      price: 4.0
    },
    {
      name: "Cucumber",
      category: "vegetables",
      subCategory: "Gourd Vegetable",
      emoji: "🥒",
      price: 3.0
    },
    {
      name: "Bell Pepper",
      category: "vegetables",
      subCategory: "Fruit Vegetable",
      emoji: "🫑",
      price: 4.0
    },
    {
      name: "Lettuce",
      category: "vegetables",
      subCategory: "Leafy Green",
      emoji: "🥬",
      price: 2.0
    },
    {
      name: "Cauliflower",
      category: "vegetables",
      subCategory: "Cruciferous",
      emoji: "🥦",
      price: 4.0
    },
    {
      name: "Eggplant",
      category: "vegetables",
      subCategory: "Fruit Vegetable",
      emoji: "🍆",
      price: 4.0
    },
    {
      name: "Sweet Potato",
      category: "vegetables",
      subCategory: "Root Vegetable",
      emoji: "🍠",
      price: 3.0
    },
    {
      name: "Zucchini",
      category: "vegetables",
      subCategory: "Gourd Vegetable",
      emoji: "🥒",
      price: 3.0
    }
  ]

  const orders = [
    {
      items: [
        { itemId: "665256e3b6551a29b9f28055", qty: 2 },
        { itemId: "665256e3b6551a29b9f2805e", qty: 1 }
      ],
      created: "2024-05-25T15:00:00.000Z",
      userId: "665238498f473576f6a9804f",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f28060", qty: 5 },
        { itemId: "665256e3b6551a29b9f2806e", qty: 3 }
      ],
      created: "2024-05-24T15:00:00.000Z",
      userId: "665238498f473576f6a98058",
      isActive: true
    },
    {
      items: [
        { itemId:"665256e3b6551a29b9f2806f", qty: 10 }
      ],
      created: "2024-05-23T15:00:00.000Z",
      userId: "665238498f473576f6a98054",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f2806a", qty: 1 },
        { itemId: "665256e3b6551a29b9f2805b", qty: 2 },
        { itemId: "665256e3b6551a29b9f2805c", qty: 1 }
      ],
      created: "2024-05-22T15:00:00.000Z",
      userId: "665238498f473576f6a98053",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f28070", qty: 6 },
        { itemId: "665256e3b6551a29b9f28073", qty: 1 }
      ],
      created: "2024-05-21T15:00:00.000Z",
      userId: "665238498f473576f6a98059",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f2806d", qty: 2 },
        { itemId: "665256e3b6551a29b9f28053", qty: 3 }
      ],
      created: "2024-05-20T15:00:00.000Z",
      userId: "665238498f473576f6a9804c",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f28058", qty: 1 },
        { itemId: "665256e3b6551a29b9f28061", qty: 4 }
      ],
      created: "2024-05-19T15:00:00.000Z",
      userId: "665238498f473576f6a98057",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f2807c", qty: 10 }
      ],
      created: "2024-05-18T15:00:00.000Z",
      userId: "665238498f473576f6a9804d",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f2807b", qty: 3 },
        { itemId: "665256e3b6551a29b9f28055", qty: 1 }
      ],
      created: "2024-05-17T15:00:00.000Z",
      userId: "665238498f473576f6a98056",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f28063", qty: 4 }
      ],
      created: "2024-05-16T15:00:00.000Z",
      userId: "665238498f473576f6a98050",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f28064", qty: 1 },
        { itemId: "665256e3b6551a29b9f28057", qty: 1 }
      ],
      created: "2024-05-15T15:00:00.000Z",
      userId: "665238498f473576f6a98052",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f2805f", qty: 5 }
      ],
      created: "2024-05-14T15:00:00.000Z",
      userId: "665240515e4ef1e80e8193f4",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f2807a", qty: 2 },
        { itemId: "665256e3b6551a29b9f28074", qty: 2 }
      ],
      created: "2024-05-13T15:00:00.000Z",
      userId: "665252e12b169464a053e8de",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f28072", qty: 3 }
      ],
      created: "2024-05-12T15:00:00.000Z",
      userId: "665238498f473576f6a9804b",
      isActive: true
    },
    {
      items: [
        { itemId: "665256e3b6551a29b9f28065", qty: 1 },
        { itemId: "665256e3b6551a29b9f28071", qty: 4 }
      ],
      created: "2024-05-11T15:00:00.000Z",
      userId: "665238498f473576f6a98053",
      isActive: true
    }
  ]
  

const go = async () => {
    console.log("@@@@@ start @@@@@");
    const db = require('./db')
    await db.connect() // it's an asynchronism action so we need to await, otherwise he'll create the model without connection to the DB

    // const userModel = require('./user.model')
    // await userModel.create(users) // create is mongoose method to create the fake data to the DB
    // const itemModel = require('./item.model')
    // await itemModel.create(items) // create is mongoose method to create the fake data to the DB

    const orderModel = require('./order.model')
    await orderModel.create(orders)

    console.log("@@@@@ Done @@@@@");
}

go()