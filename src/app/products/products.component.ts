import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[
    {name:'x'},
    {name:'y'},
    {name:'z'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
