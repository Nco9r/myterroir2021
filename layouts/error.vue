<template>
  <div v-if="error.statusCode === 404">
    <section class="hero">
      <div class="hero_wrapper">
        <div class="wrapper_content">
          <h1>
            Oups la page est <span class="black">introuvable</span>
          </h1>
          <hr>
          <p>
            Il n'y a pas de produits de terroir ici. Pour retrouvez toutes notre sélection retourner sur la page d'accueil. Vous pouvez également consulter notre boutique et commandez nos produits en un clic! 
          </p>
          <nuxt-link to="/">
          <button>
           Accueil
          </button>
          </nuxt-link>
          <div class="sociaux">
            <div class="img_sociaux">
              <img src="~assets/img/svg/instagram.svg" alt="" />
              <img src="~assets/img/svg/facebook.svg" alt="" />
              <img src="~assets/img/svg/linkedin.svg" alt="" />
              <p>#leplaisirdugoût</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero_img">
          <img src="~assets/img/png/404.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // nous pouvons definir un layout personnalisé pour la page erreur
  }
</script>

<style scoped>

strong {
  font-family: bodyBold, sans-serif;
}
.hero {
  width: 100%;
  display: flex;
  flex-flow: column;
}

.hero_wrapper {
  background-color: var(--orange);
  background-image: url('~assets/img/png/texture_mt.png');
  background-repeat: repeat;
  background-size: 45%;
  width: 100%;
  z-index: 1;
}

.wrapper_content {
  padding: 30% 15px 10px 15px;
}

.wrapper_content h1 {
  color: var(--white);
  font-size: 28px;
  line-height: 40px;
}

.wrapper_content hr {
  border: none; 
  width: 50px; 
  background-color: var(--black);
  height: 4px;
  border-radius: 5px;
  margin: 10px 0 20px 0; 
}

.img_sociaux p {
  margin-top: 0px!important;
  font-family: bodyBold;
}

.wrapper_content p {
  color: var(--white);
  font-size: 16px;
  margin-top: 30px;
  line-height: 30px;
}

.wrapper_content button {
  margin-top: 20px;
  background-color: var(--black);
  padding: 10px 28px;
  color: var(--white);
  font-size: 16px;
  font-family: bodyBold;
  border: none;
  box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
}

.wrapper_content .sociaux {
  margin-top: 80px;
  display: flex; 
  flex-flow: column; 
}

.wrapper_content .sociaux .img_sociaux img {
  width: 30px;
  margin-right: 10px;
}



.black {
  color: var(--black);
}

.hero_img {
  position: relative;
}

.arrowPrev {
  position: absolute; 
  top: 40%;
  z-index: 1;
  left: 10px;
}

.arrowPrev img {
  width: 30px!important;
  height: 30px!important;
  transform: rotate(180deg);
}

.arrowNext {
  position: absolute; 
  top: 40%;
  z-index: 1;
  right: 10px;
}

.arrowNext img {
  width: 30px!important;
  height: 30px!important;
}

.hero_img img {
  width: 150%;
  height: 300px;
  object-fit: cover;
  margin-top: 00px;
}

@media screen and (min-width: 1024px) {
  .hero {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: row;
    position: relative;
  }

  .hero_wrapper {
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
    width: 70%;
  }

  .wrapper_content {
    padding: 20% 100px;
  }

  .hero_img {
    display: flex;
    width: 70%;
    position: relative;
    left: 0;
    display: block;
    margin-left: -200px;
  }

  .arrowPrev {
  position: absolute; 
  top: 93%;
  z-index: 1;
  left: 700px;
}

.arrowPrev img {
  width: 40px!important;
  height: 40px!important;
  transform: rotate(180deg);
}

.arrowNext {
  position: absolute; 
  top: 93%;
  z-index: 1;
  right: 200px;
}

.arrowNext img {
  width: 40px!important;
  height: 40px!important;
}

  .hero_img img {
    height: 100vh;
    width: 100%;
    margin-top: 0;
    object-fit: cover;
    display: block;

  }

  .wrapper_content h1 {
    font-size: 48px;
    line-height: 68px;
  }

  .wrapper_content p {
    font-size: 14px;
    line-height: 28px;
    width: 460px;
  }

  .wrapper_content button {
    margin-top: 40px;
  }

  .sociaux {
    position: absolute; 
    bottom: 20px;
    display: flex;
    flex-flow: row;
  }

  .img_sociaux {
    display: flex; 
  }

  .img_sociaux p {
    font-size: 12px;
    font-family: bodyBold, sans-serif; 
  }

  .wrapper_content .sociaux .img_sociaux img {
  width: 40px;
  margin-right: 20px;
}
}

@media screen and (min-width: 1440px) {
  
  .wrapper_content h1 {
    font-size: 52px;
    line-height: 74px;
  }

  .wrapper_content p {
    font-size: 18px;
    width: 600px;
    line-height: 36px;
  }

}

</style>