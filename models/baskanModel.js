import mongoose from "mongoose";

const { Schema} = mongoose;

const baskanSchema = new Schema({
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

const Baskan = mongoose.model("Baskan", baskanSchema);

const createBaskan = async () => {
    const baskanData = {
        email: 'fatih@example.com',
        password: 'pas123'
    };

    try {
        let baskan = await Baskan.findOne({ email: baskanData.email });
        if (baskan) {
            // Kullanıcı mevcutsa güncelle
            baskan.password = baskanData.password;
            await baskan.save();
            console.log('Kullanıcı güncellendi:', baskan);
        } else {
            // Kullanıcı yoksa oluştur
            const newbaskan = new Baskan(baskanData);
            baskan = await newbaskan.save();
            console.log('Yeni kullanıcı oluşturuldu:', baskan);
        }
    } catch (err) {
        console.error('Kullanıcı oluşturma/güncelleme hatası:', err);
        throw err;
    }
};

export default Baskan;
export {createBaskan};