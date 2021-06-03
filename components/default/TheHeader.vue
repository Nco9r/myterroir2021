<template>
  <div>
    <header>
      <div class="block_header">
        <div class="header_left">
          <div class="logo">
            <img src="~assets/img/svg/logo_mt.svg" alt="" />
          </div>
          <div class="items_menu_desktop">
            <nuxt-link to="/">Accueil</nuxt-link>
            <nuxt-link to="/traiteur">Traiteur</nuxt-link>
            <nuxt-link to="/producteurs">Producteurs</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/boutique">Boutique</nuxt-link>
          </div>
        </div>
        <div class="header_right">
            <div class="items_menu_mobile">
                <p>Menu</p>
            </div>
            <div class="cta_header">
              <button>Contact</button>
            </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  justify-content: space-between;
  z-index: 100;
}

.block_header {
    display: flex; 
    align-items: center;
    margin: auto;
    padding: 20px 20px;
    justify-content: space-between;
}

 .logo img {
    width: 80px;
}

.cta_header {
  display: none;
}

.items_menu_mobile p{
    background-color: var(--black);
  padding: 5px 15px;
  font-family: bodyBold, sans-serif; 
  box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
  transform: rotate(-3deg) !important;
  color: var(--white) !important;
}

.items_menu_desktop {
  display: none;
}

.nuxt-link-exact-active {
  background-color: var(--black);
  padding: 5px 10px;
  box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
  transform: rotate(-3deg) !important;
  color: var(--white) !important;
}

@media screen and (min-width: 1024px) {
  header {
    width: 100%;
    /* background-color: var(--gray); */
  }

  .block_header {
    width: 1440px;
    display: flex;
    margin: auto;
    padding: 10px 100px;
    justify-content: space-between;
  }

  .header_left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo img {
    width: 90px;
  }

  .items_menu_desktop {
    margin-left: 50px;
    display: flex;
    align-items: center;
  }


  .items_menu_mobile {
      display: none; 
  }

  .items_menu_desktop a {
    margin-right: 30px;
    font-size: 14px;
    font-family: bodyBold;
    text-decoration: none;
    color: var(--white);
    transition: all 0.3s;
    mix-blend-mode: multiply;
  }

  .cta_header {
    display: flex; 
  }

  .cta_header button {
  background-color: var(--orange);
  padding: 10px 48px;
  color: var(--white);
  font-size: 14px;
  font-family: bodyBold;
  border: none;
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
  }

  .items_menu_desktop a:hover {
    background-color: var(--black);
    padding: 5px 10px;
    box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
    transform: rotate(-3deg) !important;
    color: var(--white) !important;
  }
}
</style>
