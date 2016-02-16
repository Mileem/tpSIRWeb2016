
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//rec.paint(ctx);
//var ligne = new Line(100, 20, 150, 100, 5, '#00CCC0');
//ligne.paint(ctx);

// tester également Dessin.
/*var rec1 = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
var rec2 = new Rectangle(30, 20, 50, 100, 5, '#00CCC0');
var draw = new Drawing();
draw.addForm(rec1);
draw.addForm(rec2);

for(var i=0; i< draw.forme_list.length; i++) {
    draw.forme_list[i].paint(ctx);
}*/

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

