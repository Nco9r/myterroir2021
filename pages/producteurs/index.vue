<template>
  <div>
    <HeroProducteurs />
    <section class="producteurs">
      <p>Catégories</p>
      <div class="categories">
        <div class="box_categories">
          <div
            class="item_categorie"
            @click=";(viande = true), (fromages = false), (charcuterie = false)"
            :class="{ active_categorie: viande }"
          >
            <img src="~assets/img/svg/viandes.svg" alt="" />
            <p>Viandes</p>
          </div>
          <div
            class="item_categorie"
            :class="{ active_categorie: charcuterie }"
            @click=";(viande = false), (charcuterie = true), (fromages = false)"
          >
            <img src="~assets/img/svg/charcuteries.svg" alt="" />
            <p>Charcuteries</p>
          </div>
          <div
            class="item_categorie"
            :class="{ active_categorie: fromages }"
            @click=";(viande = false), (charcuterie = false), (fromages = true)"
          >
            <img src="~assets/img/svg/fromages.svg" alt="" />
            <p>Fromages</p>
          </div>
        </div>
      </div>
      <div class="cards_producteurs_viande" v-if="viande">
        <div class="card">
          <div class="img">
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/mapmt.svg" alt="" /> 64220 Gamarthe,
                France
              </p>
            </div>
            <img src="~assets/img/png/photoproducteurs_2.jpg" alt="" />
          </div>
          <div class="title_card">
            <h2>La ferme Elizaldia</h2>
          </div>
          <div class="content_card">
            <p>
              Jean-Baptiste LOYATO crée ses porcheries en 1993 à Gamarthe grâce
              à l'aide de quatre-vingts de ses proches. En 1995, il décide
              accompagné de sa femme, de créer leur propre charcuterie qu'ils
              nomment "la Elizaldia".
            </p>
          </div>
          <hr />
          <div class="cta_card">
            <nuxt-link to="/producteurs/ferme-elizaldia"
              >Lire la suite</nuxt-link
            >
          </div>
        </div>
        <div class="card">
          <div class="img">
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/mapmt.svg" alt="" /> 15290 Parlan,
                France
              </p>
            </div>
            <img src="~assets/img/png/photo.jpeg" alt="" />
          </div>
          <div class="title_card">
            <h2>La Maison Laborie</h2>
          </div>
          <div class="content_card">
            <p>
              Implantée à Parlan, petit village du Cantal, la Maison Laborie est
              une entreprise familiale fondée en 1932 et spécialisée dans la
              fabrication de salaisons de qualité (Saucissons & Saucisses
              sèches, Jambons, Poitrines mais également produits cuits et
              conserves).
            </p>
          </div>
          <hr />
          <div class="cta_card">
            <nuxt-link to="/producteurs/maison-laborie"
              >Lire la suite</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="cards_producteurs_viande" v-if="charcuterie">
        <div class="card">
          <div class="img">
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/mapmt.svg" alt="" /> 15290 Parlan,
                France
              </p>
            </div>
            <img src="~assets/img/png/photo.jpeg" alt="" />
          </div>
          <div class="title_card">
            <h2>La Maison Laborie</h2>
          </div>
          <div class="content_card">
            <p>
              Implantée à Parlan, petit village du Cantal, la Maison Laborie est
              une entreprise familiale fondée en 1932 et spécialisée dans la
              fabrication de salaisons de qualité (Saucissons & Saucisses
              sèches, Jambons, Poitrines mais également produits cuits et
              conserves).
            </p>
          </div>
          <hr />
          <div class="cta_card">
            <nuxt-link to="/producteurs/maison-laborie"
              >Lire la suite</nuxt-link
            >
          </div>
        </div>
        <div class="card">
          <div class="img">
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/mapmt.svg" alt="" /> 64220 Gamarthe,
                France
              </p>
            </div>
            <img src="~assets/img/png/photoproducteurs_2.jpg" alt="" />
          </div>
          <div class="title_card">
            <h2>La ferme Elizaldia</h2>
          </div>
          <div class="content_card">
            <p>
              Jean-Baptiste LOYATO crée ses porcheries en 1993 à Gamarthe grâce
              à l'aide de quatre-vingts de ses proches. En 1995, il décide
              accompagné de sa femme, de créer leur propre charcuterie qu'ils
              nomment "la Elizaldia".
            </p>
          </div>
          <hr />
          <div class="cta_card">
            <nuxt-link to="/producteurs/ferme-elizaldia"
              >Lire la suite</nuxt-link
            >
          </div>
        </div>
      </div>

      <div class="cards_producteurs_viande" v-if="fromages">
        <div class="card">
          <div class="img">
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/mapmt.svg" alt="" /> 64220 Gamarthe,
                France
              </p>
            </div>
            <img src="~assets/img/png/aldudes.jpg" alt="" />
          </div>
          <div class="title_card">
            <h2>La Ferme Ekolia</h2>
          </div>
          <div class="content_card">
            <p>
              La ferme Ekiola est une ferme située au cœur du Pays Basque, à
              Gamarthe, qui transforme en fromage et affine sa production de
              lait EKOLIA. C'est le nom choisi par les producteurs pour baptiser
              la tomme de brebis fabriquée avec le lait de leur troupeaux.
            </p>
          </div>
          <hr />
          <div class="cta_card">
            <nuxt-link to="/producteurs/ferme-ekiola"
              >Lire la suite</nuxt-link
            >
          </div>
        </div>
        <div class="card">
          <div class="img">
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/mapmt.svg" alt="" /> 64430 Aldudes,
                France
              </p>
            </div>
            <img src="~assets/img/png/photoproducteurs_1.jpg" alt="" />
          </div>
          <div class="title_card">
            <h2>La Fromagerie des Aldudes</h2>
          </div>
          <div class="content_card">
            <p>
              Implantée depuis 1970, la CLPB (Coopérative laitière du Pays
              Basque) collecte le lait de brebis et de vaches de ses adhérents
              et le revend à des fromageries ou laiteries. C'est en 2006 que la
              coopérative construit une cave d'affinage ainsi qu'une boutique.
            </p>
          </div>
          <hr />
          <div class="cta_card">
            <nuxt-link to="/producteurs/fromagerie-aldudes"
              >Lire la suite</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>
    <Newsletter />
  </div>
</template>

<script>
import HeroProducteurs from '../../components/producteurs/HeroProducteurs'
import Newsletter from '../../components/default/Newsletter'
export default {
  components: {
    HeroProducteurs,
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
.producteurs {
  padding: 20px 15px;
}

.producteurs p {
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
}

.categories {
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
}

.box_categories {
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
}

.item_categorie {
  padding: 5px 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid rgba(19, 19, 19, 0.075);
  cursor: pointer;
}

.item_categorie img {
  width: 40px;
}

.item_categorie p {
  font-family: bodyBold, sans-serif;
  margin-bottom: 0;
  font-size: 11px;
  width: 100px;
  text-align: center;
}

.active_categorie {
  background-color: var(--beige);
  border: none;
  color: var(--white);
  font-family: bodyBold !important;
}

.card {
  margin-top: 30px;
  background-color: var(--gray);
  width: 100%;
  border-radius: 5px;
  padding-bottom: 15px;
}

.img {
  position: relative;
}

.localisation {
  position: absolute;
  top: 10px;
  right: 10px;
}

.localisation p {
  background-color: var(--black);
  padding: 10px 10px;
  color: var(--orange);
  border-radius: 10px;
  font-family: bodyBold, sans-serif;
}

.localisation p img {
  width: 17px;
  height: 23px;
}

.img img {
  width: 100%;
  border-radius: 5px 5px 0 0;
  height: 200px;
  object-fit: cover;
}

.title_card {
  padding: 15px;
}

.title_card h2 {
  font-size: 18px;
  color: var(--black);
}

.content_card {
  padding: 0px 15px 15px 15px;
}

.content_card p {
  font-size: 14px;
  color: var(--black);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 26px;
  font-family: body;
}

hr {
  margin: 0 15px;
  border: none;
  background-color: rgb(235, 235, 235);
  height: 1px;
  width: 320px;
  margin-bottom: 20px;
}

.cta_card {
  display: flex;
  padding: 0 15px 15px 15px;
  justify-content: flex-end;
}

.cta_card a {
  font-size: 14px;
  text-decoration: none;
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

@media screen and (min-width: 1024px) {
  .producteurs {
    width: 1300px;
    display: flex;
    margin-left: 90px;
    flex-flow: column;
    justify-content: space-around;
    margin-bottom: 100px;
  }
  .item_categorie {
    width: 300px;
  }

  .card {
    width: 400px;
    margin-right: 40px;
  }

  .cards_producteurs_viande {
    display: flex;
    flex-flow: row wrap;
    margin-top: 50px;
  }
}
</style>
