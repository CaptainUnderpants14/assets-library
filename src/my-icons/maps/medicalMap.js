// ================= IMPORTS =================
import {
  FaUserMd,
  FaUserNurse,
  FaHospital,
  FaClinicMedical,
  FaStethoscope,
  FaHeartbeat,
  FaNotesMedical,
  FaPrescriptionBottle,
  FaPills,
  FaCapsules,
  FaSyringe,
  FaBandAid,
  FaProcedures,
  FaWheelchair,
  FaTooth,
  FaEye,
  FaLungs,
  FaBrain,
  FaHandHoldingMedical,
} from "react-icons/fa";

import {
  MdLocalHospital,
  MdMedicalServices,
  MdVaccines,
  MdHealthAndSafety,
  MdMasks,
  MdMedication,
  MdBloodtype,
  MdMonitorHeart,
} from "react-icons/md";

import {
  GiHeartOrgan,
  GiKidneys,
  GiLiver,
  GiStomach,
  GiLungs,
  GiBrain,
  GiMedicalPack,
  GiMedicalDrip,
  GiPoisonBottle,
} from "react-icons/gi";

import {
  TbAmbulance,
  TbFirstAidKit,
  TbTemperature,
  TbDental,
  TbEye,
  TbMicroscope,
  TbReportMedical,
  TbVaccine,
} from "react-icons/tb";

import { CiMedicalMask } from "react-icons/ci";
import { FaMaskFace } from "react-icons/fa6";



// ================= MAP =================
export const medicalIcons = {
  // ================= 👨‍⚕️ PEOPLE =================
  doctor: FaUserMd,
  nurse: FaUserNurse,
  medicalStaff: MdMedicalServices,

  // ================= 🏥 FACILITIES =================
  hospital: FaHospital,
  hospitalAlt: MdLocalHospital,
  clinic: FaClinicMedical,
  ambulance: TbAmbulance,

  // ================= 🧰 EQUIPMENT =================
  stethoscope: FaStethoscope,
  firstAid: TbFirstAidKit,
  medicalKit: GiMedicalPack,
  drip: GiMedicalDrip,
  monitor: MdMonitorHeart,
  microscope: TbMicroscope,
  wheelchair: FaWheelchair,
  mask: CiMedicalMask,
  maskAlt: FaMaskFace,

  // ================= 💊 MEDICINE =================
  pills: FaPills,
  capsules: FaCapsules,
  medicine: MdMedication,
  prescription: FaPrescriptionBottle,
  vaccine: TbVaccine,
  vaccineAlt: MdVaccines,
  poison: GiPoisonBottle,

  // ================= 💉 TREATMENT =================
  injection: FaSyringe,
  bandage: FaBandAid,
  surgery: FaProcedures,
  blood: MdBloodtype,
  care: FaHandHoldingMedical,

  // ================= 😷 PROTECTION =================
  mask: MdMasks,
  safety: MdHealthAndSafety,

  // ================= ❤️ HEALTH =================
  heart: FaHeartbeat,
  heartAlt: GiHeartOrgan,
  report: TbReportMedical,
  notes: FaNotesMedical,

  // ================= 🧍 ORGANS =================
  brain: FaBrain,
  brainAlt: GiBrain,
  lungs: FaLungs,
  lungsAlt: GiLungs,
  liver: GiLiver,
  kidneys: GiKidneys,
  stomach: GiStomach,

  // ================= 👁️ BODY =================
  eye: FaEye,
  eyeAlt: TbEye,
  tooth: FaTooth,
  dental: TbDental,

  // ================= 🌡️ VITALS =================
  temperature: TbTemperature,
};