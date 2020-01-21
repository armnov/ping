import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div class="login-form">
      <h1>Login</h1>
      <div class="form-group">
        <label for="phone_number">Your ID</label>
        <input class="form-control" type="tel" placeholder="Phone number..." id="phone_number" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input class="form-control" type="number" placeholder="Password" id="password" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-large btn-block" type="submit">Login</button>
      </div>

    </div>
  );
}

export default App;
