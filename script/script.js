const btnDevam = document.querySelector(".btnDevam").addEventListener("click",DEVAM);

function DEVAM(event)
{
    document.querySelector(".lesson-box").classList.remove("active");
    document.querySelector(".tablo-box").classList.add("active");
    window.scrollTo(0, 0);
    
    event.preventDefault();
}