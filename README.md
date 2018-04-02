# battleship


Buatlah game battle yang dijalankan melalui terminal.

[Image Battleship](http://prntscr.com/izp9ll)


## Skeleton Code 


```javascript

class Battleship {
  constructor(ship,koodinatSerang){

  }
  generateKoordinatSerang(koordinat){

  }
  generateShipPosition(){

  }
  rollPosition() {
    
  }
  genereateBoard(){
 
  }
  isSerangPosition(barisKe,kolomKe){

  }
  isShipPosition(barisKe,kolomKe){
    
  }
  printBoard(){
   
  }
  printKapalTenggelam(){
   
  }
  printKeterangan (){
    console.log('Keterangan: <_> adalah kapal , |___| adalah laut kosong, |<*>| adalah kapal yang kena serang, |***| adalah serangan meleset')   
  }
}

var argv = process.argv;
var battle = new Battleship(argv[2],argv[3]);
battle.printBoard();
battle.printKeterangan();
console.log("Posisi Kapal: ",battle.shipPosition);
console.log("Koordinat Serang: ",battle.koodinatSerang);

```

Cara main nya kita tentukan berapa kapal yang ada di board dan kita tentukan koordinat serang yang akan kita lakukan. 

```
$ node battleship.js 5 4,6
```

Artinya di board akan ada 5 kapal dan kita serang di koordinat 4 vertikal dan 6 horizontal
