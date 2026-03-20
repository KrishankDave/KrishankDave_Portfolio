import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Krishank</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>Data Scientist</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              I am a data scientist with a passion for uncovering insights and solving complex problems. With a strong background in statistics, machine
              learning, and data visualization, I thrive on transforming raw data
              into actionable intelligence. I am dedicated to continuous learning
              and staying at the forefront of the ever-evolving field of data
              science.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/banner-img.png")}
            alt="banner-img"
            width={500}
            height={500}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute left-250 top-10 hidden h-auto w-1/2 lg:block 2xl:h-120 2xl:w-130">
        <Image
          src={getImgPath("/images/home/banner/banner-img.png")}
          alt="banner-img"
          width={350}
          height={350}
          className=" absolute right-0 top-0 z-1 max-h-[35rem] w-auto"
        />
      </div>
    </section>
  );
};

export default index;
