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
	
	console.log('In Contain click')

	if ($(event.target).hasClass('container')){
		$firstContainer= $(event.target);


	} else  if ($(event.target).hasClass("disk")){

	$firstContainer = ($(event.target).parent('.container'));


	}

	console.log("firstContainer:", $firstContainer);
	$pieceToMove = $firstContainer.find(':first-child');
	$pieceToMove.css('background-color', '#d00');
	pieceSelected = true
	// $('.container').on('click' , diskmove);

}

function diskMove(event){
	console.log("In Move Function", $firstContainer);
	console.log($(event.target).hasClass('container'))
	var $targetContainer;
	if ($(event.target).hasClass('container')){
		$targetContainer= $(event.target);


	} else  if ($(event.target).hasClass("disk")){

	$targetContainer = ($(event.target).parent('.container'));
	

	}
	console.log('second:', $targetContainer.find(':first-child').text());
	console.log('first:', $pieceToMove.text());
	if( $pieceToMove.text() < $targetContainer.find(':first-child').text()){

		$targetContainer.prepend($pieceToMove);

	 }
	 console.log($targetContainer.children().length);
	 if( $targetContainer.children().length === 0){
	 	 $targetContainer.prepend($pieceToMove);

	 }
	if ($('.contain3').children().length ===3 ){
		alert("You Win !!! ")
	}
    
    pieceSelected = false;
}

