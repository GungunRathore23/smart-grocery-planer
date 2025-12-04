const bcrypt = require("bcryptjs");
const Seller = require("../models/sellerModel");

// STEP 1: Check if email exists
// exports.checkEmailExists = async (req, res) => {
//   try {
//     const { email } = req.body;

//     if (!email) return res.status(400).json({ message: "Email required" });

//     const existing = await Seller.findOne({ email });

//     if (existing) {
//       return res.json({ exists: true });
//     }

//     res.json({ exists: false });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

exports.registerSeller = async (req, res) => {
  try {
    const { businessName, ownerName, email, password, phone, gst } = req.body;

    // 1️⃣ Validate required fields
    if (!businessName || !ownerName || !email || !password) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    // 2️⃣ Check if email already exists
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 3️⃣ Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4️⃣ Create new seller
    const newSeller = await Seller.create({
      businessName,
      ownerName,
      email,
      password: hashedPassword,
      phone,
      gst,
    });

    // 5️⃣ Send success response
    return res.status(201).json({
      message: "Seller registered successfully",
      seller: {
        id: newSeller._id,
        businessName: newSeller.businessName,
        ownerName: newSeller.ownerName,
        email: newSeller.email,
        phone: newSeller.phone,
        gst: newSeller.gst,
        createdAt: newSeller.createdAt,
      },
    });
  } catch (error) {
    console.error("Seller registration error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

