import img_import from "../assets/imports.png";
import img_logistics from "../assets/logistics.png";
import img_exports from "../assets/exports.png";
import img_containers from "../assets/sell-containers.png";
import img_ground from "../assets/ground.png";
import img_shopping from "../assets/shopping.png";

const es = {
  meta: {
    title: "Blackstar Logistics | Logística Internacional",
    description:
      "Soluciones integrales en importaciones, exportaciones y logística internacional, de la búsqueda del fabricante a la entrega final.",
  },

  nav: {
    about: "Sobre Nosotros",
    services: "Servicios",
    work: "Cómo trabajamos",
    contact: "Contacto",
    quote: "Solicitar Cotización",
    language: "https://flagicons.lipis.dev/flags/4x3/um.svg",
    language_switch: "Change language",
  },

  hero: {
    description:
      "Conectamos empresas con proveedores de todo el mundo. Soluciones integrales en importaciones, exportaciones y logística internacional, de la búsqueda del fabricante a la entrega final.",
    contact: "Contactar",
    services: "Nuestros servicios",
  },

  services: {
    title: "Nuestros Servicios",
    description:
      "Nos ocupamos de cada etapa del proceso, brindando seguridad, eficiencia y acompañamiento en cada operación.",

    items: [
      {
        image: img_import.src,
        title: "Importaciones",
        description:
          "Importamos productos de cualquier parte del mundo hacia Argentina, sin importar volumen ni complejidad.",
      },
      {
        image: img_logistics.src,
        title: "Logística Internacional",
        description:
          "Transporte marítimo, aéreo, triangulación de cargas y seguimiento en tiempo real con red global.",
      },
      {
        image: img_exports.src,
        title: "Exportaciones",
        description:
          "Exportaciones desde Argentina hacia Asia y cualquier destino, adaptadas a cada cliente y tipo de carga.",
      },
      {
        image: img_shopping.src,
        title: "Compras Internacionales",
        description:
          "Brokers propios en China y EE. UU. que buscan fabricantes, negocian precios y verifican proveedores.",
      },
      {
        image: img_ground.src,
        title: "Transporte Terrestre",
        description:
          "Distribución nacional dentro de Argentina, del puerto o aeropuerto hasta el destino final.",
      },
      {
        image: img_containers.src,
        title: "Venta de Contenedores",
        description:
          "Contenedores One Trip y usados nacionalizados, en distintas medidas y configuraciones.",
      },
    ],
  },

  build_trust: {
    eyebrow: "Sobre Nosotros",
    title: "Más que logística, construimos confianza",
    description:
      "Combinamos experiencia, planificación y atención personalizada para garantizar operaciones internacionales confiables.",
    cta: "Hablemos de su operación",
  },

  about: {
    eyebrow: "Sobre Nosotros",
    title: "Conectamos empresas con el mundo",
    description:
      "En Blackstar Logistics brindamos soluciones integrales de comercio internacional, acompañando a empresas en cada etapa de sus operaciones de importación y exportación. Nuestro compromiso es ofrecer un servicio eficiente, transparente y personalizado, adaptado a las necesidades de cada cliente.",
    descriptionSecondary:
      "Con el respaldo de una red de socios estratégicos y un equipo especializado, coordinamos cada operación con profesionalismo y atención al detalle, convirtiéndonos en un aliado confiable para impulsar el crecimiento de tu negocio.",
    cta: "Hablar con un especialista",
    values: [
      {
        title: "Atención personalizada",
        description: "Escuchamos y diseñamos soluciones a medida.",
      },
      {
        title: "Brokers propios",
        description: "Presencia directa en China y Estados Unidos.",
      },
      {
        title: "Red Internacional",
        description: "Proveedores y agentes en los principales mercados.",
      },
      {
        title: "Seguimiento total",
        description: "Visibilidad y control en cada etapa de la operación.",
      },
      {
        title: "Seguridad y transparencia",
        description: "Integridad y responsabilidad en cada proceso.",
      },
    ],

    stats: [
      {
        value: "+1000",
        label: "Camiones despachados",
      },
      {
        value: "+10",
        label: "Años de experiencia",
      },
      {
        value: "+200",
        label: "Operaciones concretadas",
      },
      {
        value: "+50",
        label: "Empresas que confían",
      },
    ],
  },

  process: {
    eyebrow: "Cómo trabajamos",
    title: "De la Búsqueda a la Entrega",
    description:
      "Un proceso llave en mano: nos ocupamos de cada etapa para que usted se enfoque en crecer.",

    steps: [
      {
        number: "1",
        title: "Búsqueda",
        description:
          "Buscamos al fabricante o proveedor adecuado para lo que su negocio necesita.",
      },
      {
        number: "2",
        title: "Negociación",
        description:
          "Negociamos precios y verificamos proveedores con brokers propios en China y EE. UU.",
      },
      {
        number: "3",
        title: "Control de Calidad",
        description:
          "Coordinamos inspecciones y consolidamos la mercadería antes del embarque.",
      },
      {
        number: "4",
        title: "Transporte",
        description:
          "Marítimo, aéreo o triangulado, con seguimiento en tiempo real.",
      },
      {
        number: "5",
        title: "Entrega Final",
        description:
          "Distribución terrestre nacional hasta el destino final de su mercadería.",
      },
    ],
  },

  contact: {
    eyebrow: "Déjanos tu consulta",
    description:
      "Conectemos tu empresa con el mundo. Completá el formulario y te responderemos a la brevedad.",

    form: {
      name: "Nombre",
      lastName: "Apellido",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar mensaje",
    },

    contactInfo: {
      title: "Contacto",
      phone: "+54 9 299 585 7930",
      emails: ["leonelap@bstarlog.com", "pabloy@bstarlog.com"],
    },

    offices: {
      title: "Nuestras Oficinas",
      locations: [
        "Av. Alvarez Thomas 1607, Buenos Aires",
        "Arturo Illia 579 4 A, Neuquén Capital",
      ],
    },
  },
  footer: {
    copyright: "© 2026 Blackstar Logistics. Todos los derechos reservados.",
  },
};

export default es;
