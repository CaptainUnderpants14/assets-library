import { Icon } from ".";
import { weatherIcons } from "./my-icons/maps/weatherMap";
import { alertIcons } from "./my-icons/maps/alertMap";
import { searchIcons } from "./my-icons/maps/searchMap";
import { actionIcons } from "./my-icons/maps/actionMap";
import { uiIconsMap } from "./my-icons/maps/uiIconsMap";
import { brandIcons } from "./my-icons/maps/brandMap";
import { awardIcons } from "./my-icons/maps/awardmap";
import { businessIcons } from "./my-icons/maps/businessMap";
import { devIcons } from "./my-icons/maps/devMap";
import { fashionIcons } from "./my-icons/maps/fashionMap";
import { timeIcons } from "./my-icons/maps/timeMap";
import { foodIcons } from "./my-icons/maps/foodMap";
import { schoolIcons } from "./my-icons/maps/educationMap";
import { electronicsIcons } from "./my-icons/maps/electronicsMap";

//Section Renderer
const Section = ({ title, icons, group }) => (
  <div className="bg-black backdrop-blur-md rounded-3xl shadow-sm p-6 mb-10">
    <h1 className="text-2xl font-semibold mb-6 text-white">{title}</h1>

    <div className="flex flex-wrap gap-6">
      {Object.keys(icons).map((key) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center 
                     bg-white rounded-2xl px-4 py-3 
                     shadow-sm hover:shadow-md 
                     transition-all duration-200
                     w-[60px]">
          <Icon group={group} name={key} size={30} />
          {/* <span className="text-xs text-gray-500 mt-2 text-center">
            {key}
          </span> */}
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const sections = [
    { title: "Weather", icons: weatherIcons, group: "weather" },
    { title: "Alert", icons: alertIcons, group: "alert" },
    { title: "Search/Sort", icons: searchIcons, group: "search" },
    { title: "CRUD", icons: actionIcons, group: "action" },
    { title: "UI", icons: uiIconsMap, group: "uiIcons" },
    { title: "Brand/Apps", icons: brandIcons, group: "brand" },
    { title: "Award/Achievements", icons: awardIcons, group: "award" },
    { title: "Business", icons: businessIcons, group: "business" },
    { title: "Developer", icons: devIcons, group: "dev" },
    { title: "Fashion", icons: fashionIcons, group: "fashion" },
    { title: "Date & Time", icons: timeIcons, group: "time" },
    { title: "Food", icons: foodIcons, group: "food" },
    { title: "Education", icons: schoolIcons, group: "school" },
    { title: "Electronics", icons: electronicsIcons, group: "electronic" },
  ];

  const sortedSections = [...sections].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
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
  );
}

export default App;