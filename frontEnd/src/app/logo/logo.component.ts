import { Component } from '@angular/core';

@Component({
  selector: 'logo',
  template: `<div><img class="bananaImage" src="../../assets/banana-tree.png"></div>`,
  styles: [`
  div{
    padding: 0rem;
    height: 400%;
  }
  .bananaImage {
    width: 5rem;
    padding: 0;
    margin: 0
  }
  `]
  })
export class LogoComponent {
  
}
