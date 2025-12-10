import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://deliveryApp:jlEec8icea9LBwkq@cluster0.5hm6qwz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}