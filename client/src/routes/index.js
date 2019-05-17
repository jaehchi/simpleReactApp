import SignInRegister from '../components/register';
import SignIn from '../components/signIn';
import Category from './Category';
import Vendor from '../components/Vendor';
import Landing from '../components/landing';
import IndividualVendorLanding from "../components/IndividualVendorLanding";
import BuyerRegisteration from "../components/BuyerRegisteration";
import BestSeller from '../components/CategoryMain/BestSeller';
import NewVendors from '../components/CategoryMain/NewVendors';
import ItemDetails from '../components/ItemDetails';
import Favorites from '../components/Favorites';
import Settings from '../components/Settings';

const routes = [
  {
    path: '/signin',
    name: 'signin',
    exact: true,
    component: SignIn,
  },
  {
    path: '/register',
    name: 'register',
    exact: true,
    component: SignInRegister,
  },
  {
    path: '/vendor',
    name: 'vendors',
    exact: true,
    component: Vendor,
  },
  {
    path: '/',
    name: 'landing',
    exact: true,
    component: Landing,
  },
  {
    path: '/individualvendorlanding',
    name: 'individualvendorlanding',
    exact: true,
    component: IndividualVendorLanding,
  },
  {
    path: '/buyerregistration',
    name: 'buyerregistration',
    exact: true,
    component: BuyerRegisteration,
  },
  {
    path: '/account',
    name: 'account',
    exact: true,
    component: Settings,
  },
  {
    path: '/favorites',
    name: 'favorites',
    exact: true,
    component: Favorites,
  },
  {
    path: '/vendor/:vender_id',
    name: 'vendorss',
    exact: true,
    component: ItemDetails,
  },
  {
    path: '/bestSeller',
    name: 'bestseller',
    exact: true,
    component: BestSeller,
  },
  {
    path: '/newVendors',
    name: 'newvendor',
    exact: true,
    component: NewVendors,
  },
  {
    path: '/category/:category_name',
    name: 'category',
    exact: true,
    component: Category,
  },
];

export default routes;