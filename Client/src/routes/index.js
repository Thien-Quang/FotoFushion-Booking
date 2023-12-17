import {
  Home, Calendar, Profile, Equipment, BookingAlbums,
  ForgotPassWord, AlbumsPhotoPage, Login, SignUp, BookingOnline,
  testUpdate, PhotoOfAlbums, AlbumsPage, PriceList, ContactUs, BlogPost,
  Studio, Costumer, DashBoard, MakeUp, ComboTakePhoto, ResetPassword
} from "../pages/index";

const router = [
  { path: "/", component: Home },
  { path: "/calendar", component: Calendar },
  { path: "/profile", component: Profile },
  { path: "/equipment", component: Equipment },
  { path: "/bookingAlbums", component: BookingAlbums },
  { path: "/bookingOnline", component: BookingOnline },
  { path: "/forgotpassword", component: ForgotPassWord },
  { path: "/resetpassword", component: ResetPassword },

  { path: "/albumsphoto", component: AlbumsPhotoPage },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/testUpdate", component: testUpdate },
  { path: "/photoofalbums/:albumsid", component: PhotoOfAlbums },
  { path: "/albumspage", component: AlbumsPage },
  { path: "/pricelist/:albumsid", component: PriceList },
  { path: "/contactus", component: ContactUs },
  { path: "/blogpost", component: BlogPost },
  { path: "/dashboard", component: DashBoard },
  { path: "/studioroom", component: Studio },
  { path: "/costumer", component: Costumer },
  { path: "/makeup", component: MakeUp },
  { path: "/combotakephoto", component: ComboTakePhoto },




];
export { router };

