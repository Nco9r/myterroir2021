<template>
  <div>
    <HeroTraiteur />
    <section class="prestations_traiteur">
      <div class="block_traiteur">
        <div class="title">
          <div class="title_traiteur">
            <img src="~assets/img/svg/feuille.svg" alt="" />
            <h2>Nos prestations</h2>
          </div>
          <div class="content_title">
            <p>Événements</p>
            <p>
              Vous organisez votre <strong>mariage</strong>, un
              <strong>anniversaire</strong> ou simplement des
              <strong>retrouvailles</strong> entre copains. Choisissez avec nous
              les <strong>produits</strong> qui s’accorderont au mieux avec
              votre <strong>événement</strong>. Nous pouvons nous occuper des
              <strong>services</strong> complémentaires comme la vaisselle ou le
              mobilier.
            </p>
          </div>
        </div>
        <div class="cards">
          <div class="bloc_cards">
            <div class="card">
              <div class="img">
                <img src="~assets/img/png/traiteur.jpg" alt="" />
                <div class="price">
                  <p>
                    à partir de <br />
                    8€/pers
                  </p>
                </div>
              </div>
              <div class="title_name">
                <span></span>
                <h3>Cocktails et buffets</h3>
              </div>
              <div class="content_card">
                <p>
                  Des prestations en toute simplicité qui épateront tous vos
                  invités par la qualité des produits utilisés et l’ambiance
                  chaleureuse qui en ressort.
                </p>
              </div>
              <hr />
              <div class="cta_card" @click="cocktails = !cocktails">
                <p>En détails</p>
              </div>
            </div>
            <div class="card">
              <div class="img">
                <img src="~assets/img/png/brasero.jpg" alt="" />
                <div class="price">
                  <p>
                    à partir de <br />
                    25€/pers
                  </p>
                </div>
              </div>
              <div class="title_name">
                <span></span>
                <h3>Brasero OFYR</h3>
              </div>
              <div class="content_card">
                <p>
                  My Terroir s’associe au célèbre brasero-plancha OFYR. La
                  cuisson de légumes, poissons, cuisinés en cocotte, brochettes,
                  tout est possible !
                </p>
              </div>
              <hr />
              <div class="cta_card" @click="cocktails = !cocktails">
                <p>En détails</p>
              </div>
            </div>
            <div class="card">
              <div class="img">
                <img src="~assets/img/png/brasero.jpg" alt="" />
                <div class="price">
                  <p>
                    Sur devis
                  </p>
                </div>
              </div>
              <div class="title_name">
                <span></span>
                <h3>Repas et grillades</h3>
              </div>
              <div class="content_card">
                <p>
                  Une prestation haut de gamme que vous n’êtes pas prêt
                  d’oublier. Nous présentons les viandes fraîches à table avant
                  cuisson.
                </p>
              </div>
              <hr />
              <div class="cta_card" @click="cocktails = !cocktails">
                <p>En détails</p>
              </div>
            </div>
            <div class="card">
              <div class="img">
                <img src="~assets/img/png/mariage.jpeg" alt="" />
                <div class="price">
                  <p>
                    Sur devis
                  </p>
                </div>
              </div>
              <div class="title_name">
                <span></span>
                <h3>Mariage</h3>
              </div>
              <div class="content_card">
                <p>
                  Une prestation haut de gamme que vous n’êtes pas prêt
                  d’oublier. Nous présentons les viandes fraîches à table avant
                  cuisson.
                </p>
              </div>
              <hr />
             <div class="cta_card" @click="cocktails = !cocktails">
                <p>En détails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="overlay" v-if="cocktails" @click="cocktails = !cocktails"></div>
    <transition name="open" appear>
      <!-- <div class="img_card">
          <img src="~assets/img/png/brasero.jpg" alt="" />
        </div> -->
      <div class="details" v-if="cocktails">
        <div class="card_name">
          <div class="title_name_card">
            <span></span>
            <h3>Cocktails et buffets</h3>
          </div>
          <p @click="cocktails = !cocktails">Retour</p>
        </div>
        <div class="img_card">
          <div class="arrow">
            <div class="arrowPrev" @click="Prev">
              <img src="~assets/img/svg/arrowmt.svg" alt="" />
            </div>
            <div class="arrowNext" @click="Next">
              <img src="~assets/img/svg/arrowmt.svg" alt="" />
            </div>
          </div>
          <VueSlickCarousel
            v-bind="slickOptions"
            ref="carousel"
            class="carousel"
          >
            <img src="~assets/img/png/card_cocktails_5.jpg" alt="" />
            <img src="~assets/img/png/card_cocktails_1.jpg" alt="" />
            <img src="~assets/img/png/card_cocktails_2.jpg" alt="" />
            <img src="~assets/img/png/card_cocktails_3.jpg" alt="" />
            <img src="~assets/img/png/card_cocktails_4.jpg" alt="" />
            <img src="~assets/img/png/traiteur.jpg" alt="" />
            <img src="~assets/img/png/card_cocktails_6.jpg" alt="" />
            <img src="~assets/img/png/card_cocktails_7.jpg" alt="" />
          </VueSlickCarousel>
        </div>
        <div class="content_card_intro">
          <p>
            Des prestations en toute simplicité qui épateront tous vos invités
            par la qualité des produits utilisés et l’ambiance chaleureuse qui
            en ressort.
          </p>
        </div>
        <hr />
        <div class="details_group">
          <h3>Buffets déposés</h3>
        </div>
        <div class="group">
          <div class="title_group" @click="apero = !apero">
            <p>L'apéro</p>
            <div class="price_content">
              <p>8€/pers</p>
              <p class="plus" :class="{ plus_open: apero }">+</p>
            </div>
          </div>
          <div class="content_group" v-if="apero">
            <p>
              Assortiment de charcuteries artisanales et fromages affinés du
              moment
            </p>
          </div>
          <div class="title_group" @click="bBasque = !bBasque">
            <p>Buffet Basque</p>
            <div class="price_content">
              <p>15 €/pers</p>
              <p class="plus" :class="{ plus_open: bBasque }">+</p>
            </div>
          </div>
          <div class="content_group" v-if="bBasque">
            <p>
              <strong>Amuses bouches :</strong> <br />
              tartelette de boudin au piment d’espelette et confits d’oignons
              <br />
              tortilla au chorizo <br />
              pintxo piperade et txistorra <br />
              pintxo de filet de thon et poivrons grillees
            </p>
            <p>
              <strong>Charcuteries :</strong> <br />
              jambon de bayonne de la ferme elizaldia <br />
              lomo seché au piment d’espelette <br />
              coppa basque <br />
              Guindillas
            </p>
            <p>
              <strong>Fromages :</strong> <br />
              tomme de vache au lait cru de la fromagerie des aldudes <br />
              ossau-iraty fermier de la ferme ekiola <br />
              cremeux de brebis de la fromagerie des aldudes <br />
              confiture de cerise
            </p>
          </div>
          <div class="title_group" @click="bFrance = !bFrance">
            <p>Buffet Français</p>
            <div class="price_content">
              <p>15 €/pers</p>
              <p class="plus" :class="{ plus_open: bFrance }">+</p>
            </div>
          </div>
          <div class="content_group" v-if="bFrance">
            <p>
              <strong>Amuses-bouches : </strong> <br />
              Biscuit sablé cantaloup <br />
              Navette fromage frais de brebis ciboulette et truite de la ferme
              du ciron fumée <br />
              Mini burger magret seché basque foie gras mi-cuit et confit
              d’oignons <br />
              Navette bleu d’auvergne, poire pochée et noix
            </p>
            <p>
              <strong>Charcuteries : </strong><br />
              Jambon de cochon fermier 12 mois laborie <br />
              Saucisse seche du haut mont <br />
              Terrine de campagne <br />
              Cornichons
            </p>
            <p>
              <strong>Fromages : </strong><br />
              Comte de chez vagne <br />
              Cantal affinage entre deux <br />
              Saint nectaire fermier <br />
              Noix du perigord
            </p>
          </div>
        </div>
        <hr />
        <div class="details_group">
          <h3>Cocktails avec service</h3>
        </div>
        <div class="group">
          <div class="title_group" @click="cBasque = !cBasque">
            <p>Cocktails Basque</p>
            <div class="price_content">
              <p>25 €/pers</p>
              <p class="plus" :class="{ plus_open: cBasque }">+</p>
            </div>
          </div>
          <div class="content_group" v-if="cBasque">
            <p>
              <strong>Amuses bouches :</strong> <br />
              tartelette de boudin au piment d’espelette et confits d’oignons
              <br />
              tortilla au chorizo <br />
              pintxo piperade et txistorra <br />
              pintxo de filet de thon et poivrons grillees <br />
              Cassolette d’axoa de veau <br />
              Cassolette de txistora deglacée au vinaigre de cidre et pommes de
              terre <br />
              Cabillaud en croute de chorizo
            </p>
            <p>
              <strong>Charcuteries :</strong> <br />
              jambon de bayonne de la ferme elizaldia <br />
              lomo seché au piment d’espelette <br />
              coppa basque <br />
              Guindillas
            </p>
            <p>
              <strong>Fromages :</strong> <br />
              tomme de vache au lait cru de la fromagerie des aldudes <br />
              ossau-iraty fermier de la ferme ekiola <br />
              cremeux de brebis de la fromagerie des aldudes <br />
              confiture de cerise
            </p>
            <p>
              <strong>Desserts :</strong> <br />
              Mini gâteau basque <br />
              Mini flans basque (koka)
            </p>
          </div>
          <div class="title_group" @click="cFrance = !cFrance">
            <p>Cocktails Français</p>
            <div class="price_content">
              <p>25 €/pers</p>
              <p class="plus" :class="{ plus_open: cFrance }">+</p>
            </div>
          </div>
          <div class="content_group" v-if="cFrance">
            <p>
              <strong>Amuses-bouches : </strong> <br />
              Biscuit sablé cantaloup <br />
              Navette fromage frais de brebis ciboulette et truite de la ferme
              du ciron fumée <br />
              Mini burger magret seché basque foie gras mi-cuit et confit
              d’oignons <br />
              Navette bleu d’auvergne, poire pochée et noix <br />
              Crémeux de vache roti et ventreche grillée <br />
              Croque monsieur à la truffe <br />
              Parmentier de canard gratiné
            </p>
            <p>
              <strong>Charcuteries : </strong><br />
              Jambon de cochon fermier 12 mois laborie <br />
              Saucisse seche du haut mont <br />
              Terrine de campagne <br />
              Cornichons
            </p>
            <p>
              <strong>Fromages : </strong><br />
              Comte de chez vagne <br />
              Cantal affinage entre deux <br />
              Saint nectaire fermier <br />
              Noix du perigord
            </p>
            <p>
              <strong>Desserts : </strong><br />
              Cannelés <br />
              Moelleux au chocolat
            </p>
          </div>
          <hr />
        </div>
        <div class="cta_card_c">
          <nuxt-link to="/contact">Obtenir mon devis</nuxt-link>
        </div>
      </div>
    </transition>

    <Newsletter />
  </div>
</template>

<script>
import HeroTraiteur from '../../components/traiteur/HeroTraiteur'
import cocktailsBuffets from '../../components/traiteur/cocktailsBuffets'
import Newsletter from '../../components/default/Newsletter'
export default {
  components: {
    HeroTraiteur,
    Newsletter,
    cocktailsBuffets
  },
  data() {
    return {
      plus: true,
      plus_1: false,
      plus_2: false,
      plus_3: false,
      active_devis: false,
      apero: true,
      bBasque: false,
      bFrance: false,
      cBasque: false,
      cFrance: false,
      cocktails: false,
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
    openContent() {
      this.plus = !this.plus
    },
    openContent_1() {
      this.plus_1 = !this.plus_1
    },
    openContent_2() {
      this.plus_2 = !this.plus_2
    },
    openContent_3() {
      this.plus_3 = !this.plus_3
    },
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

.cta_card_c {
  margin-top: 50px;
  display: flex; 
  justify-content: flex-end;
}
.cta_card_c a{
  background-color: var(--orange);
  padding: 16px 48px;
  text-align: center;
  color: var(--white);
  font-size: 16px;
  font-family: bodyBold;
  border: none;
  cursor: pointer;
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);

}
.content_card_intro p {
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
  line-height: 26px;
  color: var(--black);
}
.card_name {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card_name p {
  color: var(--orange);
  font-family: bodyBold, sans-serif;
  font-size: 14px;
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

.img_card {
  position: relative;
}

.img_card img {
  width: 100%;
  z-index: 2;
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
.prestations_traiteur {
  padding: 30px 15px;
  background-color: var(--gray);
}
.title_traiteur {
  margin-top: 0px;
  margin-bottom: 50px;
}

.overlay {
  position: fixed;
  inset: 0;
  -webkit-z-index: 3;
  -moz-z-index: 3;
  -ms-z-index: 3;
  -o-z-index: 3;
  z-index: 3;
  background-color: rgba(15, 15, 15, 0.658);
}

.title_traiteur img {
  width: 100%;
}

.title_traiteur h2 {
  background-image: url('~assets/img/svg/tache.svg');
  background-size: 100%;
  height: 50px;
  font-size: 24px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-4deg);
  font-family: bodyBold, sans-serif;
  color: var(--white);
  background-repeat: no-repeat;
}

.content_title {
  font-size: 14px;
  line-height: 26px;
  color: var(--black);
}

.content_title p:nth-child(1) {
  font-size: 18px;
  line-height: 26px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
  margin-bottom: 10px;
}

.bloc_cards {
  display: flex;
  flex-flow: column;
  margin-top: 30px;
}

.card {
  background-color: #fff;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 20px;
  box-shadow: 0 0 10px rgba(194, 194, 194, 0.2);
}

.card .img {
  position: relative;
}

.card .img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card .img p {
  position: absolute;
  bottom: -5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  right: 50px;
  background-color: var(--orange);
  padding: 10px;
  font-family: bodyBold, sans-serif;
  font-size: 11px;
  border-radius: 50%;
  color: var(--white);
}

.title_name {
  display: flex;
  padding: 20px;
  align-items: center;
}

.title_name h3 {
  font-size: 18px;
  color: var(--black);
}

.title_name span {
  height: 2px;
  width: 15px;
  border: none;
  background-color: var(--orange);
  margin-right: 10px;
}

.title_name_card {
  display: flex;
  align-items: center;
}

.title_name_card h3 {
  font-size: 18px;
  color: var(--black);
}

.title_name_card span {
  height: 2px;
  width: 15px;
  border: none;
  background-color: var(--orange);
  margin-right: 10px;
}

.content_card p {
  padding: 0 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 26px;
  color: var(--black);
}

hr {
  width: 85%;
  opacity: 0.1;
  margin: 20px 20px;
}

.cta_card p {
  text-decoration: none;
  color: var(--orange);
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  font-family: bodyBold, sans-serif;
}

a {
  text-decoration: none;
}

.color {
  fill: var(--orange) !important;
}

.rotate {
  transform: rotate(45deg);
  fill: var(--black) !;
  transition: 0.3s all;
  z-index: 20;
}

.title_color {
  color: var(--orange) !important;
}

.plus {
  font-size: 24px;
  color: var(--orange);
  margin-top: 2px;
  cursor: pointer;
  margin-left: 5px;
  transition: all 0.4s ease-in-out;
}

.plus_open {
  font-size: 24px;
  color: var(--black);
  transform: rotate(45deg) !important;
  margin-top: 2px;
  margin-left: 5px;
}

/* CONTENT */
.details {
  background-color: var(--white);
  padding: 100px 10px;
  margin-top: 10px;
  width: 100%;
  position: fixed;
  inset: 0;
  overflow-x: hidden;
  z-index: 90;
  overflow-y: scroll;
}

.details h2 {
  color: var(--black);
}

.details_group {
  display: flex;
  margin-top: 10px;
  font-size: 18px;
  color: var(--black);
  justify-content: space-between;
  align-items: center;
}

.details_group h3 {
  color: var(--black);
  font-size: 18px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.title_group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--orange);
  font-family: bodyBold, sans-serif;
  font-size: 14px;
}

strong {
  font-family: bodyBold, sans-serif;
}

.content_group {
  margin-top: 5px;
  color: var(--black);
  font-size: 14px;
  line-height: 26px;
  margin-top: 5px;
}

.content_group p {
  line-height: 26px;
  margin-bottom: 10px;
  margin-top: 5px;
}

@media screen and (min-width: 1024px) {
  .block_traiteur {
    width: 1250px;
    margin: auto;
  }

  .open-enter-active {
    animation: slide 0.6s;
  }

  .open-leave-active {
    animation: slideClose 0.6s;
  }

  @keyframes slide {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideClose {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .img_card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    z-index: 2;
  }
  .title {
    display: flex;
    flex-flow: row;
    margin-top: 50px;
    justify-content: space-between;
    padding: 0 50px;
  }

  .title_traiteur {
    width: 500px;
  }

  .content_title {
    width: 550px;
  }

  .card {
    width: 500px;
    margin-right: 30px;
  }
  .bloc_cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    overflow-x: scroll;
    margin-bottom: 100px;
  }
}

.devis_mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 20;
  overflow: scroll;
}

.intro {
  background-color: var(--orange);
  padding: 15px 20px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

.fleche_bottom {
  transform: rotate(-90deg);
  transition: 0.6s all;
}

.fleche_top {
  transform: rotate(90deg);
}

.intro p {
  color: white;
  font-weight: bold;
  font-size: 18px;
  background-color: var(--orange);
}

.title_block_content h2 {
  font-family: bebas-neue-pro, sans-serif;
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--orange);
  text-transform: uppercase;
  text-align: left;
}

.title_block_content p {
  color: var(--black);
  line-height: 22px;
  text-align: left;
}

.price_content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

@media screen and (min-width: 1440px) {
  .block_traiteur {
    max-width: 1440px;
    margin: auto;
  }
  .title {
    display: flex;
    flex-flow: row;
    margin-top: 50px;
    justify-content: space-between;
    padding: 0 50px;
  }

  .title_traiteur {
    width: 500px;
  }

  .content_title {
    width: 550px;
  }

  .card {
    width: 550px;
    margin-right: 20px;
  }
  .bloc_cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .details {
    background-color: var(--white);
    padding: 100px 50px;
    margin-top: 10px;
    width: 50%;
    margin: auto;
    bottom: 0;
    position: fixed;
    z-index: 90;
    overflow-y: scroll;
  }
}
</style>
