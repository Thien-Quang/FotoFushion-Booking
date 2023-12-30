import {
  Home, Calendar, Profile, Equipment, BookingAlbums,
  ForgotPassWord, AlbumsPhotoPage, Login, SignUp, BookingOnline,
  testUpdate, PhotoOfAlbums, AlbumsPage, PriceList, ContactUs, BlogPost,
  Studio, Costumer, DashBoard, MakeUp, ComboTakePhoto, ResetPassword,
  AddProduct, Location, AlbumsVideo, RequestEditPhoto, HomeEditor,
  Store,
  CartPage,
  Promotion,
  Payment,

} from "../pages/index";

const router = [{ path: "/", component: Home },
{ path: "/calendar", component: Calendar },
{ path: "/profile", component: Profile },
{ path: "/equipment", component: Equipment },
{ path: "/bookingAlbums", component: BookingAlbums },
{ path: "/bookingOnline", component: BookingOnline },
{ path: "/forgotpassword", component: ForgotPassWord },
{ path: "/resetpassword", component: ResetPassword },

{ path: "/albumsphoto", component: AlbumsPhotoPage },
{ path: "/albumsvideo", component: AlbumsVideo },

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
{ path: "/location", component: Location },

{ path: "/makeup", component: MakeUp },
{ path: "/combotakephoto", component: ComboTakePhoto },
// { path: "/updateCostumer", component: UpdateCostumer },
// { path: "/updateRoom", component: AddRoomPhoto },
// { path: "/updateRoom", component: AddRoomPhoto },
// { path: "/updatePricelist", component: AddPriceList },
{ path: "/addproduct", component: AddProduct },
// // Tri-router
{ path: "/store", component: Store },
{ path: "/cart", component: CartPage },
{ path: "/promotion", component: Promotion },
{ path: "/payment", component: Payment },

{ path: "/requestpage", component: RequestEditPhoto },
{ path: "/homeeditor", component: HomeEditor },


];
export { router };
