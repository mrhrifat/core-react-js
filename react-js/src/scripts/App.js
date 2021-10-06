import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div class="container text-center">
        <h2>Assalamu Alaikum {name}</h2>
        <p>
          Success is the sum of small efforts repeated day and day out!
          - Robert Callier
        </p>
      </div>
    );
  }
}

export default hot(App);
