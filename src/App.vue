<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Mario's App</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">MARIO'S APP</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <router-link to="/">LISTA DE USUARIOS</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/">ITEMS FAVORITOS</router-link>
        </md-list-item>
      </md-list>
    </md-drawer>

<router-view></router-view>
  </div>
</template>




<script>

export default {
  name: 'Temporary',
  data() {
    return {
      showNavigation: false,
      showSidepanel: false
    }
  },
  components:{
  }
}
</script>
