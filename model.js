// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.forme_list = new Array();
}

function Forme(size, color) {
    this.size = size;
    this.color = color;
}

function Rectangle(x_start, y_start, width, height, size, color) {
    Forme.call(this, size, color);
    this.x_start = x_start;
    this.y_start = y_start;
    this.x_end =  width;
    this.y_end =  height;
}

Rectangle.prototype = new Forme();

function Line(x_start, y_start, x_end, y_end, size, color) {
    Forme.call(this, size, color);
    this.x_start = x_start;
    this.y_start = y_start;
    this.x_end = x_end;
    this.y_end = y_end;
}

Line.prototype = new Forme();

Forme.prototype.getInitX = function() {return this.x_start};
Forme.prototype.getFinalX = function() {return this.x_end};
Forme.prototype.getInitY = function() {return this.y_start};
Forme.prototype.getFinalY = function() {return this.y_end};

Drawing.prototype.addForm = function(form) {this.forme_list.push(form)};
Drawing.prototype.getForms = function() { return this.forme_list};