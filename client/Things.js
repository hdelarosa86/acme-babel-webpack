import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, NavLink, Route, Switch } from 'react-router-dom'

const Things = ({ things })=> {
    return (
      <ul>
        {
          things.map(thing => <li key={ thing.id}>{ thing.name}</li>)
        }
      </ul>
    );
  };

  export default Things