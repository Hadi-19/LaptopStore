import Link from "next/link";
import LinkCard from "./link-card";

const PropertiesByBrandCard = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Brand
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <LinkCard brandName="Asus" />
            <LinkCard
              brandName="Dell"
              propBackgroundImage={`url("/card-2@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
            <LinkCard
              brandName="Lenovo"
              propBackgroundImage={`url("/card-3@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col"
            href="/"
          >
            <LinkCard
              brandName="LG"
              propBackgroundImage={`url("/card-4@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
            <LinkCard
              brandName="HP"
              propBackgroundImage={`url("/card-5@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertiesByBrandCard;