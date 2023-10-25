import { Home, Calendar, Profile, Equipment, BookingAlbums, ForgotPassWord, AlbumsPhotoPage, Login, SignUp, BookingOnline } from "../pages/index";
const router = [
  { path: "/", component: Home },
  { path: "/calendar", component: Calendar },
  { path: "/profile", component: Profile },
  { path: "/equiment", component: Equipment },
  { path: "/bookingAlbums", component: BookingAlbums },
  { path: "/bookingOnline", component: BookingOnline },
  { path: "/forgotpassword", component: ForgotPassWord },
  { path: "/albumsphoto", component: AlbumsPhotoPage },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },

];
export { router };

