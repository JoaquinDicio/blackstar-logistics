import img_import from "../assets/imports.png";
import img_logistics from "../assets/logistics.png";
import img_exports from "../assets/exports.png";
import img_containers from "../assets/sell-containers.png";
import img_ground from "../assets/ground.png";
import img_shopping from "../assets/shopping.png";

const en = {
  meta: {
    title: "Blackstar Logistics | International Logistics",
    description:
      "Comprehensive solutions for imports, exports, and international logistics, from manufacturer sourcing to final delivery.",
  },

  nav: {
    about: "About Us",
    services: "Services",
    work: "How We Work",
    contact: "Contact",
    quote: "Request a Quote",
    language: "https://flagicons.lipis.dev/flags/4x3/es.svg",
    language_switch: "Cambiar idioma",
  },

  hero: {
    description:
      "We connect businesses with suppliers around the world. Comprehensive solutions for imports, exports, and international logistics, from manufacturer sourcing to final delivery.",
    contact: "Contact Us",
    services: "Our Services",
  },

  services: {
    title: "Our Services",
    description:
      "We take care of every stage of the process, providing security, efficiency, and support throughout every operation.",

    items: [
      {
        image: img_import.src,
        title: "Imports",
        description:
          "We import products from anywhere in the world into Argentina, regardless of volume or complexity.",
      },
      {
        image: img_logistics.src,
        title: "International Logistics",
        description:
          "Ocean and air freight, cargo triangulation, and real-time tracking through our global network.",
      },
      {
        image: img_exports.src,
        title: "Exports",
        description:
          "Exports from Argentina to Asia and any destination, tailored to each client and type of cargo.",
      },
      {
        image: img_shopping.src,
        title: "International Sourcing",
        description:
          "Our own brokers in China and the U.S. source manufacturers, negotiate prices, and verify suppliers.",
      },
      {
        image: img_ground.src,
        title: "Ground Transportation",
        description:
          "Domestic distribution throughout Argentina, from the port or airport to the final destination.",
      },
      {
        image: img_containers.src,
        title: "Container Sales",
        description:
          "One Trip and used nationalized containers, available in different sizes and configurations.",
      },
    ],
  },

  build_trust: {
    eyebrow: "About Us",
    title: "More than logistics, we build trust",
    description:
      "We combine experience, planning, and personalized attention to ensure reliable international operations.",
    cta: "Let's Discuss Your Operation",
  },

  about: {
    eyebrow: "About Us",
    title: "We connect businesses with the world",
    description:
      "At Black Star Logistics, we provide comprehensive international trade solutions, supporting businesses through every stage of their import and export operations. Our commitment is to deliver an efficient, transparent, and personalized service tailored to each client's needs.",
    descriptionSecondary:
      "Backed by a network of strategic partners and a specialized team, we coordinate every operation with professionalism and attention to detail, becoming a trusted partner to help drive your business growth.",
    cta: "Talk to a Specialist",
    values: [
      {
        title: "Personalized Service",
        description: "We listen and design tailored solutions.",
      },
      {
        title: "Our Own Brokers",
        description: "Direct presence in China and the United States.",
      },
      {
        title: "International Network",
        description: "Suppliers and agents in major markets.",
      },
      {
        title: "End-to-End Tracking",
        description: "Visibility and control at every stage of the operation.",
      },
      {
        title: "Security and Transparency",
        description: "Integrity and responsibility throughout every process.",
      },
    ],

    stats: [
      {
        value: "+1000",
        label: "Trucks dispatched",
      },
      {
        value: "+10",
        label: "Years of experience",
      },
      {
        value: "+200",
        label: "Operations completed",
      },
      {
        value: "+50",
        label: "Trusted companies",
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    title: "From Sourcing to Delivery",
    description:
      "A turnkey process: we take care of every stage so you can focus on growing your business.",

    steps: [
      {
        number: "1",
        title: "Sourcing",
        description:
          "We find the right manufacturer or supplier for your business needs.",
      },
      {
        number: "2",
        title: "Negotiation",
        description:
          "We negotiate prices and verify suppliers with our own brokers in China and the U.S.",
      },
      {
        number: "3",
        title: "Quality Control",
        description:
          "We coordinate inspections and consolidate the goods before shipment.",
      },
      {
        number: "4",
        title: "Transportation",
        description:
          "Ocean, air, or triangulated freight, with real-time tracking.",
      },
      {
        number: "5",
        title: "Final Delivery",
        description:
          "Domestic ground distribution to the final destination of your goods.",
      },
    ],
  },

  contact: {
    eyebrow: "Send Us Your Inquiry",
    description:
      "Let's connect your business with the world. Fill out the form and we'll get back to you shortly.",

    form: {
      name: "First Name",
      lastName: "Last Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },

    contactInfo: {
      title: "Contact",
      phone: "+54 9 299 585 7930",
      emails: ["leonelap@bstarlog.com", "pabloy@bstarlog.com"],
    },

    offices: {
      title: "Our Offices",
      locations: [
        "Av. Alvarez Thomas 1607, Buenos Aires",
        "Arturo Illia 579 4 A, Neuquén Capital",
      ],
    },
  },

  footer: {
    copyright: "© 2026 Blackstar Logistics. All rights reserved.",
  },
};

export default en;
