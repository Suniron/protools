import React from 'react';
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'

/**
 * Composant principal constitué d'une en-tête (Header), d'un corps (Main) et d'un pied de page (Footer)
 */
function App() {
  return (
    <div>
      <Header />
      <Main isLoggedIn={false}/> {/** /!\ Mettre à true uniquement pour des tests /!\ */}
      <Footer />
    </div>
  );
}

export default App;
