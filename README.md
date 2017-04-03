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
Aqui começamos a separar melhor as responsabilidades de cada parte do App. Exportamos os detalhes do Herói para um novo componente **hero-detail.component.ts**. Esse componente tem uma propriedade de Input, ou seja, ela é passada para ele pelo componente pai.
<br>
Para aceitar propriedades de componentes pais, precisamos declarálas dentro do componente com a anotação **@Input()**, por exemplo: `@Input() hero: Hero`. É importante não esquecer de importar o módulo **Input** do **@angular/core**.

## Capítulo 4 e 5
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

## Capítulo 6
Rotas são o que definem a navegação pelo App. O angular tem um módulo de rotas que pode ser configurado a partir de algumas do objeto **RouterModule** do pacote **@angular/router**. Para começar a configurar as rotas do nosso App, precisamos colocar a tag `<base href="/">` dentro do head da nossa página. A partir daí, podemos importar o RouterModule dentro do array de imports do nosso **app.module** chamando o método **forRoot** e passando um array de objetos que representam o caminho da rota e o componente que está vinculado à esse caminho.
Após configurarmos as rotas do nosso app, podemos começar a declará-las no nosso HTML usando as diretivas **routerLink** e **router-outlet**. A **routerLink** é aplicada em elementos clicáveis apontando a rota que queremos navegar. Já a **router-outlet** serve para que o Angular renderize o componente vinculado à rota.
<br>
Como nosso **app.component** está configurado com com as diretivas **routerLink** e **router-outlet** chamamos esse componente de *Router Component* pois ele serve para prover navegação em nosso App.

### Redirect Routes
Também é possível definir rotas que serão redirecionadas para outros componentes, para isso precisamos criar um objeto de rota com a propriedade **redirectTo** e **patchMatch** por exemplo: `{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }`.
<br>
Aqui estamos dizendo para nosso Router que quando o caminho da rota estiver vazio ('') ele deve redirecionar para a rota */dashboard*. A propriedade **patchMatch** como *full* diz ao router que ele só deve fazer o redirect quando o caminho da rota for completamente igual ao caminho especificado. [Leia mais](https://angular.io/docs/ts/latest/guide/router.html#!#redirect).

### Rotas Dinâmicas (Parametrizáveis).
Para criar um rota parametrizável temos que usar a notação **'caminho/:parâmetro'**. Então quando quisermos acessar uma rota desse tipo via **routerLink** devemos passar um array informando o caminho e o parâmetro. Por exemplo `[routerLink]="['/detail', '1']"`. O **routerLink** irá gerar um link para a url *'detail/1'*. Para termos acesso ao parâmetro em nosso componente precisamos importar o Objeto **ActivatedRoute** do pacote **'@angular/route'**. Como o **ActivatedRoute** importado devemos injetá-lo no construtor do nosso componente `constructor(private route: ActivatedRoute) {}` e então conseguimos acesso aos parâmetros da nossa rota através do atributo params do objeto route `this.route.params`.

### Objeto Router
Também conseguimos navegar entre as rotas do nosso App através do objeto **Router** do pacote **@angular/router**. Podemos usar o método router.navigate(['/caminho', 'parâmetro']). Além disso o router nos oferece muitas opções [avançadas](https://angular.io/docs/ts/latest/guide/router.html)

### Routing Module
Começamos a escrevar as rotas da nossa aplicação diretamente no nosso arquivo **app.module**, porém conforme nossas rotas vão crescendo esse arquivo começa a ficar muito extenso e ruim de dar manutenção. O Angular nos ofereçe uma maneira de definir nossas rotas em arquivo separado somente para essa finalidade. Podemos criar um Routing Module onde vamos definir todas as nossas rotas e exportar esse módulo para que possamos exportálo em nosso **app.module** e usá-lo em nosso array de imports. Assim conseguimos organizar melhor as rotas da nossa aplicação.

### Pipes
Pipes são basicamente formatadores de dados para nossas views. Podemos utilizá-los dentro das nossas *"binding expressions"* para formatar dados. O Angular já provê pipes para formatação de datas, números, strings etc.
A sintaxe para utilizarmos em nossos templates é: `{{ hero.name | uppercase }}`.
Nesse caso estamos transformando a variável *hero.name* em letras maiúsculas.
Também podemos criar nossos próprios [pipes](https://angular.io/docs/ts/latest/guide/pipes.html).