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
      waktu = "NIGHT"
    }
    if(jam > 22){
      waktu = "Molor sia ajg"
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
    document.getElementById('themeSwitch').style.display =  "block"
    c = 1
    }
    else{
      document.getElementById('bok').style.display = "none"
      document.getElementById('themeSwitch').style.display = "none"
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
  function gantitema(){
    if(c == 0){
    document.getElementById('tema').style.display =  "block"
    c = 1
    }
    else{
      document.getElementById('tema').style.display = "none"
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
  

  function saran(){
    var search = document.getElementById("saran").value;
    var url = "https://api.whatsapp.com/send?phone=6281574999858&text="+search
    if(search==""){
        alert("isi dulu tong")
        document.getElementById('link')
    }
    else{
        window.location.href = url;
    }
}
function sarantutup(){
  if(c == 0){
  document.getElementById('saranbox').style.display = "block"
  c = 1
  }
  else{
    document.getElementById('saranbox').style.display = "none"
    c = 0
  }
}
function makelink(){
  var search = document.getElementById("cari").value;
  var url = "https://www.google.com/search?q="+search
  var youtube = "https://youtube.com"
  var facebook = "https://facebook.com"
  var instagram = "https://instagram.com"
  var nekopoi = "https://nekopoi.care"
  var github = "https://github.com"
  var terjemah = "https://translate.google.com/"
  var home = "index.html"
  if(search==""){
      alert("isi dulu tong")
      document.getElementById('link')
  }
  else if(search=="youtube"){
      window.location.href = youtube;
  }
  else if(search=="terjemah"){
    window.location.href = terjemah;
  }
  else if(search=="translate"){
    window.location.href = terjemah;
  }
  else if(search=="nekopoi"){
    alert('sebaiknya anda memakai VPN')
    window.location.href = nekopoi
  }
  else if(search=="musik"){
    document.getElementById('musik').style.display = "block"
  }
  else if(search=="facebook"){
      window.location.href = facebook;
  }
  else if(search=="dafa"){
      window.location.href = "https://www.facebook.com/dafa.prasetya.31?ref=bookmarks";
  }
  else if(search=="instagram"){
      window.location.href = instagram;
  }
  else if(search=="github"){
    window.location.href = github;
  }
  else if(search=="kontol"){
    alert("kasar lu, KELUAR!")
    window.location.href = home;
  }
  else if(search=="ganti"){
    document.getElementById('tema').style.display =  "none"
  }
  else if(search=="ganti "){
    document.getElementById('tema').style.display =  "block"
  }
  else if(search=="fitur"){
    document.getElementById('bok').style.display =  "block"
  }
  else if(search=="saran"){
    document.getElementById('saranbox').style.display =  "block"
  }
  else{
      window.location.href = url;
  }
}