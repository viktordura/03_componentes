import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ]


  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  public persons = [
    { val: 'Daniela Parra', isChecked: true },
    { val: 'Victor Hugo Duran Bolaños', isChecked: false },
    { val: 'Sara Isabel Duran Bolaños', isChecked: true }
  ];

  onClick(item){
    console.log(item)
  }

  verData() {
    console.log(this.data)
  }

}
