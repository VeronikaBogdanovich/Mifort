import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

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
  skills: string[];
  @Output() onChange: EventEmitter<{ name: string, value: any }> = new EventEmitter();
  private onChangeControlSubList: Array<Subscription> = [];

  constructor(private fb: FormBuilder) {
  }

  @Input() set name(value: string) {
    this.userForm.get('name').setValue(value);
  }

  @Input('skills') set skillsSet(value: string) {
    this.userForm.get('skills').setValue(value);
  }

  @Input() set email(value: string) {
    this.userForm.get('email').setValue(value);
  }

  @Input() set age(value: string) {
    this.userForm.get('age').setValue(value);
  }

  @Input() set confirm(value: string) {
    this.userForm.get('confirm').setValue(value);
  }

  ngOnInit() {
    this.skills = ['1', '2', '3', '4', '5'];
    this.initForm();
    this.formSubscribe();
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
  }

  ngOnDestroy(): void {
    this.onChangeControlSubList.forEach(item => {
      item.unsubscribe();
    });
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      skills: [null, [Validators.required, Validators.pattern(/[1-5]/)]],
      name: ['', [Validators.required, Validators.pattern(/[А-я]/), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern(/[0-150]/)]],
      confirm: [false, [Validators.required]]
    });
  }

  private formSubscribe() {
    for (const item in this.userForm.controls) {
      const control: AbstractControl = this.userForm.get(item);

      const sub = control.valueChanges.subscribe(value => {
        this.onChange.emit({
          name: item,
          value: value
        });
      });

      this.onChangeControlSubList.push(sub);
    }
  }
}
