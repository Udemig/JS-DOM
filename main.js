"use strict"

function Kisi(ad, soyad, yas){
    this.isim = ad
    this.soyad = soyad
    this.yas = yas
    this.yemekYe = function(){
        document.write("kisi yemek yiyiyor" + "</br>")

    }
}


var mehmetKisisi = new Kisi('memo','seyhan', 25)
var ahmetKisisi = new Kisi('ahmet', 'isvecli', 20)

Kisi.prototype.renk = "siyah"
Kisi.prototype.konus = function(){
    document.write("mehmet konusuyor"+ "</br>")

}

document.write("kisi renk: " + mehmetKisisi.renk+ "</br>")
mehmetKisisi.konus()
mehmetKisisi.yemekYe()



function Hayvan(ad){
    this.ad = ad
    this.renk = ["siyah","beyaz"]
    this.uzunluk = 2
    this.beslenme = function(){
        document.write("Hayvan besleniyor"+ "</br>")
    }
}

Hayvan.prototype.tuylu = true;

function Kedi(ad,uzunluk){
    Hayvan.call(this, ad)
    this.uzunluk = uzunluk
  
}


var kedi = new Kedi("tekir", 1)
kedi.beslenme()

document.write("kedi uzunluk: " + kedi.uzunluk+ "</br>")
document.write("kedi ad: " + kedi.ad+ "</br>")
document.write("kedi tuylu: " + kedi.tuylu+ "</br>")

function Hesaplama(x,y){
    this._x = x // private
    this._y = y
    this.getX = function(){ return this._x}
    this.setX = function(x){ this._x = x}
    this.getY = function(){ return this._y}
    this.setY = function(y){ this._y = y}
}

var hesapla = new Hesaplama(10,20)
hesapla.setX(30)
document.write("hesapla x: " + hesapla.getX()+ "</br>")

Object.defineProperty(window, "sabit",{
    value: 3.21
})

var sabitler = {
    uzunluk: 2,
    genislik: 4
}

Object.freeze(sabitler)

document.write("sabit : " + window.sabit+ "</br>")
document.write("uzunluk : " + sabitler.uzunluk+ "</br>")

var sabitcik = (function() {
    var sabitler1 = {
        uzunluk: 2,
        genislik: 4
    }

    return{
        get: function(ad){ return sabitler1[ad]}
    }
})()


document.write("sabitler1 uzunluk : " + sabitcik.get('uzunluk')+ "</br>")

var ozelBilgi = {
    _ad: "" // private
}

Object.defineProperty(ozelBilgi, "ADI",{
    get: function(){
        return "kisinin adi: " + this.ad
    },
    set: function(yeniDeger){
        this.ad = yeniDeger
    }
})

ozelBilgi.ADI = "memocan"

document.write( ozelBilgi.ADI + "</br>")

var gizliTanik = {
    _ad: "",
    _yas: 0
}

Object.defineProperties(gizliTanik,{
    "ADI":{
        get: function(){
            return "gizli tanik adi: " + this.ad
        },
        set: function(yeniDeger){
            this.ad = yeniDeger
        }
    },
    "YASI":{
        get: function(){
            return this._yas + " yasindayim"
        },
        set: function(yeniDeger){
            this._yas = yeniDeger
        }
    }
})

gizliTanik.ADI = "can"

document.write(gizliTanik.ADI + "</br>")


function HesapMakinasi(sayi){
    this._sonuc = sayi;
}

HesapMakinasi.prototype = {
    Toplama: function(sayi){
        this._sonuc += sayi
        return this
    },
    Cikarma: function(sayi){
        this._sonuc -= sayi
        return this
    },
    Carpma: function(sayi){
        this._sonuc *= sayi
        return this
    },
    Bolme: function(sayi){
        this._sonuc /= sayi
        return this
    },
    Goster: function(){
        document.write("sonuc: " + this._sonuc + "</br>")
        return this
    }
}

var hesap = new HesapMakinasi(2)
hesap.Toplama(3)

// DOM id ye gore
var h1Nesne = document.getElementById('test')
h1Nesne.innerHTML = "<i>Degisecek</i>"
h1Nesne.style.border = "5px solid blue"
h1Nesne.classList.add('kutumm')

function sinifiKaldir(){
    if (h1Nesne.classList.contains('kutumm')) {
        h1Nesne.classList.remove('kutumm')
    } else {
        h1Nesne.classList.add('kutumm')
    }
}

//test.innerHTML = "direk degisim" name e gore
var pNesne = document.getElementsByName("yazar")
console.log(pNesne)

// tag name gore
var plerNesnesi = document.getElementsByTagName('p')
console.log(plerNesnesi)


//class gore
var pSinifNesne = document.getElementsByClassName('kutu-p')
console.log(pSinifNesne)


// selector de her durum yakalanir
var pSinifSelctore = document.querySelector(".kutu-p")
console.log(pSinifSelctore)

var pSinifTumSelector = document.querySelectorAll('.kutu-p')
console.log(pSinifTumSelector)


var secim = document.getElementById('ders1')
secim.checked = true
secim.disabled = "disabled"

pSinifTumSelector.forEach(function(nesnemiz){
    nesnemiz.setAttribute("class", "ozel-alan")
})

//olusturma, ekleme silme
var takimList = document.getElementById('takim')

var fbTakim = document.createElement("option")
fbTakim.setAttribute("value", "2")
fbTakim.innerHTML = "Fenerbahce"

takimList.appendChild(fbTakim)

var birinciNesne = document.getElementById('birinci')

//  2. olay dinleme yontemi
birinciNesne.onclick = function(){
    birinciNesne.innerHTML = "hey bana tikladin"
}

ol.before('before')
ol.after('after')

let prependLi = document.createElement('li')
prependLi.innerHTML = "-1"
ol.prepend(prependLi)

let divNesne = document.getElementById('div')
divNesne.insertAdjacentHTML('beforebegin', '<p> ben p yeniyim</p>')
divNesne.insertAdjacentHTML('afterend', '<p> ben p sondanim</p>')

let anaDivNesne = document.getElementById('anaDiv')

let kopya2 = anaDivNesne.cloneNode(true)
kopya2.querySelector('strong').innerHTML = "orasi";

anaDivNesne.after(kopya2)

//olay dinleyici 3. yol
kopya2.addEventListener('click',function(){
    kopya2.remove()
    
})

anaDivNesne.addEventListener('mouseover', function(){
    kopya2.style.backgroundColor = "red"
})

anaDivNesne.addEventListener('mouseout', function(){
    kopya2.style.backgroundColor = "yellow"
})

