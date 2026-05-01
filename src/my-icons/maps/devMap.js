import {
  // Devicon
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPython,
  DiPhp,
  DiJava,
  DiRuby,
  DiGo,
  DiRust,
  DiReact,
  DiNodejs,
  DiDjango,
  DiLaravel,
  DiDocker,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiRedis,
  DiFirebase,
  DiNpm,
  DiGit,
  DiGithubBadge,
  DiAws,
  DiGoogleCloudPlatform,
  DiVisualstudio,
  DiLinux,
  DiWindows,
} from "react-icons/di";

import {
  SiHtml5,
  SiTypescript,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNextdotjs,
  SiExpress,
  SiSpring,
  SiSpringboot,
  SiRubyonrails,
  SiSqlite,
  SiApachecouchdb,
  SiYarn,
  SiWebpack,
  SiVagrant,
  SiNetlify,
  SiVercel,
  SiSublimetext,
  SiJetbrains,
  SiJest,
  SiMocha,

  // 🔐 Auth
  SiSupabase,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaApple,
  FaAndroid
} from "react-icons/fa";

import { GrAndroid } from "react-icons/gr";


// FINAL CLEAN MAP
export const devIcons = {
  // 🌐 Languages
  html: DiHtml5,
  html5: SiHtml5,

  css: DiCss3,
  css3: FaCss3Alt,

  javascript: DiJavascript1,
  js: FaJs,

  typescript: SiTypescript,
  ts: SiTypescript,

  python: DiPython,
  php: DiPhp,
  java: DiJava,
  ruby: DiRuby,
  go: DiGo,
  rust: DiRust,

  // 🎨 Frontend
  react: DiReact,
  reactAlt: FaReact,

  vue: SiVuedotjs,
  angular: SiAngular,
  svelte: SiSvelte,
  nextjs: SiNextdotjs,

  // 🔧 Backend
  nodejs: DiNodejs,
  node: FaNode,

  express: SiExpress,
  django: DiDjango,
  spring: SiSpring,
  springboot: SiSpringboot,
  rails: SiRubyonrails,
  laravel: DiLaravel,
  docker: DiDocker,

  // 💾 Databases
  mongodb: DiMongodb,
  mysql: DiMysql,
  postgres: DiPostgresql,
  redis: DiRedis,
  firebase: DiFirebase,
  sqlite: SiSqlite,
  couchdb: SiApachecouchdb,

  // 📦 Tools
  npm: DiNpm,
  yarn: SiYarn,
  git: DiGit,
  gitAlt: FaGitAlt,
  github: DiGithubBadge,
  webpack: SiWebpack,
  vagrant: SiVagrant,

  // ☁️ Cloud
  aws: DiAws,
  gcp: DiGoogleCloudPlatform,
  netlify: SiNetlify,
  vercel: SiVercel,

  // 🛠️ Editors / OS
  visualstudio: DiVisualstudio,
  sublime: SiSublimetext,
  jetbrains: SiJetbrains,
  linux: DiLinux,
  android: FaAndroid,
  androidAlt: GrAndroid,
  windows: DiWindows,
  mac: FaApple,

  // 🔐 Authentication / Identity
  supabaseAuth: SiSupabase,
  firebaseAuth: DiFirebase,

  // 🧪 Testing
  jest: SiJest,
  mocha: SiMocha,
};