import React, {Component} from 'react';

function SearchForm(props) {
  return(
    <form className="form-inline p-2 bd-highlight">
    <div className="form-group mx-sm-3 mb-2">
      <input type="text" className="form-control" id="inputCuidWanted" placeholder="cuid" maxLength="8" size="8"/>
    </div>
    <button type="button" className="btn btn-primary mb-2" id="submit-search">Rechercher</button>
  </form>
  )
}

function LoadingSpin(props) {
  if (!props.show) {
    return null
  }

  return(
    <div className="p-2 bd-highlight">
      <div className="spinner-border text-primary" role="status" id="waiting-results"></div>
    </div>
  )
}

function DocumentationButton() {
  return(
    <div className="ml-auto p-2 bd-highlight">
      <button type="button" className="btn btn-primary mb-2 " data-toggle="modal" data-target="#myModal2">
      Documentation
    </button>

      <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn" data-dismiss="modal" aria-label="close"><span className="close"></span></button>
          </div>
          <div className="modal-body">
            <div className="card">
              <div className="card-icon">
                <span className="svg-warning-circle"></span>
              </div>
              <div className="card-body">
                <h3 id="myModalLabel2" className="card-title">Informations importantes concernant l'utilisation de cet outil</h3>
                <div className="card-text">
                  Actuellement, cet outil se base uniquement sur les fichiers .csv récupèrés sur le Sharepoint Alibaba Account Locked, c'est pour cela qu'il faut avoir les droits d'accès à cet espace afin de pouvoir utiliser cet outil.<br />
                  Les fichiers .csv contienent chacun les 3 derniers jours de blocages AD. Ils sont publiés sur le Sharepoint à
                  11h et 15h, du lundi au vendredi.<br />
                  <br />
                  <strong>Important: </strong>comme l'heure de publication est plus ou moins exacte, afin d'éviter de rentrer des bugs,
                  cet outil se base sur 12h et 16h.<br />
                  <strong>Exemples:</strong><br />
                  - Si vous utilisez cet outil le lundi à 11h40, vous n'aurez que les blocages référencés avant vendredi dernier, à 15h.<br />
                  - Si vous essayez à 17h, vous aurez tous les blocages jusqu'à aujourd'hui, 15h.<br />
                  <br />
                  Si vous avez une idée d'amélioration ou une remontée de bug, me contacter: <strong>etienne.blanc@orange.com</strong>
                </div>
              </div>
            </div>
        </div>
            </div>
      </div>
    </div>
    </div>
  )
}

// TODO: Vérifier que le tableau se vide bien
class ResultsTable extends Component{

  constructor(props) {
    super(props)

    let count = 0 // Variable compteur pour afficher le n° de ligne des résultats
    // Création des éléments du tableau à partir de props.resultsElement:
    this.state = { 
      listResults:props.resultsElements.map((elements) => 
        <tr key={elements.toString()}>
          <td>{count+=1}</td>
          <td>{elements[0]}</td>
          <td>{elements[1]}</td>
          <td>{elements[2]}</td>
        </tr>
        )
    }
  }


  render() {
    if (!this.props.show) {
      return null
    }

    return(
      <div className="container-fluid">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Adresse IP</th>
              <th scope="col">Machine</th>
            </tr>
          {this.state.listResults}
          </thead>
          <tbody id="results-table-tbody">
          </tbody>
        </table>             
      </div>
    )
  }
}

class LockedAccountsInterface extends Component {

  constructor(props){
    super(props)
    this.state = {
      // Pour test, sinon doit être vide: []
      resultsElements: [['date1','adresse1','machine1'],['date2','adresse2','machine2'],['date3','adresse3','machine3']]
    }
  }

  render() {
    return(
      <div>
        <div className="container-fluid p-3">
          <div className="d-flex bd-highlight mb-3">
            {/** -- Formulaire de recherche -- */}
            <SearchForm />
            {/** -- Roue de chargement -- */}
            <LoadingSpin show={false}/> {/** Si false, masque la roue de chargement */}
            {/** -- Fenêtre et bouton "Documentation" -- */}
            <DocumentationButton />
          </div>
        </div>

        {/** -- Tableau des résultats -- */}
        <ResultsTable show={true} resultsElements={this.state.resultsElements}/>
          
      </div>
    )
  }
};

export default LockedAccountsInterface;


/**
 * Cette fonction masque ou affiche l'element à l'inverse de son etat actuel.
 * @param {string} elementID id de l'élément html à inverser
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
    //ipcRenderer.send('getCuidResults', document.getElementById('inputCuidWanted').value, 60) //TODO: document.getElementById('inputNbDaysBack').value)  
})
*/
// Récéption de l'évenement de réponse avec résultats pour le cuid demandé:
/*
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




-----------------------
Exemple d'insertion d'un resultat:
            <tr>
              <th scope="row">1</th>
              <td>La date</td>
              <td>L'adresse IP</td>
              <td>Le nom de la machine</td>
            </tr>

*/