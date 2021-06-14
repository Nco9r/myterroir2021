<template>
  <div>
    <section class="hero">
      <div class="hero_wrapper">
        <div class="wrapper_content">
          <h1>
            DES FAMILLES PASSIONNÉeS DE <span class="black">LEUR TERROIR </span>
          </h1>
          <hr />
          <p>
            Nous travaillons <strong>uniquement</strong> avec les meilleurs
            agriculteurs ! Nous cherchons à nous associer à des
            <strong>éleveurs</strong> qui travaillent avec la
            <strong>nature</strong>, dans le respect du
            <strong>bien être</strong> de <strong>l’animal</strong> et de
            <strong>l'environnement</strong>.
          </p>
          <nuxt-link to='/boutique'> 
          <button>
            Boutique
          </button>
          </nuxt-link>
          <div class="sociaux">
            <div class="img_sociaux">
              <a href="https://fr-fr.facebook.com/myterroir/" target="_blank"
                ><img src="~assets/img/svg/facebook.svg" alt=""
              /></a>
              <a
                href="https://www.instagram.com/myterroir/?hl=fr"
                target="_blank"
                ><img src="~assets/img/svg/instagram.svg" alt=""
              /></a>
              <a
                href="https://www.linkedin.com/company/myterroir/?originalSubdomain=fr"
                target="_blank"
                ><img src="~assets/img/svg/linkedin.svg" alt=""
              /></a>
              <p>#leplaisirdugoût</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero_img">
        <div class="arrow">
          <div class="arrowPrev" @click="Prev">
            <img src="~assets/img/svg/arrowmt.svg" alt="" />
          </div>
          <div class="arrowNext" @click="Next">
            <img src="~assets/img/svg/arrowmt.svg" alt="" />
          </div>
        </div>
        <VueSlickCarousel v-bind="slickOptions" ref="carousel" class="carousel">
          <img src="~assets/img/png/photoproducteurs_1.jpg" alt="" />
          <img src="~assets/img/png/photorosco.jpg" alt="" />
          <img src="~assets/img/png/photoproducteurs_2.jpg" alt="" />
        </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroHome',
  data() {
    return {
      slickOptions: {
        dots: false,
        arrows: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0,
        infinite: true,
        speed: 700,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'cubic-bezier(.945,0,0,1)'
      }
    }
  },
  methods: {
    Prev() {
      this.$refs.carousel.prev()
    },
    Next() {
      this.$refs.carousel.next()
    }
  }
}
</script>

<style scoped>
.slick-dots {
  display: none;
}

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
  margin-top: 0px !important;
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
  cursor: pointer;
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
  width: 30px !important;
  height: 30px !important;
  transform: rotate(180deg);
}

.arrowNext {
  position: absolute;
  top: 40%;
  z-index: 1;
  right: 10px;
}

.arrowNext img {
  width: 30px !important;
  height: 30px !important;
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
    left: 79%;
  }

  .arrowPrev img {
    width: 40px !important;
    height: 40px !important;
    transform: rotate(180deg);
  }

  .arrowNext {
    position: absolute;
    top: 93%;
    z-index: 1;
    right: 10%;
  }

  .arrowNext img {
    width: 40px !important;
    height: 40px !important;
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
    line-height: 64px;
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
    font-size: 58px;
    line-height: 74px;
  }

  .wrapper_content p {
    font-size: 18px;
    width: 600px;
    line-height: 36px;
  }

   .hero_wrapper {
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
    width: 100%;
  }

  .hero_img {
    display: flex;
    width: 60%;
    position: relative;
    left: 0;
    display: block;
    margin-left: -280px;
  }
}
</style>
