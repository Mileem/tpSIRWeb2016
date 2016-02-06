// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
    var x_start = 0 , y_start = 0 , x_end = 0 , y_end = 0;
    var mouse_clicked = false;

	// Developper les 3 fonctions gérant les événements
    function clickEvent(evt) { //Pression sur la souris
        if(!mouse_clicked) {
            mouse_clicked = true;
            var result = getMousePosition(canvas, evt);
            x_start = result.x;
            y_start = result.y;
            console.log("Départ : " + x_start +' '+ y_start);
        }  
    }
    
    function moveEvent(evt) { //Déplacement de la souris
        if(mouse_clicked) {
            var result = getMousePosition(canvas, evt);
            x_end = result.x;
            y_end = result.y;
            console.log("Mouvement : " + x_end +' '+ y_end);
        } 
    }
    
    function unclickEvent(evt) { //Relâchement de la souris
        if(mouse_clicked) {
            var result = getMousePosition(canvas, evt);
            x_end = result.x;
            y_end = result.y;
            console.log("Fin : " + x_end +' '+ y_end);
        }
        mouse_clicked = false;
    }

	// Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', clickEvent, false);
    canvas.addEventListener('mousemove', moveEvent, false);
    canvas.addEventListener('mouseup', unclickEvent, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};