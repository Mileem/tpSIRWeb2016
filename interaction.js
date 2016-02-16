
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    this.x_start = 0 , this.y_start = 0 , this.x_end = 0 , this.y_end = 0;
    this.interactor = interactor;
    var mouse_clicked = false;

	// Developper les 3 fonctions gérant les événements
    this.clickEvent = function (evt) { //Pression sur la souris
        if(!mouse_clicked) {
            mouse_clicked = true;
            var result = getMousePosition(canvas, evt);
            this.x_start = result.x;
            this.y_start = result.y;
            this.interactor.onInteractionStart(this);
        }  
    }.bind(this);
    
    this.moveEvent = function(evt) { //Déplacement de la souris
        if(mouse_clicked) {
            var result = getMousePosition(canvas, evt);
            this.x_end = result.x;
            this.y_end = result.y;
            this.interactor.onInteractionUpdate(this);
        } 
    }.bind(this);
    
    this.unclickEvent = function(evt) { //Relâchement de la souris
        if(mouse_clicked) {
            var result = getMousePosition(canvas, evt);
            this.x_end = result.x;
            this.y_end = result.y;
            this.interactor.onInteractionEnd(this);
        }
        mouse_clicked = false;
    }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.clickEvent, false);
    canvas.addEventListener('mousemove', this.moveEvent, false);
    canvas.addEventListener('mouseup', this.unclickEvent, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};