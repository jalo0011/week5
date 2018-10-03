import React, { Component } from 'react';


class App extends Component {

  marco(){
    let div = document.createElement('div');
    div.setAttribute('title','hello');
    let txt = document.createTextNode('hello marco');
    div.appendChild(txt);
    let df = document.createDocumentFragment();
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
