<template>
  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-content">
          <span class="card-title">
            {{ name }}
            <a @click="adoptPig(id)" class="btn-floating waves-effect waves-light blue darken-3 right"><i class="material-icons">home</i></a>
          </span>
          <p v-if="description">{{ description }}</p>
          <span v-else>
            <label for="description">enter description below</label>
            <input id="description" v-model="newDesc" @keyup.enter="addDesc(newDesc, id)" type="text" class="validate">
          </span>
        </div>
        <div class="card-action right-align">
          <span v-if="description">
            <a @click="eraseDesc" class="btn-floating waves-effect waves-light blue darken-3"><i class="material-icons">autorenew</i></a>
            <a @click="resetDesc(id)" class="btn-floating waves-effect waves-light blue darken-3"><i class="material-icons">create</i></a>
          </span>
          <span v-else>
            <a @click="addDesc(newDesc, id)" class="btn-floating waves-effect waves-light blue darken-3"><i class="material-icons">add</i></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newDesc: ''
    }
  },
  props: {
    id: Number,
    name: String,
    description: {
      type: String,
      default: ''
    },
    addDesc: Function,
    resetDesc: Function,
    adoptPig: Function
  },
  methods: {
    eraseDesc() {
      this.newDesc = ''
      this.resetDesc(this.id)
    }
  }
}
</script>

