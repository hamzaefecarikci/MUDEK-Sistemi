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

const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");
const p5 = document.querySelector(".p5");
const p6 = document.querySelector(".p6");
const p7 = document.querySelector(".p7");
const p8 = document.querySelector(".p8");
const p9 = document.querySelector(".p9");
const p10 = document.querySelector(".p10");
const p11 = document.querySelector(".p11");
const p12 = document.querySelector(".p12");

const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const modalContent = document.querySelector(".modal .modal-content");

modalContent.innerHTML = "";

// Modalı açma işlevi
p1.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Matematik, fen bilimleri, mühendislik alanlarında bilgi kullanımı</td>
              <td>Matematik, fen bilimleri ve ilgili mühendislik disiplinine özgü konularda yeterli bilgi birikimi;
                bu alanlardaki kuramsal ve uygulamalı bilgileri, karmaşık mühendislik problemlerinin çözümünde kullanabilme becerisi.</td>
            </tr>

        </table>
    `;
});

p2.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Formüle etme, modelleme, çözme</td>
              <td>Karmaşık mühendislik problemlerini tanımlama, formüle etme ve çözme becerisi; bu amaçla uygun analiz ve modelleme yöntemlerini seçme ve uygulama becerisi.</td>
            </tr>

        </table>
    `;
});

p3.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Süreç ve sistemleri analiz etme, tasarlama</td>
              <td>Karmaşık bir sistemi, süreci, cihazı veya ürünü gerçekçi kısıtlar ve koşullar altında, belirli gereksinimleri karşılayacak şekilde tasarlama becerisi; bu amaçla modern tasarım yöntemlerini uygulama becerisi.</td>
            </tr>

        </table>
    `;
});

p4.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Bilgi teknolojileri kullanımı</td>
              <td>Mühendislik uygulamalarında karşılaşılan karmaşık problemlerin analizi ve çözümü için gerekli olan modern teknik ve araçları seçme ve kullanma becerisi; bilişim teknolojilerini etkin bir şekilde kullanma becerisi.</td>
            </tr>

        </table>
    `;
});

p5.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Deney tasarımı, analizi, sonuçlandırılması veve yorumlama</td>
              <td>Karmaşık mühendislik problemlerinin veya disipline özgü araştırma konularının incelenmesi için deney tasarlama, deney yapma, veri toplama, sonuçları analiz etme ve yorumlama becerisi.</td>
            </tr>

        </table>
    `;
});

p6.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Bireysel ve takım içi çalışma</td>
              <td>Disiplin içi ve çok disiplinli takımlarda etkin biçimde çalışabilme becerisi; bireysel çalışma becerisi.</td>
            </tr>

        </table>
    `;
});

p7.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Sözlü ve yazılı iletişim</td>
              <td>Sözlü ve yazılı etkin iletişim kurma becerisi; en az bir yabancı dil bilgisi; etkin rapor yazma ve yazılı raporları anlama, tasarım ve üretim raporları hazırlayabilme, etkin sunum yapabilme, açık ve anlaşılır talimat verme ve alma becerisi.</td>
            </tr>

        </table>
    `;
});

p8.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Yaşam boyu öğrenme farkındalığı</td>
              <td>Yaşam boyu öğrenmenin gerekliliği konusunda farkındalık; bilgiye erişebilme, bilim ve teknolojideki gelişmeleri izleme ve kendini sürekli yenileme becerisi.</td>
            </tr>

        </table>
    `;
});

p9.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Etik farkındalığı</td>
              <td>Etik ilkelerine uygun davranma, mesleki ve etik sorumluluk ve mühendislik uygulamalarında kullanılan standartlar hakkında bilgi.</td>
            </tr>

        </table>
    `;
});

p10.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>İş hayatı, yenilikçilik ve sürdürülebilirlik hakkında farkındalık</td>
              <td>Proje yönetimi, risk yönetimi ve değişiklik yönetimi gibi, iş hayatındaki uygulamalar hakkında bilgi; girişimcilik, yenilikçilik hakkında farkındalık; sürdürülebilir kalkınma hakkında bilgi.</td>
            </tr>

        </table>
    `;
});

p11.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Sağlık, çevre, güvenlik, ve hukuksal sonuçları hakkında farkındalık</td>
              <td>Mühendislik uygulamalarının evrensel ve toplumsal boyutlarda sağlık, çevre ve güvenlik üzerindeki etkileri ve çağın mühendislik alanına yansıyan sorunları hakkında bilgi; mühendislik çözümlerinin hukuksal sonuçları konusunda farkındalık.</td>
            </tr>

        </table>
    `;
});

p12.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = 
    `
        <table class="table">
            <tr>
              <th>Anahtar Kelimeler</th>
              <th>Tanım</th>
            </tr>
  
            <tr>
              <td>Kodlama, doğrulama, sınama</td>
              <td> Kodlama, doğrulama, sınama ve hata ayıklama konularını da içerecek şekilde karmaşık yazılım sistemleri geliştirebilmek.</td>
            </tr>

        </table>
    `;
});


// Modalı kapatma işlevi
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.innerHTML = ``;
});

// Modal dışında tıklanırsa modalı kapatma
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});