<template>
  <div>
    <section class="hero">
      <div class="hero_wrapper">
        <div class="wrapper_content">
            <h1>Le service traiteur de <span class="black">my terroir</span></h1>
          <hr />
          <p>
            Cassez les <strong>codes</strong>, choisissez un
            <strong>traiteur</strong> sur <strong>Bordeaux</strong> pas comme
            les autres qui vous propose une sélection de
            <strong>produits</strong> de <strong>qualité</strong> dénichée chez
            des <strong>producteurs</strong> artisanaux en France, Espagne et en
            Italie.
          </p>
          <button>
            Boutique
          </button>
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
        <img src="~assets/img/png/img_traiteur.jpg" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroHome'
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
  background-color: var(--beige);
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

  .hero_img img {
    height: 100vh;
    width: 200%;
    margin-top: 0;
    object-fit: cover;
    margin-left: -350px;
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
