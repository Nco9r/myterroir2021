<template>
  <div>
    <section class="content_producteurs">
      <div class="background_img">
        <img src="~assets/img/png/photorosco.jpg" alt="" />
      </div>
      <div class="block">
        <div class="block_left">
          <div class="img_producteurs">
            <img src="~assets/img/png/photo.jpeg" alt="" />
          </div>
          <div class="title_producteurs">
            <h3>La maison laborie</h3>
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/map.svg" alt="" /> Catégorie :
                <strong>Viandes</strong>
              </p>
            </div>
          </div>
          <div class="fiche_producteurs">
            <div class="user">
              <img src="~assets/img/svg/usermt.svg" alt="" />
              <p>Laborie & fils</p>
            </div>
            <hr />
            <div class="user">
              <img src="~assets/img/svg/mapmt.svg" alt="" />
              <p>15290 Parlan, France</p>
            </div>
          </div>
        </div>
        <div class="block_right">
          <div class="content">
            <h3>Le producteur en quelques mots</h3>
            <p>
              Implantée à Parlan, petit village du Cantal, la Maison Laborie est
              une entreprise familiale fondée en 1932 et spécialisée dans la
              fabrication de salaisons de qualité (Saucissons & Saucisses
              sèches, Jambons, Poitrines mais également produits cuits et
              conserves). Afin de se démarquer des produits standards du marché,
              la Maison Laborie élève ses propres cochons fermiers, en plein
              air, pendant 10 à 12 mois. Un abattage tardif combiné à ces
              conditions d’élevages hors norme permet d’obtenir une viande
              persillée et goûteuse. Distinguée depuis 2014 « Producteur-artisan
              de qualité » par le Collège Culinaire de France, la Maison Laborie
              tient à conserver à tout prix le niveau de qualité de ses produits
              et rester fidèle à leur goût originel.
            </p>
          </div>
          <div class="cta_fiche">
            <nuxt-link to="/producteurs">Revenir aux producteurs</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <Newsletter />
  </div>
</template>

<script>
import Newsletter from '../../components/default/Newsletter'

export default {
  components: {
    Newsletter
  },
}
</script>

<style scoped>
.background_img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.img_producteurs {
  display: flex;
  width: 100%;
  margin: -90px auto 10px auto;
}

.img_producteurs img {
  width: 150px;
  border: 4px solid var(--white);
  display: flex;
  margin: auto;
  object-fit: cover;
  height: 150px;
  border-radius: 50%;
}

.title_producteurs {
  text-align: center;
  margin-top: 20px;
}
.localisation p img {
  width: 15px;
  height: 15px;
}

.localisation {
  width: 300px;
  margin: 10px auto;
}

.localisation p {
  background-color: var(--gray);
  padding: 10px 10px;
  font-size: 14px;
  color: var(--black);
  border-radius: 10px;
  font-family: body, sans-serif;
}

.fiche_producteurs {
  background-color: var(--black);
  flex-flow: column;
  width: 95%;
  border-radius: 4px;
  display: flex;
  padding: 0px 20px;
  margin: 20px auto;
}

.user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
}

.user img {
  width: 20px;
  margin-right: 30px;
}

.user p {
  color: var(--orange);
  font-size: 14px;
  font-family: bodyBold, sans-serif;
}

hr {
  border: none;
  width: 20px;
  height: 1px;
  background-color: var(--orange);
  opacity: 1;
}

.content {
  padding: 0 15px;
}

.content h3 {
  font-size: 18px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
  margin-bottom: 10px;
}

.content p {
  font-size: 14px;
  font-family: body, sans-serif;
  color: var(--black);
  line-height: 26px;
  margin-bottom: 10px;
}

.cta_fiche {
  margin-bottom: 20px;
}

.cta_fiche a {
  padding: 0 15px 50px 15px;
  color: var(--orange);
  font-family: bodyBold;
  font-size: 14px;
  text-decoration: none;
}

@media screen and (min-width: 1024px) {
  .block {
    display: flex;
    flex-flow: row;
    margin: auto;
    align-items: flex-end;
    justify-content: center;
    width: 1300px;
    margin-bottom: 100px;
  }

  .block_right {
    margin-left: 100px;
  }

  .img_producteurs img {
  width: 200px;
  border: 4px solid var(--white);
  display: flex;
  margin: auto;
  object-fit: cover;
  height: 200px;
  border-radius: 50%;
}
}
</style>
