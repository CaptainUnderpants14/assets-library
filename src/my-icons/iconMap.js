import { actionIcons } from "./maps/actionMap";
import { alertIcons } from "./maps/alertMap";
import { brandIcons } from "./maps/brandMap";
// import { emojiIcons } from "./maps/emojiMap";
import { searchIcons } from "./maps/searchMap";
import { uiIconsMap } from "./maps/uiIconsMap";
import { weatherIcons } from "./maps/weatherMap";

// Main icon map (grouped)
export const iconMap = {
  weather: weatherIcons,
  alert: alertIcons,
  search: searchIcons,
  action: actionIcons,
  uiIcons: uiIconsMap,
  // emoji: emojiIcons
  brand: brandIcons
};