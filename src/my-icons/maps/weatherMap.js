// ================= IMPORTS =================
import {
  // Weather Icons (wi) - Most comprehensive set
  WiDaySunny,
  WiDayCloudy,
  WiDayCloudyHigh,
  WiDayRain,
  WiDayThunderstorm,
  WiDaySnow,
  WiDayFog,
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightAltThunderstorm,
  WiNightAltSnow,
  WiCloud,
  WiCloudy,
  WiCloudyGusts,
  WiCloudyWindy,
  WiRain,
  WiRainMix,
  WiShowers,
  WiStormShowers,
  WiThunderstorm,
  WiSnow,
  WiSnowWind,
  WiSleet,
  WiFog,
  WiDust,
  WiSmoke,
  WiDayHaze,
  WiStrongWind,
  WiWindy,
  WiHumidity,
  WiSunrise,
  WiSunset,
  WiMoonFull,
  WiMoonFirstQuarter,
  WiMoonThirdQuarter,
  WiSolarEclipse,
  WiLunarEclipse,
  WiStars,
} from "react-icons/wi";

import {
  // Game Icons (gi) - Stylized/dramatic alternatives
  GiTornado,
  GiVolcano,
  GiLava,
  GiFire,
  GiWaterSplash,
  GiWaveSurfer,
  GiEarthCrack,
  GiIceberg,
  GiSnowflake2,
  GiWindSlap,
  GiSun,
  GiMoon,
  GiCometSpark,
  GiBlackHoleBolas,
} from "react-icons/gi";

import {
  // Font Awesome (fa) - Clean alternatives
  FaCloudSun,
  FaCloudRain,
  FaWind,
  FaWater,
  FaFire,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaSmog,
} from "react-icons/fa";

import {
  // Material Icons (md)
  MdStorm,
  MdFlood,
  MdOutlineWaves,
  MdGrain,
  MdSunny,
} from "react-icons/md";

import {
  // Tabler (tb)
  TbWaveSine,
  TbWind,
  TbTemperature,
} from "react-icons/tb";

// ================= MAP =================
export const weatherIcons = {
  // ================= ☀️ DAY WEATHER =================
  sunny: WiDaySunny,
  sunnyAlt: MdSunny,
  sunnySunrise: WiSunrise,
  sunnySunset: WiSunset,
  partlyCloudyDay: WiDayCloudy,
  partlyCloudyDayAlt: FaCloudSun,
  mostlyCloudyDay: WiDayCloudyHigh,
  dayRain: WiDayRain,
  dayThunder: WiDayThunderstorm,
  daySnow: WiDaySnow,
  dayFog: WiDayFog,

  // ================= 🌙 NIGHT WEATHER =================
  clearNight: WiNightClear,
  partlyCloudyNight: WiNightAltCloudy,
  nightRain: WiNightAltRain,
  nightThunder: WiNightAltThunderstorm,
  nightSnow: WiNightAltSnow,

  // ================= ☁️ CLOUDS =================
  cloudy: WiCloud,
  overcast: WiCloudy,
  gustyClouds: WiCloudyGusts,
  windyClouds: WiCloudyWindy,

  // ================= 🌧️ PRECIPITATION =================
  rain: WiRain,
  rainAlt: WiDayRain,
  mixedRain: WiRainMix,
  showers: WiShowers,
  stormShowers: WiStormShowers,
  drizzle: FaCloudRain,

  // ================= ⛈️ THUNDERSTORMS =================
  thunderstorm: WiThunderstorm,
  thunderstormAlt: WiDayThunderstorm,

  // ================= ❄️ SNOW & ICE =================
  snow: WiSnow,
  snowAlt: WiDaySnow,
  snowWind: WiSnowWind,
  sleet: WiSleet,
  snowflake: GiSnowflake2,
  iceberg: GiIceberg,
  avalanche: GiSnowflake2,

  // ================= 💨 WIND & AIR =================
  wind: WiStrongWind,
  windAlt: GiWindSlap,
  breeze: FaWind,
  gust: TbWind,
  windy: WiWindy,
  humidity: WiHumidity,

  // ================= 🌫️ ATMOSPHERE =================
  fog: WiFog,
  dust: WiDust,
  sandstorm: MdGrain,
  smoke: WiSmoke,
  haze: WiDayHaze,
  hazeFog: FaSmog,

  // ================= 🌪️ SEVERE WEATHER / STORMS =================
  tornado: GiTornado,
  cyclone: MdStorm,


  // ================= 🌊 WATER EVENTS =================
  flood: MdFlood,
  waves: MdOutlineWaves,
  water: FaWater,
  waterSplash: GiWaterSplash,
  ripple: TbWaveSine,

  // ================= 🌋 GEOLOGICAL =================
  earthquake: GiEarthCrack,
  volcano: GiVolcano,
  lava: GiLava,

  // ================= 🔥 FIRE & HEAT =================
  fire: FaFire,
  fireAlt: GiFire,
  heatwave: FaTemperatureHigh,

  // ================= 🌡️ TEMPERATURE =================
  temperature: TbTemperature,
  hot: GiSun,
  cold: FaTemperatureLow,

  // ================= 🌌 CELESTIAL / SPACE =================
  moon: WiNightClear,
  moonAlt: GiMoon,
  moonFull: WiMoonFull,
  moonFirstQuarter: WiMoonFirstQuarter,
  moonThirdQuarter: WiMoonThirdQuarter,
  stars: WiStars,
  solarEclipse: WiSolarEclipse,
  lunarEclipse: WiLunarEclipse,
  comet: GiCometSpark,
  blackHole: GiBlackHoleBolas,
};