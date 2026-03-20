"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../logo";

const Footer = () => {
  const [contactBarData, setContactBarData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactBarData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching contact bar:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          {/* Contact Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-6 w-full">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
              {contactBarData?.contactItems?.map((value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 lg:gap-4 text-sm md:text-base"
                >
                  <Image
                    src={getImgPath(value?.icon)}
                    alt={value?.type}
                    width={24}
                    height={24}
                    className="min-w-[24px] min-h-[24px]"
                  />
                  <h6 className="text-sm md:text-base xl:text-xl hover:text-primary">
                    {value?.label}
                  </h6>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
              {contactBarData?.socialItems?.map((value: any, index: number) => (
                <Link
                  key={index}
                  href={value?.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={getImgPath(value?.icon)}
                    alt={value?.platform}
                    width={30}
                    height={30}
                    className="hover:opacity-80"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Logo divider */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <p className="text-secondary">
            Designed by{" "}
            <a href="#">Krishank Dave</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
