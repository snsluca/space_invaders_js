class filaMuro {
    constructor(y, dimX, dimY, dimXcanv, dimYcanv) {
        this.y = y || 0;
        this.dimX = dimX;
        this.dimY = dimY;
        this.dimXcanv = dimXcanv;
        this.dimYcanv = dimYcanv;
        this.muri = [];

        this.spaziTraMuri = 130;
		
        this.temp = 10;
		for (var i = 0; i < (this.dimXcanv / (this.dimX + this.spaziTraMuri)); i++) {
			let muro = new Muro(this.temp, this.y, 5, 5, 10, 7)
			this.temp += this.dimX + this.spaziTraMuri;
			this.muri.push(muro);
		}
		
        this.disegnaFila = function() {
			for (var i = 0; i < this.muri.length; i++) {
				this.muri[i].disegnaMuro();
			}
        } 
    }
};