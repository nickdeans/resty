import React from 'react';
import './App.scss';

import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      body: [],
      headers: {},
      // resultsHeader: '',
      // resultsBody: '',
    }
  }

  updateResults = (data, headers) => {
    this.setState({
      body: data.results,
      count: data.count,
      headers: headers,
      // resultHeader: headerData,
      // resultsBody: data,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form updateResults={this.updateResults} />
        <Results data={this.state} />
        <Footer />
      </div>
    )
  }
}

export default App;
