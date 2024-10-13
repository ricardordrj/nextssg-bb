import NotFound from "@layouts/404";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { getBanner } from "services";

const HomeBanner = async () => {
  try {

    const { data } = await getBanner();
    console.log('banner', data.banner[0].button);

    return (
      <section className="section pb-[50px]">
        <div className="container">
          <div className="row text-center">
            <div className="mx-auto lg:col-10">
              <h1 className="font-primary font-bold">{data.banner[0].title}</h1>
              <p className="mt-4">{markdownify(data.banner[0].content)}</p>

              <Link
                className="btn btn-primary mt-4"
                href={data.banner[0].button.link}

              >
                {data.banner[0].button.label}
              </Link>

              <Image
                className="mx-auto mt-12"
                src={data.banner[0].image.url}
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
  } catch (e) {
    return (<div>Not Found</div>)
  }
};

export default HomeBanner;
