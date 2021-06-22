<template>
  <div>
    <div class="article">
      <div class="title_article">
        <h1>My Terroir et la maison Laborie</h1>
        <hr />
      </div>
      <div class="infos_article">
        <p>Par Stéphane Eclache, le 29 mars 2018</p>
      </div>
      <div class="content_article">
        <p>
          Installé dans un petit village du Cantal, une entreprise familiale
          spécialisée dans la fabrication de salaisons de qualité fait parler
          d'elle.
        </p>
      </div>
      <div class="img_article">
        <img src="~assets/img/png/maison_laborie.jpg" alt="" />
      </div>
      <div class="content_article">
        <p>
          La Charcuterie Laborie a été créée en 1932 par Mr Romain TOYRE,
          grand-père de Mr Laurent LABORIE. Troisième génération de cette
          famille de charcutiers-salaisonniers, Mr Laurent LABORIE, actuel
          dirigeant de l'entreprise, continue de proposer des produits du
          terroir de qualité, dont les secrets de fabrication restent inchangés
          depuis plus de 80 ans.
        </p>
        <p>
          Depuis 1989 la Maison Laborie enchaine les récompenses.Ce travail
          multi-générationnel à permit à la maison fondée en 1932 de bonifier
          année après années leur savoir faire.
        </p>
      </div>
      <div class="img_article">
        <img src="~assets/img/png/card_cocktails_6.jpg" alt="" />
      </div>
      <div class="content_article">
        <p>
          Afin de retrouver la qualité des viandes d’antan, la Maison Laborie a
          mis en place des élevages de cochons fermiers, élevés en plein air
          jusqu’à 10 à 12 mois. Cette matière première d’exception permet
          notamment la fabrication de Jambons Secs haut de gamme, affinés de 16
          à 18 mois. Aujourd'hui la charcuterie Laborie est référencée chez les
          meilleurs artisans et restaurateurs, notamment en région parisienne.
        </p>
        <p>
          Vous pouvez retrouver les produits de la maison Laborie dans nos plateaux de charcuterie et plus en détails ici.
        </p>
      </div>
    </div>
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
.article {
  padding: 100px 15px 30px 15px;
}

.title_article h1 {
  color: var(--black);
  font-size: 24px;
  line-height: 32px;
}

.title_article hr {
  border: none;
  width: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.infos_article p {
  font-size: 12px;
  color: gray;
  font-style: italic;
  margin-bottom: 20px;
  margin-top: 15px;
}

.content_article p {
  font-size: 14px;
  line-height: 26px;
  color: var(--black);
  margin-bottom: 15px;
}

.img_article {
  margin-top: 20px;
  margin-bottom: 20px;
}

.img_article img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  .article {
    max-width: 680px;
    margin: auto;
  }

 

  .img_article img {
    width: 100%;
    height: 300px;
  }
}

@media screen and (min-width: 1024px) {
  .article {
    max-width: 840px;
    margin: auto;
  }

  .title_article h1 {
    font-size: 42px;
    line-height: 64px;
  }
}

@media screen and (min-width: 1440px) {
  .article {
    max-width: 940px;
    margin: auto;
  }

  .title_article h1 {
    font-size: 42px;
    line-height: 64px;
  }

  .content_article p {
    font-size: 16px;
    line-height: 32px;
  }
}
</style>
