import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';

export default function Results(props) {

    return (
      <article data-testid="results">
        <span>Count:<JSONPretty id="json-pretty" data={props.data.count}></JSONPretty></span>
        <span>Headers:<JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></span>
  
        <ul>
          <li><JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></li>
          <li>results:</li>
          <li><JSONPretty id="json-pretty" data={props.data.body}></JSONPretty></li>
        </ul>
      </article>
    );
  }