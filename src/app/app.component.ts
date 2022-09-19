import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'card-challenge';
  public formSubmitted: boolean;

  @ViewChild('f') cardForm: NgForm;

  onSubmit(ngForm: NgForm) {
    this.formSubmitted = true;
  }

  resetForm(){
    this.formSubmitted = false;
  }

  onCardNumberEnter(inputEvent: any) {
    let cardNumber = inputEvent.target.value;

    const cardNumberWithoutSpace = cardNumber.replaceAll(' ', '');
    let cardNumberWithSpace = '';

    for (let i = 0; i < cardNumberWithoutSpace.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        cardNumberWithSpace += ' ' + cardNumberWithoutSpace.charAt(i);
      } else {
        cardNumberWithSpace += cardNumberWithoutSpace.charAt(i);
      }
    }
    this.cardForm.form.patchValue({ cardNumber: cardNumberWithSpace });
  }
}
