import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Password Generator';
  length!: number;

  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  password: string = '';

  handleUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  handleUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  handleUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  handleLength(e: any) {
    this.length = parseInt(e.target.value);
  }

  handleClick() {
    const numbers = '0123456789';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChar = '';
    let newPassword = '';

    if (this.includeNumbers) {
      validChar += numbers;
    }

    if (this.includeLetters) {
      validChar += characters;
    }

    if (this.includeSymbols) {
      validChar += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const random = Math.floor(Math.random() * validChar.length);
      newPassword += validChar[random];
    }

    this.password = newPassword;
  }
}
