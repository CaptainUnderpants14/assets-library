// ================= IMPORTS =================
import {
  FaClock,
  FaRegClock,
  FaStopwatch,
  FaHourglass,
  FaRegCalendarAlt,
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarCheck,
  FaBell,
  FaBusinessTime,
} from "react-icons/fa";

import {
  MdAccessTime,
  MdAlarm,
  MdTimer,
  MdWatch,
  MdOutlineWatchLater,
  MdCalendarToday,
  MdEvent,
  MdSchedule,
  MdUpdate,
} from "react-icons/md";

import {
  TbClock,
  TbClockHour1,
  TbClockHour2,
  TbClockHour3,
  TbClockHour4,
  TbClockHour5,
  TbClockHour6,
  TbClockHour7,
  TbClockHour8,
  TbClockHour9,
  TbClockHour10,
  TbClockHour11,
  TbClockHour12,
  TbStopwatch,
  TbCalendarTime,
  TbCalendarEvent,
} from "react-icons/tb";

import {
  GiAlarmClock,
  GiSandsOfTime,
} from "react-icons/gi";

// ================= MAP =================
export const timeIcons = {
  // 🕒 Basic Time
  clock: FaClock,
  clockAlt: TbClock,
  clockOutline: FaRegClock,
  time: MdAccessTime,
  schedule: MdSchedule,
  update: MdUpdate,

  // ⏱️ Stopwatch / Timer
  stopwatch: FaStopwatch,
  stopwatchAlt: TbStopwatch,
  timer: MdTimer,

  // ⏳ Hourglass
  hourglass: FaHourglass,
  sandClock: GiSandsOfTime,

  // ⏰ Alarm
  alarm: MdAlarm,
  alarmClock: GiAlarmClock,
  bell: FaBell,

  // ⌚ Watches
  watch: MdWatch,
  wristWatch: MdOutlineWatchLater,

  // 📅 Calendar
  calendar: FaRegCalendarAlt,
  calendarToday: MdCalendarToday,
  calendarDay: FaCalendarDay,
  calendarWeek: FaCalendarWeek,
  calendarCheck: FaCalendarCheck,
  calendarTime: TbCalendarTime,
  calendarEvent: TbCalendarEvent,
  event: MdEvent,

  // 🧭 Time Context
  businessTime: FaBusinessTime,

  // 🕐 Hour Variants (nice UI touch)
  hour1: TbClockHour1,
  hour2: TbClockHour2,
  hour3: TbClockHour3,
  hour4: TbClockHour4,
  hour5: TbClockHour5,
  hour6: TbClockHour6,
  hour7: TbClockHour7,
  hour8: TbClockHour8,
  hour9: TbClockHour9,
  hour10: TbClockHour10,
  hour11: TbClockHour11,
  hour12: TbClockHour12,
};