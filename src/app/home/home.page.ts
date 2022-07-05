import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
newtodo='foo';
todos=[];
  constructor() {}
  add(){
    this.todos.push(this.newtodo);
    this.newtodo='';
    console.log(this.todos);
  }

}
