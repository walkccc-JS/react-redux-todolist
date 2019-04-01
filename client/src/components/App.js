import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            todo<span>list</span>
          </h1>
          <h2>A simple todolist app built with React, Redux & MongoDB</h2>
        </header>
        <TodoList />
        <a
          style={{ display: 'flex', justifyContent: 'center', fontSize: 12 }}
          href="https://github.com/walkccc/react-redux-todolist"
        >
          <strong>View source on GitHub &copy; Jay Chen</strong>
        </a>
      </div>
    );
  }
}

export default App;
