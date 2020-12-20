import React from 'react'
import TaskComponent from '../Components/TaskComponent'

class TaskContainer extends React.Component {

  state = {
    // categories: this.props.categories,
    taskList: this.props.tasks
  }


renderTasks = () => {
    return this.props.tasks.map(task => <TaskComponent task={task} key={task.id} />)
  }

render(){
  console.log(this.state)
  return (
    <div className="tasks">
      <h5>Tasks</h5>
      {this.renderTasks()}
    </div>
  )

}

}

export default TaskContainer