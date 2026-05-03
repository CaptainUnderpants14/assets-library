import { Icon } from ".";

const sectionTitleStyle = "text-xl font-semibold text-slate-800";
const rowStyle = "flex flex-wrap items-center gap-4 rounded-lg border border-slate-200 bg-white p-4";

const iconExamples = [
  {
    title: "Props Usage (No Tailwind)",
    items: [
      <Icon key="business-default" group="business" name="chartLine" />,
      <Icon key="business-size-number" group="business" name="chartLine" size={50} />,
      <Icon key="business-size-lg" group="business" name="chartLine" size="lg" />,
      <Icon key="business-color" group="business" name="chartLine" color="red" />,
      <Icon key="action-add" group="action" name="add" size={34} />,
      <Icon key="alert-warning" group="alert" name="warning" size={34} color="orange" />,
      <Icon key="weather-sunny" group="weather" name="sunny" size={36} color="goldenrod" />,
      <Icon key="medical-heart" group="medical" name="heart" size={34} color="crimson" />,
    ],
  },
  {
    title: "ClassName DSL (Tailwind)",
    items: [
      <Icon key="dsl-business" className="business_chartLine" />,
      <Icon key="dsl-business-blue" className="business_chartLine_40 text-blue-500" />,
      <Icon key="dsl-business-green" className="business_chartLine_lg text-green-500 hover:scale-110 transition" />,
      <Icon key="dsl-weather" className="weather_sunny_40 text-yellow-500" />,
      <Icon key="dsl-alert" className="alert_warning_40 text-orange-500" />,
      <Icon key="dsl-ui" className="uiIcons_like_40 text-pink-500 hover:scale-110 transition" />,
      <Icon key="dsl-dev" className="dev_react_40 text-cyan-500" />,
      <Icon key="dsl-brand" className="brand_google_40 text-emerald-600" />,
    ],
  },
  {
    title: "Mixed Usage",
    items: [
      <Icon key="mixed-business" className="business_chartLine" size={60} />,
      <Icon key="mixed-business-xl" className="business_chartLine_40 text-cyan-500" size="xl" />,
      <Icon key="mixed-business-color" className="business_chartLine text-purple-500" color="orange" />,
      <Icon key="mixed-food" className="food_pizza_40 text-rose-500" size="lg" />,
      <Icon key="mixed-tools" className="tools_wrench_40 text-slate-700" color="seagreen" />,
      <Icon key="mixed-cursor" className="cursor_click_40 text-indigo-500" size={42} />,
    ],
  },
  {
    title: "More Library Groups",
    items: [
      <Icon key="apps-google" group="app" name="google" size={34} />,
      <Icon key="award-trophy" group="award" name="trophy" size={34} color="goldenrod" />,
      <Icon key="commerce-cart" group="commerce" name="cart" size={34} />,
      <Icon key="dev-react" group="dev" name="react" size={34} color="#61dafb" />,
      <Icon key="fashion-shirt" group="fashion" name="shirt" size={34} />,
      <Icon key="food-coffee" group="food" name="coffee" size={34} color="#8b5e3c" />,
      <Icon key="game-controller" group="game" name="gamePad" size={34} />,
      <Icon key="official-gavel" group="official" name="gavel" size={34} />,
      <Icon key="search-filter" group="search" name="filter" size={34} />,
      <Icon key="shapes-circle" group="shapes" name="circle" size={34} />,
      <Icon key="time-clock" group="time" name="clock" size={34} />,
      <Icon key="electronic-laptop" group="electronic" name="laptop" size={34} />,
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">assets-library Test Page</h1>
          <p className="mt-2 text-slate-600">
            Quick visual check for props, className DSL, mixed usage, and icons across multiple groups.
          </p>
        </div>

        {iconExamples.map((section) => (
          <section key={section.title} className="flex flex-col gap-3">
            <h2 className={sectionTitleStyle}>{section.title}</h2>
            <div className={rowStyle}>{section.items}</div>
          </section>
        ))}

        <section className="flex flex-col gap-3">
          <h2 className={sectionTitleStyle}>Parent Color</h2>
          <div className={rowStyle}>
            <div style={{ color: "teal" }} className="flex items-center gap-4">
              <Icon group="business" name="chartLine" size={40} />
              <Icon group="weather" name="cloudy" size={40} />
              <Icon group="uiIcons" name="share" size={40} />
              <Icon group="action" name="check" size={40} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
