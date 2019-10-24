import React from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Morning walk',
        completed: false
      },
      {
        id: 2,
        title: 'Have breakfat',
        completed: true
      },
      {
        id: 3,
        title: 'Go to office',
        completed: false
      }
    ]
  }

  render () {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
