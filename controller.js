
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    this.ctx = ctx;
    this.drawing= drawing;
    this.canvas = canvas;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(dnd) {
        
    }.bind(this);
    
    this.onInteractionUpdate = function(dnd){
        var form = null
        this.drawing.paint(ctx, canvas);
        switch(this.currEditingMode){
          case editingMode.rect: {
            form = new Rectangle(dnd.x_start, dnd.y_start, dnd.x_end, dnd.y_end, this.currLineWidth, this.currColour);  
            break;
          }
          case editingMode.line: {
            form = new Line(dnd.x_start, dnd.y_start, dnd.x_end, dnd.y_end, this.currLineWidth, this.currColour);  
            break;
          }
           
        }  
         form.paint(this.ctx);  
    }.bind(this);
    
    this.onInteractionEnd = function(dnd){
        var form = null;
        switch(this.currEditingMode){
          case editingMode.rect: {
              form = new Rectangle(dnd.x_start, dnd.y_start, dnd.x_end, dnd.y_end, this.currLineWidth, this.currColour); 
            break;
          }
          case editingMode.line: {
              form = new Line(dnd.x_start, dnd.y_start, dnd.x_end, dnd.y_end, this.currLineWidth, this.currColour);
            break;
          }
        } 
        this.drawing.addForm(form);
        this.drawing.paint(ctx, canvas);
    }.bind(this);
};