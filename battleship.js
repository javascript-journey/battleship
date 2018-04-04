class Battleship {
  constructor(kapal,koordinatSerang){

    this.kapal = kapal
    this.posisiKapal = this.posisiKapal();
    this.koordinatSerang = this.targetSerang(koordinatSerang);
  }

  targetSerang(koordinat){
    var targetSerang = [];
    var target = koordinat.split(" ");
    for(var i = 0; i < target.length; i++){
      targetSerang.push(target[i]);
    }
    return targetSerang;
  }

  targetSekarang(vertikal,horizontal){
    if(`${vertikal},${horizontal}` === this.koordinatSerang[0]) return true; 
    return false;
  }

  posisiKapal(){

    var letakKapal = [];

    for (var i = 0; i < this.kapal; i++) {
      var angkaAcakVertical = Math.floor((Math.random() * 10) + 1);
      var angkaAcakHorizontal = Math.floor((Math.random() * 10) + 1);
      var angkaAcak = `${angkaAcakVertical},${angkaAcakHorizontal}`;
      letakKapal.push(angkaAcak);
    }

    return letakKapal;

  }

  posisiKapalSekarang(vertikal,horizontal){
    for(var i = 0; i < this.posisiKapal.length; i++){
      if(`${vertikal},${horizontal}` === this.posisiKapal[i]) return true; 
    }
    return false;
  }

  laut(){

    var luasLaut = [];
    var lautH = [];
    var laut = "";

    for (var i = 1; i <= 10; i++) {

      for (var j = 1; j <= 10; j++) {

        if (this.posisiKapalSekarang(i, j)) {
          lautH.push("<|_/");
        }else if(this.koordinatSerang[0] === `${i},${j}`){
          lautH.push("[xx]")
        }else if(this.targetSekarang(i, j) && this.posisiKapalSekarang(i, j)){
          lautH.push("<|x/")
        }
        else{
          lautH.push("~~~~");
        }

      }

      luasLaut.push(lautH)
      lautH = [];
      
    }

    for(var j = 0; j < luasLaut.length; j++ ){
      laut = luasLaut[j].join();
      console.log(laut);
    }

  }

  printKapalTenggelam(){

  }
  
  printKeterangan (){
    console.log('Keterangan: <|_/ adalah kapal , ~~~ adalah laut kosong, <|x/ adalah kapal yang kena serang, [xx] adalah serangan meleset')   
  }
}

var argv = process.argv;
var battle = new Battleship(argv[2],argv[3]);

console.log("                BATTLESHIP - GAME")
console.log()
battle.laut()
console.log()
battle.printKeterangan();
console.log("Posisi Kapal: ",battle.posisiKapal);
console.log("Koordinat Serang: ",battle.koordinatSerang);