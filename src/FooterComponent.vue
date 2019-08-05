<template>
  <footer class="page-footer pink lighten-3">
    <div class="container center">
      Adopted: {{ numAdopted }} happy
      {{
        !numAdopted
          ? 'piggies (･ั(00)･ั)'
          : numAdopted === 1
          ? 'pig! (▽-(00)-▽)♡'
          : 'piggies! (´♡(oo)♡｀)'
      }}
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    numAdopted: {
      type: Number,
      default: 0,
    },
  },
}
</script>
