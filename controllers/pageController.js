const getLoginPage = (req,res) => {
    res.render("giris_tercihi");
};

const getAddLessonPage = (req,res) => {
    res.render("dersEkle");
}

export {getLoginPage, getAddLessonPage}