import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js'
import NewToDoForm from './NewToDoForm.js'
import styled from 'styled-components'
import banner from '../images/banner.jpg'

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
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    static defaultProps = {
      tasks: [], 
      title: "To do List"
    }

    state = {
      tasks: this.props.tasks,
      draft: '',
      message: ''
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

    removeTask = (index) => {
      const task = Object.assign([], this.state.tasks)
      task.splice(index, 1)
      this.setState({tasks: task})
    }

    removeAll = () => {
      this.setState({tasks: []})
    }
  
    render() {
      const {title} = this.props
      const { tasks, draft } = this.state;
      
      return (
        <Container>
          <img src={banner} />
          <Header>{title}</Header>
          <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
          <p>{tasks.map(work => <ToDoItem text={work.text} done={work.done} remove={this.removeTask.bind(this)} />)}</p>
          <NewToDoForm 
            onSubmit={this.addToDo}
            onChange={this.updateDraft}
            draft={draft} />
        </ Container>
        
      )
    }
  }
  
  export default ToDoList