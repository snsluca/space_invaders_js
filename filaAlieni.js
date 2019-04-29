class filaAlieni {
    constructor(y, dimX, dimY, dimXcanv, dimYcanv, dx, sx) {
        this.y = y || 0;
        this.dimX = dimX;
        this.dimY = dimY;
        this.dimXcanv = dimXcanv;
        this.dimYcanv = dimYcanv;

        this.dx = dx || false;
        this.sx = sx || false;

        this.velocita = 2;
        this.alieni = [];

        this.spaziTraAlieni = 15;
        this.temp = this.spaziTraAlieni;

		for (var i = 0; i < (this.dimXcanv / (this.dimX + this.spaziTraAlieni)) / 2; i++) {
			let alieno = new Alieno(this.velocita, this.dimX, this.dimY, this.temp, this.y)
			this.temp += this.dimX + this.spaziTraAlieni;
			this.alieni.push(alieno);
		}
		
        this.disegnaFila = function() {
            var distanzaBordoDx = this.alieni[this.alieni.length - 1].x + this.dimX;
            var distanzaBordoSx = this.alieni[0].x;

            if (distanzaBordoSx < this.spaziTraAlieni + 1) {
                dx = true;
                sx = false;
            } else if (this.dimXcanv - distanzaBordoDx < this.spaziTraAlieni + 1) {
                dx = false;
                sx = true;
            }
            for (var i = 0; i < this.alieni.length; i++) {
                this.alieni[i].disegnaAlieno();
                this.alieni[i].dx = dx;
                this.alieni[i].sx = sx;
            }
        }
    }
};