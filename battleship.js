class Battleship {
    
  constructor(ship,koodinatSerang){
        this.shipPosition = [];
        this.koodinatSerang = [];
  }
  generateKoordinatSerang(){
      this.koodinatSerang.push(argv[3]);
  }
  generateShipPosition(){
      this.shipPosition.push("1,5", "2,8", "5,6", "7,4", "9,3");
  }
  cariKoordinat(koor){
         if (koor == "1"){
              var vertikal = 90;
           }
           else if(koor == "2"){
             var vertikal = 80;
           }
          else if(koor == "3"){
             var vertikal = 70;
           }
          else if(koor == "4"){
             var vertikal = 60;
           }
          else if(koor == "5"){
             var vertikal = 50;
           }
          else if(koor == "6"){
             var vertikal = 40;
           }
          else if(koor == "7"){
             var vertikal = 30;
           }
          else if(koor == "8"){
             var vertikal = 20;
           }
          else if(koor == "9"){
             var vertikal = 10;
           }
          else if(koor == "10"){
             var vertikal = 0;
           }

           return vertikal;
  }
  printBoard(){
      var board = []; //Variable hasil akhir board, inisialisasi sebagai laut kosong 
      var laut = 0; // untuk menentukan key dari papan laut = 10 
      
          var serangan = argv[3].split(",");
          var kapalSatu = "1,5".split(",");
          var kapalDua = "2,8".split(",");
          var kapalTiga = "5,6".split(",");
          var kapalEmpat = "7,4".split(",");
          var kapalLima = "9,3".split(",");
          
          var vertikalSerangan = this.cariKoordinat(serangan[0]);
          var vertikalkapalSatu = this.cariKoordinat(kapalSatu[0]);
          var vertikalkapalDua = this.cariKoordinat(kapalDua[0]);
          var vertikalkapalTiga = this.cariKoordinat(kapalTiga[0]);
          var vertikalkapalEmpat = this.cariKoordinat(kapalEmpat[0]);
          var vertikalkapalLima = this.cariKoordinat(kapalLima[0]);


          const koordinat = parseInt(serangan[1]) + parseInt(vertikalSerangan);
          const koordinatKapal1 = parseInt(kapalSatu[1]) + parseInt(vertikalkapalSatu);
          const koordinatKapal2 = parseInt(kapalDua[1]) + parseInt(vertikalkapalDua);
          const koordinatKapal3 = parseInt(kapalTiga[1]) + parseInt(vertikalkapalTiga);
          const koordinatKapal4 = parseInt(kapalEmpat[1]) + parseInt(vertikalkapalEmpat);
          const koordinatKapal5 = parseInt(kapalLima[1]) + parseInt(vertikalkapalLima);


      // membuat baris papan 1-10 
      for (let row = 10; row > 0; row--) { 
        // untuk menentukan key dari setiap key di baris papan 10 
          let baris = 0; 
          let a = (row * 10);
          // membuat laut baru disetiap perulangan dengan menentukan key dari nilai 
          // variable laut

          board[laut] = []; 
          // membuat perulangan  
          for (let n = a - 9; n <= a; n++) { 
              if (koordinat == n )
               board[laut][baris] = "|***|";
              else if (koordinatKapal1 == n)
                 board[laut][baris] = "|<_>|";
               else if (koordinatKapal2 == n)
                 board[laut][baris] = "|<_>|";
               else if (koordinatKapal3 == n)
                 board[laut][baris] = "|<_>|";
               else if (koordinatKapal4 == n)
                 board[laut][baris] = "|<_>|";
               else if (koordinatKapal5 == n)
                 board[laut][baris] = "|<_>|";
               else
               board[laut][baris] = "|___|";        
               
            baris++; 
          } 
        // print setiap baris papan 
        console.log(board[laut].join("")); 
        laut++; 
      }
  }
  printKeterangan (){
    console.log('Keterangan: <_> adalah kapal , |___| adalah laut kosong, |***| adalah serangan kapal')   
  }
}

var argv = process.argv;
var battle = new Battleship(argv[2],argv[3]);
battle.printBoard();
battle.printKeterangan();
battle.generateShipPosition();
battle.generateKoordinatSerang();
console.log("Posisi Kapal: ",battle.shipPosition);
console.log("Koordinat Serang: ",battle.koodinatSerang);

/* Tampilan : Silakan ubah serangan anda ,terima kasih
|___||___||___||___||<_>||___||___||___||___||___|
|___||___||___||___||___||___||___||<_>||___||___|
|___||___||___||___||___||___||___||___||___||___|
|___||___||___||___||___||***||___||___||___||___|
|___||___||___||___||___||<_>||___||___||___||___|
|___||___||___||___||___||___||___||___||___||___|
|___||___||___||<_>||___||___||___||___||___||___|
|___||___||___||___||___||___||___||___||___||___|
|___||___||<_>||___||___||___||___||___||___||___|
|___||___||___||___||___||___||___||___||___||___|
Keterangan: <_> adalah kapal , |___| adalah laut kosong, |<*>| adalah kapal yang kena serang, |***| adalah serangan meleset
Posisi Kapal:  [ '1,5', '2,8', '5,6', '7,4', '9,3' ]
Koordinat Serang:  [ '4,6' ]
*/
