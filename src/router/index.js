import Vue from 'vue'
import VueRouter from 'vue-router'
// import WelcomeView from "../views/WelcomeView";
import MenusView from "../views/MenusView";
import Welcome from "../components/Welcome";
import privacy from "../components/privacy";
import license from "../components/license";
import change_colors from "../components/change_colors";
import PdfView from "../components/PdfView";
import Test from "../components/Test";

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
  {
    path: '/privacy',
    name: 'privacy',
    component: privacy
  },
    {
        path: '/change_colors@anetquicksolutions.com',
        name: 'change_colors',
        component: change_colors
    },
    {
        path: '/license',
        name: 'license',
        component: license
    },
  {
    path: '/:id',
    name: 'menus',
    component: MenusView,
  },
    {
    path: '/menu/:id',
    name: 'pdfview',
    component: PdfView,
  },
    {
        path: '/test/video',
        name: 'test',
        component: Test,
    },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

//The route:
