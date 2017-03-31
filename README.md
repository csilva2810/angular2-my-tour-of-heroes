# Resumo do Tutorial

## Capítulo 1
Para declarar um componente no Angular precisamos importar o decorator **Component** do pacote **'@angular/core'** e criar uma classe com o nome do componente. 
<br>
Outra coisa importante é que para fazer o two-way data binding no angular 2, temos que usar uma sintaxe conhecida como banana na caixa **[()]** e dentro dela usar a diretiva ngModel `[(ngModel)]`. Para poder utilizar essa diretiva é necessário importar o módulo **FormsModule** do pacote **@angular/forms** e declará-lo dentro do array **imports** do nosso módulo. Veja o arquivo **app.module.ts** para entender melhor.

## Capítulo 2
**ngfor** - `*ngFor="let hero of heroes` é a sintaxe usada para percorrer um array no angular2. 
<br>
Para fazer o bind de um evento do componente precisamos usar a sintaxe `(click)="metodoDoComponente()"`, com isso conseguimos chamar um método do componente para executar alguma ação. 
<br>
**ngIf** - Diretiva utilizada para exibir uma parcela do DOM somente se a condição dentro dela for atendida. É bom tomar cuidado ao utilizar pois ela remove e adiciona o elemento no DOM e isso acaba sendo custoso para o browser e pode impactar na performance do app. Para ler mais sobre diretivas estruturais como **ngIf** e **ngFor**, seguir o link para a [documentação](https://angular.io/docs/ts/latest/guide/structural-directives.html) oficial do angular. 
<br>
**Class Binding** - É possível aplicar classes em qualquer elemento para podermos aplicar determinado estilo de acordo com alguma condição. `[class.selecionado]="1 > 0"`. Nesse caso vamos aplicar a classe **selecionado** se a expressão **1 > 0** retornar **true**

## Capítulo 3
Aqui começamos a separar melhor as responsabilidades de cada parte do layout. Exportamos os detalhes do Herói para um novo componente **hero-detail.component.ts**. Esse componente tem uma propriedade de Input, ou seja, ela é passada para ele pelo componente pai.
<br>
Para aceitar propriedades de componentes pais, precisamos declarálas dentro do componente com a anotação **@Input()**, por exemplo: `@Input() hero: Hero`. É importante não esquecer de importar o módulo **Input** do **@angular/core**.

## Capítulo 4
Aqui vamos começar a trabalhar com Services. Eles são geralmente responsáveis por executar a comunicação com a nossa fonte de dados, servindo como uma interface de acesso entre um componente e o servidor de dados da aplicação. Serviços também são úteis fazer o compartilhamento de dados entre componentes.
<br>
Usamos também o Decorator **Injectable()**. Precisamos usar esse Decorator para que consigamos aplicar Injeção de Dependência nos nossos componentes que vão consumir esse serviço.
<br>
Nunca devemos utilizar o **new** para criar uma instância de um serviço. Por alguns motivos: 
<br>

1. Usando **new** o componente terá que saber como criar a instância do serviço. Uma vez que o construtor do serviço for alterado, todos os componentes que instanciam esse serviço terão que ser alterados.
2. Quando usamos a keyword **new** estamos literalmente criando uma nova instância de objeto. Mas e se o serviço cria uma cache com os dados e compartilha essa cache com outros componentes? Ao criar uma nova instância estamos quebrando esse reaproveitamento.

Então a melhor maneira de usar um serviço em um componente é injetando esse serviço no seu construtor. `constructor(private service: HeroService) {}`. Assim criamos um atributo 'service' privado em nosso componente e o Angular por sua vez cuida de fornecer uma instância do objeto **HeroService** para nosso componente. Esse é o conceito de [Injeção de Dependências](https://angular.io/docs/ts/latest/guide/dependency-injection.html).

### Ciclo de Vida do Componente
Todo componente possui um ciclo de vida no Angular. Nós podemos implementar alguns métodos de ciclo de vida de nossos componentes para executarmos alguma lógica. Por exemplo: Em nosso **app.component** estamos implementando o método OnInit do ciclo de vida para consumir nosso **HeroService** e armazenar os nosso Heroes no array **heroes**. Para saber mais consulte a documentação sobre os [eventos de ciclo de vida](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html).

