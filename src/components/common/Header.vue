<template>
    <v-container>
        <v-toolbar flat class="mainHeader grey lighten-4">
            <v-img
                    class="mx-2"
                    src="../../assets/Logo1.png"
                    max-height="40"
                    max-width="40"
                    contain
            ></v-img>
            <v-toolbar-title>QRMenu</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-xs-only">
                <v-spacer></v-spacer>
            </v-toolbar-items>

        </v-toolbar>
    </v-container>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/dashboard'},
                {icon: 'folder', text: 'My Houses', route: '/houses'},
                {icon: 'supervisor_account', text: 'Tenants', route: '/tenants'},
                {icon: 'schedule', text: 'Expenses', route: '/expenses'},
            ]
        })
    };
</script>