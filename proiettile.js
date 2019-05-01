class Proiettile {
    constructor(dimX, dimY, posX, posY, invertiVelocita) {
        this.dimX = dimX;
        this.dimY = dimY;
        this.x = posX;
        this.y = posY;
        this.invertiVelocita = invertiVelocita || false;
		
		this.velocita = 5;
		
        this.disegnaProiettile = function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, this.dimY);
			
			if(!invertiVelocita)
				ctx.fillStyle = "white";
			else
				ctx.fillStyle = "red";
			
            ctx.fill();
            ctx.closePath();
			if(!invertiVelocita)
				this.y -= this.velocita;
			else
				this.y += this.velocita;
        }
		
		this.controllaCollisioneMuro = function(muro) {
			for(var i=0; i<muro.mattoni.length; i++)
			{
				if(muro.mattoni[i].y<=this.y&&this.y<=muro.mattoni[i].y+muro.mattoni[i].dimX&&muro.mattoni[i].x<=this.x&&this.x<=muro.mattoni[i].x+muro.mattoni[i].dimX)
				{
					this.y=-1;
                    muro.mattoni.splice(i, 1);
				}
			}
		}
    }
};