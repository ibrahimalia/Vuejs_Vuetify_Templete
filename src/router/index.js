import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayouts from "../views/Layouts/HomeLayouts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: HomeLayouts,
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
        props:true
      },
      {
        path: "restaurants",
        name: "Restaurants",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Restaurants.vue"),
      },
    ],
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem("userInfo");
      if (!user) {
        next({ name: "SignUp" });
      } else {
        next();
      }
    },
  },
  {
    path: "/sign_up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem("userInfo");
      if (!user) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/sign_in",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem("userInfo");
      if (!user) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Error.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// global middleware
router.beforeEach((to,from,next)=>{
  if (to.name) {
    document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  }else{
    document.title = `${process.env.VUE_APP_TITLE}`;
    
  }
  next();

});
export default router;
