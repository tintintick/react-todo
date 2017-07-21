require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    }
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    let index = e.target.name;
    let todosArr = this.state.todos;
    todosArr.splice(index, 1);
    this.setState({
      todos: todosArr
    });
  }

  render() {
      return (
        <ol>
          {
            this.state.todos.map((item, index) => {
              return (
                <li key={index}>{item}<button key={index} name={index} onClick={this.handleClick.bind(this)}>X</button></li>
              );
            })
          }
        </ol>
      )
  }
}

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    let value = this.refs.title.value;
    if (value) {
      let todoArr = this.state.todoList;
      todoArr.push(value);
      this.setState({
        todoList: todoArr,
      });
      this.refs.title.value = '';
    }
  }

  render() {
    return (
      <div className="todo">
        <h1>Todos</h1>
        <input type="text" ref="title" />
        <button onClick={this.handleClick.bind(this)}>add todo</button>
        <TodoList todos={this.state.todoList} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
