# Componente de Botão Angular

Componente de botão desenvolvido em Angular com Tailwind CSS, baseado no design do Figma com as variáveis exatas.

## 🎨 Design System

### Variáveis do Figma
- **Primary Color**: `#7828c8`
- **Secondary Foreground**: `#ffffff`
- **Black**: `#000000`
- **Font**: Inter Regular, 12px, 400 weight
- **Line Height**: 16px

## 📦 Instalação

1. Certifique-se de que o Tailwind CSS está configurado no seu projeto Angular
2. Copie os arquivos do componente para o seu projeto
3. Importe o componente onde necessário

## 🚀 Uso Básico

```typescript
import { ButtonComponent } from './button.component';

@Component({
  imports: [ButtonComponent],
  // ...
})
```

```html
<!-- Botão básico -->
<app-button>Clique aqui</app-button>

<!-- Com variante -->
<app-button variant="primary">Botão Primário</app-button>

<!-- Com tamanho -->
<app-button size="lg">Botão Grande</app-button>
```

## 🎛️ Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Variante visual do botão |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho do botão |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `fullWidth` | `boolean` | `false` | Largura completa |
| `icon` | `string` | `undefined` | Nome do ícone |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Posição do ícone |

## 🎨 Variantes

### Primary
```html
<app-button variant="primary">Botão Primário</app-button>
```

### Secondary
```html
<app-button variant="secondary">Botão Secundário</app-button>
```

### Outline
```html
<app-button variant="outline">Botão Outline</app-button>
```

### Ghost
```html
<app-button variant="ghost">Botão Ghost</app-button>
```

### Danger
```html
<app-button variant="danger">Botão Perigo</app-button>
```

## 📏 Tamanhos

### Small (sm)
```html
<app-button size="sm">Pequeno</app-button>
```

### Medium (md) - Padrão
```html
<app-button size="md">Médio</app-button>
```

### Large (lg)
```html
<app-button size="lg">Grande</app-button>
```

## 🔄 Estados

### Loading
```html
<app-button [loading]="true">Carregando...</app-button>
```

### Disabled
```html
<app-button [disabled]="true">Desabilitado</app-button>
```

### Full Width
```html
<app-button [fullWidth]="true">Largura Completa</app-button>
```

## 🎯 Ícones

### Ícone à Esquerda
```html
<app-button icon="plus" iconPosition="left">
  Adicionar Item
</app-button>
```

### Ícone à Direita
```html
<app-button icon="arrow-right" iconPosition="right">
  Próximo
</app-button>
```

## 📡 Eventos

### Click
```html
<app-button (clicked)="onButtonClick()">
  Clique aqui
</app-button>
```

```typescript
onButtonClick(): void {
  console.log('Botão clicado!');
}
```

## 🎨 Personalização

### Cores Customizadas
O componente usa as cores exatas do Figma através do Tailwind CSS:

```css
/* Cores do design system */
--primary: #7828c8;
--secondary-foreground: #ffffff;
--black: #000000;
```

### Tipografia
```css
/* Fonte Inter do Figma */
font-family: 'Inter', sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 16px;
```

## 📱 Responsividade

O componente é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Mobile**: Ajustes automáticos de tamanho e espaçamento
- **Tablet**: Layout otimizado para telas médias
- **Desktop**: Experiência completa com todas as funcionalidades

## 🎭 Animações

O componente inclui animações suaves:

- **Hover**: Elevação sutil e mudança de cor
- **Active**: Feedback visual ao clicar
- **Loading**: Spinner animado
- **Focus**: Outline para acessibilidade

## ♿ Acessibilidade

- Suporte completo a navegação por teclado
- Estados de foco visíveis
- Atributos ARIA apropriados
- Contraste adequado para leitores de tela

## 🧪 Testes

Para testar o componente, use o componente de demonstração:

```typescript
import { ButtonDemoComponent } from './button-demo.component';
```

## 📄 Licença

Este componente foi desenvolvido seguindo as especificações do design do Figma e está disponível para uso em projetos Angular.

## 🤝 Contribuição

Para contribuir com melhorias:

1. Mantenha a consistência com o design system
2. Use as variáveis do Figma
3. Teste em diferentes dispositivos
4. Documente novas funcionalidades

