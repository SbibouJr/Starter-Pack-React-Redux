import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  render (){
    return (
      <div className="card text-center">
        Hello React
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container-fluid'));
