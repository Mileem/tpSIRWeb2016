// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.forme_list = new Array();
}

function Forme(size, color) {
    this.size = size;
    this.color = color;
}

function Rectangle(x_start, y_start, width, height) {
    this.x_start = x_start;
    this.y_start = y_start;
    this.x_end = x_start + width;
    this.y_end = y_start + height;
}

Rectangle.prototype = new Forme;

function Line(x_start, y_start, x_end, y_end) {
    this.x_start = x_start;
    this.y_start = y_start;
    this.x_end = x_end;
    this.y_end = y_end;
}

Line.prototype = new Forme;

Forme.prototype.getInitX = function() {return this.x_start};
Forme.prototype.getFinalX = function() {return this.x_end};
Forme.prototype.getInitY = function() {return this.y_start};
Forme.prototype.getFinalY = function() {return this.y_end};