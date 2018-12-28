import React, { Component } from 'react';
import './App.css';

class ToDoItem extends Component {
  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.setState({done: !this.state.done})
  }

  render() {
    const { text } = this.props

    return (
      <div onClick={this.toggleDone} className={this.state.done ? "doneToDo" : "notDoneToDo"}>
        <p>{text}</p>
      </div>
    )
  }
}

class ToDoList extends Component {
  state = {
    tasks: this.props.job,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    const { tasks, draft } = this.state;
    const tasksList = tasks;
    tasksList.push({text: draft})
    this.setState({tasks: tasksList, draft: ''})
    // this.setState({tasks: [...tasksList, {text: draft}], draft: ""})
  }

  render() {
    const { job } = this.props;
    const { draft } = this.state;
    
    return (
      <div>
        <h1>To Do List</h1>
        <p>{job.map(work => <ToDoItem works={work.text} done={work.done} />)}</p>
        <input type="text" onChange={this.updateDraft} value={draft}></input>
        <button onClick={this.addToDo}>Add</button>
      </div>
      
    )
  }
}

class App extends Component {
  myTasks = [
    {done: true, text: `Buy bread`},
    {done: false, text: `Buy cheese`}
  ]


  render() {
    return (
      <div>
        <ToDoList job={this.myTasks} />
      </div>
    );
  }
}

export default App;
