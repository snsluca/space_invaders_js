class Giocatore {
    constructor(dimX, dimY) {
        this.dimX = dimX;
        this.dimY = dimY;

        this.x = dimYcanv / 2;
        this.y = dimYcanv - dimY;
        this.velocita = 5;
        this.proiettili = [];

        this.disegnaGiocatore = function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, this.dimY);
            ctx.rect(this.x + this.dimX / 4, this.y - this.dimY / 2, this.dimX / 2, this.dimY);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();

            if (vaiDx && this.x <= dimXcanv - this.dimX)
                this.x += this.velocita;
            if (vaiSx && this.x >= 0)
                this.x -= this.velocita;

            if (spara) {
                let proiettile = new Proiettile(2, 10, this.x + this.dimX / 2, this.y - this.dimY / 2, false);
                this.proiettili.push(proiettile);
                spara = false;
            }

            for (var i = 0; i < this.proiettili.length; i++) {
                if (this.proiettili[i].y <= 0) 
                    this.proiettili.splice(i, 1);
				else
					this.proiettili[i].disegnaProiettile();
            }
        }
		
		this.controllaCollisioneMuro = function(muro) {
			for (var i = 0; i < this.proiettili.length; i++) {
					this.proiettili[i].controllaCollisioneMuro(muro);
            }
		}
    }
};