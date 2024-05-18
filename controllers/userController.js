import User from '../models/userModel.js';

const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const selectedRole = req.body.role; // Kullanıcının seçtiği rolü alın

    try {
        const user = await User.findOne({ email: email, password: password });

        if (user) {
            // Kullanıcının mevcut rolü
            const currentUserRole = user.role;

            // Kullanıcının seçtiği rol ile mevcut rolü karşılaştır
            if (selectedRole !== currentUserRole) {
                // Yanlış rol seçildiğinde uygun mesajı gönder
                res.send('Yanlış rol seçtiniz');
                return; // Fonksiyondan çık
            }

            // Doğru rol seçildiği durumda, rol bazında yönlendirme yap
            switch (user.role) {
                case 'academician':
                    res.redirect('/dersEkle');
                    break;
                case 'mudekAuditor':
                    res.redirect('/denetim');
                    break;
                case 'minister':
                    res.redirect('/yonetim');
                    break;
                default:
                    res.send('Rol bulunamadı');
            }
        } else {
            res.send('Geçersiz kullanıcı adı veya şifre');
        }
    } catch (error) {
        res.status(500).send('Bir hata oluştu');
    }
};

export { loginUser };
