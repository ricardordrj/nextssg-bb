import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";

import HomeBanner from "@layouts/partials/HomeBanner";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import Services from "@layouts/partials/Services";
import Workflow from "@layouts/partials/Workflow";
import { getListPage } from "../lib/contentParser";

import { getBanner } from "services";

export const dynamic = 'force-dynamic';
const data = {
  banner: {
    title: "Deixe-nos resolver seus desafios críticos de desenvolvimento de sites",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque <br/> totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.",
    image: "/images/banner-art.svg",
    button: {
      label: "Fale Conosco",
      link: "/contact"
    }
  },
  feature: {
    title: "Algo que você precisa saber",
    features: [
      {
        name: "Código Limpo",
        icon: "/images/code.svg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      },
      {
        name: "Orientado a Objetos",
        icon: "/images/oop.svg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      },
      {
        name: "Serviço 24h",
        icon: "/images/user-clock.svg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      },
      {
        name: "Custo-Benefício",
        icon: "/images/love.svg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      },
      {
        name: "Resposta Mais Rápida",
        icon: "/images/speedometer.svg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      },
      {
        name: "Suporte na Nuvem",
        icon: "/images/cloud.svg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil"
      }
    ]
  },
  services: [
    {
      title: "É a mais avançada empresa de marketing digital e TI.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
      images: [
        "/images/service-slide-1.png",
        "/images/service-slide-2.png",
        "/images/service-slide-3.png"
      ],
      button: {
        enable: true,
        label: "Confira",
        link: "/contact"
      }
    },
    {
      title: "É uma empresa privada de segurança da informação e cibersegurança",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
      images: [
        "/images/service-slide-1.png"
      ],
      button: {
        enable: true,
        label: "Confira",
        link: "/contact"
      }
    },
    {
      title: "É uma equipe de pessoas experientes e qualificadas com distribuições",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
      images: [
        "/images/service-slide-1.png",
        "/images/service-slide-2.png",
        "/images/service-slide-3.png"
      ],
      button: {
        enable: true,
        label: "Confira",
        link: "/contact"
      }
    },
    {
      title: "Uma empresa que se destaca das demais",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.",
      images: [
        "/images/service-slide-1.png",
        "/images/service-slide-2.png",
        "/images/service-slide-3.png"
      ],
      button: {
        enable: true,
        label: "Confira",
        link: "/contact"
      }
    }
  ],
  workflow: {
    title: "Experimente o melhor fluxo de trabalho conosco",
    image: "/images/banner.svg",
    description: ""
  },
  call_to_action: {
    title: "Pronto para começar?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur.",
    image: "/images/cta.svg",
    button: {
      enable: true,
      label: "Fale Conosco",
      link: "/contact"
    }
  }
};

const Home = async () => {
  const { feature, services, workflow, call_to_action } = data;
  const { title } = config.site;


  let bannerInfo = []
  try {
    const { data } = await getBanner();
    bannerInfo = data.banner || [];
  } catch (error) {
    console.error('Erro ao buscar banner:', error);
  }

  return (
    <>
      <SeoMeta title={title} />

      {/* Banner */}
      <HomeBanner banner={bannerInfo} />

      {/* Features */}
      <HomeFeatures feature={feature} />

      {/* services */}
      <Services services={services} />

      {/* workflow */}
      <Workflow workflow={workflow} />

      {/* Cta */}
      <Cta cta={call_to_action} />
    </>
  );
};

export default Home;
