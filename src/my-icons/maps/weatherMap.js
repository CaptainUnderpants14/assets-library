import * as wiIcons from "react-icons/wi";
import * as giIcons from "react-icons/gi";
import * as faIcons from "react-icons/fa";
import * as mdIcons from "react-icons/md";
import * as tbIcons from "react-icons/tb";

// ================= IMPORTS =================
// ================= MAP =================
export const weatherIcons = {
  // ================= ☀️ DAY WEATHER =================
  sunny: wiIcons.WiDaySunny,
  sunnyAlt: mdIcons.MdSunny,
  sunnySunrise: wiIcons.WiSunrise,
  sunnySunset: wiIcons.WiSunset,
  partlyCloudyDay: wiIcons.WiDayCloudy,
  partlyCloudyDayAlt: faIcons.FaCloudSun,
  mostlyCloudyDay: wiIcons.WiDayCloudyHigh,
  dayRain: wiIcons.WiDayRain,
  dayThunder: wiIcons.WiDayThunderstorm,
  daySnow: wiIcons.WiDaySnow,
  dayFog: wiIcons.WiDayFog,

  // ================= 🌙 NIGHT WEATHER =================
  clearNight: wiIcons.WiNightClear,
  partlyCloudyNight: wiIcons.WiNightAltCloudy,
  nightRain: wiIcons.WiNightAltRain,
  nightThunder: wiIcons.WiNightAltThunderstorm,
  nightSnow: wiIcons.WiNightAltSnow,

  // ================= ☁️ CLOUDS =================
  cloudy: wiIcons.WiCloud,
  overcast: wiIcons.WiCloudy,
  gustyClouds: wiIcons.WiCloudyGusts,
  windyClouds: wiIcons.WiCloudyWindy,

  // ================= 🌧️ PRECIPITATION =================
  rain: wiIcons.WiRain,
  rainAlt: wiIcons.WiDayRain,
  mixedRain: wiIcons.WiRainMix,
  showers: wiIcons.WiShowers,
  stormShowers: wiIcons.WiStormShowers,
  drizzle: faIcons.FaCloudRain,

  // ================= ⛈️ THUNDERSTORMS =================
  thunderstorm: wiIcons.WiThunderstorm,
  thunderstormAlt: wiIcons.WiDayThunderstorm,

  // ================= ❄️ SNOW & ICE =================
  snow: wiIcons.WiSnow,
  snowAlt: wiIcons.WiDaySnow,
  snowWind: wiIcons.WiSnowWind,
  sleet: wiIcons.WiSleet,
  snowflake: giIcons.GiSnowflake2,
  iceberg: giIcons.GiIceberg,
  avalanche: giIcons.GiSnowflake2,

  // ================= 💨 WIND & AIR =================
  wind: wiIcons.WiStrongWind,
  windAlt: giIcons.GiWindSlap,
  breeze: faIcons.FaWind,
  gust: tbIcons.TbWind,
  windy: wiIcons.WiWindy,
  humidity: wiIcons.WiHumidity,

  // ================= 🌫️ ATMOSPHERE =================
  fog: wiIcons.WiFog,
  dust: wiIcons.WiDust,
  sandstorm: mdIcons.MdGrain,
  smoke: wiIcons.WiSmoke,
  haze: wiIcons.WiDayHaze,
  hazeFog: faIcons.FaSmog,

  // ================= 🌪️ SEVERE WEATHER / STORMS =================
  tornado: giIcons.GiTornado,
  cyclone: mdIcons.MdStorm,


  // ================= 🌊 WATER EVENTS =================
  flood: mdIcons.MdFlood,
  waves: mdIcons.MdOutlineWaves,
  water: faIcons.FaWater,
  waterSplash: giIcons.GiWaterSplash,
  ripple: tbIcons.TbWaveSine,

  // ================= 🌋 GEOLOGICAL =================
  earthquake: giIcons.GiEarthCrack,
  volcano: giIcons.GiVolcano,
  lava: giIcons.GiLava,

  // ================= 🔥 FIRE & HEAT =================
  fire: faIcons.FaFire,
  fireAlt: giIcons.GiFire,
  heatwave: faIcons.FaTemperatureHigh,

  // ================= 🌡️ TEMPERATURE =================
  temperature: tbIcons.TbTemperature,
  hot: giIcons.GiSun,
  cold: faIcons.FaTemperatureLow,

  // ================= 🌌 CELESTIAL / SPACE =================
  moon: wiIcons.WiNightClear,
  moonAlt: giIcons.GiMoon,
  moonFull: wiIcons.WiMoonFull,
  moonFirstQuarter: wiIcons.WiMoonFirstQuarter,
  moonThirdQuarter: wiIcons.WiMoonThirdQuarter,
  stars: wiIcons.WiStars,
  solarEclipse: wiIcons.WiSolarEclipse,
  lunarEclipse: wiIcons.WiLunarEclipse,
  comet: giIcons.GiCometSpark,
  blackHole: giIcons.GiBlackHoleBolas,
};