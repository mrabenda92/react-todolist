import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js'
import NewToDoForm from './NewToDoForm.js'
import styled from 'styled-components'

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`

const Header = styled.h1`
  color: white;
`

const DestroyButton = styled.button`
  border-radius: 10px;
  background: red;
  padding: 5px;
  color: white;
  margin-bottom: 10px;
`

class ToDoList extends Component {
    componentDidMount = () => {
      fetch('http://localhost:5000/todo_items')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    static defaultProps = {
      tasks: [], 
      title: "To do List"
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

      if (draft !=="") {
        tasksList.push({text: draft, done: false})
        this.setState({tasks: tasksList, draft: ''})
        // this.setState({tasks: [...tasksList, {text: draft}], draft: ""})
    }}

    removeAll = () => {
      this.setState({tasks: []})
    }
  
    render() {
      const {title} = this.props
      const { tasks, draft } = this.state;
      
      return (
        <Container>
          <Header>{title}</Header>
          <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
          <p>{tasks.map(work => <ToDoItem text={work.text} done={work.done} />)}</p>
          <NewToDoForm 
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft} />
        </ Container>
        
      )
    }
  }
  
  export default ToDoList