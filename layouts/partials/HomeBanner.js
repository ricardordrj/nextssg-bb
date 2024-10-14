
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";



const HomeBanner = async ({ banner }) => {

  return banner?.length > 0 && (
    <section className="section pb-[50px]">
      <div className="container">
        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold">{banner[0].title}</h1>
            <p className="mt-4">{markdownify(banner[0].content)}</p>

            <Link
              className="btn btn-primary mt-4"
              href={banner[0].button.link}

            >
              {banner[0].button.label}
            </Link>

            <Image
              className="mx-auto mt-12"
              src={banner[0].image.url}
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
