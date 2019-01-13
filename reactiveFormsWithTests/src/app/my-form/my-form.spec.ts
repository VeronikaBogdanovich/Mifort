import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MyFormComponent} from './my-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {User} from '../models/user.interface';

describe('MY FORM', () => {
  let fixture: ComponentFixture<MyFormComponent>;
  let component: MyFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyFormComponent],
      imports: [ReactiveFormsModule, CommonModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;

    component.uType = new User();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call onChanges if form is invalid', () => {
    component.userForm.patchValue({
      name: '',
      email: 'aaa@mail.ru',
      confirm: true,
      age: '12',
      skill: 'f'
    });

    fixture.detectChanges();

    // console.log('component.userForm ->', component.userForm.getRawValue());

    spyOn(component.onChange, 'emit');
    component.onSubmit();

    expect(component.onChange.emit).not.toHaveBeenCalled();
  });

  it('should not call onChanges if form is invalid', () => {
    component.userForm.patchValue({
      name: 'Veronika',
      email: 'aaa@mail.ru',
      confirm: true,
      age: '12',
      skill: 'f'
    });

    fixture.detectChanges();

    spyOn(component.onChange, 'emit');
    component.onSubmit();

    expect(component.onChange.emit).toHaveBeenCalled();
  });
});
