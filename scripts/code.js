var nbClick = 0;
function cick() {
    nbClick = nbClick + 1;
    console.log("Vous avez clicker " + nbClick + " de fois.");
    $( "#click" ) .html( "<p>Vous avez clicker " +  nbClick+ " fois !</p>" );
}

function addHTML () {
    console.log("J'ajoute de l'HTML");
    $("#chocolat") .addClass ("container item")
    $( "#chocolat" ) .html( "<p>Coucou j'aime le chocolat !</p>" );
}

function hideHello() {
    $(".hello") .hide("slow");
    setTimeout(() => {
        $(".hello") .show("fast");
      }, 2000)
}