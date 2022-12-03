import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppComponent } from "src/app/app.component";
import { State } from "../states/app.state";
import*as taskReducer from'../reducers/task.reducer'
export const reducers: ActionReducerMap<State> = {
  tasks: taskReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];