<template>
  <div class="cookies" v-if="cook">
      <div class="content_cookies">
          <div class="title_cookies">
              <h3>Respect de votre vie privée</h3>
          </div>
          <div class="content">
              <p>Avec votre accord, Nous utilisons des cookies ou technologies similaires pour stocker et accéder à des informations personnelles comme votre visite sur ce site. Vous pouvez retirer votre consentement ou vous opposer aux traitements basés sur l'intérêt légitime à tout moment en cliquant sur "En savoir plus" ou dans les mentions légales de ce site.</p>
          </div>
          <div class="button">
              <nuxt-link to=/mentions-legales><button class="next" @click="cook = !cook">En savoir plus</button></nuxt-link>
              <button class="ok" @click="valide">Accepter et fermer</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cook: false,
        }
    },
    mounted(){
        const cookies = this.$cookies.get('Cookies_MyTerroir')
        this.cook = cookies === undefined
    },
    methods: {
      valide() {
          this.cook = !this.cook
          this.$cookies.set('Cookies_MyTerroir', true,{
            path: '/',
            maxAge: 60 * 60 * 24 * 365
            })
        }
    }
}
</script>

<style>

.cookies {
    overflow-y: scroll; 
}

.content_cookies {
    width: 90%;
    position: fixed; 
    display: flex; 
    left: 0;
    right: 0;
    flex-flow: row wrap;
    margin: 20px auto;
    padding: 30px 20px 20px 30px;
    border-radius: 3Px;
    box-shadow: 0 0 10px rgba(70, 70, 70, 0.185); 
    bottom: 20px;
    overflow-y: scroll!important;
    z-index: 30000; 
    background-color: var(--white);
}

.logo_cookies {
    margin: 30px 0;
    text-align: center;
}

.logo_cookies img {
    width: 70px;
}

.content p {
    font-weight: 400;
    line-height: 26Px;
    color: var(--black);
    margin-bottom: 10px;
    width: 100%;
    font-size: 14px;
    margin-top: 5px;
}

.title_cookies h3 {
    font-family: bodyBold, sans-serif; 
    color: var(--black)
}

.button {
    display: flex; 
    flex-flow: column; 
    width: 100%;
}

.next {
    margin: 10px auto 0 auto;
  background-color: var(--gray);
  padding: 10px 28px;
  color: var(--black);
  font-size: 14px;
  width: 100%;
  font-family: bodyBold, sans-serif;
  border: none;
    box-shadow: 5px 5px rgba(160, 160, 160, 0.274);
    cursor: pointer;

}

.ok {
    margin: 10px auto 0 auto;
  background-color: var(--orange);
  padding: 10px 28px;
  color: var(--white);
  font-size: 14px;
  width: 100%;
  font-family: bodyBold, sans-serif;
  border: none;
    box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
    cursor: pointer;


}

@media screen and (min-width: 1024px) {
    .content_cookies {
        width: 100%;
        right: 20px;
        left: 0;

     

    }
}

@media screen and (min-width: 1024px) {
    .content_cookies {
        width: 80%;
    }

    .button {
        display: flex; 
        flex-flow: column-reverse;
        width: 30%;
    }

    .button a {
    }

    .next {
        width: 100%;
    }
}

</style>