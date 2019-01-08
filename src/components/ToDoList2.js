import React, {Component} from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
border-radius: 10px;
background: red;
padding: 5px;
color: white;
margin-bottom: 10px
`

class ToDoItem extends Component {
    render() {
        const {did} = this.props
        const {remove} = this.props

        return (
            <div>
                {did.text}
                <button onClick={remove}>Remove</button>
            </div>
        )
    }
}

class Buttons extends Component {
    render() {
        const {updater} = this.props

        return (
            <ButtonStyle onClick={updater}>Click</ButtonStyle>
        )
    }
}


class ToDoList extends Component {
    state = {
        tasks: [
            { text: "Buy bread"}, 
            { text: "Buy cheese"}
    ],
        draft: ""
    }


    updateDraft = event => {
        this.setState({draft: event.target.value})
      }

    updateTasks = () => {
        const {tasks, draft} = this.state
        const list = tasks
        list.push({text: draft})
        this.setState({tasks: list, draft: ""})
    }

      removeTask(event) {
        const {tasks} = this.state
        let filteredTasks = tasks.filter(item => item !== event.target.value)
        this.setState({people: filteredTasks});
        // })});
    }

    render() {
        const {tasks, draft} = this.state

        return(
            <div style={{margin: "25px", padding: "5px"}}>
               {tasks.map(job => <ToDoItem did={job} remove={this.removeTasks}/>)}
               <input type="text" onChange={this.updateDraft} value={draft}></input>
               <Buttons updater={this.updateTasks} />
               
            </div>
        )
    }
}

export default ToDoList