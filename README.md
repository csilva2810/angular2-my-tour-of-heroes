#Resumo do Tutorial

##Capítulo 1
Para declarar um componente no Angular precisamos importar o decorator **Component** do pacote **'@angular/core'** e criar uma classe com o nome do componente.
Outra coisa importante é que para fazer o two-way data binding no angular 2, temos que usar uma sintaxe conhecida como banana na caixa **[()]** e dentro dela usar a diretiva ngModel `[(ngModel)]`. Para poder utilizar essa diretiva é necessário importar o módulo **FormsModule** do pacote **'@angular/forms'**. E declará-lo dentro do array **imports** do nosso módulo. Veja o arquivo **app.module.ts** para entender melhor.

##Capítulo 2
1. **ngfor** - `*ngFor="let hero of heroes` é a sintaxe usada para percorrer um array no angular2
2. Para fazer o bind de um evento do componente precisamos usar a sintaxe `(click)="metodoDoComponente()"`, com isso conseguimos chamar um método do componente para executar alguma ação.
3. **ngIf** - Diretiva utilizada para exibir uma parcela do DOM somente se a condição dentro dela for atendida. É bom tomar cuidado ao utilizar pois ela remove e adiciona o elemento no DOM e isso acaba sendo custoso para o browser e pode impactar na performance do app. Para ler mais sobre diretivas estruturais como **ngIf** e **ngFor**, seguir o link para a [documentação](https://angular.io/docs/ts/latest/guide/structural-directives.html) oficial do angular.
4. **Class Binding** - É possível aplicar classes em qualquer elemento para podermos aplicar determinado estilo de acordo com alguma condição. `[class.selecionado]="1 > 0"`. Nesse caso vamos aplicar a classe **selecionado** se a expressão **1 > 0** retornar **true**