import React from 'react';
import LockedAccountsInterface from './lockedAccountsInterface';
import Login from './login';

/*
const httpntlm = require('httpntlm')

function sharepointConnexionTest(sharepointUser, sharepointPwd) {
  return new Promise(function(resolve, reject) {
    httpntlm.get({url: "http://shp.itn.ftgroup/sites/ALIBABA/Account%20Locked/", username: sharepointUser, password: sharepointPwd, domain: 'AD'}, function (error, result){
      if(error !== null) {
          reject(error)
      } else {
          resolve(result)
      }
    })
  })
}
*/

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: false, // Utilisateur non connecté par défaut
      loginError: false, // Echec de connexion à false par defaut
      cuid: '',
      cuidPwd: ''
    }

    this.handleConnectFormSubmit = this.handleConnectFormSubmit.bind(this)
  }

  handleConnectFormSubmit(event) {
    const {cuid, cuidPwd} = event // Enregistrer les identifiants reçus
    /*
    let connectTest = sharepointConnexionTest(cuid, cuidPwd)
    connectTest
      .then(res => {
        if (res.statusCode == 200 || res.statusCode == 302) { // connexion OK ou redirection
          console.log(cuid+" s'est correctement identifié et à accès au Sharepoint.")
          //ipcRenderer.send('onSubmitID', {id:cuid, mdp:password})
        } else if (res.statusCode == 401) { // Accès refusé
          console.error(cuid+" s'est peut-être mal idenitifé ou n'a pas accès au Sharepoint.")
          //inverseShowHideState('info-message')
          //inverseShowHideState('error-message')
        } else if (res.statusCode == 404) { // Page introuvable
          console.error(cuid+" a tenté de s'identifier mais le site n'est pas accessible.")
        } else console.log(res)
      })
      .catch(err => {console.error(err)})
    */
    // Tester une connexion au SHP avec ces ID, puis:
      // Si connexion NOK:
        // - Modifier le state loginError à true
      // Si connexion OK:
        // - Enregistrer cuid et cuidPwd dans le state (pour la suite de l'appli)
        // - Modifier le state isLogged à true


  }

  render() {
    return(
      <div>
      {(this.state.isLogged) 
        ? // Si connecté:
          <LockedAccountsInterface 
            cuid={this.state.cuid}
            cuidPwd={this.state.cuidPwd}
          />
        : // Si non connecté:
          <Login 
            loginError={this.state.loginError}
            onConnectFormSubmit = {this.handleConnectFormSubmit}
          />
      }
      </div>
    )
  }
}

export default Main;




//const httpntlm = require('httpntlm')

// -- FONCTIONS --

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

/**
 * Cete fonction permet de tester la connexion au Sharepoint avec les identifiants donnés.
 * @param {string} sharepointUser cuid de l'utilisateur
 * @param {string} sharepointPwd mot de passe de l'utilisateur
 */
/*
function sharepointConnexionTest(sharepointUser, sharepointPwd) {
  return new Promise(function(resolve, reject) {
    httpntlm.get({url: "http://shp.itn.ftgroup/sites/ALIBABA/Account%20Locked/", username: sharepointUser, password: sharepointPwd, domain: 'AD'}, function (error, result){
      if(error !== null) {
          reject(error)
      } else {
          resolve(result)
      }
    })
  })
}

// -- CORPS --

const btn = document.getElementById('submit-ID') // Garder une référence du bouton

inverseShowHideState("error-message") // Cacher par défaut le message d'erreur

btn.addEventListener('click', function () {
  let cuid = document.getElementById("cuid").value
  let password = document.getElementById("cuid-password").value
  
  let connectTest = sharepointConnexionTest(cuid, password)
  connectTest
    .then(res => {
      if (res.statusCode == 200 || res.statusCode == 302) { // connexion OK ou redirection
        console.log(cuid+" s'est correctement identifié et à accès au Sharepoint.")
        //ipcRenderer.send('onSubmitID', {id:cuid, mdp:password})
      } else if (res.statusCode == 401) { // Accès refusé
        console.error(cuid+" s'est peut-être mal idenitifé ou n'a pas accès au Sharepoint.")
        inverseShowHideState('info-message')
        inverseShowHideState('error-message')
      } else if (res.statusCode == 404) { // Page introuvable
        console.error(cuid+" a tenté de s'identifier mais le site n'est pas accessible.")
      } else console.log(res)
    })
    .catch(err => {console.error(err)})
})
*/