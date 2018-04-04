class Battleship {
	constructor(ship,koordinatSerang){
		this.shipPosition = []
		this.jumlahKapal = ship
		this.koordinatSerang = [koordinatSerang]
		this.board = ""
	}

  // hasil posisi kapal
  generateShipPosition(){
  	for (var i = this.jumlahKapal - 1; i >= 0 ; i--) {

  		let baris = Math.floor(Math.random() * 10) + 1
  		let kolom = Math.floor(Math.random() * 10) + 1
  		let posisiKapal = baris +","+ kolom
  		this.shipPosition.push(posisiKapal)
  	}
  	return this.shipPosition
  }

  // hasil posisi serang
  isSerangPosition(barisKe,kolomKe){
  	let posisiSerang = barisKe+","+kolomKe
  	return this.koordinatSerang.indexOf(posisiSerang)
  }

  // posisi kapal
  isShipPosition(barisKe,kolomKe){
  	let posisiKapal = barisKe+","+kolomKe
  	return this.shipPosition.indexOf(posisiKapal)
  }

  // Serangan meleset
  isSeranganMeleset(barisKe,kolomKe){
  	if (barisKe == this.koordinatSerang[0][0] && kolomKe == this.koordinatSerang[0][2]) {
  		return 1
  	}else{
  		return 0
  	}

  }

  printBoard(){

  	this.generateShipPosition()
  	for (var baris = 1; baris <= 10; baris++) {

  		for (var kolom = 1; kolom <= 10; kolom++) {

  			let posisiKapal = this.isShipPosition(baris,kolom)
  			if (posisiKapal >= 0) {

  				let posisiSerang = this.isSerangPosition(baris,kolom)

  				if (posisiSerang >= 0) {
  					this.board += "|<*>|"
  				}else{
  					this.board += "|<_>|"   
  				}

  			}else if(this.isSeranganMeleset(baris,kolom) == 1){
  				this.board += "|***|"          
  			}else{
  				this.board += "|___|"          
  			}

  		}
  		this.board += "\n"
  	}

  	console.log(this.board)
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
console.log("Koordinat Serang: ",battle.koordinatSerang);