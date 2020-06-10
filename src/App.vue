<template>
<v-app>
    <v-navigation-drawer
      fixed
      app
    >
      <v-list dense>
        <v-list-item @click="$router.push({name: 'home'})">
          <v-list-item-action>
            <i class="fas fa-user"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push({name: 'about'})">
          <v-list-item-action>
            <i class="fas fa-user"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{
            name: 'users',
            params: {
              userId: 1234,
              name: 'leechis'
            }
          }">
          <v-list-item-action>
            <i class="fas fa-user"></i>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    }
  }
}
</script>
