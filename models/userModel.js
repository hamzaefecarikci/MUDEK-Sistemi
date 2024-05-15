import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

const User = mongoose.model("User", userSchema);

const createSingleUser = async () => {
    const userData = {
        email: 'erdem@example.com',
        password: 'pas123'
    };

    try {
        let user = await User.findOne({ email: userData.email });
        if (user) {
            // Kullanıcı mevcutsa güncelle
            user.password = userData.password;
            await user.save();
            console.log('Kullanıcı güncellendi:', user);
        } else {
            // Kullanıcı yoksa oluştur
            const newUser = new User(userData);
            user = await newUser.save();
            console.log('Yeni kullanıcı oluşturuldu:', user);
        }
    } catch (err) {
        console.error('Kullanıcı oluşturma/güncelleme hatası:', err);
        throw err;
    }
};

export default User;
export { createSingleUser };