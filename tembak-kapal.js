class Battleship {

    constructor(ship, koordinatSerang) {
        this.jumlahKapal = ship;
        this.generateKoordinatSerang(koordinatSerang.split(','));
        this.generateShipPosition();
    }
    generateKoordinatSerang(koordinat) {
        this.koordinatSerang = koordinat;
        this.isSerangPosition(koordinat[0], koordinat[1]);
    }
    generateShipPosition() {
        let positions = [];
        this.shipPosition  = '[';

        for (let i = 0; i < this.jumlahKapal; i++) {
            let rand   = Math.floor(Math.random() * 10) + 1;
            positions[i]  = '';
            positions[i]  = `${rand},`;
            this.shipPosition += `'${rand},`;

            rand = Math.floor(Math.random() * 10) + 1;
            positions[i] += rand;

            if (i + 1 == this.jumlahKapal)
                this.shipPosition += `${rand}'`;
            else
                this.shipPosition += `${rand}', `;
        }

        this.shipPosition += ']';
        this._shipPosition = positions;
    }
    rollPosition() {

    }
    genereateBoard() {
        let kapal       = '|<_>|';
        let laut        = '|---|';
        let kapalMledug = '|xxx|';
        let meleset     = '|***|';
        // let size        = 10;
        let rand        = Math.floor(Math.random() * 10) + 1;
        let board       = [];

        let vert = [];
        let n    = 0;
        this._shipPosition.forEach((val) => {
            vert[n] = val.split(',')[0];
            n++;
        });

        let hori = [];
        n        = 0;
        this._shipPosition.forEach((val) => {
            hori[n] = val.split(',')[1];
            n++;
        });

        // mengurutkan dari yang terkecil ke yang terbesar
        vert.sort((a, b) => {
            return a-b;
        });
        hori.sort((a, b) => {
            return a-b;
        });

        // let nu = 1;
        for (let i = 0; i < 10; i++) {

            for (let u = 0; u < 10; u++) {
                if (board[u] == undefined)
                    board[u] = '';

                if (i == vert[i] - 1) {
                    if (u == hori[u] - 1) {
                        board[u] += kapal
                    }
                    else {
                        board[u] += laut;
                    }
                    
                }
                else {
                    board[u] += laut;
                }
            }
            // break;
        }

        board.forEach((val) => {
            console.log(val);
        })
        // console.log(board)
    }
    isSerangPosition(barisKe, kolomKe) {
        this.posisiSerang = [barisKe, kolomKe];
    }
    isShipPosition(barisKe, kolomKe) {
        let posisiKapal = barisKe +','+ kolomKe;
        return this._shipPosition.indexOf(posisiKapal);
    }
    printBoard() {
        this.genereateBoard();
        this.papan.forEach((val) => {
            console.log(val);
        })
    }
    printKapalTenggelam() {

    }
    printKeterangan () {
        console.log('Keterangan: <_> adalah kapal , |___| adalah laut kosong, |<*>| adalah kapal yang kena serang, |***| adalah serangan meleset')   
    }
}

var argv = process.argv;
var battle = new Battleship(argv[2], argv[3]);
battle.genereateBoard();
// battle.printBoard();
// battle.printKeterangan();
console.log();
console.log("Posisi Kapal: ", battle.shipPosition);
// console.log("Koordinat Serang: ", battle.koordinatSerang);