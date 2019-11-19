import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, NavLink, Route, Switch } from 'react-router-dom'

const People = ({ people })=> {
    return (
      <ul>
        {
          people.map(person => <li key={ person.id}>{ person.name}</li>)
        }
      </ul>
    );
  };

  export default People