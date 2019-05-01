class Muro {
    constructor(x, y, dimXmatt, dimYmatt, nMattoniX, nMattoniY) {
        this.dimXmatt = dimXmatt || 4;
        this.dimYmatt = dimYmatt || 4;
		
		this.nMattoniX = nMattoniX || 10;
        this.nMattoniY = nMattoniY || 5;

        this.distanzaXmatt = 1;
        this.distanzaYmatt = 1;
		
        this.x = x || 10;
        this.y = y || 10;
		
        this.velocita = 5;
        this.mattoni = [];
		
		this.tempX=this.distanzaXmatt;
		this.tempY=this.distanzaYmatt;
		for(var r=0; r<this.nMattoniY; r++)
		{
			this.tempX=this.distanzaXmatt;
			for(var i=0; i<this.nMattoniX; i++)
			{
				let mattone = new Mattone(this.x+this.tempX, this.y+this.tempY, this.dimXmatt, this.dimYmatt);
				this.mattoni.push(mattone);
				this.tempX += this.distanzaXmatt+ this.dimXmatt;
			}
			this.tempY += this.distanzaYmatt+ this.dimYmatt;
		}
		
        this.disegnaMuro = function() {				
			for(var i=0; i<this.mattoni.length; i++)
			{
				this.mattoni[i].disegnaMattone();
			}
        }
    }
};