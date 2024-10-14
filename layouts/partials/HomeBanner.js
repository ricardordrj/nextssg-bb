"use client"
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBanner } from "services";



const HomeBanner = () => {
  const [bannerInfo, setBannerInfo] = useState();

  const banner = () => {
    console.log('bannerInfo', bannerInfo);

    getBanner()
      .then(({ data }) => {

        setBannerInfo(data.banner);
      })
      .catch((error) => {
        console.error('Erro ao buscar banner:', error);
      });
  };

  useEffect(() => {
    banner();
  }, []);
  return bannerInfo && (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold">{bannerInfo[0].title}</h1>
            <p className="mt-4">{markdownify(bannerInfo[0].content)}</p>

            <Link
              className="btn btn-primary mt-4"
              href={bannerInfo[0].button.link}

            >
              {bannerInfo[0].button.label}
            </Link>

            <Image
              className="mx-auto mt-12"
              src={bannerInfo[0].image.url}
              width={750}
              height={390}
              alt="banner image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
