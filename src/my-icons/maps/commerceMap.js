// ================= IMPORTS =================
import {
  FaShoppingCart,
  FaShoppingBag,
  FaStore,
  FaTruck,
  FaBox,
  FaBoxes,
  FaBarcode,
  FaQrcode,
  FaMoneyBill,
  FaCreditCard,
  FaWallet,
  FaReceipt,
  FaTag,
  FaTags,
  FaGift,
  FaPercent,
  FaSearch,
  FaFilter,
  FaList,
  FaStar,
  FaUser,
  FaUsers,
  FaHeadset,
  FaComments,
  FaChartLine,
  FaChartBar,
  FaWarehouse,
  FaClipboardList,
  FaFileInvoiceDollar,
} from "react-icons/fa";

import {
  MdLocalShipping,
  MdInventory,
  MdPayments,
  MdAttachMoney,
  MdDiscount,
  MdShoppingCartCheckout,
  MdStorefront,
  MdQrCode,
  MdBarChart,
  MdAnalytics,
} from "react-icons/md";

import {
  TbTruckDelivery,
  TbPackage,
  TbPackages,
  TbReceipt,
  TbCreditCard,
  TbCash,
  TbTag,
  TbTags,
  TbShoppingCart,
  TbShoppingBag,
  TbChartPie,
  TbChartHistogram,
  TbUser,
  TbUsers,
  TbHeadset,
  TbClipboardList,
} from "react-icons/tb";

import {
  GiCardboardBox,
  GiTakeMyMoney,
  GiPayMoney,
  GiMoneyStack,
  GiShoppingCart,
} from "react-icons/gi";

import {
  FaTicketAlt,
  FaCut,
} from "react-icons/fa";

import {
  MdLocalOffer,
  MdCardGiftcard,
  MdSell,
} from "react-icons/md";

import {
  TbDiscount,
  TbPercentage,
  TbTicket,
  TbGift,
} from "react-icons/tb";

import {
  RiCoupon3Line,
  RiCoupon2Line,
} from "react-icons/ri";

// ================= MAP =================
export const commerceIcons = {
  // ================= 🛒 SHOPPING =================
  cart: FaShoppingCart,
  cartAlt: TbShoppingCart,
  cartCheckout: MdShoppingCartCheckout,
  cartGi: GiShoppingCart,

  bag: FaShoppingBag,
  bagAlt: TbShoppingBag,

  store: FaStore,
  storefront: MdStorefront,

  // ================= 🚚 DELIVERY =================
  truck: FaTruck,
  shipping: MdLocalShipping,
  delivery: TbTruckDelivery,

  // ================= 📦 PACKAGING =================
  box: FaBox,
  boxAlt: GiCardboardBox,
  package: TbPackage,
  packages: TbPackages,
  boxes: FaBoxes,

  warehouse: FaWarehouse,
  inventory: MdInventory,

  // ================= 💰 PAYMENTS =================
  money: FaMoneyBill,
  moneyAlt2: MdAttachMoney,
  moneyAlt: GiMoneyStack,
  cash: TbCash,
  pay: GiPayMoney,
  payment: MdPayments,
  wallet: FaWallet,
  creditCard: FaCreditCard,
  creditCardAlt: TbCreditCard,

  receipt: FaReceipt,
  receiptAlt: TbReceipt,
  invoice: FaFileInvoiceDollar,

  // ================= 🏷️ PRICING =================
  tag: FaTag,
  tagAlt: TbTag,
  tags: FaTags,
  tagsAlt: TbTags,

  discount: MdDiscount,
  percent: FaPercent,
  offer: FaGift,

  // ================= 🔍 SEARCH & FILTER =================
  search: FaSearch,
  filter: FaFilter,
  list: FaList,

  // ================= ⭐ REVIEWS =================
  rating: FaStar,

  // ================= 👤 CUSTOMER =================
  user: FaUser,
  userAlt: TbUser,
  users: FaUsers,
  usersAlt: TbUsers,

  support: FaHeadset,
  supportAlt: TbHeadset,
  chat: FaComments,

  // ================= 📊 ANALYTICS =================
  chartLine: FaChartLine,
  chartBar: FaChartBar,
  chartBarMd: MdBarChart,
  analytics: MdAnalytics,
  pieChart: TbChartPie,
  histogram: TbChartHistogram,

  // ================= 📋 ORDERS =================
  orders: FaClipboardList,
  ordersAlt: TbClipboardList,

  // ================= 🔖 TRACKING =================
  barcode: FaBarcode,
  qr: FaQrcode,
  qrMd: MdQrCode,

  // ================= 💼 BUSINESS =================
  revenue: GiTakeMyMoney,
    discountAlt: TbDiscount,
    offerAlt: MdLocalOffer,

    percentAlt: TbPercentage,
    sale: MdSell,

    coupon: RiCoupon3Line,
    couponAlt: RiCoupon2Line,

    voucher: FaTicketAlt,
    voucherAlt: TbTicket,

    gift: FaGift,
    giftMd: MdCardGiftcard,
    giftAlt: TbGift,

    deal: FaCut,
    cashback: TbCash,
};