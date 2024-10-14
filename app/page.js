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

const Home = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
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
