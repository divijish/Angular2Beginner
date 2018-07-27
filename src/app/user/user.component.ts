import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<h1>{{title}}</h1>
<h2>{{ name }} </h2>
 <h3> {{ age }} </h3>
<h3> Street:{{ address.street }}<br>
 City: {{ address.city }}<h3>
 <button (click) = "toggleHobbies()">{{ showHobbies?"Hide hobbies": "Show hobbies" }}</button>
<div *ngIf="showHobbies"><ul>
<li *ngFor="let hobby of hobbies">
{{ hobby }}
</li>
</ul>
 </div>
`
})
export class UserComponent {

title: string;
name: string;
id: string;
age: number;
address: Myaddress;
hobbies: string[];
showHobbies: boolean;
buttonName: string;

constructor() {

  this.title = 'Beautiful app';
  this.name = 'Divij';
  this.id = 'divij.shrivastava@gmail.com';
  this.age = 25;
  this.address = {
street: 'T3 Radha',
city: 'Basoda'
};
this.hobbies = ['Movies', 'Reading', 'Dancing'];
this.showHobbies = true;
this.buttonName = 'Hide hobbies';
}

toggleHobbies() {
  console.log('toggle hobbies called');
  if ( this.showHobbies === true ) {
    this.showHobbies = false;
    this.buttonName = 'Show Hobbies';
  } else {
    this.showHobbies = true;
    this.buttonName = 'Hide Hobbies';
  }
}

}

interface Myaddress {
  street: string;
  city: string;
}

