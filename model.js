// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.forme_list = new Array();
}

function Forme(line_width, color) {
    this.line_width = line_width;
    this.color = color;
}

function Rectangle(x_start, y_start, width, height, line_width, color) {
    Forme.call(this, line_width, color);
    this.x_start = x_start;
    this.y_start = y_start;
    this.x_end = x_start + width;
    this.y_end = y_start + height;
}

Rectangle.prototype = new Forme;

function Line(x_start, y_start, x_end, y_end, line_width, color) {
    Forme.call(this, line_width, color);
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
Forme.prototype.getLineWidth = function() {return this.line_width};
Forme.prototype.getColor = function() {return this.color};

Drawing.prototype.addForm = function(form) {this.forme_list.push(form);};
Drawing.prototype.getForms = function() { return this.forme_list};
Drawing.prototype.paint = function(ctx, canvas) {
    new DnD(canvas);
    this.forme_list.forEach(function(form){form.paint(ctx)});
};