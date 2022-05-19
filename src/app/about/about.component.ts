import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class ABoutComponent implements OnInit {
  public name:string = 'Thuan';
  public a:number = 18;
  public fruit:Array<string> = ['Apple', 'Banana', 'Orange'];

  public cat = [
    {name: 'Bigon', age: 5, state: 1, price: 100},
    {name: 'Bogon', age: 1, state: 0, price: 200},
    {name: 'Bogin', age: 4, state: 1, price: 300},
  ];
  constructor() { }

  ngOnInit(): void {
    console.log('cat = ', this.cat);
  };

  resetInput(): void {
    console.log('reset');
    this.name = '';
  }

}
