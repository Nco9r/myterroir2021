<template>
  <div class="container">
    <HeroHome/>
    <About/>
    <Commande/>
    <traiteurHome/>
    <Clients/>
    <actualites/>
    <Newsletter/>
  </div>
</template>

<script>

import HeroHome from '../components/features/HeroHome'
import About from '../components/features/About'
import Clients from '../components/features/Clients'
import actualites from '../components/features/actualites'
import Commande from '../components/features/Commande'
import traiteurHome from '../components/features/traiteurHome'
import Newsletter from '../components/default/Newsletter'

export default {
  components: {
    HeroHome,
    About,
    Commande,
    traiteurHome,
    Clients,
    actualites,
    Newsletter,

  }
}
</script>

<style>

/* @media screen and (min-width: 1024px) {
    .container {
      width: 1250px; 
      margin: auto; 
    }
}

.container {

} */

</style>
