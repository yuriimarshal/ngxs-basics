import {UserModel} from '../models/user.model';

export class AddUserAction {
  static readonly type = '[User] Add';

  constructor(public payload: UserModel) {
  }
}
