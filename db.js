import mongoose, { connect } from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName : "Mudek"
    }).then(() => {console.log("Connected to the DB  successfully")})
    .catch((err) => {
        console.log(`DB connection error: ${err}`)
    });
};

export default conn;