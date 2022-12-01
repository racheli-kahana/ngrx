import { initialTaskState, TasksState } from "../states/tasks.state"
import { taskActions } from "../actions/task.action"

export const taskReducer = (
  state = initialTaskState,
  action: taskActions
): TasksState => {
  switch (action.type) {
    case '[TASK]Add SubTask': {
      let newArr = state.tasks;
      newArr.find(a => a.id == action.payload.id)?.subTasks?.push(action.payload.task)
      return {
        ...state,
        tasks: newArr
      }
    }
    case '[TASK]Delete SubTask': {
      let newArr = state.tasks;
      let j;
      newArr.forEach((a,i) => {
        j = a.subTasks?.findIndex(b=>b.id==action.payload);
        if(j&&j>-1)
        newArr[i].subTasks?.splice(j,1);
        });

      return {
        ...state,
        tasks:newArr
      }
    }
    default :{return state}
  }
}






