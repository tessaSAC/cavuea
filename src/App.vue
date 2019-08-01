<template>
  <div
    id="body"
    class="pink lighten-5"
  >
    <header-component
      id="header"
      :add-pig="addPig"
    />
    <div
      id="main"
      class="container"
    >
      <div class="row">
        <div class="col s12 m10 offset-m3">
          <single-pig
            v-for="pig of piggies"
            :id="pig.id"
            :key="pig.id"
            :name="pig.name"
            :description="pig.description"
            :add-desc="addDesc"
            :reset-desc="resetDesc"
            :adopt-pig="adoptPig"
          />
        </div>
      </div>
    </div>
    <footer-component
      id="footer"
      :num-adopted="numAdopted"
    />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
import SinglePig from './SinglePig.vue'

export default {
  name: 'App',
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'single-pig': SinglePig,
  },
  data() {
    return {
      numNamed: 0,
      numAdopted: 0,
      pigNames: [
        'Fufbey',
        'Spackles',
        'After Pie',
        'Dab',
        'Pugger P',
        'Snifket',
        'Fuzzable',
        'Fabsy',
        'Dilrus',
        'Gooper',
        'Rockass',
        'Bless',
        'Hanger Dan',
        'Nuzzy',
        'Spockers',
        'Mumkle',
        'Splanky',
        'Fubby',
        'Dandan',
        'Fleury White',
        'Stargoon',
        'Princess Pow',
        'Popchop',
        'Buzzberry',
        'Me',
        'Madly Mean',
        'Pot',
        'Mucky',
        'Fusty',
        'Fleshy',
        'Trickles',
        'Butty Brlomy',
        'Moonyhen',
        'Boooy',
        'Bho8otteeddeeceul',
      ],
      piggies: {},
    }
  },
  methods: {
    addPig() {
      if (!this.pigNames.length) return alert('outta names! <(○｀（●●）´○)>')

      this.pigNames = shuffle(this.pigNames)
      ++this.numNamed

      const newPig = {
        id: this.numNamed,
        name: this.pigNames.shift(),
      }

      this.piggies = Object.assign({}, this.piggies, { [newPig.id]: newPig })
      console.log('adding a pig!', newPig)
      return newPig
    },

    addDesc(description, id) {
      this.piggies[id].description = description
      this.piggies = Object.assign({}, this.piggies)
    },

    resetDesc(id) {
      this.piggies[id].description = ''
      this.piggies = Object.assign({}, this.piggies)
    },

    adoptPig(id) {
      this.pigNames.push(this.piggies[id].name)
      this.piggies = Object.assign(
        {},
        Object.keys(this.piggies).reduce((newObject, key) => {
          if (+key !== id) newObject[key] = this.piggies[key]
          return newObject
        }, {})
      )
      ++this.numAdopted
    },
  },
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
</script>

<style>
#body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1 0 auto;
  font-family: 'Caveat Brush', cursive;
}

#header,
#footer {
  font-family: 'Permanent Marker', cursive;
}

#footer {
  padding: 0.8em 0 0.3em;
}
</style>
