<template>
  <main>
    <HeroBlog />
    <section class="actualites">
      <div class="title_section">
        <hr class="section_tiret" />
        <p>Catégories</p>
        <div class="categories" id="categorie">
          <div class="box_categories">
            <div
              class="item_categorie"
              @click="
                ;(viande = true), (fromages = false), (charcuterie = false)
              "
              :class="{ active_categorie: viande }"
            >
              <p>Actus</p>
            </div>
            <div
              class="item_categorie"
              :class="{ active_categorie: charcuterie }"
              @click="
                ;(viande = false), (charcuterie = true), (fromages = false)
              "
            >
              <p>Événements</p>
            </div>
            <div
              class="item_categorie"
              :class="{ active_categorie: fromages }"
              @click="
                ;(viande = false), (charcuterie = false), (fromages = true)
              "
            >
              <p>Salons</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box_cards">
        <div class="cards">
          <div class="card" v-if="viande">
            <img src="~assets/img/png/maison_laborie.jpg" alt="" />
            <div class="infos_card">
              <p>Actus</p>
              <p>Par Stéphane E.</p>
            </div>
            <div class="title_card">
              <hr />
              <p>My Terroir et La Maison Laborie</p>
            </div>
            <div class="content_card">
              <p>
                Installé dans un petit village du Cantal, une entreprise
                familiale spécialisée dans la fabrication de salaisons de
                qualité fait parler d'elle.
              </p>
            </div>
            <div class="cta_card">
              <nuxt-link to="/blog/my-terroir-et-la-maison-laborie"
                >Lire la suite</nuxt-link
              >
            </div>
          </div>
          <div class="card" v-if="charcuterie">
            <img src="~assets/img/png/card_cocktails_5.jpg" alt="" />
            <div class="infos_card">
              <p>Événements</p>
              <p>Par Lucie J.</p>
            </div>
            <div class="title_card">
              <hr />
              <p>Comment organiser vos réceptions?</p>
            </div>
            <div class="content_card">
              <p>
                Dans cet article nous avons voulu vous aiguiller un petit peu
                sur l'organisation de vos événements afin qu'ils soient le plus
                réussi possible et en vous donnant les clés pour vous simplifier
                la vie.
              </p>
            </div>
            <div class="cta_card">
              <nuxt-link to="/blog/comment-organiser-vos-reception"
                >Lire la suite</nuxt-link
              >
            </div>
          </div>
          <div class="card" v-if="fromages">
            <img src="~assets/img/png/duroux.jpg" alt="" />
            <div class="infos_card">
              <p>Actus</p>
              <p>Par Stéphane E.</p>
            </div>
            <div class="title_card">
              <hr />
              <p>My Terroir & La Maison Duroux</p>
            </div>
            <div class="content_card">
              <p>
                La Maison Duroux est installé en Corrèze depuis 1936. Cette
                maison à su au fil des années affiner ses connaissances de ses
                produits et ses fromages par la même occasion.
              </p>
            </div>
            <div class="cta_card">
              <nuxt-link to="/blog/my-terroir-et-la-maison-duroux"
                >Lire la suite</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <Newsletter />
  </main>
</template>

<script>
import HeroBlog from '../../components/blog/HeroBlog'
import Newsletter from '../../components/default/Newsletter'

export default {
  components: {
    HeroBlog,
    Newsletter
  },
  data() {
    return {
      viande: true,
      fromages: false,
      charcuterie: false
    }
  }
}
</script>

<style scoped>
.title_section p:nth-child(2) {
  padding: 0 15px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
}
.box_categories {
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
  padding-bottom: 20px;
  padding: 5px 15px;
  margin-top: 10px;
}

.item_categorie {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.item_categorie p {
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid var(--gray);
  border: 1px solid rgb(221, 221, 221);
  padding: 10px 35px;
  text-align: center;
}

.active_categorie p {
  background-color: var(--orange);
  border: none;
  color: var(--white);
  font-family: bodyBold !important;
}
.actualites {
  background-color: var(--gray);
  padding-bottom: 30px;
}

a {
  text-decoration: none;
}

.section_tiret {
  width: 70%;
  height: 1px;
  color: var(--black);
  background-color: rgb(194, 194, 194);
  display: block;

  border: none;
  margin: 15px 15px;
  padding: 0 15px;
}

.section_tiret::after {
  width: 4.5rem;
  position: absolute;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: block;
  content: '';
  height: 0.5rem;
  background: var(--orange);
}

.title_section {
  padding-top: 30px;
}

.title_section h2 {
  padding: 5px 15px;
  margin-bottom: 5px;
  font-size: 24px;
  line-height: 38px;
  color: var(--black);
}

.box_cards {
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
  justify-content: flex-start;
}

.cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.card {
  width: 330px;
  margin: auto;
  margin-bottom: 30px;
  padding-bottom: 10px;
  background-color: var(--white);
}

.card img {
  width: 100%;
  object-fit: cover;
  height: 200px;
}

.infos_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.infos_card p:nth-child(1) {
  color: var(--white);
  padding: 5px 25px;
  font-family: bodyBold, sans-serif;
  background-color: var(--orange);
}

.infos_card p:nth-child(2) {
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

.infos_card p {
  font-size: 12px;
}

.title_card {
  display: flex;
  flex-flow: column-reverse;
  padding: 3px 20px 10px 20px;
}

.title_card hr {
  border: none;
  width: 20px;
  background-color: var(--orange);
  height: 2px;
  margin-top: 10px;
  border-radius: 4px;
  margin-right: 5px;
}

.title_card p {
  font-size: 18px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
}

.content_card p {
  padding: 2px 20px 10px 20px;
  font-size: 13px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 24px;
  color: var(--black);
}

.cta_actualites button {
  background-color: var(--orange);
  padding: 10px 48px;
  display: flex;
  margin: 40px auto 10px auto;
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  font-family: bodyBold;
  border: none;
  transition: all 0.3s;
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
}

.cta_actualites button:hover {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.274);
  background-color: var(--black);
}

.cta_card {
  display: flex;
  padding: 0 20px 10px 20px;
  justify-content: flex-start;
}

.cta_card a {
  font-size: 14px;
  text-decoration: none;
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

@media screen and (min-width: 1024px) {
  .title_section {
    max-width: 1140px;
    margin: auto;
  }
  .title_section h2 {
    font-size: 28px;
    background-size: 100%;
    width: 600px;
    height: 100px;
    margin-left: 50px;
    margin-bottom: 90px;
  }
.box_cards {
  max-width: 1110px;
  margin: 50px auto;
}
  .card {
    margin-right: 30px;
    width: 400px;
  }
}
</style>
