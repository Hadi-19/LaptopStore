import 'antd/dist/antd.min.css';
import {Button} from '@mui/material';
import {Menu as AntMenu, Dropdown as AntDropdown, Button as AntButton} from 'antd';
import {
      DownOutlined,
      ArrowLeftOutlined, ArrowRightOutlined, CalendarOutlined, CheckOutlined, ClockCircleOutlined, CloseOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, HeartOutlined, LeftOutlined, LockOutlined, MailOutlined, PaperClipOutlined, PhoneOutlined, QuestionCircleOutlined, ReloadOutlined, RightOutlined, SearchOutlined, SendOutlined, ShareAltOutlined, UserOutlined,
    } from '@ant-design/icons';
import {useRouter} from "next/router";

const Hero = () => {
  const router = useRouter();

  const onSearchCTAClick = () => {
    router.push("/properties-grid-view");
  };


  return (
    <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">Find Your Dream Laptop</div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</div>
        </div>
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start hover:bg-darkslateblue" autoFocus>
              <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">Rent</div>
            </button>
            <Button variant="contained" color="primary">Sale</Button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-center">Brand</div>
                <AntDropdown overlay={(
            <AntMenu>
              {[{ value: "Asus" },{ value: "Dell" },{ value: "HP" },{ value: "Lenovo" },{ value: "LG" }].map((option, index) => (
                <AntMenu.Item key={index}>
                  <a onClick={e => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </AntMenu.Item>
              ))}
            </AntMenu>
          )} placement="bottomLeft" trigger={["hover"]}>
                  <a onClick={e => e.preventDefault()}>{`Select your brand `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">Screen size</div>
                <AntDropdown className="self-stretch" overlay={(
            <AntMenu>
              {[{ value: "13"" },{ value: "14"" },{ value: "15"" },{ value: "16"" },{ value: "17"" }].map((option, index) => (
                <AntMenu.Item key={index}>
                  <a onClick={e => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </AntMenu.Item>
              ))}
            </AntMenu>
          )} placement="bottomLeft" trigger={["hover"]}>
                  <a onClick={e => e.preventDefault()}>{`Select scren size `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">Price Range</div>
                <AntDropdown className="self-stretch" overlay={(
            <AntMenu>
              {[{ value: "$500-$2000" },{ value: "$2500-$10000" },{ value: "$10000+" }].map((option, index) => (
                <AntMenu.Item key={index}>
                  <a onClick={e => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </AntMenu.Item>
              ))}
            </AntMenu>
          )} placement="bottomLeft" trigger={["hover"]}>
                  <a onClick={e => e.preventDefault()}>{`Select price range `}
                    <DownOutlined />
                  </a>
                </AntDropdown>
              </div>
              <AntButton className="cursor-pointer" style={{ width: "102px" }} type="primary" size="middle" shape="default" onClick={onSearchCTAClick}>Search</AntButton>
            </div>
          </div>
        </form>
      </div>
    </div>);
};

export default Hero;
