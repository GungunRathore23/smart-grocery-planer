// data/user.js

// Dummy data for Smarter Grocery Planner project
module.exports = [
  {
    id: 1,
    name: "Gungun Rathore",
    email: "gungun@example.com",
    password: "123456",
    role: "customer",
    profileImage: "https://example.com/images/gungun.jpg",
    address: "Indore, Madhya Pradesh",
    groceryList: [
      { item: "Milk", quantity: 2, unit: "liters" },
      { item: "Bread", quantity: 1, unit: "pack" }
    ]
  },
  {
    id: 2,
    name: "Madhu Rathore",
    email: "madhu@example.com",
    password: "654321",
    role: "admin",
    profileImage: "https://example.com/images/madhu.jpg",
    address: "Bhopal, Madhya Pradesh",
    groceryList: [
      { item: "Rice", quantity: 5, unit: "kg" },
      { item: "Oil", quantity: 1, unit: "liter" }
    ]
  },
  {
    id: 3,
    name: "Ramesh Patel",
    email: "ramesh@example.com",
    password: "ramesh123",
    role: "delivery-partner",
    profileImage: "https://example.com/images/ramesh.jpg",
    address: "Dewas, Madhya Pradesh",
    groceryList: []
  },
  {
    id: 4,
    name: "Usha Sharma",
    email: "usha@example.com",
    password: "usha456",
    role: "store-manager",
    profileImage: "https://example.com/images/usha.jpg",
    address: "Indore, MP",
    groceryList: []
  }
];
