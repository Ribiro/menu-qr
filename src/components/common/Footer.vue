<template style="width: 100%;">
    <v-container>
        <v-footer padless>
            <v-card flat class="text-center">
                <v-card-text>
                    <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon :href="icon[1]">
                        <v-icon size="24px">{{ icon[0] }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text
                        class="pt-0 font-weight-regular"
                >Powered by <a href="https://website.superqrmenu.co.ke/">QRMenu</a> @{{ new Date().getFullYear() }}</v-card-text>
<!--                <v-divider></v-divider>-->
<!--                <v-card-text>-->
<!--                    {{ new Date().getFullYear() }} —-->
<!--                    <strong><a>QRMenu</a></strong>-->
<!--                </v-card-text>-->
            </v-card>
        </v-footer>
    </v-container>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            icons: [
                ['mdi-facebook', 'https://www.facebook.com/'],
                ['mdi-twitter', 'https://twitter.com/'],
                ['mdi-linkedin', 'https://www.linkedin.com/'],
                ['mdi-instagram', 'https://instagram.com/']
            ],
        })
    };
</script>