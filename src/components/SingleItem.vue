<template>
  <div>
    <md-card class="md-primary">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{singleItem.Title}}</div>
          <div class="md-subhead">{{singleItem.Year}}</div>
        </md-card-header-text>

        <md-card-media>
          <img :src="singleItem.Poster">
        </md-card-media>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  props: ['id'],
  data() {
    return {
      singleItem: '' 
    }
  },
  mounted() {
    api.singleItem(this.id)
    .then(response => {
      this.singleItem = response
    })
    .catch(error => {
        console.log(error)
      })
  }
}
</script>
