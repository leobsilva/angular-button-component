import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonState = 'default' | 'hover' | 'active' | 'disabled' | 'loading';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  
  @Output() clicked = new EventEmitter<void>();

  // Variáveis do Figma
  readonly figmaVariables = {
    colors: {
      secondary: '#7828c8',
      secondaryForeground: '#ffffff',
      black: '#000000'
    },
    typography: {
      tiny: {
        fontFamily: 'Inter',
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px'
      }
    }
  };

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-normal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base'
    };

    const variantClasses = {
      primary: 'bg-[#7828c8] text-[#ffffff] hover:bg-[#6a1fa0] active:bg-[#5d1a8a] disabled:bg-gray-400 disabled:cursor-not-allowed',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed',
      outline: 'border border-[#7828c8] text-[#7828c8] bg-transparent hover:bg-[#7828c8] hover:text-[#ffffff] active:bg-[#6a1fa0] disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed',
      ghost: 'text-[#7828c8] bg-transparent hover:bg-[#7828c8]/10 active:bg-[#7828c8]/20 disabled:text-gray-400 disabled:cursor-not-allowed',
      danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-gray-400 disabled:cursor-not-allowed'
    };

    const widthClass = this.fullWidth ? 'w-full' : '';
    const disabledClass = this.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer';

    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]} ${widthClass} ${disabledClass}`;
  }

  get iconClasses(): string {
    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };

    return `${sizeClasses[this.size]} ${this.iconPosition === 'right' ? 'ml-2' : 'mr-2'}`;
  }

  get loadingClasses(): string {
    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };

    return `${sizeClasses[this.size]} animate-spin`;
  }

  onClick(): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }
}
