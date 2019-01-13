import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Email} from '../models/user.interface';
import {SkillsEnum} from '../models/skills.model';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styles: [`
    .error {
      float: right
    }

    label {
      line-height: 30px;
      font-weight: 100;
      text-align: left;
    }
  `]
})
export class MyFormComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  skills = Object.keys(SkillsEnum).reduce((arr, key) => {
    if (!arr.includes(key)) {
      arr.push(SkillsEnum[key]);
    }
    return arr;
  }, []);
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() user: any;
  @Input() uType: any;
  private onChangeControlSubList: Array<Subscription> = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();

    this.userForm.valueChanges.subscribe(value => this.onChange.emit(value));
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];
    const result = control.invalid && control.touched;
    return result;
  }

  onSubmit() {
    const controls = this.userForm.controls;
    if (this.userForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this.onChange.emit(this.userForm.value);
  }

  ngOnDestroy(): void {
    this.onChangeControlSubList.forEach(item => {
      item.unsubscribe();
    });
  }

  getTypes() {
    return Object.keys(this.userForm.controls).map(key => {
        let type = 'string';

        if (key === 'email') {
          type = 'email';
        }

        if (key === 'skill') {
          type = 'skill';
        }

        if (key === 'confirm') {
          type = 'confirm';
        }

        if (key === 'age') {
          type = 'number';
        }

        return {name: key, type: type};
      }
    );
  }

  private initForm(): void {
    if (this.uType) {
      this.userForm = this.fb.group({});

      Object.keys(this.uType).forEach(key => {
        if (key === 'email') {
          this.userForm.addControl(key, new FormControl(
            this.user && this.user[key] && (this.user[key] as Email).local + '@' + (this.user[key] as Email).domain, [Validators.required]));
          return;
        }

        this.userForm.addControl(key, new FormControl(this.user && this.user[key], [Validators.required]));
      });
    }
  }
}
