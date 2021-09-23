<template>
  <div>
<!--    the nav bar-->
    <div>
      <v-app-bar app >

        <v-toolbar-title v-for="menu in $store.state.the_logo_menu" :key="menu.item">
          <v-img
              class="mx-2"
              v-bind:src= " 'https://www.superqrmenu.co.ke/qrmenu/media/' + menu.avatar"
              max-height="55"
              max-width="140"
              contain
              v-if="menu.item === 'logo'"
          ></v-img>
        </v-toolbar-title>
        <v-toolbar-title v-bind:style="{color:navbar_colors}">{{id}}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
          <v-spacer></v-spacer>
        </v-toolbar-items>

      </v-app-bar>
    </div>
<!--    end of the nav bar-->

<!--    desktop view row-->
    <v-div class="mt-2 mx-2 scroll-y" v-if="height">
<!--      Inside here goes another row for the buttons, category title and the search bar-->
      <v-row>
<!--        categories and order button column-->
        <v-col cols="2">
          <v-row>
            <v-col>
              <h4 class="font-weight-light">Categories</h4>
            </v-col>
            <v-col>
              <div class="text-center">
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn small color="purple lighten-3" v-bind="attrs"
                           v-on="on" rounded >Order from Home
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Order from Home
                    </v-card-title>

                    <v-card-text>
                      <div v-for="business in this.$store.state.this_user" :key="business.phone">
                        <h3 v-if="business.username === id" class="text--accent-1 font-weight-medium mt-4">Did you like our products? <br> Call <a>{{ business.phone }}</a> to place your order.</h3>
                      </div>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                          color="primary"
                          text
                          @click="dialog = false"
                      >
                        Got It
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-col>
<!--        end of categories and order button column-->

<!--         chosen category and search button-->
        <v-col cols="10">
          <v-row>
            <v-col lg="4" md="4" sm="12" v-show="height">
              <h4 class="purple--text font-weight-regular text-uppercase">{{$store.state.category}}</h4>
            </v-col>

            <v-col lg="8" md="8" sm="12" v-show="height">
              <input class="search" type="text" v-model="searchItem" placeholder="Search your favorite item...">
              <v-btn
                  v-show="searchItem !== ''"
                  @click="clearSearch"
                  color="grey"
                  fab
                  x-small
                  dark
              >
                X
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
<!--        end of chosen category and search button-->
      </v-row>

<!--      Inside this row goes the list of categories and the menu items-->
      <v-row>

<!--        This column has the list of categories-->
        <v-col cols="2">
          <v-card class="mt-4">
            <v-list dense>
              <!--                    loading-->
              <v-list-item link href="#" v-show="$store.state.loading">
                <v-list-item-content
                >
                  <v-list-item-title class="blue--text">
                    <div class="text-center">
                      <v-progress-circular indeterminate color="primary">
                      </v-progress-circular>
                    </div>
                    Loading..
                  </v-list-item-title>
                </v-list-item-content>

              </v-list-item>

              <v-list-item link href="#" v-for="(category, index) in $store.state.categories" :key="index">
                <v-list-item-content
                    style="cursor:pointer"
                    @click="!addMenuSelection(category.category)"
                >
                  <v-list-item-title v-bind:style="{color:sidebar_colors}">{{category.category}}</v-list-item-title>
                </v-list-item-content>

              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
<!--        End of column that has the list of categories-->

<!--        This column has the Menu items-->
        <v-col cols="10">
          <v-row class="mt-1">
            <!--      the non admin video-->
            <template v-for="business in this.$store.state.this_user">
              <v-col v-if="business.username === id && business.adminname === 'null'" :key="business.phone" lg="3" md="4" sm="6">
                  <v-btn v-show="!show_stream" @click="show_stream=!show_stream" class="green" text>
                    Start Streaming <v-icon>mdi-autorenew</v-icon>
                  </v-btn>

                  <v-card v-show="show_stream" min-width="320" class="h-100">
                    <Test v-if="show_stream"></Test>
                    <v-card-actions>
                      <div v-show="!delayShow">
                        <div style="display: inline-block"><p class="green--text">Cancel in &nbsp; </p></div>
                        <div style="display: inline-block"><p class="red--text"> {{button_timer}} </p></div>
                        <div style="display: inline-block"><p class="green--text"> &nbsp; seconds</p></div>
                      </div>
                      <v-spacer></v-spacer>
                      <v-btn v-show="delayShow" @click="show_stream=!show_stream" class="warning" text>
                        Cancel Video <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
              </v-col>
            </template>
            <!--      end the video-->

            <!--      the admin video-->
            <template v-for="business in this.$store.state.this_user">
              <v-col v-if="business.username === id && business.adminname === id" :key="business.phone" lg="3" md="4" sm="6">
                <v-btn v-show="!show_stream" @click="show_stream=!show_stream" class="green" text>
                  Start Streaming <v-icon>mdi-autorenew</v-icon>
                </v-btn>

                <v-card v-show="show_stream" min-width="320" class="h-100">
                  <AdminLivestream v-if="show_stream"></AdminLivestream>
                  <v-card-actions>
                    <div v-show="!delayShow">
                      <div style="display: inline-block"><p class="green--text">Cancel in &nbsp; </p></div>
                      <div style="display: inline-block"><p class="red--text"> {{button_timer}} </p></div>
                      <div style="display: inline-block"><p class="green--text"> &nbsp; seconds</p></div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn v-show="delayShow" @click="show_stream=!show_stream" class="warning" text>
                      Cancel Video <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </template>
            <!--      end the video-->

<!--            The items busy indicator-->
            <v-col v-for="dumm in dummy" :key="dumm.name" lg="3" md="4" sm="6" class="mb-4" v-show="$store.state.menu_loading">
              <v-sheet
                  :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                  class="pa-3"
              >
                <v-skeleton-loader
                    class="mx-auto h-100"
                    max-width="300"
                    type="card"
                ></v-skeleton-loader>
              </v-sheet>
            </v-col>
<!--            End of The items busy indicator-->


<!--            The menu items-->
            <v-col v-for="menu in searchedItems" :key="menu.item" lg="3" md="4" sm="6" class="mb-4">
              <v-hover v-slot:default="{ hover }">
                <v-card class="h-100" v-if="$store.state.subscription === 'trial' || $store.state.subscription === 'active'" >
                  <v-img
                      class="white--text align-end"
                      height="200"
                      v-bind:src= " 'https://www.superqrmenu.co.ke/qrmenu/media/' + menu.avatar"
                      contain

                  >
                    <v-expand-transition>
                      <div v-if="hover" class="d-flex transition-fast-in-fast-out #dcf0ef darken-2 v-card--reveal display-1" v-bind:style="{color: color}" style="height: 100%"> Ksh.<p>{{menu.price}}</p> </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-title class="black--text font-weight-bold text-uppercase">
                    <v-row>
                      <div>
                        <h6 class="font-weight-medium font-italic">{{ menu.item }}</h6>
                      </div>
                      <v-spacer></v-spacer>
                    </v-row>
                  </v-card-title>
                  <!--                        <v-card-subtitle class="pb-0 font-italic font-weight-medium text-lowercase">{{ menu.category }}</v-card-subtitle>-->
                  <v-card-text class="text--primary" v-bind:style="{background: color}">
                    <v-row>
                      <v-col class="font-italic">
                        {{ menu.quantity }}
                      </v-col>
                      <v-col>
                        <h3 class="font-weight-medium font-italic">Ksh. {{ menu.price }}</h3>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions v-bind:style="{background: color}">
                  </v-card-actions>
                </v-card>
              </v-hover>
              <p v-if="$store.state.subscription === 'inactive'" class="warning--text font-weight-light text-uppercase">Not Subscribed by b/s owner!</p>
            </v-col>
<!--            End of  The menu items-->
          </v-row>
        </v-col>
<!--        End of column that has the Menu items-->
      </v-row>
<!--      end of Inside this row goes the list of categories and the menu items-->
    </v-div>



    <v-row class="scroll-y">
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
        >
          <v-icon>mdi-arrow-up</v-icon>
        </v-btn>

<!--      start mobile view-->
      <v-div class="mt-2 mx-2" v-show="!height">
<!--        the order button-->
        <v-row class="mt-2 mx-2">
          <v-col class="align-center">
            <div class="text-center">
              <v-dialog
                  v-model="dialog"
                  width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="purple lighten-3" v-bind="attrs"
                         v-on="on" rounded >Order from Home
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Order from Home
                  </v-card-title>

                  <v-card-text>
                    <div v-for="business in this.$store.state.this_user" :key="business.phone">
                      <h3 v-if="business.username === id" class="text--accent-1 font-weight-medium mt-4">Did you like our products? <br> Call <a>{{ business.phone }}</a> to place your order.</h3>
                    </div>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="dialog = false"
                    >
                      Got It
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-col>
        </v-row>
<!--        end of the order button-->


<!--        categories and the v select-->
        <v-row class="mt-2 mx-2">
          <v-col cols="4" class="mt-5">
            <h4 class="font-weight-light">
              Categories
            </h4>
          </v-col>

          <v-col cols="8">
            <v-select
                v-model="select"
                :items="categories"
                :item="select_categories"
                :item-text="'category'"
                menu-props="auto"
                label="Select Category"
                hide-details
                prepend-icon="mdi-directions"
                single-line
                @input="changedLabel"
            ></v-select>
          </v-col>
        </v-row>
<!--        End of categories and the v select-->

        <v-row v-show="!height" class="mt-2 mx-2">
          <v-col m="2">
            <h5 class="purple--text font-weight-regular text-uppercase">{{$store.state.category}}</h5>
          </v-col>

          <v-col sm="10">
            <input class="search" type="text" v-model="searchItem" placeholder="Search your favorite item...">
            <v-btn
                v-show="searchItem !== ''"
                @click="clearSearch"
                color="grey"
                fab
                x-small
                dark
            >
              X
            </v-btn>
          </v-col>
        </v-row>
      </v-div>
<!--      end mobile view-->
    </v-row>



    <!--        this part displays the mobile menus-->
    <v-row class="mt-2" v-if="!height">
      <!--      the non-admin video-->
      <template v-for="business in this.$store.state.this_user">
        <v-col v-if="business.username === id && business.adminname === 'null'" :key="business.phone" lg="3" md="4" sm="6">
          <v-btn v-show="!show_stream" @click="show_stream=!show_stream" class="green" text>
            Start Streaming <v-icon>mdi-autorenew</v-icon>
          </v-btn>

          <v-card v-show="show_stream" min-width="320" class="h-100">
            <Test v-if="show_stream"></Test>
            <v-card-actions>
              <div v-show="!delayShow">
                <div style="display: inline-block"><p class="green--text">Cancel in &nbsp; </p></div>
                <div style="display: inline-block"><p class="red--text"> {{button_timer}} </p></div>
                <div style="display: inline-block"><p class="green--text"> &nbsp; seconds</p></div>
              </div>
              <v-spacer></v-spacer>
              <v-btn v-show="delayShow" @click="show_stream=!show_stream" class="warning" text>
                Cancel Video <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
      <!--      end the non-admin video-->

      <!--      the admin video-->
      <template v-for="business in this.$store.state.this_user">
        <v-col v-if="business.username === id && business.adminname === id" :key="business.phone" lg="3" md="4" sm="6">
          <v-btn v-show="!show_stream" @click="show_stream=!show_stream" class="green" text>
            Start Streaming <v-icon>mdi-autorenew</v-icon>
          </v-btn>

          <v-card v-show="show_stream" min-width="320" class="h-100">
            <AdminLivestream v-if="show_stream"></AdminLivestream>
            <v-card-actions>
              <div v-show="!delayShow">
                <div style="display: inline-block"><p class="green--text">Cancel in &nbsp; </p></div>
                <div style="display: inline-block"><p class="red--text"> {{button_timer}} </p></div>
                <div style="display: inline-block"><p class="green--text"> &nbsp; seconds</p></div>
              </div>
              <v-spacer></v-spacer>
              <v-btn v-show="delayShow" @click="show_stream=!show_stream" class="warning" text>
                Cancel Video <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
      <!--      end the admin video-->

      <!--            The items busy indicator-->
      <v-col v-for="dumm in dummy" :key="dumm.name" lg="3" md="4" sm="6" class="mb-4" v-show="$store.state.menu_loading">
        <v-sheet
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-3"
        >
          <v-skeleton-loader
              class="mx-auto h-100"
              min-width="320"
              type="card"
          ></v-skeleton-loader>
        </v-sheet>
      </v-col>
      <!--            End of The items busy indicator-->


      <!--            The menu items-->
      <v-col v-for="menu in searchedItems" :key="menu.item" lg="3" md="4" sm="6" class="mb-4">
        <v-hover v-slot:default="{ hover }">
          <v-card min-width="320" class="h-100" v-if="$store.state.subscription === 'trial' || $store.state.subscription === 'active'" >
            <v-img
                class="white--text align-end"
                height="200"
                v-bind:src= " 'https://www.superqrmenu.co.ke/qrmenu/media/' + menu.avatar"
                contain

            >
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out #dcf0ef darken-2 v-card--reveal display-1" v-bind:style="{color: color}" style="height: 100%"> Ksh.<p>{{menu.price}}</p> </div>
              </v-expand-transition>
            </v-img>
            <v-card-title class="black--text font-weight-bold text-uppercase">
              <v-row>
                <div>
                  <h6 class="font-weight-medium font-italic">{{ menu.item }}</h6>
                </div>
                <v-spacer></v-spacer>
              </v-row>
            </v-card-title>
            <!--                        <v-card-subtitle class="pb-0 font-italic font-weight-medium text-lowercase">{{ menu.category }}</v-card-subtitle>-->
            <v-card-text class="text--primary" v-bind:style="{background: color}">
              <v-row>
                <v-col class="font-italic">
                  {{ menu.quantity }}
                </v-col>
                <v-col>
                  <h3 class="font-weight-medium font-italic">Ksh. {{ menu.price }}</h3>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions v-bind:style="{background: color}">
            </v-card-actions>
          </v-card>
        </v-hover>
        <p v-if="$store.state.subscription === 'inactive'" class="warning--text font-weight-light text-uppercase">Not Subscribed by b/s owner!</p>
      </v-col>
      <!--            End of  The menu items-->
    </v-row>
    <!--        End of part that displays the mobile menus-->
  </div>
</template>

<script>
    import {mapState} from "vuex";
    import Test from "./Test";
    import AdminLivestream from "./AdminLivestream";
    // eslint-disable-next-line no-unused-vars
    import axios from "axios";
    import Hls from "hls.js";
    export default {
        name: 'Menus',
      components: {
        Test,
        AdminLivestream
      },
        close: false,
        inject: {
            theme: {
                default: { isDark: false },
            },
        },
        data(){
            return {
              delayShow:false,
              cancel_button: false,
              button_timer: 15,
              show_stream: true,
              navbar_colors: 'black',
              sidebar_colors: 'dodgerblue',
                selected: null,
                select: 'Select',
                fab: false,
                drawer: false,
                dialog: false,
                filter: false,
                thisUrl: '',
                searchItem: '',
                message: '',
                id: this.getIdFromURL(),
                url: "https://www.superqrmenu.co.ke/qrmenu/media/",
                // menuss: this.$store.state.menus
                dummy: [
                    {name: 'one'},
                    {name: 'two'},
                    {name: 'three'},
                    {name: 'four'},
                    {name: 'five'},
                    {name: 'six'},
                    {name: 'seven'},
                    {name: 'eight'},
                    {name: 'nine'},
                    {name: 'ten'},
                ],
            }
        },

      created(){
        setTimeout(()=>{
          this.delayShow=true;
        },15000)
      },

        computed: {
          // eslint-disable-next-line vue/return-in-computed-property
          height () {
            switch (this.$vuetify.breakpoint.name) {
              case 'xs': return false
              case 'sm': return false
              case 'md': return true
              case 'lg': return true
              case 'xl': return true
            }
          },
            menus() {
                return this.$store.getters.filteredMenus;
            },
            categories() {
                return this.$store.state.categories;
            },
          color() {
            return this.$store.state.color
          },
            ...mapState([
                'loading',
            ]),
            searchedItems: function () {
                var menus = this.menus
                return menus.filter((menu)=>{
                    this.searchItem = this.searchItem.toLowerCase();
                    if (menu.item.toLocaleLowerCase().match(this.searchItem)){
                        return menu.item.toLocaleLowerCase().match(this.searchItem)
                    }
                    else {
                       this.message = 'No such item, please try another item!'
                    }
                });
            },
        },

        mounted(){
          this.$store.dispatch('getMenusById', this.id);
          this.$store.dispatch('getCategoriesById', this.id);
          this.$store.dispatch('getSubscriptionById', this.id);
          this.$store.dispatch('getSubscriptionById', this.id);
          this.$store.dispatch('getBusinesses')
          this.$store.dispatch('getABusiness', this.id)
          this.$store.dispatch('get_color', this.id)
          // console.log(this.categories)
          this.append_categories()
          this.play_stream()
        },
      watch: {

        button_timer: {
          handler(value) {

            if (value > 0) {
              setTimeout(() => {
                this.button_timer--;
              }, 1000);
            }


          },
          immediate: true // This ensures the watcher is triggered upon creation
        },

        cancel_button: function () {
          if (this.button_timer === 0){
            this.cancel_button = !this.cancel_button
          }
        }

      },

        methods: {
          play_stream(){
            let hls = new Hls();
            // let stream = "https://live.superqrmenu.co.ke:4183/live/anetquick/hls.m3u8";
            let stream = "https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8";
            let video = this.$refs["video"];

            if (this.show_stream === true){
              hls.loadSource(stream);
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
              });
            }
            else {
              hls.loadSource(stream);
              hls.attachMedia(video);
              hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.stopLoad();
              });
            }

            this.show_stream=true
          },
          with_spaces(without_space){
            axios
                .post('https://superqrmenu.co.ke/api/v1/Input', {
                  input: without_space
                })
                .then(Response => {
                  console.log(Response)
                  return Response.data['no_space']
                })
                .catch(err => {
                  this.errors.push(err)
                })
          },

          //  append categories
          append_categories(){
            let item;
            for (item in this.categories) {
              this.select_categories.push(item);
            }
          },
          changedLabel(event) {
            this.selected = event;
            this.addMenuSelection(this.selected)
            if (this.selected === 'All products'){
              this.resetMenuSelection()
            }
          },

          // get id
          getIdFromURL(){
              this.thisUrl = window.location.pathname.split("/").pop();
              console.log(this.Url);
              return this.thisUrl;
          },
          addMenuSelection(category) {
              this.$store.commit("addMenuSelection", category);
          },
          resetMenuSelection() {
              this.$store.commit("resetMenuSelection");
              this.selected = 'Whiskey'
          },
          clearSearch(){
              this.searchItem = '';
              this.message = '';
          },
          onScroll (e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset ||   e.target.scrollTop || 0
            this.fab = top > 20
          },
          toTop () {
            this.$vuetify.goTo(0)
          },

          },

    }
</script>
<style scoped>
    .v-progress-circular {
        margin: 0.5rem;
    }
    .search {
        border: 1px solid dodgerblue;
        border-radius: 20px;
        height: 28px;
        width: 100%;
        padding: 2px 23px 2px 30px;
        outline: 2px;
        background-color: #f5f5f5;
        /*background-image: url(../assets/download.png);*/
    }
    .searchIcon {
        padding: 0.5rem;
    }
    .card-img {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 350px;
    }
</style>