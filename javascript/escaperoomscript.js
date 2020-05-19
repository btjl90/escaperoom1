//for room1
function startRoomOne(){
    document.getElementById("intro").style.display = 'none';
    document.getElementById("room1").style.display = 'block';
}

function showPuzzle1(){
    document.getElementById("puzzle1").style.display = 'block';
}

function checkPuzzle1(){
     if(document.getElementById("padone").value == "2" && document.getElementById("padtwo").value == "6" && document.getElementById("padthree").value == "5" && document.getElementById("padfour").value == "6"){
            if (confirm("The door unlocks. Would you like to proceed?")){
                document.getElementById("room1").style.display = 'none';
                document.getElementById("puzzle1").style.display = 'none';
                document.getElementById("room2").style.display = 'block';
            }
        } else {
            alert("Nothing seem to happen.");
        }
            }
//for room2
function nameCheck(){
        if(document.getElementById("name1").value == 'MONSTER') {
            if(confirm("Another door unlocks, would you like to proceed?")){
               document.getElementById("room2").style.display = 'none';
            document.getElementById("puzzle2").style.display = 'none';
            document.getElementById("room3").style.display = 'block';
               }
        } else {
            alert("Nothing seem to happen.");
        }
    }
        
        function showSwitch(){
            document.getElementById("switch").style.display = 'block';
        }
        
        function activateRoom(){
            document.getElementById("main").innerHTML = '<img src="images/room2.png" usemap="#room2">';
            document.getElementById("switch").style.display = 'none';
        }
        
        function showPuzzle2(){
            document.getElementById("puzzle2").style.display = 'block';
        }

//for room3
function showEnd(){
    document.getElementById("endPage").style.display = 'block';
    document.getElementById("room3").style.display = 'none';
    document.getElementById("puzzle3").style.display = 'none';
}

var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = [ 1 ];
  var terms = ['Laser'];
  numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<1; i++ ) {
    $('<div>' + terms[numbers[i]-1] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  var words = [ 'PORTAL' ];
  for ( var i=1; i<=1; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
      ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 1 ) {
    alert("The chest unlocks.");
      document.getElementById("chestmap").innerHTML = '<area shape="rect" coords="415,45,705,205" onclick="showEnd()">';
       }
  }

    function showPuzzle3(){
        document.getElementById("cardSlots").style.display = 'block';
        alert("You have found the portal.");
        document.getElementById("puzzlemap").innerHTML = '';
    }
    
    function showClue(){
        document.getElementById("cardPile").style.display = 'block';
        alert("You found a laser.");
        document.getElementById("cluemap").innerHTML = '';
    }
//for room1 modals
// Get the modal
function openNotepadModal() {
  document.getElementById("room1NotepadModal").style.display = "block";
}

function openRugModal(){
document.getElementById("room1RugModal").style.display = "block";
}

function openTVModal(){
document.getElementById("room1TVModal").style.display = "block";
}

function openCouchModal(){
document.getElementById("room1CouchModal").style.display = "block";
}

function openCupboardModal(){
document.getElementById("room1CupboardModal").style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("room1NotepadModal")) {
    document.getElementById("room1NotepadModal").style.display = "none";
  }
if (event.target == document.getElementById("room1RugModal")) {
    document.getElementById("room1RugModal").style.display = "none";
  }
    if (event.target == document.getElementById("room1TVModal")) {
    document.getElementById("room1TVModal").style.display = "none";
  } 
    if (event.target == document.getElementById("room1CouchModal")) {
    document.getElementById("room1CouchModal").style.display = "none";
  }
    if (event.target == document.getElementById("room1CupboardModal")) {
    document.getElementById("room1CupboardModal").style.display = "none";
  }
    if (event.target == document.getElementById("room2LefttableModal")) {
    document.getElementById("room2LefttableModal").style.display = "none";
  }
    if (event.target == document.getElementById("room2BedModal")) {
    document.getElementById("room2BedModal").style.display = "none";
  }
    if (event.target == document.getElementById("room2SinkModal")) {
    document.getElementById("room2SinkModal").style.display = "none";
  }
    if (event.target == document.getElementById("room2ToiletbowlModal")) {
    document.getElementById("room2ToiletbowlModal").style.display = "none";
  }
     if (event.target == document.getElementById("room2ShowerModal")) {
    document.getElementById("room2ShowerModal").style.display = "none";
}
    if (event.target == document.getElementById("room2DogModal")) {
    document.getElementById("room2DogModal").style.display = "none";
}
    if (event.target == document.getElementById("room3ChestModal")) {
    document.getElementById("room3ChestModal").style.display = "none";
}
     if (event.target == document.getElementById("room3RadioModal")) {
    document.getElementById("room3RadioModal").style.display = "none";
}
}
//for room2 modals
function openLefttableModal(){
document.getElementById("room2LefttableModal").style.display = "block";
}

function openBedModal(){
document.getElementById("room2BedModal").style.display = "block";
}

function openSinkModal(){
document.getElementById("room2SinkModal").style.display = "block";
}

function openToiletbowlModal(){
document.getElementById("room2ToiletbowlModal").style.display = "block";
}

function openShowerModal(){
document.getElementById("room2ShowerModal").style.display = "block";
}

function openDogModal(){
document.getElementById("room2DogModal").style.display = "block";
}
//for room3 modals
function openChestModal(){
document.getElementById("room3ChestModal").style.display = "block";
}

function openRadioModal(){
document.getElementById("room3RadioModal").style.display = "block";
}