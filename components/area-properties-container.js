import InfoCard from "./info-card";

const AreaPropertiesContainer = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <InfoCard laptopId="/icon.svg" actionText="Sell your laptop" />
          <InfoCard
            laptopId="/icon1.svg"
            actionText="Rent your laptop"
            propWidth="312px"
          />
          <InfoCard
            laptopId="/icon2.svg"
            actionText="Buy a laptop"
            propWidth="unset"
          />
          <InfoCard
            laptopId="/icon3.svg"
            actionText="Free shipping"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaPropertiesContainer;
