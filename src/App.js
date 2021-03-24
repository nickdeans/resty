import React from 'react';
import './App.scss';

import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    )
  }
}

export default App;
