'use strict';
$(document).ready(init)

function init(){
 	$('.container').on('click' , functionChoose)

}
var $pieceToMove;
var pieceSelected;
var $firstContainer;

function functionChoose(event){
	if(pieceSelected){
		diskMove(event);
	} else {
		containClick(event);
	}
}

function containClick(event){
	$(event.target).css('background-color', '#d00');
	console.log('In Contain click')
	$firstContainer = ($(event.target).parent('.container'));
	console.log("firstContainer:", $firstContainer);
	$pieceToMove = $firstContainer.find(':first-child');
	pieceSelected = true
	// $('.container').on('click' , diskmove);

}

function diskMove(event){
	console.log("In Move Function", $firstContainer.parent());
	if (event.target !== $firstContainer.parent){
		$pieceToMove.remove();

	}
    $(event.target).prepend($pieceToMove);
    pieceSelected = false;
}

