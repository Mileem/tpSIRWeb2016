// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

Line.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();

};

Circle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.beginPath();
    var xCenter = Math.abs(this.getInitX() + ((this.getFinalX() - this.getInitX())/2));
    var yCenter = Math.abs(this.getInitY() + ((this.getFinalY() - this.getInitY())/2));
    var rayon = (this.getFinalX() - this.getInitX())/2;
    ctx.arc(xCenter, yCenter, rayon, 0, 2 * Math.PI);
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};