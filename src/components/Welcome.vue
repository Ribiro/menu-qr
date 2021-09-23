<!--<template>-->
<!--    <v-app>-->

<!--        <v-container-fluid>-->
<!--            <section class="text-center">-->
<!--                <v-parallax src='/imagees.jpg' height="600">-->
<!--                    <v-layout column class="white&#45;&#45;text">-->
<!--                        <h1 class="white&#45;&#45;text mb-2 display-1 text-xs-center font-weight-bold text-uppercase" style="">The modern menu for epic content</h1>-->
<!--                        <div class="white&#45;&#45;text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Make your clients happy with this modern service</div>-->
<!--                        <v-spacer></v-spacer>-->
<!--                        <div class="mb-0">-->
<!--                            <v-flex xs12 class="text-xs-center">-->
<!--                                <v-btn class="blue lighten-2 mb-5" :to="{name: 'login'}" >Get Started</v-btn>-->
<!--                            </v-flex>-->
<!--                        </div>-->
<!--                        <v-spacer></v-spacer>-->
<!--                    </v-layout>-->
<!--                </v-parallax>-->
<!--            </section>-->

<!--            <section>-->
<!--                <v-container grid-list-md>-->


<!--                    <v-layout row wrap>-->
<!--                        <v-flex xs12 text-xs-center class="mt-5">-->
<!--                            <div class="headline">Are you amazed? Stay tuned!</div>-->
<!--                            <br>-->
<!--                            <div>This is the coolest menu system existing and of course, there is more to come! Feel free to reach us out for any inquiry.</div>-->
<!--                        </v-flex>-->
<!--                        <v-flex xs8 offset-xs2>-->

<!--                            <v-card class="elevation-0 transparent">-->

<!--                                <v-card-text>-->
<!--                                    <v-flex xs12 v-if="!subscribed">-->
<!--                                        <v-text-field box label="Email address" :rules="emailRules" v-model="email" hint="Enter your email!" persistent-hint></v-text-field>-->
<!--                                    </v-flex>-->
<!--                                    <v-flex xs12 v-if="!subscribed">-->
<!--                                        <v-text-field box multi-line label="Your message"></v-text-field>-->
<!--                                    </v-flex>-->
<!--                                    <v-flex xs12 class="text-xs-center" v-if="!subscribed">-->
<!--                                        <v-btn class="blue lighten-2 mb-5" dark large @click="subscribe">Get in touch</v-btn>-->
<!--                                    </v-flex>-->
<!--                                    <v-flex xs12 class="text-xs-center" v-if="subscribed">-->
<!--                                        <v-btn class="green lighten-2 mb-5" dark large>Welcome on board!</v-btn>-->
<!--                                    </v-flex>-->
<!--                                </v-card-text>-->

<!--                            </v-card>-->

<!--                        </v-flex>-->
<!--                    </v-layout>-->
<!--                </v-container>-->
<!--            </section>-->

<!--            <section>-->
<!--                <v-parallax :src="imageLink.social_cover" height="380">-->
<!--                    <v-layout column >-->
<!--                        <div class="headline white&#45;&#45;text mb-3 text-xs-center">Keep your events going! Menu system made awesome!</div>-->
<!--                    </v-layout>-->
<!--                    <v-layout>-->

<!--                        <v-icon x-large dark>fab fa-facebook-f</v-icon>-->

<!--                        <v-icon x-large dark>fab fa-twitter</v-icon>-->

<!--                        <v-icon x-large dark>fab fa-reddit-alien</v-icon>-->

<!--                        <v-icon x-large dark>fab fa-instagram</v-icon>-->

<!--                        <v-icon x-large dark>fab fa-discord</v-icon>-->
<!--                    </v-layout>-->
<!--                </v-parallax>-->
<!--            </section>-->

<!--            <section>-->
<!--                <v-container grid-list-xl>-->
<!--                    <v-layout row wrap class="my-5">-->
<!--                        <v-flex xs12 sm4>-->
<!--                            <v-card class="elevation-0 transparent">-->
<!--                                <v-card-title primary-title class="layout justify-center">-->
<!--                                    <div class="headline">Company info</div>-->
<!--                                </v-card-title>-->
<!--                                <v-card-text>-->
<!--                                    We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series.-->
<!--                                </v-card-text>-->
<!--                            </v-card>-->
<!--                        </v-flex>-->
<!--                        <v-flex xs12 sm4 offset-sm1>-->
<!--                            <v-card class="elevation-0 transparent">-->
<!--                                <v-card-title primary-title class="layout justify-center">-->
<!--                                    <div class="headline">We are hiring</div>-->
<!--                                </v-card-title>-->
<!--                                <v-card-text>-->
<!--                                    Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and interests-->
<!--                                </v-card-text>-->
<!--                            </v-card>-->
<!--                        </v-flex>-->
<!--                    </v-layout>-->
<!--                </v-container>-->
<!--            </section>-->

<!--            <section>-->
<!--                <v-container>-->
<!--                    <v-layout>-->
<!--                        <v-flex xs12 class="text-xs-center">-->
<!--                            <img height="200px" :src="imageLink.logo" alt="">-->
<!--                        </v-flex>-->
<!--                    </v-layout>-->

<!--                </v-container>-->
<!--            </section>-->

<!--        </v-container-fluid>-->
<!--    </v-app>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "Welcome",-->
<!--        data: function() {-->
<!--            return {-->
<!--                title: "Endorfine",-->
<!--                imageLink: {-->
<!--                    main:-->
<!--                        "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",-->
<!--                    sub_main:-->
<!--                        "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",-->
<!--                    logo:-->
<!--                        "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",-->
<!--                    social_cover:-->
<!--                        "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"-->
<!--                },-->
<!--                email: "",-->
<!--                emailRules: [-->
<!--                    v => {-->
<!--                        return !!v || "E-mail is required";-->
<!--                    },-->
<!--                    v =>-->
<!--                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||-->
<!--                        "E-mail must be valid"-->
<!--                ],-->
<!--                subscribed: false-->
<!--            };-->
<!--        },-->
<!--        methods: {-->
<!--            subscribe: function() {-->
<!--                this.subscribed = !this.subscribed;-->
<!--            }-->
<!--        },-->

<!--        computed: {-->
<!--            imgHeight: function() {-->
<!--                var offset = 320;-->
<!--                console.log("new image height is " + (this.pageHeight - offset));-->
<!--                return this.pageHeight - offset;-->
<!--            }-->
<!--        },-->

<!--        mounted: function() {-->
<!--            this.calculateHeight();-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->