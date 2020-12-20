import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoryContainer from './Containers/CategoryContainer'
import TaskContainer from './Containers/TaskContainer'

class App extends React.Component {

  state = {
    Categories: CATEGORIES,
    api: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/tasks")
      .then(resp => resp.json())
      .then(taskArray => {
        this.setState(prevState => ({ Categories: prevState.Categories, api: taskArray }))
      })
  }

  render() {
    // console.log(this.state.api)
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryContainer categories={this.state.Categories} />
        <TaskContainer categories={this.state.Categories} tasks={this.state.api} key={this.state.api.id}/>
      </div>
    );
  }
}


export default App;
