import { Home, Calendar, Profile, Equipment } from "../pages/index";
const router = [
  { path: "/", component: Home },
  { path: "/calendar", component: Calendar },
  { path: "/profile", component: Profile },
  { path: "/equiment", component: Equipment },
];
export { router };
