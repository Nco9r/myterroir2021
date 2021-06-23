<template>
  <div>
    <section class="hero">
      <div class="hero_wrapper">
        <div class="wrapper_content">
          <h1>TOUS NOS PRODUITS de terroir à PORTER <span class="black">DE CLIC. </span></h1>
          <hr />
          <p>
            Retrouvez la liste de nos produits de terroir que nous avons spécialement sélectionné pour vous. Charcuteries, viandes, fromages il y en a pour tous les gôuts. 
          </p>
          <div class="sociaux">
            <div class="img_sociaux">
               <a href="https://fr-fr.facebook.com/myterroir/" target="_blank"><img src="~assets/img/svg/facebook.svg" alt="" /></a>
                <a href="https://www.instagram.com/myterroir/?hl=fr" target="_blank"><img src="~assets/img/svg/instagram.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/myterroir/?originalSubdomain=fr" target="_blank"><img src="~assets/img/svg/linkedin.svg" alt="" /></a>
              <p>#leplaisirdugoût</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero_img">
        <div class="arrow">
            <div class="arrowPrev" @click="Prev">
            <img src="~assets/img/svg/arrowmt.svg" alt="">
          </div>
          <div class="arrowNext" @click="Next">
            <img src="~assets/img/svg/arrowmt.svg" alt="">
          </div>
        </div>
    <VueSlickCarousel v-bind="slickOptions" ref="carousel" class="carousel">
        <img src="~assets/img/png/jambon.jpg" alt="" />
        <img src="~assets/img/png/home_2.jpg" alt="" />
        <img src="~assets/img/png/home_3.jpg" alt="" />
    </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroBoutique', 
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
        cssEase: 'cubic-bezier(.945,0,0,1)',
      },
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
  background-color: var(--black);
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
  background-color: var(--orange);
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
  background-color: var(--orange);
  padding: 10px 28px;
  color: var(--white);
  font-size: 16px;
  font-family: bodyBold;
  border: none;
    box-shadow: 5px 5px rgba(177, 78, 12, 0.274);

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
  color: var(--orange);
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
    height: 750px;
    width: 100%;
    display: flex;
    flex-flow: row;
    position: relative;
  }

  .hero_wrapper {
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
    width: 65%;
  }

  .wrapper_content {
    padding: 130px 100px;
  }

  .hero_img {
    display: flex;
    width: 55%;
    position: relative;
    left: 0;
    display: block;
    margin-left: -200px;
  }

  .arrowPrev {
    position: absolute;
    top: 91%;
    z-index: 1;
    left: 63%;
  }

  .arrowPrev img {
    width: 40px !important;
    height: 40px !important;
    transform: rotate(180deg);
  }

  .arrowNext {
    position: absolute;
    top: 91%;
    z-index: 1;
    right: 18%;
  }

.arrowNext img {
  width: 40px!important;
  height: 40px!important;
}

  .hero_img img {
    height: 750px;
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
    width: 400px;
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
    width: 65%;
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
