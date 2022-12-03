import{createSelector,createFeatureSelector}from'@ngrx/store'
import{TasksState}from'../states/tasks.state'

export const selectTasks = createFeatureSelector<TasksState>("tasks");

//export const tasks=createSelector(taskState,(tasksarr:TasksSate)=>tasksarr.tasks)
export const taskSelector = createSelector(
    selectTasks,
    (state: TasksState) => state.tasks
  );