<template>
  <footer class="page-footer pink lighten-3">
    <div class="container center">
      Adopted: {{ numAdopted }} happy {{ numAdopted === 0
                                          ? 'piggies (･ั(00)･ั)'
                                          : numAdopted === 1
                                            ? 'pig! (▽-(00)-▽)♡' : 'piggies! (´♡(oo)♡｀)' }}
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    numAdopted: Number
  }
}
</script>
