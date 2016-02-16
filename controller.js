var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    
    this.drawing = drawing;	
    this.dnd = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(DnD) {
        //this.dnd = new DnD(canvas, this);
    }.bind(this);
    
    this.onInteractionUpdate = function(DnD) {
        switch(this.currEditingMode){
          case editingMode.rect: {
            var rect = new Rectangle(DnD.x_start, DnD.y_start, DnD.x_end, DnD.y_end, this.currLineWidth, this.currColour);
            rect.paint(ctx);
            break;
          }
          case editingMode.line: {
            var ligne = new Line(DnD.x_start, DnD.y_start, DnD.x_end, DnD.y_end, this.currLineWidth, this.currColour);
            ligne.paint(ctx);
            break;
          }
        }
        
    }.bind(this);
    
    this.onInteractionEnd = function(DnD) {
        switch(this.currEditingMode){
          case editingMode.rect: {
            var rect = new Rectangle(DnD.x_start, DnD.y_start, DnD.x_end, DnD.y_end, this.currLineWidth, this.currColour);
            this.drawing.addForm(rect);  
            break;
          }
          case editingMode.line: {
            var ligne = new Line(DnD.x_start, DnD.y_start, DnD.x_end, DnD.y_end, this.currLineWidth, this.currColour);
            this.drawing.addForm(ligne);  
            break;
          }
        }
        this.drawing.paint(ctx);
    }.bind(this);
};


