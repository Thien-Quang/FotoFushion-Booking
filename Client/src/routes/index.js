import AccessoryPage from "../pages/AccessoryPage";
import AdminHomePage from "../pages/AdminHomePage";
import OutFitDetailPage from "../pages/OutFitDetailPage";
import OutFitsPage from "../pages/OutFitsPage";
import StudioRoomPage from "../pages/StudioRoomPage";
import VoucherPage from "../pages/voucherPage";

import { Home, Calendar, Profile, Equipment, BookingAlbums, ForgotPassWord, AlbumsPhotoPage, Login, SignUp, BookingOnline, BlogPage, BlogDetail } from "../pages/index";

const router = [
  { path: "/", component: Home },
  { path: "/calendar", component: Calendar },
  { path: "/profile", component: Profile },
  { path: "/equiment", component: Equipment },
  { path: "/bookingAlbums", component: BookingAlbums },
  { path: "/bookingOnline", component: BookingOnline },
  { path: "/forgotpassword", component: ForgotPassWord },
  { path: "/albumsphoto", component: AlbumsPhotoPage },
  { path: "/blog", component: BlogPage },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/blog/:id", component: BlogDetail },

  { path: "/voucher", component: VoucherPage },
  { path: "/outfits", component: OutFitsPage },
  { path: "/outfits-detail", component: OutFitDetailPage },
  { path: "/accessories", component: AccessoryPage },
  { path: "/studio", component: StudioRoomPage },
  { path: "/admin", component: AdminHomePage },
];
export { router };

