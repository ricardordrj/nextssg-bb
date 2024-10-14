import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";


const HomeBanner = ({ banner }) => {

  return banner && (
    <section className="section pb-[0]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto">
            <h1 className="font-primary font-bold">{banner[0].title}</h1>
            <p className="mt-4">{markdownify(banner[0].content)}</p>

            <Link
              className="btn mt-4"
              color={banner[0].button.color}
              href={banner[0].button.link}

            >
              {banner[0].button.label}
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black  mx-auto w-svw pl-0">

        <Image
          className="mx-auto mt-12"
          src={banner[0].image.url}
          width={750}
          height={390}
          alt="banner image"
          priority
        />
      </div>
    </section>
  );
};

export default HomeBanner;
