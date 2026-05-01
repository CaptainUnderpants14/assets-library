import {
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

  // Only NEW ones here
  WiSolarEclipse,
  WiLunarEclipse,
  WiStars,
} from "react-icons/wi";

// Expanded weather + celestial icons map
export const weatherIcons = {
  // Day
  sunny: WiDaySunny,
  partlyCloudyDay: WiDayCloudy,
  mostlyCloudyDay: WiDayCloudyHigh,
  dayRain: WiDayRain,
  dayThunder: WiDayThunderstorm,
  daySnow: WiDaySnow,
  dayFog: WiDayFog,

  // Night
  clearNight: WiNightClear,
  partlyCloudyNight: WiNightAltCloudy,
  nightRain: WiNightAltRain,
  nightThunder: WiNightAltThunderstorm,
  nightSnow: WiNightAltSnow,

  // Clouds
  cloudy: WiCloud,
  overcast: WiCloudy,
  gustyClouds: WiCloudyGusts,
  windyClouds: WiCloudyWindy,

  // Rain & Storm
  rain: WiRain,
  mixedRain: WiRainMix,
  showers: WiShowers,
  stormShowers: WiStormShowers,
  thunderstorm: WiThunderstorm,

  // Snow & Ice
  snow: WiSnow,
  snowWind: WiSnowWind,
  sleet: WiSleet,

  // Atmosphere
  fog: WiFog,
  dust: WiDust,
  smoke: WiSmoke,
  haze: WiDayHaze,

  // Wind & Air
  wind: WiStrongWind,
  windy: WiWindy,
  humidity: WiHumidity,

  // Sun phases
  sunrise: WiSunrise,
  sunset: WiSunset,

  // Moon phases
  moonFull: WiMoonFull,
  moonFirstQuarter: WiMoonFirstQuarter,
  moonThirdQuarter: WiMoonThirdQuarter,

  // 🌌 Celestial entities
  sun: WiDaySunny,
  moon: WiNightClear,
  stars: WiStars,
  solarEclipse: WiSolarEclipse,
  lunarEclipse: WiLunarEclipse,
};