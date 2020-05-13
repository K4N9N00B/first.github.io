function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s ;
    
  
  
  
    document.getElementById("dafaprasetya").innerText = time;
    document.getElementById("dafaprasetya").textContent = time;
  }
  
  setInterval(showTime, 1000);
  showTime();

  function pm(){
      date = new Date();
      h = date.getHours();
      waktu = "AM";
      if(h > 12){
        h = h - 12;
        waktu = "PM";
    }
    var naon = waktu;

    document.getElementById('pm').innerText = naon;
    document.getElementById('pm').textContent = naon;
  }
  pm();

  function ingat(){
    date = new Date();
    jam = date.getHours()
    waktu = "malam cintaqu"
  
    if(jam == 0){
      waktu = "Tidur udah malam"
    }
    if(jam > 3){
      waktu = "SAHOOOOOOOR"
    }
    if(jam == 4){
      waktu = "salat subuh"
    }
    if(jam > 5){
      waktu = "PAGI CANTIQ"
    }
    if(jam > 8){
      waktu = "jangan lupa mandi"
    }
    if(jam > 9){
      waktu = "menjelang siang cintaqu"
    }
    if(jam > 11){
      waktu = "SIANG beb"
    }
    if(jam > 15){
      waktu = "SEKARANG MENJELANG SORE YA?"
    }
    if(jam == 16){
      waktu = "SOREEE Beb"
    }
    if(jam == 17){
      waktu = "SOREE"
    }
    if(jam == 18){
      waktu = "MAGRIBB?"
    }
    if(jam > 19){
      waktu = "MALAM CINTUUU"
    }
    if(jam > 22){
      waktu = "BELUM TIDUR?, PASTI LAGI MIKIIRIN AKU"
    }
  
  
    var oon = waktu
    document.getElementById("pengingat").innerText = oon;
    document.getElementById("pengingat").textContent = oon;
  }
  ingat();


  var c = 0;
  function clik(){
    if(c == 0){
    document.getElementById('bok').style.display = "block"
    c = 1
    }
    else{
      document.getElementById('bok').style.display = "none"
      c = 0
    }
  }
  function musik(){
    if(c == 0){
    document.getElementById('musik').style.display = "block"
    c = 1
    }
    else{
      document.getElementById('musik').style.display = "none"
      c = 0
    }
  }



  const quotes = [
    {
      "quote": "Iri Bilang BOSS",
      "source": "#editorberkelas"
    },
    {
      "quote": "Puas kalian hina Idol kami?",
      "source": "Fans BaTueS"
    },
    {
      "quote": "No System Is Safe",
      "source": "Onanymus"
    },
    {
      "quote": "Bila kau lihat kekiri maka kau akan melewatkan yang kanan",
      "source": "Patrick star"
    },
    {
      "quote": "Kalau motor Gw berisik emang ngapa?",
      "source": "Kang Mberrr"
    },
  ]
  
  function randomQuote(){
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quotation.innerText = `"${random.quote}"`;
    source.innerText = random.source;
  }
  
  setInterval(randomQuote, 2000);
  