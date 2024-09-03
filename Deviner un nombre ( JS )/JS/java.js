const nbrealeatoire = Math.round(Math.random() * 100) ;
var essais = 10;
for (let i = 1; i <= essais; i++) {
    var N = parseInt(prompt("Veuillez saisir un nombre entre 1 et 100"));
    if ( N < nbrealeatoire ) {
        alert("Plus grand !")
    } else if ( N > nbrealeatoire ) {
        alert("Plus petit !")
    } else if ( N == nbrealeatoire ) {
        alert("Bravo !! Vous avez trouvé le nombre magique");
        break;
    } else {
        alert("Désolé !! Vous n'avez pas trouvé le nombre magique");
    }
    
}
