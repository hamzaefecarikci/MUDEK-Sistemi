const btnDersEkle = document.querySelector("#btnDersEkle").addEventListener("click",DERSEKLE);

function DERSEKLE()
{
    let dersKontrol = document.querySelector(".form-floating .dersSecim").value;

    if(dersKontrol == "select")
    {
        alert("Lütfen Ders Seçiniz!");
    }

    else
    {
        document.querySelector("#seciliDers").value = dersKontrol;
    }
}


const btnDevam = document.querySelector(".btnDevam").addEventListener("click",DEVAM);

function DEVAM(event)
{
    document.querySelector(".lesson-box").classList.add("hidden");
    document.querySelector(".degerlendirme").classList.remove("hidden");
    window.scrollTo(0, 0);
    
    event.preventDefault();
}

const btnDegerlendirme = document.querySelector(".degelendirme .btn").addEventListener("click",GOSTER);

function GOSTER()
{
    
}