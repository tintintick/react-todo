require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <ol>
          {
            this.props.todos.map((item, index) => {
              return (
                <li key={index}>{item}</li>
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
