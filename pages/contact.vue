<template>
  <main>
      <HeroContact/>
  </main>
</template>


<script>
import HeroContact from '../components/features/HeroContact'
export default {
    components: {
        HeroContact,
    }
}
</script>

<style scoped>

.nuxt-link-exact-active {
    color: var(--white) !important;
    z-index: 3!important;
  }

</style>