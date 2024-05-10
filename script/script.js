let ogrenmeCiktisi = [
    
];

displayTask();


function displayTask()
{
    let ol = document.getElementById("task-list");
    ol.innerHTML = "";

    for(let ogrenme of ogrenmeCiktisi)
        {
            let li = `<li class="list-group-item">${ogrenme.gorevAdi}</li>
            `;

            ol.insertAdjacentHTML("beforeend", li);
        }
}

    document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
    document.querySelector("#btnAddNewTask").addEventListener("keypress", function(event){
        if(event.key == "Enter")
        {
            document.getElementById("btnAddNewTask").click();
        }
    });

function newTask(event)
{
    let taskInput = document.querySelector("#textTaskName");

    if(taskInput.value == "")
    {
        alert("Öğrenme Çıktısı giriniz");
    }

    else
    {
        ogrenmeCiktisi.push({"id": ogrenmeCiktisi.length+1, "gorevAdi": taskInput.value});
        taskInput.value = "";
        displayTask();
    }

    event.preventDefault();
    
}

document.querySelector("#btnDersEkle").addEventListener("click",addLesson);

function addLesson()
{
    let dersValue = document.querySelector("#floatingSelectDers").value;
    if(dersValue == "select")
    {
        alert("Lütfen Ders Seçimi Yapınız")
    }
    
    else
    {
        document.querySelector("#seciliDers").value = dersValue;
    }
}