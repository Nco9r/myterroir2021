<template>
  <div>
    <HeroTraiteur />
    <section class="prestations_traiteur">
      <div class="title">
        <div class="title_traiteur">
          <img src="~assets/img/svg/feuille.svg" alt="" />
          <h2>Nos prestations</h2>
        </div>
        <div class="content_title">
          <p>Événements</p>
          <p>
            Vous organisez votre mariage, un anniversaire ou simplement des
            retrouvailles entre copains. Choisissez avec nous les produits qui
            s’accorderont au mieux avec votre événement. Nous pouvons nous
            occuper des services complémentaires comme la vaisselle ou le
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
            <div class="cta_card">
              <p>Lire la suite</p>
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
                My Terroir s’associe au célèbre brasero-plancha OFYR. La cuisson
                de légumes, poissons, cuisinés en cocotte, brochettes, tout est
                possible !
              </p>
            </div>
            <hr />
            <div class="cta_card">
              <p>Lire la suite</p>
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
                Une prestation haut de gamme que vous n’êtes pas prêt d’oublier. Nous présentons les viandes fraîches à table avant cuisson.
              </p>
            </div>
            <hr />
            <div class="cta_card">
              <p>Lire la suite</p>
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
                Une prestation haut de gamme que vous n’êtes pas prêt d’oublier. Nous présentons les viandes fraîches à table avant cuisson.
              </p>
            </div>
            <hr />
            <div class="cta_card">
              <p>Lire la suite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Newsletter />
  </div>
</template>

<script>
import HeroTraiteur from '../../components/traiteur/HeroTraiteur'
import Newsletter from '../../components/default/Newsletter'
export default {
  components: {
    HeroTraiteur,
    Newsletter
  }
}
</script>

<style scoped>
.prestations_traiteur {
  padding: 30px 15px;
  background-color: var(--gray);
}
.title_traiteur {
  margin-top: 0px;
  margin-bottom: 50px;
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

.content_card p {
  padding: 0 20px;
  font-size: 14px;
  line-height: 26px;
  color: var(--black);
}

hr {
  width: 85%;
  opacity: 0.4;
  margin: 20px 20px;
}

.cta_card {
  color: var(--orange);
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-family: bodyBold, sans-serif;
}

@media screen and (min-width: 1024px) {
    .title {
        display: flex; 
        flex-flow: row; 
        margin-top: 50px;
        justify-content: space-between;
        padding: 0 50px;
    }

    .title_traiteur {
        width: 700px;
    }

    .content_title {
        width: 570px;
    }

    .card {
        width: 600px;
        margin-right: 30px;
    }
    .bloc_cards {
        display: flex; 
        flex-flow: row nowrap; 
        overflow-x: scroll;
    }

    
}   
</style>
