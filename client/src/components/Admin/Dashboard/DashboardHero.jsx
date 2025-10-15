import React, { useState } from "react";

const DashboardHero = ({ selectedMenu }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Rice", price: 250, quantity: "5 kg", category: "Grains" },
    { id: 2, name: "Dal", price: 300, quantity: "2 kg", category: "Pulses" },
    { id: 3, name: "Mango", price: 120, quantity: "1 kg", category: "Fruits" },
  ]);

  const [addItem, setAddItem] = useState({ name: "", price: "", quantity: "", category: "" });
  const [editItem, setEditItem] = useState({ id: null, name: "", price: "", quantity: "", category: "" });
  const [searchTerm, setSearchTerm] = useState(""); // For search

  // Add Item
  const handleAdd = () => {
    if (addItem.name && addItem.price && addItem.quantity && addItem.category) {
      setItems([...items, { id: Date.now(), ...addItem }]);
      setAddItem({ name: "", price: "", quantity: "", category: "" });
    }
  };

  // Edit Item
  const handleEdit = (id) => {
    const item = items.find((i) => i.id === id);
    setEditItem({ ...item });
  };

  const handleUpdate = () => {
    setItems(items.map(i => i.id === editItem.id ? { ...editItem } : i));
    setEditItem({ id: null, name: "", price: "", quantity: "", category: "" });
  };

  // Delete Item
  const handleDelete = (id) => setItems(items.filter(i => i.id !== id));


  // Filter items based on search term (name OR category)
const filteredItems = items.filter(i =>
  i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  i.category.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {/* Navbar */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">Smarter Grocery Planner - Admin</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-lg w-1/3"
        />

        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600">Logout</button>
      </div>

      <h2 className="text-3xl font-bold mb-4">{selectedMenu}</h2>

      {/* =================== View All Items =================== */}
      {selectedMenu === "View All Items" && (
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          {filteredItems.length === 0 ? (
            <p className="text-red-600 font-semibold">Product not found!</p>
          ) : (
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Price</th>
                  <th className="border px-4 py-2 text-left">Quantity</th>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((i) => (
                  <tr key={i.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{i.name}</td>
                    <td className="border px-4 py-2">₹{i.price}</td>
                    <td className="border px-4 py-2">{i.quantity}</td>
                    <td className="border px-4 py-2">{i.category}</td>
                    <td className="border px-4 py-2 space-x-2">
                      <button onClick={() => handleEdit(i.id)} className="text-blue-600 hover:text-blue-800">✏️</button>
                      <button onClick={() => handleDelete(i.id)} className="text-red-600 hover:text-red-800">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Inline Edit Form */}
          {editItem.id && (
            <div className="mt-4 bg-gray-50 p-4 rounded shadow max-w-md">
              <input
                type="text"
                placeholder="Name"
                value={editItem.name}
                onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={editItem.price}
                onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Quantity"
                value={editItem.quantity}
                onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={editItem.category}
                onChange={(e) => setEditItem({ ...editItem, category: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <button onClick={handleUpdate} className="bg-green-700 text-white px-4 py-2 rounded">Update</button>
            </div>
          )}
        </div>
      )}

      {/* =================== Add Item =================== */}
      {selectedMenu === "Add Item" && (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
          <h3 className="text-xl font-semibold mb-4">Add New Item</h3>
          <input
            type="text"
            placeholder="Item Name"
            value={addItem.name}
            onChange={(e) => setAddItem({ ...addItem, name: e.target.value })}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={addItem.price}
            onChange={(e) => setAddItem({ ...addItem, price: e.target.value })}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Quantity"
            value={addItem.quantity}
            onChange={(e) => setAddItem({ ...addItem, quantity: e.target.value })}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={addItem.category}
            onChange={(e) => setAddItem({ ...addItem, category: e.target.value })}
            className="w-full mb-2 p-2 border rounded"
          />
          <button onClick={handleAdd} className="bg-green-700 text-white px-4 py-2 rounded">Add Item</button>
        </div>
      )}
    </div>
  );
};

export default DashboardHero;
