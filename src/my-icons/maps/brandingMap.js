// ================= IMPORTS =================
import {
  // Tech
  SiApple,
  SiIntel,
  SiSamsung,
  SiGoogle,
  SiCisco,
  SiDell,
  SiHp,
  SiSony,
  SiNokia,

  // Finance
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,

  // Fashion
  SiNike,
  SiAdidas,
  SiPuma,
  SiZara,

} from "react-icons/si";

import {FaMicrosoft, FaAmazon, FaAmazonPay } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { GrOracle } from "react-icons/gr";


// ================= MAP =================
export const brandsIcons = {
  // ================= 💻 TECH =================
  apple: SiApple,
  microsoft: FaMicrosoft,
  microsoftAlt: TiVendorMicrosoft,
  intel: SiIntel,
  samsung: SiSamsung,
  google: SiGoogle,
  amazon: FaAmazon,
  amazonPay: FaAmazonPay,
  cisco: SiCisco,
  oracle: GrOracle,
  dell: SiDell,
  hp: SiHp,
  sony: SiSony,
  nokia: SiNokia,

  // ================= 💵 FINANCE =================
  visa: SiVisa,
  mastercard: SiMastercard,
  americanexpress: SiAmericanexpress,
  paypal: SiPaypal,

  // ================= 👗 FASHION =================
  nike: SiNike,
  adidas: SiAdidas,
  puma: SiPuma,
  zara: SiZara,
};