import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js'
import NewToDoForm from './NewToDoForm.js'

class ToDoList extends Component {
    static defaultProps = {
      tasks: [
        {text: `Buy bread`},
        {done: false, text: `Buy cheese`}
      ]
    }

    state = {
      tasks: this.props.tasks,
      draft: ''
    }
  
    updateDraft = event => {
      this.setState({draft: event.target.value})
    }
  
    addToDo = () => {
      const { tasks, draft } = this.state;
      const tasksList = tasks;
      tasksList.push({text: draft, done: false})
      this.setState({tasks: tasksList, draft: ''})
      // this.setState({tasks: [...tasksList, {text: draft}], draft: ""})
    }
  
    render() {
      const { tasks } = this.props;
      const { draft } = this.state;
      
      return (
        <div>
          <h1>To Do List</h1>
          <p>{tasks.map(work => <ToDoItem text={work.text} done={work.done} />)}</p>
          <NewToDoForm 
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft} />
        </div>
        
      )
    }
  }
  
  export default ToDoList