import mongoose from "mongoose";

// Timestamps seçeneği ile kullanıcı şeması tanımlanıyor
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["minister", "mudekAuditor", "academician"],
        required: true,
    }
}, { timestamps: true }); // timestamps seçeneği şema tanımının bir parçası olarak ekleniyor

// Kullanıcı modeli oluşturuluyor
const User = mongoose.model("User", userSchema);

// Tek bir kullanıcı oluşturma veya güncelleme fonksiyonu
const createSingleUser = async () => {
    const userData = {
        email: 'erdem@example.com',
        password: 'pas123',
        role: 'academician' // Rol bilgisi ekleniyor
    };

    try {
        let user = await User.findOne({ email: userData.email });
        if (user) {
            // Kullanıcı mevcutsa güncelle
            user.password = userData.password;
            user.role = userData.role; // Gerekirse rol de güncelleniyor
            await user.save();
            console.log('User updated:', user);
        } else {
            // Kullanıcı yoksa oluştur
            const newUser = new User(userData);
            user = await newUser.save();
            console.log('New user created:', user);
        }
    } catch (err) {
        console.error('User creation/update error:', err);
        throw err;
    }
};

export default User;
export { createSingleUser };
