class Alieno {
    constructor(velocita, dimX, dimY, x, y, sx, dx) {
        this.dimX = dimX;
        this.dimY = dimY;

        this.x = x || dimYcanv / 2;
        this.y = y || dimY;
		
		this.dx = dx || false;
		this.sx = sx || false;
		
        this.velocita = velocita || 5;
        this.proiettili = [];
		
        this.disegnaAlieno = function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, this.dimY);
            ctx.rect(this.x + this.dimX / 4, this.y + this.dimY / 2, this.dimX / 2, this.dimY);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();

            if (this.dx)
                this.x += this.velocita;
            if (this.sx)
                this.x -= this.velocita;

			if(Math.floor(Math.random() * 150) == 0)
			{
				let proiettile = new Proiettile(2, 10, this.x + this.dimX / 2, this.y - this.dimY / 2, true);
				this.proiettili.push(proiettile);
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
					this.proiettili[i].controllaCollisioneMuroAlieno(muro);
            }
		}
    }
};