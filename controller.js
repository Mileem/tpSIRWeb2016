
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    this.ctx = ctx;
    this.drawing= drawing;
    this.canvas = canvas;
    
    this.chooseEditingMode = function() {
        if(document.getElementById('butRect').checked) {
            this.currEditingMode = editingMode.rect;
        } else if (document.getElementById('butLine').checked){
            this.currEditingMode = editingMode.line;        
        }
    }.bind(this);

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function(dnd) {
        this.chooseEditingMode();
        this.currLineWidth = document.getElementById('spinnerWidth').value;
    }.bind(this);
    
    this.onInteractionUpdate = function(dnd){
        var form = null
        this.drawing.paint(ctx, canvas);
        switch(this.currEditingMode){
          case editingMode.rect: {
            var width = dnd.x_end - dnd.x_start;
            var height = dnd.y_end - dnd.y_start;  
            form = new Rectangle(dnd.x_start, dnd.y_start, width, height, this.currLineWidth, this.currColour);  
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
            var width = dnd.x_end - dnd.x_start;
            var height = dnd.y_end - dnd.y_start;  
            form = new Rectangle(dnd.x_start, dnd.y_start, width, height, this.currLineWidth, this.currColour);  
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