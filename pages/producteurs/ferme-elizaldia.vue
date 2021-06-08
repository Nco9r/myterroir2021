<template>
  <div>
    <section class="content_producteurs">
      <div class="background_img">
        <img src="~assets/img/png/photorosco.jpg" alt="" />
      </div>
      <div class="block">
        <div class="block_left">
          <div class="img_producteurs">
            <img src="~assets/img/png/photoproducteurs_2.jpg" alt="" />
          </div>
          <div class="title_producteurs">
            <h3>La ferme elizaldia</h3>
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
              <p>Jean-Baptiste LOYATO</p>
            </div>
            <hr />
            <div class="user">
              <img src="~assets/img/svg/mapmt.svg" alt="" />
              <p>64220 Gamarthe, France</p>
            </div>
          </div>
        </div>
        <div class="block_right">
          <div class="content">
            <h3>Le producteur en quelques mots</h3>
            <p>
              Jean-Baptiste LOYATO crée ses porcheries en 1993 à Gamarthe grâce
              à l'aide de quatre-vingts de ses proches. En 1995, il décide,
              accompagné de sa femme, de créer leur propre charcuterie qu'ils
              nomment "la Elizaldia". Ils bénéficient de 3 agréments du jambon
              de Bayonne: l'élevage, la découpe et la salaison. A la ferme
              Elizaldia, les cochons sont élevés 8 à 11 mois au lieu de 6 mois
              en standard. Cette particularité de la ferme permet à la viande
              d'être riche en goût, plus savoureuse. La ferme est aussi
              soucieuse de l'environnement, du bien-être animal et surtout d'une
              alimentation de qualité.
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
        width: 1300Px;
        margin-bottom: 100Px;
    }

    .block_right {
        margin-left: 100Px;
    }
}
</style>
