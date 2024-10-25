import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";


const HomeBanner = ({ banner }) => {
  console.log('HomeBanner aquiiii', banner);

  return banner && (
    <section className="section pb-[0]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto">
            <h1 className="font-primary font-bold">{banner.Titulo}</h1>
            <p className="mt-4">{markdownify(banner.Conteudo)}</p>

            <Link
              className={`btn bg-${banner.Botao.Cor} mt-4`}

              href={banner.Botao.Link}

            >
              {banner.Botao.Label}
            </Link>
            <Image
              className="mx-auto mt-12"
              src={banner.Imagem.url}
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
