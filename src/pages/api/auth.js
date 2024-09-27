import dbConnect from "../../../utils/databasemongo";
import User from '../../../models/user';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const { fullname, email, password } = req.body;
    console.log(fullname, email, password);
    // Input validation
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password before saving
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = new User({
        username: fullname,
        email: email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  } else {
    return res.status(405).json({ error: `Method ${method} not allowed` });
  }

}
