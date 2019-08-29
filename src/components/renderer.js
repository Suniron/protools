console.log('test!!')
// -- FONCTIONS --

/**
 * Cette fonction masque ou affiche l'element à l'inverse de son etat actuel.
 * // @param {string} elementID id de l'élément html à inverser
 */
/*
function inverseShowHideState(elementID) {
    let x = document.getElementById(elementID);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

// -- CORPS --

// Elements de la page:
const btn = document.getElementById('submit-search') // Bouton 'Valider'
const resultsTable = document.getElementById('results-table') // Table des résultats
const resultsTableRows = document.getElementById('results-table-tbody')


// Gestion du bouton de validation (pour la recherche)
btn.addEventListener('click', function () {
    inverseShowHideState("waiting-results") // Afficher le spinner de chargement
    ipcRenderer.send('getCuidResults', document.getElementById('inputCuidWanted').value, 60) //TODO: document.getElementById('inputNbDaysBack').value)  
})

// Récéption de l'évenement de réponse avec résultats pour le cuid demandé:
ipcRenderer.on('giveCuidResults', (event, results) => {
    inverseShowHideState("waiting-results") // Cacher le spinner de chargement
    resultsTableRows.innerHTML = "" // Réinitialise le tableau

    if (results.length === 0) { // Aucun résultats pour le cuid
        resultsTableRows.innerHTML += "<tr><th scope='row'>1</th><td>Pas de blocage</td><td>Pas de blocage</td><td>Pas de blocage</td></tr>"
    } else {
        var compteur = 1    // Compteur pour le nombre de lignes

        // On ajoute les nouveaux résultats dans la liste:
        results.reverse().forEach(line => { // Des résultats pour le cuid
            resultsTableRows.innerHTML += "<tr><th scope='row'>"+compteur+"</th><td>"+line[1]+"</td><td>"+line[2]+"</td><td>"+line[3]+"</td></tr>"
            compteur += 1 

        })
    }
})

// Cacher par défaut le spinner de chargement:
inverseShowHideState("waiting-results")
*/