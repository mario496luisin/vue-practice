<template>
  <div>
    <md-toolbar class="md-primary" style="background-color: red">
      <span class="md-title">Item Collection</span>
    </md-toolbar>
    <md-table>
        <md-table-row>
        <md-table-head>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Type</md-table-head>
        <md-table-head>Year</md-table-head>
        </md-table-row>
      <md-table-row v-for="(item, index) in wholeResponse" :key="index">
        <md-table-cell>{{item.imdbID}}</md-table-cell>
        <md-table-cell>{{item.Title}}</md-table-cell>
        <md-table-cell>{{item.Type}}</md-table-cell>
        <md-table-cell>{{item.Year}}</md-table-cell>
        <md-table-cell>
        <md-button @click="singleItem(item.imdbID)">Ver Item</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

import api from '@/services/api'

export default {
  name: "UsersList",
  data() {
    return {
      wholeResponse: [],
    }
  },
  mounted () {
    api.itemCollection('indiana')
      .then(response => {
        this.wholeResponse = response.Search
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    singleItem (id) {
      this.$router.push('/item/' + id)
    }
  }
}
</script>