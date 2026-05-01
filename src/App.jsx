import { Icon } from ".";
import { weatherIcons } from "./my-icons/maps/weatherMap";
import { alertIcons } from "./my-icons/maps/alertMap";
import { searchIcons } from "./my-icons/maps/searchMap";
import { actionIcons } from "./my-icons/maps/actionMap";
import { uiIconsMap } from "./my-icons/maps/uiIconsMap";
import { brandIcons } from "./my-icons/maps/brandMap";

const Section = ({ title, icons, group }) => (
  <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-sm p-6 mb-10">
    <h1 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h1>

    <div className="flex flex-wrap gap-6">
      {Object.keys(icons).map((key) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center 
                     bg-white rounded-2xl px-4 py-3 
                     shadow-sm hover:shadow-md 
                     transition-all duration-200
                     w-[90px]"
        >
          <Icon group={group} name={key} size={40} />

          <span className="text-xs text-gray-500 mt-2 text-center">
            {key}
          </span>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-10 text-gray-900">
          Icon System Preview
        </h1>

        <Section title="Weather Icons" icons={weatherIcons} group="weather" />
        <Section title="Alert Icons" icons={alertIcons} group="alert" />
        <Section title="Search / Sort Icons" icons={searchIcons} group="search" />
        <Section title="CRUD Icons" icons={actionIcons} group="action" />
        <Section title="UI Icons" icons={uiIconsMap} group="uiIcons" />
        <Section title="Brand / Apps Icons" icons={brandIcons} group="brand" />

      </div>
    </div>
  );
}

export default App;