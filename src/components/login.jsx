import React, {Component} from 'react';

class ConnectForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      cuid: "",
      cuidPwd: ""
    };

    // Attacher les gestionnaires d'event:
    this.handleConnectFormSubmit = this.handleConnectFormSubmit.bind(this)
    this.handleInputCuidChange = this.handleInputCuidChange.bind(this)
    this.handleInputPwdChange = this.handleInputPwdChange.bind(this)
  }

  // Lors d'une modification du champs 'cuid':
  handleInputCuidChange(event) {
    this.setState({cuid: event.target.value})
  }

  // Lors d'une modification du champs 'cuid-password':
  handleInputPwdChange(event) {
    this.setState({cuidPwd: event.target.value})
  }

  handleConnectFormSubmit(event) {
    event.preventDefault()
    this.props.onConnectFormSubmit({
      cuid: this.state.cuid,
      cuidPwd: this.state.cuidPwd
    })

  }

  render() {
    return(
      <form className="form-inline">
        <div className="form-group mb-2">
            <input 
              type="text" 
              className="form-control" 
              value={this.props.cuid}
              name="cuid"
              placeholder="cuid" 
              maxLength="8" 
              size="8"
              onChange={this.handleInputCuidChange}
            />
        </div>
        <div className="form-group mx-sm-3 mb-2">
            <input 
              type="password" 
              className="form-control" 
              value={this.props.cuidPwd}
              name="cuidPwd"
              placeholder="Mot de passe" 
              size="12"
              onChange={this.handleInputPwdChange}
            />
        </div>
        <button 
          type="button" 
          className="btn btn-primary mb-2" 
          id="submit-ID"
          onClick={this.handleConnectFormSubmit}
        >
          Se connecter
        </button>
      </form>
    )
  }

}

function InfoMessage(props) {
  if (!props.show) {
    return null;
  }

  return(
    <div className="alert alert-lg border border-info alert-dismissible fade show bg-transparent" role="alert" id="info-message">
      <span className="alert-icon svg-info" aria-label="Info"/>
      <div className="pl-5 font-weight-bold">
          Vous devez être autorisé à consulter la partie "Accounts Locked" du sharepoint Alibaba.    
      </div>
    </div>
  )
}

function ErrorMessage(props) {
  if (!props.show) {
    return null;
  }

  return(
    <div className="alert alert-lg border border-danger alert-dismissible fade show bg-transparent text-dark" role="alert" id="error-message">
      <span className="alert-icon svg-error mt-2" aria-label="Danger"/>
      <div className="pl-5">
          <div className="font-weight-bold">Echec de la connexion !</div>
          <p className="mb-0">Identifiants ou droits d'accès incorrects.</p>
      </div>
    </div>
  )

}

function Login(props) {
  return(
    <div id='main-div'>
      <ConnectForm onConnectFormSubmit={props.onConnectFormSubmit}/>
      <InfoMessage show={true}/>
      <ErrorMessage show={props.loginError}/>

    </div>
  );
};

export default Login;