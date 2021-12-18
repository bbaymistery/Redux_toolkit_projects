import { AiOutlineHome } from "react-icons/ai";
import { SiInfluxdb } from "react-icons/si";
import { RiExchangeDollarFill } from "react-icons/ri";
import { GiNewShoot, GiBarbedStar } from "react-icons/gi";
export const listNavbar = [
  {
    name: "Home",
    icon: <AiOutlineHome />,
    link: "/",
  },
  {
    name: "Cryptocurrencies",
    icon: <SiInfluxdb />,
    link: "/cryptocurrencies",
  },
  {
    name: "Exchanges",
    icon: <RiExchangeDollarFill />,
    link: "/exchanges",
  },
  {
    name: "News",
    icon: <GiNewShoot />,
    link: "/news",
  },
  {
    name: "Favourites",
    icon: <GiBarbedStar />,
    link: "/favourites",
  },
];

export const chartDays = [
  {
    label: "3h",
    value: "3h", //eger value birdise chart table da deygeler vaxtlar gorsenecek degilse ille r aylar seklinde
  },
  {
    label: "24h",
    value: "24h",
  },
  {
    label: "7d",
    value: "7d",
  },
  {
    label: "30d",
    value: "30d",
  },
  {
    label: "1y",
    value: "1y",
  },
  {
    label: "3m",
    value: "3m",
  },
  {
    label: "3y",
    value: "3y",
  },
  {
    label: "5y",
    value: "5y",
  },
];
