import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      loading:true,
      menu_loading:true,
      category: 'all products',
      the_logo_category: '',
      the_logo_menu: [],
      menus:[],
      categories:[],
      selectedMenus: [],
      subscription: '',
      all_users: [],
      this_user: [],
      color: '',
      business_name: ''
  },
  mutations: {
      setColor(state, payload){
          const payload2 = payload[0]
          if (!payload || !payload.length){
              this.state.color = 'aqua'
          }
          else {
              this.state.color = payload2['color']
          }
      },
      setBusinesses(state,payload){
          state.all_users = payload
      },
      setBusiness(state,payload){
          state.this_user = payload
      },
      setBusinessName(state,payload){
          state.business_name = payload
      },
      setSubscriptionById(state, payload) {
          state.subscription = payload[0].subscription
      },
      setMenusById(state, payload) {
          // state.menus = payload
          const itemToRemoveIndex = payload.findIndex(function(item) {
              return item.category === 'Logo';
          });
          // proceed to remove an item only if it exists.
          if(itemToRemoveIndex !== -1){
              state.the_logo_menu.push(payload[itemToRemoveIndex])
              payload.splice(itemToRemoveIndex, 1);
              state.menus = payload
          }
          else {
              state.menus = payload
          }
      },
      setCategoriesById(state, payload) {
          const itemToRemoveIndex = payload.findIndex(function(item) {
              return item.category === 'Logo';
          });
          // proceed to remove an item only if it exists.
          if(itemToRemoveIndex !== -1){
              payload.splice(itemToRemoveIndex, 1);
              state.categories = payload
              state.categories.splice(0, 0, {category:"All products", categoryupdate:"all", created_at:"all", id:35363633, ids:5363636, username:"qrmenu"})
          }
          else {
              state.categories = payload
              state.categories.splice(0, 0, {category:"All products", categoryupdate:"all", created_at:"all", id:35363633, ids:5363636, username:"qrmenu"})
          }

          // state.categories = payload
          // state.categories.splice(0, 0, {category:"All products", categoryupdate:"all", created_at:"all", id:35363633, ids:5363636, username:"qrmenu"})

      },
      addMenuSelection(state, category) {
          state.selectedMenus.splice(0, state.selectedMenus.length);
          state.category = category;
          state.menus.forEach(function (menu) {
              if (menu.category === category){
                  state.selectedMenus.push(menu)
              }
          })
      },
      resetMenuSelection(state) {
          state.category = 'all products';
          state.selectedMenus.splice(0, state.selectedMenus.length);
          state.menus.forEach(function (menu) {
              state.selectedMenus.push(menu)
          });
      },
  },
    getters: {
        filteredMenus: state => {
            if (state.selectedMenus.length !== 0) {
                // There's selected menus, return filtered
                return state.selectedMenus;
            } else {
                return state.menus;
            }
        }
    },
  actions: {
      // get color
      get_color(context, business_name) {
          return new Promise((resolve,reject)=>{

              axios.get('https://superqrmenu.co.ke/qrmenu/Colors/'+business_name+'?reason=anetquick' )
                  .then(response=>{
                      context.commit('setColor',response.data);
                      console.log(response.data)
                      resolve(resolve)
                  })
                  .catch(error=>{
                      console.log(error);
                      reject(error)
                  })
          })
      },
      // get subscription details
      getSubscriptionById(context, id){
          return new Promise((resolve,reject)=>{

              axios.get('https://www.superqrmenu.co.ke/qrmenu/ids/' + id + '?reason=webmasteradminqrmenu')
                  .then(response=>{
                      context.commit('setSubscriptionById',response.data);
                      // console.log(response);
                      // this.state.menu_loading = false;
                      resolve(resolve);
                  })
                  .catch(error=>{
                      console.log(error);
                      reject(error)
                  })
          })

      },
    // get menus by restaurant name
    getMenusById(context, id){
      return new Promise((resolve,reject)=>{

        axios.get('https://www.superqrmenu.co.ke/qrmenu/menu/' + id + '?reason=webmasteradminqrmenu')
            .then(response=>{
              context.commit('setMenusById',response.data);
              // console.log(response);
              this.state.menu_loading = false;
              resolve(resolve);
            })
            .catch(error=>{
              console.log(error);
              reject(error)
            })
      })

    },

      // get categories by restaurant name
      getCategoriesById(context,id){

          return new Promise((resolve,reject)=>{
              axios.get('https://www.superqrmenu.co.ke/qrmenu/category/' + id + '?reason=webmasteradminqrmenu')
                  .then(response=>{
                      // console.log(response.data);
                      context.commit("setCategoriesById",response.data);
                      this.state.loading = false;
                      resolve()
                  })
                  .catch(error=>{
                      console.log(error);
                      reject()
                  })
          })

      },
      // get all businesses
      getBusinesses(context){
          return new Promise((resolve,reject)=>{
              axios.get('https://superqrmenu.co.ke/qrmenu/ids/all?reason=webmasteradminqrmenu')
                  .then(response=>{
                      context.commit('setBusinesses',response.data);
                      resolve(resolve);
                      // console.log(response);
                  })
                  .catch(error=>{
                      console.log(error);
                      reject(error)
                  })
          })

      },

      getABusiness(context, business){
          return new Promise((resolve,reject)=>{
              axios.get('https://superqrmenu.co.ke/qrmenu/ids/' + business+ '?reason=webmasteradminqrmenu')
                  .then(response=>{
                      context.commit('setBusiness',response.data);
                      context.commit('setBusinessName', business)
                      resolve(resolve);
                      // console.log(response);
                  })
                  .catch(error=>{
                      console.log(error);
                      reject(error)
                  })
          })
      }
  },
  modules: {
  }
})
