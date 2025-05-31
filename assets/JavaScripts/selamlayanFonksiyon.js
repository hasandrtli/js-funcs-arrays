let isimKaydet = () => {
    let isim = prompt("Lütfen isminizi giriniz:");
    if (isim) {
        let yeniAnahtar = "user" + localStorage.length;
        localStorage.setItem(yeniAnahtar, isim);
    }
};

let selamla = () => {
    if (null) {
        console.log("Geçerli bir isim giriniz.");
    } else {
        let sonAnahtar = "user" + (localStorage.length - 1);
        let isim = localStorage.getItem(sonAnahtar);
        console.log(`Selam sana ey ${isim}`);
    }
};

let storagedekiIsimler = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let anahtar = "user" + i;
        let deger = localStorage.getItem(anahtar);
        console.log(`${i + 1}. kullanıcı: ${deger}`);
    }
};

isimKaydet();
selamla();
storagedekiIsimler();
