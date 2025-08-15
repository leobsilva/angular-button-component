import { Component } from '@angular/core';
import { ButtonComponent } from './button.component';
import { ButtonDemoComponent } from './button-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, ButtonDemoComponent],
  template: `
    <app-button-demo></app-button-demo>
  `
})
export class AppComponent {
  title = 'Button Component Demo';
}
