import {
  Home, Calendar, Profile, Equipment, BookingAlbums,
  ForgotPassWord, AlbumsPhotoPage, Login, SignUp, BookingOnline,
  testUpdate, PhotoOfAlbums, AlbumsPage, PriceList, ContactUs, BlogPost, UpdateCostumer, AddRoomPhoto, AddPriceList, AddProduct
} from "../pages/index";



const router = [
  { path: "/", component: Home },
  { path: "/calendar", component: Calendar },
  { path: "/profile", component: Profile },
  { path: "/equipment", component: Equipment },
  { path: "/bookingAlbums", component: BookingAlbums },
  { path: "/bookingOnline", component: BookingOnline },
  { path: "/forgotpassword", component: ForgotPassWord },
  { path: "/albumsphoto", component: AlbumsPhotoPage },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/testUpdate", component: testUpdate },
  { path: "/photoofalbums/:albumsid", component: PhotoOfAlbums },
  { path: "/albumspage", component: AlbumsPage },
  { path: "/pricelist/:albumsid", component: PriceList },
  { path: "/contactus", component: ContactUs },
  { path: "/blogpost", component: BlogPost },
  { path: "/updateCostumer", component: UpdateCostumer },
  { path: "/updateRoom", component: AddRoomPhoto },
  { path: "/updateRoom", component: AddRoomPhoto },
  { path: "/updatePricelist", component: AddPriceList },
  { path: "/addproduct", component: AddProduct },





];
export { router };

