// deklarasi //
let namaPembeli = "Adam";
let totalBelanja = 850000;
let presentaseDiskon = 0.10;

// proses //
if(totalBelanja >= 100000){
 presentaseDiskon = 0.10;
 console.log("Selamat! Anda mendapatkan diskon sebesar 10%")
}else if(totalBelanja >= 50000){
    presentaseDiskon = 0.05;
    console.log("selamat! anda mendapatkan diskon sebesar 5%")
}else{
    presentaseDiskon = 0;
 console.log("maaf anda tidak mendapatkan diskon")
}

// kalkulasi // 
let nominalDiskon = totalBelanja * presentaseDiskon;
let totalBayar = totalBelanja - nominalDiskon;

// output //
console.log("-----------------------");
console.log("namaPembeli  = " + namaPembeli)
console.log("totalBelanja = Rp. "+ totalBelanja);
console.log("totalBayar   = Rp." + totalBayar);
console.log("diskon       = Rp." + nominalDiskon);