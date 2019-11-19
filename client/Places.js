import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, NavLink, Route, Switch } from 'react-router-dom'

const Places = ({ places })=> {
    return (
      <ul>
        {
          places.map(place => <li key={ place.id}>{ place.name}</li>)
        }
      </ul>
    );
  };

  export default Places