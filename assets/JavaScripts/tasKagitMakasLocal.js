    // TAŞ KAĞIT MAKAS OYUNU.

    if(localStorage.getItem("kullaniciSkoru") === null){
        localStorage.setItem("kullaniciSkoru","0");
    }
    if(localStorage.getItem("bilgisayarSkoru") === null){
        localStorage.setItem("bilgisayarSkoru","0");
    }
    
    function skorYukle() 
    {
    return {
        kullaniciSkor: Number(localStorage.getItem("kullaniciSkoru")) || 0,
        bilgisayarSkor: Number(localStorage.getItem("bilgisayarSkoru")) || 0
    };
}

//sonradan kullanacağız, skor değişiminden
    function yeniSkorKaydet(kullanici, bilgisayar)  
    {
    localStorage.setItem("kullaniciSkoru", kullanici);
    localStorage.setItem("bilgisayarSkoru", bilgisayar);
}


//bilgisayarın seçimini belirliyoruz.
    function bilgisayarSecimYap() 
    {
    const pcSecenekleri = ['Taş', 'Kağıt', 'Makas'];
    return pcSecenekleri[Math.floor(Math.random() * 3)];
}
    function hamleKarsilastir(kullaniciSecimi, bilgisayarSecimi, skor) {
    const k = kullaniciSecimi.toLowerCase();

    if (k === "taş") {
        if (bilgisayarSecimi === "Makas") {
            console.log("Tebrikler! Kazandın!");
            skor.kullaniciSkor++;
        } else if (bilgisayarSecimi === "Kağıt") {
            console.log("Üzgünüm, kaybettin.");
            skor.bilgisayarSkor++;
        } else {
            console.log("Berabere.");
        }
    }

    else if (k === "kağıt") {
        if (bilgisayarSecimi === "Taş") {
            console.log("Tebrikler! Kazandın!");
            skor.kullaniciSkor++;
        } else if (bilgisayarSecimi === "Makas") {
            console.log("Üzgünüm, kaybettin.");
            skor.bilgisayarSkor++;
        } else {
            console.log("Berabere.");
        }
    }

    else if (k === "makas") {
        if (bilgisayarSecimi === "Kağıt") {
            console.log("Tebrikler! Kazandın!");
            skor.kullaniciSkor++;
        } else if (bilgisayarSecimi === "Taş") {
            console.log("Üzgünüm, kaybettin.");
            skor.bilgisayarSkor++;
        } else {
            console.log("Berabere.");
        }
    }

    else {
        console.log("Geçersiz seçim yaptınız.");
    }

    return skor;
}



let skor = skorYukle();

while (true) {
    let kullaniciSecimi = prompt("Taş, Kağıt, Makas seçiniz:");
    let bilgisayarSecimi = bilgisayarSecimYap();

    console.log(`Bilgisayarın seçimi: ${bilgisayarSecimi}`);
    skor = hamleKarsilastir(kullaniciSecimi, bilgisayarSecimi, skor);

    console.log(`Skor\n Sen: ${skor.kullaniciSkor} | Bilgisayar: ${skor.bilgisayarSkor}`);

    yeniSkorKaydet((skor.kullaniciSkor).toString(), (skor.bilgisayarSkor).toString());

    let devam = prompt("Devam etmek istiyor musunuz? (e/h):");
    if (devam.toLocaleLowerCase('tr') === "hayır" || devam.toLocaleLowerCase('tr') === "h" || !devam) {
        console.log("Oyun bitti. Görüşmek üzere!");
        break;
    }
}
