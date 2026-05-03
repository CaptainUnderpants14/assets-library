import { Icon } from ".";

import { weatherIcons } from "./my-icons/maps/weatherMap";
import { alertIcons } from "./my-icons/maps/alertMap";
import { searchIcons } from "./my-icons/maps/searchMap";
import { actionIcons } from "./my-icons/maps/actionMap";
import { uiIconsMap } from "./my-icons/maps/uiIconsMap";
import { appsIcons } from "./my-icons/maps/appsMap";
import { awardIcons } from "./my-icons/maps/awardmap";
import { businessIcons } from "./my-icons/maps/businessMap";
import { devIcons } from "./my-icons/maps/devMap";
import { fashionIcons } from "./my-icons/maps/fashionMap";
import { timeIcons } from "./my-icons/maps/timeMap";
import { foodIcons } from "./my-icons/maps/foodMap";
import { schoolIcons } from "./my-icons/maps/educationMap";
import { electronicsIcons } from "./my-icons/maps/electronicsMap";
import { brandsIcons } from "./my-icons/maps/brandingMap";
import { gameIcons } from "./my-icons/maps/gameMap";
import { commerceIcons } from "./my-icons/maps/commerceMap";
import { toolsIcons } from "./my-icons/maps/toolsMap";
import { legalIcons } from "./my-icons/maps/officialMap";
import { medicalIcons } from "./my-icons/maps/medicalMap";
import { cursorIcons } from "./my-icons/maps/cursorMap";
import { shapesIcons } from "./my-icons/maps/shapesMap";

// SECTION
const Section = ({ title, icons, group }) => (
  <div className="mb-12">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">
      {title}
    </h2>

    <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
      {Object.keys(icons).map((key) => (
        <div
          key={key}
          className="bg-white border border-gray-200
                     rounded-xl 
                     flex items-center justify-center 
                     h-16 w-16
                     hover:border-blue-300
                     hover:shadow-md
                     transition-all duration-200
                     cursor-pointer"
        >
          <Icon group={group} name={key} size={26} />
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const sections = [
    { title: "Weather", icons: weatherIcons, group: "weather" },
    { title: "Alerts", icons: alertIcons, group: "alert" },
    { title: "Search", icons: searchIcons, group: "search" },
    { title: "CRUD", icons: actionIcons, group: "action" },
    { title: "UI", icons: uiIconsMap, group: "uiIcons" },
    { title: "Apps", icons: appsIcons, group: "app" },
    { title: "Awards", icons: awardIcons, group: "award" },
    { title: "Business", icons: businessIcons, group: "business" },
    { title: "Developer", icons: devIcons, group: "dev" },
    { title: "Fashion", icons: fashionIcons, group: "fashion" },
    { title: "Time", icons: timeIcons, group: "time" },
    { title: "Food", icons: foodIcons, group: "food" },
    { title: "Education", icons: schoolIcons, group: "school" },
    { title: "Electronics", icons: electronicsIcons, group: "electronic" },
    { title: "Brands", icons: brandsIcons, group: "brand" },
    { title: "Games", icons: gameIcons, group: "game" },
    { title: "Commerce", icons: commerceIcons, group: "commerce" },
    { title: "Tools", icons: toolsIcons, group: "tools" },
    { title: "Officials", icons: legalIcons, group: "official" },
    { title: "Medical", icons: medicalIcons, group: "medical" },
    { title: "Cursor", icons: cursorIcons, group: "cursor" },
    { title: "Shapes", icons: shapesIcons, group: "shapes" },
  ];

  const sortedSections = [...sections].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="min-h-screen flex bg-blue-100/70">
      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {sortedSections.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              icons={section.icons}
              group={section.group}
            />
          ))}
        </div>
      </div>

      {/* <Icon group="business" name="chartLine" size="xl" /> */}

      {/* RIGHT SIDEBAR */}
      <div className="w-64 border-l border-gray-200 p-6 sticky top-0 h-screen bg-white">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Categories
        </h2>

        <div className="space-y-3 overflow-y-auto h-[90%]">
          {sortedSections.map((section) => (
            <div
              key={section.title}
              className="text-gray-500 hover:text-blue-600 
                         hover:font-medium 
                         cursor-pointer text-sm transition"
            >
              {section.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;