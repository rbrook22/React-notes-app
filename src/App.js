import React, { Component } from 'react';


class App extends Component {
  render() {
    return ( 
      <div className = "notes-app" >
        <header className="search-bar">
          <h1>React Notes App</h1>
          <input type="text"/>
        </header>

        <div className="document-list">
          <ul>
            <li className="document-list-item">Note 1</li>
            <li className="document-list-item">Note 2</li>
            <li className="document-list-item">Note 3</li>
          </ul>
        </div>

        <div className="document-editor">
          <textarea value="This is what it is"/>
        </div>

      </div>
    );
  }
}

export default App;