<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      dark>

      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.path == '#' ? '' : item.path" active-class="cyan--text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"      
      dark
      app
      fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <!-- <span class="hidden-sm-and-down">Google Contacts</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge overlap color="red">
      <span slot="badge">3</span>      
      <v-icon dark>notifications</v-icon>      
      </v-badge>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://vuetifyjs.com/static/doc-images/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <!-- Content Header (Page header) -->
        <section>
          <h1>
            {{$route.name.toUpperCase() }}
            <small>{{ $route.meta.description }}</small>
          </h1>          
        </section>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
        items: [
          { title: 'Dashboard', icon: 'dashboard', path: '/table'},
          { title: 'Profile', icon: 'person', path: '/profile' },
          { title: 'Notifications', icon: 'notifications' }
        ],
        right: null
    }),
    props: {
      source: String
    }
  }
</script>
