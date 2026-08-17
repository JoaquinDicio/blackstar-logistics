import img_import from "../assets/imports.png";
import img_logistics from "../assets/logistics.png";
import img_exports from "../assets/exports.png";
import img_containers from "../assets/sell-containers.png";
import img_ground from "../assets/ground.png";
import img_shopping from "../assets/shopping.png";

const pt = {
  meta: {
    title: "Blackstar Logistics | Logística Internacional",
    description:
      "Soluções completas em importações, exportações e logística internacional, desde a busca pelo fabricante até a entrega final.",
  },

  nav: {
    about: "Sobre Nós",
    services: "Serviços",
    work: "Como trabalhamos",
    contact: "Contato",
    quote: "Solicitar Cotação",
    language: "https://flagicons.lipis.dev/flags/4x3/ar.svg",
    language_switch: "Mudar idioma",
  },

  hero: {
    description:
      "Conectamos empresas a fornecedores de todo o mundo. Soluções completas em importações, exportações e logística internacional, desde a busca pelo fabricante até a entrega final.",
    contact: "Entrar em contato",
    services: "Nossos serviços",
  },

  services: {
    title: "Nossos Serviços",
    description:
      "Cuidamos de cada etapa do processo, oferecendo segurança, eficiência e acompanhamento em cada operação.",

    items: [
      {
        image: img_import.src,
        title: "Importações",
        description:
          "Importamos produtos de qualquer parte do mundo para a Argentina, independentemente do volume ou da complexidade.",
      },
      {
        image: img_logistics.src,
        title: "Logística Internacional",
        description:
          "Transporte marítimo, aéreo, triangulação de cargas e acompanhamento em tempo real com uma rede global.",
      },
      {
        image: img_exports.src,
        title: "Exportações",
        description:
          "Exportações da Argentina para a Ásia e qualquer destino, adaptadas a cada cliente e tipo de carga.",
      },
      {
        image: img_shopping.src,
        title: "Compras Internacionais",
        description:
          "Brokers próprios na China e nos EUA que buscam fabricantes, negociam preços e verificam fornecedores.",
      },
      {
        image: img_ground.src,
        title: "Transporte Terrestre",
        description:
          "Distribuição nacional dentro da Argentina, do porto ou aeroporto até o destino final.",
      },
      {
        image: img_containers.src,
        title: "Venda de Contêineres",
        description:
          "Contêineres One Trip e usados nacionalizados, em diferentes tamanhos e configurações.",
      },
    ],
  },

  build_trust: {
    eyebrow: "Sobre Nós",
    title: "Mais do que logística, construímos confiança",
    description:
      "Combinamos experiência, planejamento e atendimento personalizado para garantir operações internacionais confiáveis.",
    cta: "Vamos falar sobre sua operação",
  },

  about: {
    eyebrow: "Sobre Nós",
    title: "Conectamos empresas ao mundo",
    description:
      "Na Blackstar Logistics, oferecemos soluções completas de comércio internacional, acompanhando empresas em cada etapa de suas operações de importação e exportação. Nosso compromisso é oferecer um serviço eficiente, transparente e personalizado, adaptado às necessidades de cada cliente.",
    descriptionSecondary:
      "Com o apoio de uma rede de parceiros estratégicos e uma equipe especializada, coordenamos cada operação com profissionalismo e atenção aos detalhes, tornando-nos um parceiro confiável para impulsionar o crescimento do seu negócio.",
    cta: "Falar com um especialista",
    values: [
      {
        title: "Atendimento personalizado",
        description:
          "Ouvimos suas necessidades e desenvolvemos soluções sob medida.",
      },
      {
        title: "Brokers próprios",
        description: "Presença direta na China e nos Estados Unidos.",
      },
      {
        title: "Rede Internacional",
        description: "Fornecedores e agentes nos principais mercados.",
      },
      {
        title: "Acompanhamento completo",
        description: "Visibilidade e controle em cada etapa da operação.",
      },
      {
        title: "Segurança e transparência",
        description: "Integridade e responsabilidade em cada processo.",
      },
    ],

    stats: [
      {
        value: "+1000",
        label: "Caminhões despachados",
      },
      {
        value: "+25",
        label: "Anos de experiência",
      },
      {
        value: "+200",
        label: "Operações realizadas",
      },
      {
        value: "+50",
        label: "Empresas que confiam em nós",
      },
    ],
  },

  process: {
    eyebrow: "Como trabalhamos",
    title: "Da Busca à Entrega",
    description:
      "Um processo completo: cuidamos de cada etapa para que você possa se concentrar no crescimento do seu negócio.",

    steps: [
      {
        number: "1",
        title: "Busca",
        description:
          "Buscamos o fabricante ou fornecedor adequado às necessidades do seu negócio.",
      },
      {
        number: "2",
        title: "Negociação",
        description:
          "Negociamos preços e verificamos fornecedores com brokers próprios na China e nos EUA.",
      },
      {
        number: "3",
        title: "Controle de Qualidade",
        description:
          "Coordenamos inspeções e consolidamos a mercadoria antes do embarque.",
      },
      {
        number: "4",
        title: "Transporte",
        description:
          "Transporte marítimo, aéreo ou triangulado, com acompanhamento em tempo real.",
      },
      {
        number: "5",
        title: "Entrega Final",
        description:
          "Distribuição terrestre nacional até o destino final da sua mercadoria.",
      },
    ],
  },

  marquee: {
    title: "Nossos parceiros",
  },

  contact: {
    eyebrow: "Envie sua consulta",
    description:
      "Conecte sua empresa ao mundo. Preencha o formulário e responderemos o mais breve possível.",

    form: {
      name: "Nome",
      lastName: "Sobrenome",
      email: "E-mail",
      message: "Mensagem",
      submit: "Enviar mensagem",
    },

    contactInfo: {
      title: "Contato",
      phone: "+54 9 299 585 7930",
      emails: ["leonelap@bstarlog.com", "pabloy@bstarlog.com"],
    },

    offices: {
      title: "Nossos Escritórios",
      locations: [
        "Av. Alvarez Thomas 1607, Buenos Aires, Argentina",
        "Arturo Illia 579 4 A, Neuquén Capital, Argentina",
      ],
    },
  },

  footer: {
    copyright: "© 2026 Blackstar Logistics. Todos os direitos reservados.",
  },
};

export default pt;
