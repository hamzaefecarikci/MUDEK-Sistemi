const getLoginPage = (req,res) => {
    res.render("giris_tercihi",{
        link: 'giris_tercihi'
    });
};

const getAddLessonPage = (req,res) => {
    res.render("dersEkle",{
        link: 'dersEkle'
    });
}

export {getLoginPage, getAddLessonPage}