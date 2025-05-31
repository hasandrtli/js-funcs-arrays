let isler = JSON.parse(localStorage.getItem("isler")) || [];
function isleriAl(){
    let isSayisi = Number(prompt('Lütfen girilecek iş sayısını belirtiniz:'));
    for (let i = 0; i < isSayisi; i++){
        let isAdi = prompt(`lütfen ${i + 1}. gireceğiniz işi giriniz:`);
        isler.push({siraNo: i+1, isAdi:isAdi});
    }
}

function isleriGoster(){
    console.log(`Yapılacak işler:`);
    for (let i = 0; i < isler.length; i++){
        console.log(`${isler[i].siraNo}. ${isler[i].isAdi}\n`);
    }
    localStorage.setItem("isler",JSON.stringify(isler));
}




// main
isleriAl();
isleriGoster();