import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `<div><h1>The Banana Stand</h1></div>`,
  styles: [`
  h1{
    padding: 1rem;
    margin: auto;
    color: #d7b36a;
    font-size: 3rem;
    -webkit-text-stroke: black 0.1rem;
  }
  div{
    padding: 0rem;
    vertical-align: center;
    height: 100%;
    display: inline-block;
  }
  `]
  })
export class HeaderComponent {
  
}
