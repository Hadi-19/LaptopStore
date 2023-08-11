import { Button } from "@mui/material";
import LaptopRentCard from "./laptop-rent-card";

const RentForm1 = () => {
  return (
    <form className="w-[1920px] flex flex-col py-[86px] px-0 box-border items-center justify-start gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <LaptopRentCard
            productImageDimensions="/unsplashrlwe8f8anoc8@2x.png"
            laptopDimensions="HP Omen"
            imageDimensions="/car5.svg"
            imageDimensions2="/bathtub5.svg"
            imageDimensions3="/arrowsout2.svg"
            dimensionText="/plus7.svg"
          />
          <LaptopRentCard
            productImageDimensions="/unsplashrlwe8f8anoc9@2x.png"
            laptopDimensions="Lenovo Thinkpad"
            imageDimensions="/car5.svg"
            imageDimensions2="/bathtub5.svg"
            imageDimensions3="/arrowsout2.svg"
            dimensionText="/plus8.svg"
          />
          <LaptopRentCard
            productImageDimensions="/unsplashrlwe8f8anoc10@2x.png"
            laptopDimensions="HP Elitbook X360"
            imageDimensions="/car6.svg"
            imageDimensions2="/bathtub.svg"
            imageDimensions3="/arrowsout3.svg"
            dimensionText="/plus3.svg"
          />
          <LaptopRentCard
            productImageDimensions="/unsplashrlwe8f8anoc11@2x.png"
            laptopDimensions="Asus pro duo"
            imageDimensions="/car6.svg"
            imageDimensions2="/bathtub.svg"
            imageDimensions3="/arrowsout3.svg"
            dimensionText="/plus3.svg"
          />
        </div>
      </div>
      <Button variant="contained" color="primary">
        Load more listing
      </Button>
    </form>
  );
};

export default RentForm1;
