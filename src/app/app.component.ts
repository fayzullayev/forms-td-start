import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  defaultQuestion = 'pet';
  public answer: string = '';

  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: '',
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'odilfayz22gmail.com',
    //   },
    //   secret: 'teacher',
    //   questionAnswer: 'qwertyuiop',
    //   gender: 'female',
    // });

    this.form.form.patchValue({
      userData: {
        email: 'exdcfvtghbunjimk,l.;',
      },
    });
  }

  onSubmit() {
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secret = this.form.value.secret;
    this.user.questionAnswer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;

    this.form.reset();
  }
}
