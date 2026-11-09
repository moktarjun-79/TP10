// Récupérer les éléments HTML
let prix = document.getElementById("prix");
let quantite = document.getElementById("quantite");
debugger;
let bouton = document.getElementById("btnValider");
let resultat = document.getElementById("resultat");

// Ajouter un événement au bouton
bouton.addEventListener("click", function() {

    // Récupérer les valeurs saisies
    let p = Number(prix.value);
    let q = Number(quantite.value);

    if (p < 0 || q < 1) {
        console.error("Valeurs invalides !");
        alert("ff");
    }
    else {

        // Calculer le total
        let total = p * q;

        // Afficher le résultat
        resultat.textContent = "Le total est : " + total + " DT";

        console.log("Prix :", p);
        console.log("Quantité :", q);
        console.log("Total :", total);
    }
});