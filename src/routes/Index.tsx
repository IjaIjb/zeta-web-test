import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));
const AboutPage = lazy(() => import("../pages/about/About"));
const ResearchPage = lazy(() => import("../pages/research/Research"));
const ServicePage = lazy(() => import("../pages/services/Services"));
const CareersPage = lazy(() => import("../pages/careers/Careers"));
const PartnersPage = lazy(() => import("../pages/partner/Partner"));
const CollaboratorsPage = lazy(() => import("../pages/collaborators/Collaborators"));
const ContactusPage = lazy(() => import("../pages/contact/Contact"));
const MarketPlacePage = lazy(() => import("../pages/marketplace/MarketPlace"));
const AppFeaturePage = lazy(() => import("../pages/AppFeatures"));
const AdminDashboardPage = lazy(() => import("../pages/admin/AdminDashboard"));
const AdminContactListPage = lazy(() => import("../pages/admin/ContactList"));
const AdminWaitListPage = lazy(() => import("../pages/admin/WaitList"));
const AdminPartnersPage = lazy(() => import("../pages/admin/Partners"));
const AdminInvestorsPage = lazy(() => import("../pages/admin/Investors"));
const LoginPage = lazy(() => import("../pages/admin/Login"));
const InvestorsPage = lazy(() => import("../pages/investors/Investors"));

const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/about-us",
      component: AboutPage,
    },
    {
      path: "/research",
      component: ResearchPage,
    },
    {
      path: "/solutions",
      component: ServicePage,
    },
    {
      path: "/careers",
      component: CareersPage,
    },
    {
      path: "/collaborators",
      component: CollaboratorsPage,
    },
    {
      path: "/partnership",
      component: PartnersPage,
    },
    {
      path: "/contact-us",
      component: ContactusPage,
    },
    {
      path: "/market-place",
      component: MarketPlacePage,
    },
    {
      path: "/investors",
      component: InvestorsPage,
    },
    {
      path: "/app-features",
      component: AppFeaturePage,
    },
    {
      path: "/admin-dashboard",
      component: AdminDashboardPage,
    },
    {
      path: "/admin/wait-list",
      component: AdminWaitListPage,
    },
    {
      path: "/admin/contact-list",
      component: AdminContactListPage,
    },
    {
      path: "/admin/partners",
      component: AdminPartnersPage,
    },
    {
      path: "/admin/investors",
      component: AdminInvestorsPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
    
  ];
  
  export default routes;