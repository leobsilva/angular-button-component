import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.css']
})
export class ButtonDemoComponent {
  loadingStates: { [key: string]: boolean } = {};
  
  // Dados para demonstração
  buttonVariants = [
    { variant: 'primary', label: 'Primary Button', color: '#7828c8' },
    { variant: 'secondary', label: 'Secondary Button', color: '#6b7280' },
    { variant: 'outline', label: 'Outline Button', color: '#7828c8' },
    { variant: 'ghost', label: 'Ghost Button', color: '#7828c8' },
    { variant: 'danger', label: 'Danger Button', color: '#dc2626' }
  ];

  buttonSizes = [
    { size: 'sm', label: 'Small' },
    { size: 'md', label: 'Medium' },
    { size: 'lg', label: 'Large' }
  ];

  onButtonClick(variant: string): void {
    console.log(`${variant} button clicked!`);
    
    // Simular loading
    this.loadingStates[variant] = true;
    setTimeout(() => {
      this.loadingStates[variant] = false;
    }, 2000);
  }

  onIconButtonClick(type: string): void {
    console.log(`${type} icon button clicked!`);
  }

  onFullWidthClick(): void {
    console.log('Full width button clicked!');
  }
}
