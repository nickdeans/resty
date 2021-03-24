import React from 'react';
import './form.scss'

// In JS we instantiate constructors using new Form(), in JSX you use <Form />
class Form extends React.Component {
    constructor() {
        super(); // on instantiation, we activate the React.Component abilities

        // component state is any js data we want our component to care about
        this.state = {
            apiMethod: [],
            apiUrl: [],
            methodClass: [],
            formGet: 'plain',
            formPost: 'plain',
            formPut: 'plain',
            formDelete: 'plain',
        }
    }

    addUrlandMethod = () => {
        // Think of setState as a PUT, it updates state object deefined in constructor
        this.setState({
            apiUrl: [this.state.input, ...this.state.apiUrl],
            apiMethod: [this.state.methodValue, ...this.state.apiMethod],
            methodClass: [this.state.classValue, ...this.state.methodClass],
        })
    }

    // The 'e' means the method is used as an event handler. 'e' has all data recorded when event fired
    handleMethodChange = (e) => {
        console.log(e.target.value);
        this.setState({ methodValue: e.target.value });
    }

    methodChange = (e) => {
        console.log(e.target.value);
        this.setState({ methodValue: e.target.value });
        this.setState({ classValue: `${e.target.value}Button` });
    
        // maybe a callback, maybe a refactor.
        if (e.target.value === 'get') {
          this.setState({
            formGet: 'getButton',
            formPost: 'plain',
            formPut: 'plain',
            formDelete: 'plain',
          });
        } else if (e.target.value === 'post') {
          this.setState({
            formGet: 'plain',
            formPost: 'postButton',
            formPut: 'plain',
            formDelete: 'plain',
          });
        } else if (e.target.value === 'put') {
          this.setState({
            formGet: 'plain',
            formPost: 'plain',
            formPut: 'putButton',
            formDelete: 'plain',
          });
        } else if (e.target.value === 'delete') {
          this.setState({
            formGet: 'plain',
            formPost: 'plain',
            formPut: 'plain',
            formDelete: 'deleteButton',
          });
        }
      }

    handleChange = (e) => {
        e.preventDefault();
    }

    handleSubmit= (e) => {
        e.preventDefault();
    }
    
    render() {
        return (
            // This is what React refers to as JSX
            // Curly brackets mean js not jsx
            <div>
                <form className="App-form" onSubmit={this.handleSubmit}>
                    <label>Enter Rest API URL: <br></br>
                        <input className="urlEntry" onChange={this.handleChange} type ='text' value={this.state.input} />
                    </label>
                    <br></br>
                    <label>Choice of Method: <br/>
                        <button className={this.state.formGet} value="get" onClick={this.methodChange}>GET</button>
                        <button className={this.state.formPost} value="post" onClick={this.methodChange}>POST</button>
                        <button className={this.state.formPut} value="put" onClick={this.methodChange}>PUT</button>
                        <button className={this.state.formDelete} value="delete" onClick={this.methodChange}>DELETE</button>
                        <input className="" type="submit" value="Go!" onClick={this.addUrlandMethod} />
                    </label>
                </form>
                <div className="route-frame">
                    <h3 className="history-title">Recent Routes</h3>
                    {this.state.apiUrl.map((url, idx) => <li><button className={this.state.methodClass[idx]}>{this.state.apiMethod[idx]}</button>{url}</li>)}
                </div>
            </div>
        )
    }
}

export default Form;