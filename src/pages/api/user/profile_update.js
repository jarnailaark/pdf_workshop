
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '@/models/user';
import dbConnect from "@/utils/databasemongo";


export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { user_id, email, username } = req.body;
    
    try {
      const user = await User.findOne({ _id : user_id });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const newUser = new User({
        username: username,
        email: email,
      });
      await newUser.save();
      

      res.status(200).json({ success: true, newUser });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
