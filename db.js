import mongoose from "mongoose";
import User, {createSingleUser} from "./models/userModel.js";

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName : "Mudek"
    })
    .then(() => {
        console.log("Connected to the DB  successfully");
        createSingleUser(); 
    })
    .catch((err) => {
        console.log(`DB connection error: ${err}`)
    });
};

export default conn;