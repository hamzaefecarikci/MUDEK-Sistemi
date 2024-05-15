import mongoose from "mongoose";

const { Schema} = mongoose;

const denetimciSchema = new Schema({
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

const Denetimci = mongoose.model("Denetimci", denetimciSchema);

const createDenetimci = async () => {
    const denetimciData = {
        email: 'batuhan@example.com',
        password: 'pas123'
    };

    try {
        let denetimci = await Denetimci.findOne({ email: denetimciData.email });
        if (denetimci) {
            // Kullanıcı mevcutsa güncelle
            denetimci.password = denetimciData.password;
            await denetimci.save();
            console.log('Kullanıcı güncellendi:', denetimci);
        } else {
            // Kullanıcı yoksa oluştur
            const newdenetimci = new Denetimci(denetimciData);
            denetimci = await newdenetimci.save();
            console.log('Yeni kullanıcı oluşturuldu:', denetimci);
        }
    } catch (err) {
        console.error('Kullanıcı oluşturma/güncelleme hatası:', err);
        throw err;
    }
};

export default Denetimci;
export {createDenetimci};