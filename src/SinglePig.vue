<template>
  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-content">
          <span class="card-title">
            {{ name }}
            <a
              class="btn-floating waves-effect waves-light blue darken-3 right"
              @click="adoptPig(id)"
            ><i class="material-icons">home</i></a>
          </span>
          <p v-if="description">
            {{ description }}
          </p>
          <span v-else>
            <label for="description">enter description below</label>
            <input
              id="description"
              v-model="newDesc"
              type="text"
              class="validate"
              @keyup.enter="addDesc(newDesc, id)"
            >
          </span>
        </div>
        <div class="card-action right-align">
          <span v-if="description">
            <a
              class="btn-floating waves-effect waves-light blue darken-3"
              @click="eraseDesc"
            ><i class="material-icons">autorenew</i></a>
            <a
              class="btn-floating waves-effect waves-light blue darken-3"
              @click="resetDesc(id)"
            ><i class="material-icons">create</i></a>
          </span>
          <span v-else>
            <a
              class="btn-floating waves-effect waves-light blue darken-3"
              @click="addDesc(newDesc, id)"
            ><i class="material-icons">add</i></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    description: {
      type: String,
      default: '',
    },
    addDesc: Function,
    resetDesc: Function,
    adoptPig: Function,
  },
  data: function() {
    return {
      newDesc: '',
    }
  },
  methods: {
    eraseDesc() {
      this.newDesc = ''
      this.resetDesc(this.id)
    },
  },
}
</script>
