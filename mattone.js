class Mattone {
    constructor(x, y, dimX, dimY) {
        this.dimX = dimX || 20;
        this.dimY = dimY || 10;

        this.x = x || 10;
        this.y = y || 10;
		
        this.velocita = 5;
		
        this.disegnaMattone = function() {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.dimX, this.dimY);
            ctx.fillStyle = "grey";
            ctx.fill();
            ctx.closePath();
        }
    }
};