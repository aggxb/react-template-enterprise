# 🎨 Design System & Cores (Cheat Sheet)

Este projeto utiliza variáveis CSS injetadas nativamente no motor do **Tailwind v4**. 

A grande vantagem desta arquitetura é que as cores respondem **automaticamente** ao tema da aplicação (Light/Dark Mode gerido pelo Mantine). 
**Regra de Ouro:** Você nunca precisará utilizar o prefixo `dark:` nas classes do Tailwind.

---

### 🔲 Fundos (Backgrounds)
Utilize o prefixo `bg-` para aplicar estas cores:

* `bg-app`: Fundo geral e principal da aplicação (Base neutra).
* `bg-surface`: Fundo de elementos sobrepostos (Cards, Modais, Dropdowns e Inputs).
* `bg-brand`: Cor primária da marca. Ideal para botões principais.
* `bg-brand-hover`: Cor primária com contraste ajustado para interação de hover.

### 🔤 Textos (Typography)
Utilize o prefixo `text-` para aplicar estas cores:

* `text-content`: Cor de texto principal para leitura (Títulos e parágrafos de destaque).
* `text-content-muted`: Cor de texto secundário, legendas ou placeholders (Acinzentado).
* `text-brand`: Texto na cor primária da marca (Ideal para links e destaques visuais).

### ➖ Bordas e Linhas (Borders)
Utilize o prefixo `border-` para colorir. 
*⚠️ Lembre-se: Para a borda aparecer, você deve usar a classe utilitária `border` antes.*

* `border-line`: Cor padrão sutil para divisórias, contornos de cards, tabelas e inputs. 

---

### 💡 Exemplo Prático de Uso no React

```tsx
export function CardExemplo() {
  return (
    // Fundo de card (surface) com borda padrão (line)
    <div className="bg-surface border border-line p-6 rounded-xl">
      
      {/* Texto com alto contraste automático */}
      <h2 className="text-content text-xl font-bold">Título do Card</h2>
      
      {/* Texto secundário apagado */}
      <p className="text-content-muted mt-2">
        Esta é uma descrição secundária que não rouba a atenção.
      </p>
      
      {/* Botão usando as cores da marca */}
      <button className="bg-brand hover:bg-brand-hover text-white mt-4 px-4 py-2 rounded-md transition-colors">
        Confirmar Ação
      </button>
      
    </div>
  );
}