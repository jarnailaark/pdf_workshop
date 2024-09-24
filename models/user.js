import { model, Schema, models } from "mongoose";

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: [true, 'Email Already Exist!'],
        required: [true, 'Email is Required!']
    },
    username: {
        type: String,
        required: [true, 'UserName is Required!'],
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
})

const User = models.User || model("User", UserSchema);

export default User;