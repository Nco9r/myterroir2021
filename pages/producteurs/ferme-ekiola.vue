<template>
  <div>
    <section class="content_producteurs">
      <div class="background_img">
        <img src="~assets/img/png/brebis.jpeg" alt="" />
      </div>
      <div class="block">
        <div class="block_left">
          <div class="img_producteurs">
            <img src="~assets/img/png/aldudes.jpg" alt="" />
          </div>
          <div class="title_producteurs">
            <h3>La ferme Ekiola</h3>
            <div class="localisation">
              <p>
                <img src="~/assets/img/svg/map.svg" alt="" /> Catégorie :
                <strong>Fromages</strong>
              </p>
            </div>
          </div>
          <div class="fiche_producteurs">
            <div class="user">
              <img src="~assets/img/svg/usermt.svg" alt="" />
              <p>Ekiola</p>
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
              La ferme Ekiola est une ferme située au cœur du Pays Basque, à
              Gamarthe, qui transforme en fromage et affine sa production de
              lait EKOLIA. C'est le nom choisi par les producteurs pour baptiser
              la tomme de brebis fabriquée avec le lait de leur troupeaux. Il
              signifie "La cabane du berger au soleil"; du basque "Eki" Soleil
              et "ola" bardeaux utilisés pour couvrir la charpente des cabanes
              du berger. Leur fromage savoureux, est le fruit d'un travail de
              passionnés.
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
  }
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
}
</style>
