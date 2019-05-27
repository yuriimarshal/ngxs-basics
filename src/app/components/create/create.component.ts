import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {AddUserAction} from '../../actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser(name, email) {
    this.store.dispatch(new AddUserAction({name, email}));
  }

}
