import {UserModel} from '../models/user.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddUserAction} from '../actions/user.action';

export class UserStateModel {
  users: UserModel[];
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: []
  }
})
export class UserState {

  @Selector()
  static getUsers(state: UserStateModel) {
    return state.users;
  }

  @Action(AddUserAction)
  add({getState, patchState}: StateContext<UserStateModel>, {payload}: AddUserAction) {
    const state = getState();
    patchState({
      users: [...state.users, payload]
    });
  }
}
