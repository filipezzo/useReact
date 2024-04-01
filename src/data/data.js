export const fundamentals = [
  {
    id: 1,
    title: "Arrow Functions",
    content:
      "Forma mais concisa de escrever uma função e não possue aquele tal do this. ",
  },

  {
    id: 2,
    title: "Objetos",
    content:
      "São estruturas de dados  que permitem armazenar pares de chave-valor. Eles são usados para representar entidades  com propriedades e métodos.",
  },

  {
    id: 3,
    title: "Desestruturação",
    content:
      "É uma maneira conveniente de extrair valores de arrays ou objetos em variáveis separadas. É amplamente utilizada e prática.",
  },

  {
    id: 4,
    title: "Spread Operator ",
    content:
      "...usado para espalhar elementos de um array || propriedades de um objeto. Muito utilizado no React. Será que vc viu isso no nosso site? 👀 ",
  },

  {
    id: 5,
    title: "Promises",
    content:
      "Não é a promessa de ir na academia mas sim de uma resposta (sucesso ou falha) de uma operação assíncrona. ",
  },

  {
    id: 6,
    title: "Imperativo VS Declarativo",
    content:
      "Paradigmas de programação no qual imperativo você foca no como fazer algo e o declarativo no que fazer.",
  },
];

export const posts = [
  {
    id: crypto.randomUUID(),
    title: "Componentes 🧩",
    subtitle: "Indo além do <Componente />",
    content: {
      title: "Desvendando os Segredos dos Componentes",
      paragraphs: [
        {
          p: "Em termos simples, os componentes em React são como blocos de construção modulares: são funções puras que retornam JSX, abstraindo sua própria lógica, estilos e marcação. Essa abstração simplifica o desenvolvimento e a manutenção do código. Como pequenos legos que juntos constroem arquiteturas complexas.",
        },

        {
          p: "O retorno desse JSX é compilado pelo babel  e transformado em uma chamada da função React.createElement()  resultando em um objeto que descreve precisamente o que deve ser renderizado na interface do usuário.",
        },

        {
          p: "Então quando o React chama um componente (<Componente />) chamamos isso de instanciar. O interessante é que cada uma dessas chamadas de componente (instâncias) possue seu próprio estado - state e lifecycle - effect. Toda vez que um componente é renderizado, uma nova instância desse componente é criada.",
        },
        {
          p: "Mil maravilhas né? e é isso mesmo. Componente vicia..mas tome cuidado para não componentizar tudo. No começo pode ser dificil de entender, mas não desista essa abstração é linda e irá te ajudar muito. ",
        },
      ],
      image:
        "https://miro.medium.com/v2/resize:fit:3196/format:webp/1*rA9t2B8J7ilWn_r0mvSVTA.jpeg",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Props 🧠",
    subtitle: "Comunicação entre componentes",
    content: {
      title: "A importância das Propriedades",
      paragraphs: [
        {
          p: "As props são como os argumentos de uma função: fornecem informações para o componente funcionar. Imagine um componente Button que recebe uma prop text para definir o texto do botão. Ao usar o componente, você pode passar diferentes valores para a prop text, criando botões com diferentes textos.",
        },
        {
          p: "É importante lembrar que as props são imutáveis. Isso significa que, uma vez definidas, não podem ser alteradas dentro do componente filho. O React usa um fluxo unidirecional de dados (one-way data flow). Isso significa que os dados fluem apenas do componente pai para o componente filho. O filho não pode modificar diretamente as props que recebe.",
        },
        {
          p: "Ok, mas como eu acesso elas? O React passa as props como um objeto, o que torna simples acessá-las com props.algo. Você também pode {desestruturá-las} diretamente, que é a minha solução favorita.",
        },

        {
          p: "Por último vale a pena falar sobre a propriedade children. Ela é especial e permite que você acesse o conteúdo entre a abertura e o fechamento de um componente. Isso é útil para renderizar elementos dinâmicos dentro de um componente, criar layouts e é uma das soluções para o problema de prop drilling (veremos em outro post).",
        },
      ],
      image:
        "https://res.cloudinary.com/ddxwdqwkr/image/upload/f_auto/v1614961728/patterns.dev/render-props.jpg",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "State 📸",
    subtitle: "const [king, setKing] = useState('👑')",
    content: {
      title: "O Conceito que domina tudo",
      paragraphs: [
        {
          p: "O state é como uma screenshot do nosso componente em um determinado momento. Ele armazena os dados desse componente e desencadeia uma nova renderização caso seu valor seja modificado. Em outras palavras, é o state que controla o re-rendering da nossa interface do usuário, mantendo esse valor consistente entre as renderizações.",
        },
        {
          p: "Em componentes funcionais utilizamos o state atráves do hook próprio do React chamado useState que nos entrega  uma desestruturação de um array e nos retorna o valor e uma função que atualiza esse valor (e causa re-render).",
        },
        {
          p: "A sintaxe é  const [valor, setValor] = useState('valor inicial')",
        },

        {
          p: "Por fim, o state não é apenas mais uma ferramenta, mas sim o coração de todo o processo. Quando dominamos o uso do state, estamos no controle. Considere este post como uma breve introdução, pois o mundo do state(estado) é vasto e você precisa explorá-lo. Fica uma dica 👀 state management, custom hooks/states",
        },
      ],
      image:
        "https://blog.openreplay.com/images/steps-to-develop-global-state-for-react-with-hooks-without-context/images/hero.jpg",
    },
  },

  {
    id: crypto.randomUUID(),
    title: "Efeitos Colaterais",
    subtitle: "Eventos & useEffect ",
    content: {
      title: "A simplicidade do React VS Realidade do Mundo",
      paragraphs: [
        {
          p: "Até esse ponto, a gente viu o quão lindo e simples é o React na sua forma mais pura. Você encapsula UI, state e os eventos nos componentes, faz essa composição e passa data para baixo da nossa árvore de UI via props. Lindo né?",
        },

        {
          p: "Mas no mundo real, muitas vezes a gente precisa conversar com servidores, interagir diretamente com  o DOM e utilizar a API do browser para setar timeouts, localstorage ou seja, conversar com 'coisas' que geram efeitos colaterais.",
        },

        {
          p: "Portanto, já que vamos sair do nosso lindo mundo eu gostaria de setar algumas regras. const [regras, setRegras] = useState('✈️')",
        },

        {
          p: "Regra #0 (🤓) - Quando um componente renderiza, ele o deve fazer sem encontrar nenhum efeito colateral (fn puras) mas a realidade do mundo é dura.",
        },

        {
          p: "Regra #1 - Se o efeito colateral é gerado por um evento do usuario, coloque-o em um eventhandler. ",
        },
        {
          p: "Exemplo seria setar um localstorage com o modo dark/light após o úsuario clicar no seu modo preferido. Pq isso funciona? Pq o o que está dentro da função do eventhandler não importa para o React & o mesmo não o atrapalha no Render daquele componente, o mantendo puro.",
        },

        {
          p: "Regra #2 - Se o efeito colateral está syncando seu componente com algum sistema externo, use o useEffect ",
        },
        {
          p: "O useEffect funciona tirando o efeito colateral do fluxo de render do React e o executando com um delay (somente após o componente tenha renderizado). Um exemplo claro seria puxar dados de uma API assim que nossa pag carrega alimentando nosso front-end de forma dinamica.",
        },
      ],
      image:
        "https://i1.wp.com/blog.alexdevero.com/wp-content/uploads/2021/05/03-05-21-react-useeffect-hook-made-simple-blog.jpg?w=1024&ssl=1",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Renderização ⚛️",
    subtitle: "view = fn(state)",
    content: {
      title: "React & Render ",
      paragraphs: [
        {
          p: "React na sua forma mais pura é uma biblioteca para construção de interfaces. Isso é tão verdade que podemos criar uma fórmula ",
        },
        {
          p: "view = fn(state) ",
        },

        {
          p: "ps: se um dia o React me sustentar tatuarei essa fórmula 😄",
        },
        {
          p: "Para verificar e manter em sincronia o que é pintado na tela (view), a função (componente) re-renderiza sempre que seu argumento (state) mudar. Mas vamos voltar um pouco, o que é renderização?",
        },

        {
          p: "Colocando de forma simples, renderização é apenas um termo chique para dizer que o React chama seu componente com a intenção de atualizar a view",
        },

        {
          p: "Quando iniciamos nosso app, o React faz um render inicial. Mas somente isso não seria interessante, não é mesmo? Afinal de contas, o React tem que honrar o seu nome e ser reativo a mudanças. Agora vem a pergunta: quando o React re-renderiza?",
        },

        {
          p: "A resposta é simples. O React Re-renderiza toda vez que seu state muda.",
        },
      ],
      image:
        "https://media.licdn.com/dms/image/D5612AQEv1a4TJDmvTg/article-cover_image-shrink_720_1280/0/1709224996047?e=1717027200&v=beta&t=vKqsQimOasedw0QY-Kp2GrmWiCijS6vs4GZci6yRSmI",
    },
  },

  {
    id: crypto.randomUUID(),
    title: "Atualização do View ",
    subtitle: "Você achava que era 🪄,  né?",
    content: {
      title: "Algoritmo de Reconciliação",
      paragraphs: [
        {
          p: "O responsável por essa 🧝🪄 é o seu algoritmo de reconciliação. Ele possui 2 processos conhecidos como Diffing & Reconciliation",
        },

        {
          p: "Quando o React re-renderiza um componente, ele gera uma nova árvore de interface do usuário (anteriormente conhecida como DOM virtual) e a compara com a versão anterior para detectar diferenças causadas por mudanças no estado. Esse processo de comparação é chamado de Diffing ",
        },

        {
          p: "Após o diffing realizar seu trabalho, o React aplica essas diferenças no DOM real. Esse processo é chamado de Reconciliation.",
        },

        {
          p: "Você deve estar se perguntando 'ok mas por que tudo isso?'. Ao minimizar as atualizações no DOM real apenas para as partes que realmente mudaram, o React oferece um desempenho superior, mesmo em aplicações complexas. Portanto, ao desenvolver com React, é importante estar ciente desses conceitos para evitar problemas & saber como realmente as coisas acontecem. Espero não ter acabado com sua magia 😄",
        },
      ],
      image:
        "https://img2.teletype.in/files/1d/95/1d95dc14-c70c-4e19-8c4c-a66341ce276f.png",
    },
  },

  {
    id: crypto.randomUUID(),
    title: "Library VS Framework",
    subtitle: " famoso tanto faz? ",
    content: {
      title: "React Não é um framework",
      paragraphs: [
        {
          p: "Tenho certeza que você ao surfar 🏄‍♂️ (estou ficando velho) pela internet já ouviu alguém dizer que o React é um framework e neste post te mostrarei por quê isso está errado mas também explicaremos por quê as pessoas dizem isso. ",
        },

        {
          p: "Frameworks são soluções abrangentes e muitas vezes vêm com uma série de opiniões embutidas. Em suma, um framework é projetado para resolver uma gama de problemas específicos, fornecendo recursos para lidar com cada um deles. Um exemplo claro disso é o Angular, que possui sua própria abordagem para lidar com roteamento.",
        },

        {
          p: "Por outro lado, bibliotecas tendem a ser mais focadas e diretas em sua proposta. Elas se concentram em resolver eficazmente um problema específico sem impor muitas restrições sobre como você deve trabalhar. No caso do React, ele se destaca como uma biblioteca para a construção de interfaces de usuário de forma declarativa e altamente performática.",
        },

        {
          p: "Então, por que algumas pessoas insistem em chamar o React de framework? Bem, é importante compreender que o React é apenas uma peça do quebra-cabeça. Para lidar com outros aspectos do desenvolvimento, como roteamento, por exemplo, é necessário recorrer a outras bibliotecas. Ao trabalhar com o React 'puro', é comum adotar várias outras bibliotecas para suprir diferentes necessidades. É esse conjunto de ferramentas adicionais que às vezes nos leva ao equívoco de considerar o React como um framework. ",
        },
      ],
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*wC4nDyvf5jbb6FJT6EEafg.png",
    },
  },

  {
    id: crypto.randomUUID(),
    title: "Styling no React",
    subtitle: "Qual a melhor opção?",
    content: {
      title: "Como estilizar meu projeto?",
      paragraphs: [
        {
          p: "Existem muitas opções no mercado e a maioria vai te entregar o trabalho. Portanto existem boas soluções, mas sempre existe uma que é a melhor 🍃🌬️🎐",
        },

        {
          p: "Apesar da minha forte opinião e amor pelo tailwind a realidade é que quando você entrar em uma empresa e/ou projeto você terá que se adequar as tecs que aquela equipe utiliza. (tipo eu sendo obrigado a usar SASS 🥹 'feelsbad') então faz parte do nosso trabalho conhecer e nos adaptar. Dito isso, não há nada de errado de você ter uma favorita para novos projetos e/ou se aprofundar.",
        },

        {
          p: "Para mim por questões de produtividade, facilidade e uma excelente documentação, eu vou de tailwind, e para ser bom no tailwind você tem que ter uma boa base do css real/raiz o que para mim é um grande plus. ",
        },

        {
          p: "Para finalizar e você não ficar com raiva de mim te darei outras opções adotadas pelo mercado para você ir pesquisar. CSS-in-JS, module css, Material UI são algumas das mais usadas. ",
        },
      ],
      image:
        "https://pbs.twimg.com/media/ELYsGXAW4AIsTRk?format=jpg&name=small",
    },
  },

  {
    id: crypto.randomUUID(),
    title: "O Futuro no Presente",
    subtitle: "qual sua stack favorita?",
    content: {
      title: "Baankai",
      paragraphs: [
        {
          p: "Imagine que HTML, CSS, JS, Babel e Webpack são como Bankais (espero que tenha captado a referência). Para você, qual seria a Bankai de cada uma dessas tecnologias nos dias de hoje?",
        },

        {
          p: "Para mim, sempre que trabalho com essas tecnologias, sinto que estou lidando com suas formas mais avançadas (talvez seja por isso que gosto tanto delas). HTML se transforma em JSX, CSS em Tailwind, JS em React com TypeScript, e Babel & Webpack em Vite.",
        },

        {
          p: "Este é o último post da primeira versão deste blog. Reconheço que ainda há espaço para melhorias, mas é importante lembrar de comparar seu progresso com sua versão anterior e aproveitar o processo de aprendizado contínuo. Todos esses posts refletem minhas observações e incontáveis horas de estudos/cursos sobre o React. ",
        },

        {
          p: "Gostaria de agradecer ao prof Edu Velhote por deixar eu me desafiar com esse projeto (Assesment da Infnet).",
        },
      ],
      image:
        "https://c4.wallpaperflare.com/wallpaper/412/952/873/bleach-kurosaki-ichigo-bankai-wallpaper-preview.jpg",
    },
  },
];
