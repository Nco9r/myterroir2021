<template>
  <div>
    <section class="hero">
      <div class="hero_wrapper">
        <div class="wrapper_content">
          <h1>Obtenir un <span class="black">devis</span></h1>
          <hr />
          <p>
            Vous souhaitez obtenir un devis pour l'organiser d'un événement ?
            Veuillez remplir le formulaire ci-dessous en détaillant de manière
            précise vos envies. Nous reviendrons vers vous dans les plus brefs
            délai.
          </p>
          <div class="sociaux">
            <div class="img_sociaux">
              <img src="~assets/img/svg/instagram.svg" alt="" />
              <img src="~assets/img/svg/facebook.svg" alt="" />
              <img src="~assets/img/svg/linkedin.svg" alt="" />
              <p>#leplaisirdugoût</p>
            </div>
          </div>
        </div>
        <div class="form_devis">
          <div class="title_form">
            <h4>informations personelles</h4>
            <p>
              Note: Les informations fournies ne seront utilisées que pour vous
              contacter suite à votre demande de devis.
            </p>
          </div>
          <form>
            <div class="label">
              <p>Nom et prénom</p>
              <input type="text" />
            </div>
            <div class="label">
              <p>E-mail</p>
              <input type="mail" />
            </div>
            <div class="label">
              <p>Téléphone</p>
              <input type="phone" />
            </div>
            <div class="label">
              <p>Société (facultatif)</p>
              <input type="text" />
            </div>
            <!-- <div class="title_form_two">
              <h4>Votre événements <br></h4>
            </div> -->
            <div class="label">
              <p>Type de prestations</p>
              <select v-model="type">
                <option disabled value=""
                  >Choisir dans la liste
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.242"
                    height="16.215"
                    viewBox="0 0 23.242 16.215"
                  >
                    <path
                      id="Tracé_1781"
                      data-name="Tracé 1781"
                      d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z"
                      transform="translate(31.823 -16.655)"
                      fill="#fff"
                    /></svg
                ></option>
                <option>Buffets et Cocktails</option>
                <option>Repas et grillades</option>
                <option>Braséro</option>
                <option>Mariages</option>
              </select>
            </div>
            <div class="label">
              <p>Nombre de convives</p>
              <input type="number" />
            </div>
            <div class="label">
              <p>Lieu</p>
              <input type="text" />
            </div>
            <div class="label">
              <p>Date et heure</p>
              <input type="text" />
            </div>
            <div class="check">
              <input type="checkbox" required />
              <p>
                En cochant cette case vous accepter que les informations
                fournies soient utilisées pour vous contacter suite à votre
                demande de devis.
              </p>
            </div>
            <div class="btn_hero">
              <button>
                Soumettre votre demande
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- <div class="hero_img">
        <div class="arrow">
            <div class="arrowPrev" @click="Prev">
            <img src="~assets/img/svg/arrowmt.svg" alt="">
          </div>
          <div class="arrowNext" @click="Next">
            <img src="~assets/img/svg/arrowmt.svg" alt="">
          </div>
        </div>
    <VueSlickCarousel v-bind="slickOptions" ref="carousel" class="carousel">
        <img src="~assets/img/png/brasero.jpg" alt="" />
        <img src="~assets/img/png/home_1.jpg" alt="" />
        <img src="~assets/img/png/home_2.jpg" alt="" />
        <img src="~assets/img/png/home_3.jpg" alt="" />
    </VueSlickCarousel>
      </div> -->
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
  background-color: var(--orange);
  background-image: url('~assets/img/png/texture_mt.png');
  background-repeat: repeat;
  background-size: 30%;
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
  background-color: var(--white);
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

.form_devis {
  padding: 15px;
  margin: 15px;
}

.title_form h4 {
  color: var(--orange);
  font-weight: lighter;
  font-size: 22px;
  margin-top: 10px;
  line-height: 32px;
  margin-bottom: 10px;
}

.title_form p {
  font-style: italic;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.label {
  margin-bottom: 10px;
}

.label p {
  padding: 10px 0 5px 5px;
  font-size: 12px;
  color: var(--black);
}

.label input {
  width: 100%;
  border: none;
  font-family: body, sans-serif;
  background-color: white;
  padding: 10px 16px;
  font-size: 16px;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}

.title_form_two h4 {
  color: var(--orange);
  font-size: 22px;
  margin-top: 30px;
  line-height: 32px;
  margin-bottom: 10px;
}

select {
  width: 100%;
  border: none;
  border-radius: 0px;
  background-color: var(--black);
  margin-top: -1px;
  -webkit-appearance: none;
  font-family: bebas-neue-pro, sans-serif;
  outline: none;
  font-size: 16px;
  padding: 10px 16px;
  color: white;
  font-weight: bold;
}

.check {
  display: flex;
  margin-top: 20px;
}

.check input {
  margin-right: 10px;
}

.check p {
  margin-top: -2px;
  font-size: 11px;
}

input[type='checkbox' i] {
  background-color: var(--black) !important;
  width: 30px;
  height: 20px;
  border-radius: 0px;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked {
  background-color: var(--orange) !important;
  width: 30px;
  height: 20px;
  -webkit-appearance: none;
  display: flex;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked::after {
  content: 'x';
  font-size: 16px;
  color: white;
  font-weight: bold;
  display: flex;
  margin: auto;
}

.btn_hero button {
  margin: 20px 0;
  padding: 8px 16px;
  font-family: bodyBold, sans-serif;
  background-color: var(--orange);
  border: none;
  display: flex;
  justify-content: flex-end;
  box-shadow: 5px 5px rgba(218, 71, 9, 0.486);
  text-decoration: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.form_devis {
  background-color: var(--gray);
}

.btn_hero button:hover {
  transform: translate(3px, 3px);
}

.btn_hero button svg {
  margin-right: 10px;
}

@media screen and (min-width: 1024px) {
  .hero {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
  }

  .hero_wrapper {
    width: 100%;
    display: flex;
    align-items: flex-start; 
  }

  .wrapper_content {
    padding:10% 100px;
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
    width: 40px !important;
    height: 40px !important;
    transform: rotate(180deg);
  }

  .arrowNext {
    position: absolute;
    top: 93%;
    z-index: 1;
    right: 200px;
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
    .wrapper_content {
        width: 50%;
    }
  .wrapper_content h1 {
    font-size: 48px;
    line-height: 68px;
  }

  .wrapper_content p {
    font-size: 14px;
    width: 400px;
    line-height: 28px;
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

  .form_devis {
    width: 45%;
      margin-top: 140px;
      padding: 20px;
      box-shadow: 10px 10px rgba(61, 61, 61, 0.548);
      margin-bottom: 100Px;

  }

  form {
      display: flex; 
      flex-flow: row wrap;
      justify-content: center;
   
  }

  .label {
      width: 40%;
      margin-right: 30px;
  }
}

@media screen and (min-width: 1440px) {
  .wrapper_content h1 {
    font-size: 48px;
    line-height: 64px;
  }

  .wrapper_content p {
    font-size: 18px;
    width: 450px;
    line-height: 36px;
  }
}
</style>
