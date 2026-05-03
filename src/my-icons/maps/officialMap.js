// ================= IMPORTS =================
import {
  FaBalanceScale,
  FaGavel,
  FaUniversity,
  FaLandmark,
  FaBuilding,
  FaFileContract,
  FaFileSignature,
  FaFileAlt,
  FaClipboard,
  FaStamp,
  FaCertificate,
  FaIdCard,
  FaUserShield,
  FaShieldAlt,
  FaLock,
  FaUnlock,
  FaKey,
  FaBook,
  FaBookOpen,
  FaFlag,
  FaUserTie,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

import {
  MdGavel,
  MdAccountBalance,
  MdPolicy,
  MdVerifiedUser,
  MdSecurity,
  MdDescription,
  MdAssignment,
  MdHowToVote,
} from "react-icons/md";

import {
  TbScale,
  TbFileDescription,
  TbCertificate,
  TbShieldCheck,
  TbLock,
  TbKey,
  TbBuildingBank,
  TbUserCheck,
} from "react-icons/tb";

import {
  GiPoliceBadge,
  GiJusticeStar,
  GiEagleEmblem,
  GiScrollUnfurled,
  GiArchiveRegister,
} from "react-icons/gi";

// ================= MAP =================
export const legalIcons = {
  // ================= ⚖️ LAW & JUSTICE =================
  justice: FaBalanceScale,
  justiceAlt: TbScale,
  court: FaUniversity,
  courtAlt: MdAccountBalance,
  judge: FaUserTie,
  jury: FaUsers,
  justiceAlt2: GiJusticeStar,

  gavel: FaGavel,
  gavelAlt: MdGavel,

  lawBook: FaBook,
  lawBookOpen: FaBookOpen,
  policy: MdPolicy,

  // ================= 📜 DOCUMENTS =================
  contract: FaFileContract,
  agreement: FaFileSignature,
  document: FaFileAlt,
  legalDoc: MdDescription,
  caseFile: MdAssignment,
  scroll: GiScrollUnfurled,
  registry: GiArchiveRegister,

  // ================= 🏛️ GOVERNMENT =================
  government: FaLandmark,
  building: FaBuilding,
  parliament: TbBuildingBank,
  institution: FaUniversity,

  // ================= 👮 ENFORCEMENT =================
  police: GiPoliceBadge,

  // ================= 🪖 NATIONAL =================
  army: GiEagleEmblem,
  nation: FaFlag,
  global: FaGlobe,

  // ================= 📌 RECORDS =================
  idCard: FaIdCard,
  certificate: FaCertificate,
  certificateAlt: TbCertificate,
  stamp: FaStamp,
  clipboard: FaClipboard,
  file: TbFileDescription,

  // ================= 🗳️ CIVIC =================
  voting: MdHowToVote,
};