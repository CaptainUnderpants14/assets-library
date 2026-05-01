import {
  FaDollarSign,
  FaEuroSign,
  FaRupeeSign,
  FaYenSign,
  FaBitcoin,
  FaCoins,
  FaWallet,
  FaPiggyBank,

  FaChartBar,
  FaChartLine,
  FaChartPie,

  FaBuilding,
  FaUniversity,
  FaBriefcase,
  FaSuitcase,
  FaHandshake,

  FaFileInvoiceDollar,
  FaCalculator,
  FaPercentage,

  FaCreditCard,
  FaMoneyBillWave,

  FaExchangeAlt,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";

import {
  MdAttachMoney,
  MdCurrencyExchange,
  MdTrendingUp,
  MdTrendingDown,
  MdAccountBalance,
  MdBusinessCenter,
  MdWork,
  MdShowChart,
  MdPieChart,
  MdBarChart
} from "react-icons/md";

import {
  AiOutlineStock,
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineFundProjectionScreen
} from "react-icons/ai";

import {
  SiBitcoin,
  SiEthereum,
  SiLitecoin
} from "react-icons/si";

// Business / Finance / Analytics Icons
export const businessIcons = {
  // 💰 Currency
  dollar: FaDollarSign,
  euro: FaEuroSign,
  rupee: FaRupeeSign,
  yen: FaYenSign,
  money: MdAttachMoney,
  coins: FaCoins,
  wallet: FaWallet,
  piggyBank: FaPiggyBank,
  cash: FaMoneyBillWave,

  // 💳 Payments
  card: FaCreditCard,
  invoice: FaFileInvoiceDollar,
  calculator: FaCalculator,
  percentage: FaPercentage,

  // 📈 Charts / Analytics
  chartBar: FaChartBar,
  chartLine: FaChartLine,
  chartPie: FaChartPie,
  barChart: MdBarChart,
  lineChart: MdShowChart,
  pieChart: MdPieChart,
  analytics: AiOutlineFundProjectionScreen,
  stock: AiOutlineStock,
  chartAltBar: AiOutlineBarChart,
  chartAltLine: AiOutlineLineChart,

  // 📊 Trends
  trendingUp: MdTrendingUp,
  trendingDown: MdTrendingDown,
  up: FaArrowUp,
  down: FaArrowDown,

  // 🏢 Business / Company
  building: FaBuilding,
  bank: FaUniversity,
  accountBalance: MdAccountBalance,

  // 💼 Work / Office
  briefcase: FaBriefcase,
  suitcase: FaSuitcase,
  work: MdWork,
  businessCenter: MdBusinessCenter,
  deal: FaHandshake,

  // 🔁 Transactions / Exchange
  exchange: FaExchangeAlt,
  currencyExchange: MdCurrencyExchange,

  // 🪙 Crypto
  bitcoin: FaBitcoin,
  bitcoinAlt: SiBitcoin,
  ethereum: SiEthereum,
  litecoin: SiLitecoin
};