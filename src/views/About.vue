<template>
  <div>
    <md-toolbar class="md-primary" style="background-color: red">
      <span class="md-title">Usuarios</span>
    </md-toolbar>
    <md-table>
        <md-table-row>
        <md-table-head>ID</md-table-head>
        <md-table-head>Nombre</md-table-head>
        </md-table-row>
      <md-table-row v-for="user in users" :key="user.id">
        <md-table-cell>{{user.id}}</md-table-cell>
        <md-table-cell>{{user.name.first}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
