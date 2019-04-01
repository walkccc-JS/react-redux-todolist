import React, { Component } from 'react';

class Todo extends Component {
  handleDeleteTodo = e => {
    e.stopPropagation();
    this.props.deleteTodo();
  };

  render() {
    const { name, done, toggleTodo } = this.props;
    return (
      <li
        className="task"
        style={{
          textDecoration: done ? 'line-through' : '',
          color: done ? '#bdc3c7' : '#34495e'
        }}
        onClick={toggleTodo}
      >
        <span>{name}</span>
        <span className="X" onClick={this.handleDeleteTodo}>
          X
        </span>
      </li>
    );
  }
}

export default Todo;
