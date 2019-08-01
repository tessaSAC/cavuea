<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper indigo darken-2">
        <a class="brand-logo center">Cavuea</a>
        <ul class="right">
          <li>
            <a class="waves-effect waves-light" @click="addPig">
              <i class="material-icons right">add_box</i>ADD PIG</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    addPig: Function,
  },
}
</script>
