<template>
  <div>
    <header class="top_bar_color">
      <div class="block_header">
        <div class="header_left">
          <a href="/"
            ><div class="logo">
              <img src="~assets/img/svg/logo_mt.svg" alt="" />
            </div>
          </a>
          <div class="items_menu_desktop">
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/"
              >Accueil</nuxt-link
            >
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/traiteur"
              >Traiteur</nuxt-link
            >
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/producteurs"
              >Producteurs</nuxt-link
            >
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/blog"
              >Blog</nuxt-link
            >
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/boutique"
              >Boutique</nuxt-link
            >
          </div>
        </div>
        <div class="header_right">
          <div class="items_menu_mobile">
            <div class="cart" @click="cart = !cart">
              <img src="~assets/img/svg/cart.svg" alt="" />
              <p v-if="carts.length > 0">{{ carts.length }}</p>
            </div>
            <span></span>
            <p @click="openMenu = !openMenu">Menu</p>
          </div>
          <div class="cta_header">
            <div class="cart" @click="cart = !cart">
              <img src="~assets/img/svg/cart.svg" alt="" />
              <p v-if="carts.length > 0">{{ carts.length }}</p>
            </div>
            <span></span>
            <button @click="devis = !devis">Obtenir mon devis</button>
          </div>
        </div>
        <transition name="open" appear>
          <div class="menu_mobile" v-if="openMenu" @click="cart = false">
            <div class="top_bar_menu">
              <div class="logo_menu">
                <img src="~assets/img/svg/logo_mt.svg" alt="" />
              </div>
              <div class="close_menu">
                <p @click="openMenu = !openMenu">Retour</p>
              </div>
            </div>
            <div class="items_menu_mobile_fixed" @click="openMenu = !openMenu">
              <p>MENU</p>
              <nuxt-link to="/">Accueil</nuxt-link>
              <nuxt-link to="/traiteur">Traiteur</nuxt-link>
              <nuxt-link to="/producteurs">Producteurs</nuxt-link>
              <nuxt-link to="/blog">Blog</nuxt-link>
              <nuxt-link to="/boutique">Boutique</nuxt-link>
            </div>
            <hr />
            <div class="button_contact">
              <button @click="devis = !devis, openMenu = !openMenu">Obtenir mon devis</button>
            </div>
            <div class="sociaux">
              <p>NOUS SUIVRE</p>
              <div class="icons_sociaux">
                <img src="~assets/img/svg/facebook.svg" alt="" />
                <img src="~assets/img/svg/instagram.svg" alt="" />
                <img src="~assets/img/svg/linkedin.svg" alt="" />
              </div>
            </div>
            <div class="copyright">
              <div class="contact_menu">
                <p>+33 (0)7 54 82 76 76</p>
                <p>contact@my-terroir.fr</p>
              </div>
              <div class="legales">
                <p>©My Terroir 2021</p>
                <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>
    <Cart v-if="cart" />
    <devisHeader :devis=devis v-if="devis" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cart from '../boutique/cart'
import devisHeader from '../default/devisHeader'
export default {
  name: 'TheHeader',
  components: {
    Cart,
    devisHeader
  },
  data() {
    return {
      openMenu: false,
      scrollPosition: null,
      cart: false,
      devis: false
    }
  },
  computed: {
    carts() {
      return this.$store.state.cart.datas
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  justify-content: space-between;
  z-index: 100;
  transition: all 0.3s ease-in-out;
}

.items_menu_scroll {
  color: var(--black) !important;
}

.top_bar_color {
  background-color: var(--white);
  box-shadow: 0 0 15px rgb(0 0 0 / 10%);
}

.top_bar_flex {
  display: flex;
}

.block_header {
  display: flex;
  align-items: center;
  margin: auto;
  padding: 10px 20px 5px 20px;
  justify-content: space-between;
}

.logo img {
  width: 70px;
  z-index: 100;
}

.cta_header {
  display: none;
}

.menu_mobile {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 30px 15px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--black);
  background-image: url('~assets/img/png/texture_mt.png');
  height: 100%;
  overflow-y: scroll;
  z-index: 2;
}

.top_bar_menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.menu_mobile .logo_menu img {
  width: 80px;
}

.close_menu p {
  background-color: var(--orange);
  padding: 5px 15px;
  font-family: bodyBold, sans-serif;
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
  transform: rotate(-3deg) !important;
  color: var(--white) !important;
}

.items_menu_mobile_fixed {
  display: flex;
  flex-flow: column;
  padding: 10% 20px 20px 20px;
}

.items_menu_mobile_fixed p {
  color: var(--white);
  font-size: 14px;
  font-family: bodyBold, sans-serif;
  margin-bottom: 20px;
}

.cart {
  cursor: pointer;
  position: relative;
}

.cart p {
  position: absolute;
  background-color: var(--orange) !important;
  height: 20px;
  font-size: 10px !important;
  width: 20px;
  color: var(--white);
  top: 0;
  left: 15px;
  border-radius: 50%;
  box-shadow: none !important;
  display: flex;
  font-family: bodyBold, sans-serif;
  justify-content: center;
  align-items: center;
  transform: rotate(3deg) !important;
}

.items_menu_mobile_fixed a {
  font-size: 20px;
  text-decoration: none;
  color: var(--white);
  font-family: bodyBold, sans-serif;
  margin-bottom: 5px;
  margin-top: 5px;
  opacity: 0;
  animation: top 1s forwards;
}

@keyframes top {
  from {
    opacity: 0;
    transform: translateY(20px);

  }
  to {
    opacity: 1;
    transform: translateY(0px);
 
  }
}

.items_menu_mobile_fixed a:nth-child(2) {
  animation-delay: 0.2s;
}
.items_menu_mobile_fixed a:nth-child(3) {
  animation-delay: 0.3s;
}

.items_menu_mobile_fixed a:nth-child(4) {
  animation-delay: 0.4s;
}

.items_menu_mobile_fixed a:nth-child(5) {
  animation-delay: 0.5s;
}

.items_menu_mobile_fixed a:nth-child(6) {
  animation-delay: 0.6s;
}

hr {
  border: none;
  width: 30px;
  height: 2px;
  margin: 0 20px;
  border-radius: 10px;
  background-color: var(--white);
}

.button_contact button {
  margin-top: 30px;
  background-color: var(--orange);
  padding: 12px 48px;
  margin-left: 20px;
  text-align: center;
  color: var(--white);
  font-size: 16px;
  font-family: bodyBold;
  border: none;
  cursor: pointer;
}

.sociaux {
  margin: 50px 20px;
}

.sociaux img {
  width: 30px;
  margin-right: 5px;
}

.sociaux p {
  color: var(--white);
  font-size: 14px;
  font-family: bodyBold, sans-serif;
  margin-bottom: 20px;
}

.copyright {
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 20px;
  left: 30px;
  right: 20px;
}

.copyright p {
  font-size: 12px;
  color: var(--white);
  font-family: bodyBold, sans-serif;
}

.contact_menu p:nth-child(2) {
  margin-top: 5px;
  font-family: body, sans-serif;
}
.legales a {
  color: var(--white) !important;
  text-decoration: none;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.items_menu_mobile {
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
}

.items_menu_mobile .cart {
  position: relative;
}

.items_menu_mobile .cart .number_cart {
  margin-top: -5px;
  background-color: var(--orange);
  text-align: center;
  position: absolute;
  width: 19px;
  border-radius: 50%;
  height: 19px;
  margin-left: -5px;
}

.items_menu_mobile .cart img {
  width: 30px;
}

.items_menu_mobile span {
  width: 2px;
  height: 26px;
  border: none;
  background-color: var(--black);
}

.items_menu_mobile p {
  background-color: var(--black);
  padding: 5px 15px;
  font-family: bodyBold, sans-serif;
  box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
  transform: rotate(-3deg) !important;
  color: var(--white) !important;
  font-size: 14px;
}

.items_menu_desktop {
  display: none;
}

.nuxt-link-exact-active {
  color: var(--orange) !important;
  text-decoration: none;
  font-family: bodyBold, sans-serif;
}

.open-enter-active {
  animation: slide 0.3s;
}

.open-leave-active {
  animation: slideClose 0.3s;
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideClose {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@media screen and (min-width: 768px) {
  .menu_mobile {
    width: 50%;
    right: 0;
  }

  .open-enter-active {
    animation: slide 0.3s;
  }

  .open-leave-active {
    animation: slideClose 0.3s;
  }

  @keyframes slide {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideClose {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
}

@media screen and (min-width: 1081px) {
  header {
    width: 100%;
    /* background-color: var(--gray); */
  }

  .cart {
    cursor: pointer;
  }
  .menu_mobile {
    display: none;
  }

  .cta_header {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
  }

  .cta_header span {
    width: 2px;
    height: 26px;
    border: none;
    background-color: var(--black);
  }

  .cta_header .cart img {
    width: 30px;
  }

  .nuxt-link-exact-active {
    background-color: var(--black);
    padding: 5px 10px;
    box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
    transform: rotate(-3deg) !important;
    color: var(--white) !important;
    z-index: 3 !important;
  }

  .block_header {
    max-width: 1440px;
    display: flex;
    margin: auto;
    padding: 10px 20px;
    justify-content: space-between;
  }

  .header_left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo img {
    width: 70px;
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
    font-size: 13px;
    font-family: bodyBold;
    text-decoration: none;
    color: var(--black);
    transition: all 0.3s;
    mix-blend-mode: multiply;
  }

  .cta_header {
    display: flex;
  }

  .cta_header button {
    background-color: var(--orange);
    padding: 12px 26px;
    color: var(--white);
    font-size: 13px;
    font-family: bodyBold;
    border: none;
    cursor: pointer;
  }

  .items_menu_desktop a:hover {
    color: var(--orange) !important;
  }
}

@media screen and (min-width: 1081px) {
  header {
    padding-left: 100px;
    padding-right: 100px;
  }
}
</style>
