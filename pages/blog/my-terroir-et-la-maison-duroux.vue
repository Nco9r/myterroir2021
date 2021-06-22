<template>
  <div>
    <div class="article">
      <div class="title_article">
        <h1>My Terroir et la maison Duroux</h1>
        <hr />
      </div>
      <div class="infos_article">
        <p>Par Stéphane Eclache, le 29 mars 2018</p>
      </div>
      <div class="content_article">
        <p>
          Nous voulons, aujourd'hui, partager avec vous l'histoire de l'un de
          nos fournisseurs de fromage.
        </p>
      </div>
      <div class="img_article">
        <img src="~assets/img/png/duroux.jpg" alt="" />
      </div>
      <div class="content_article">
        <p>
          La Maison Duroux est installé en Corrèze depuis 1936. Cette maison à
          su au fil des années affiner ses connaissances de ses produits et ses
          fromages par la même occasion. Cette laiterie qui se transmet de
          générations en générations met un point d'honneur à perpétuer les
          traditions afin de préserver qualité et savoir faire.
        </p>
        <p>
          La Maison Duroux à déjà acquis ses lettres de noblesse grâce à de
          nombreuses récompenses au concours général agricole. C'est d'ailleurs
          la seul laiterie a avoir été primée dans la catégorie Cantal AOP
          laitier.
        </p>
      </div>
      <div class="img_article">
        <img src="~assets/img/png/duroux_2.jpg" alt="" />
      </div>
      <div class="content_article">
         <p>
          Leurs produits allant du Cantal à la Tome nous ont tout de suite
          convaincu. Vous dégusterez avec émotions ces fromages dans lequel nous
          pouvons reconnaitre la passion d'hommes et de femmes pour les bonnes
          choses et pour la tradition.
        </p>
        <p>Vous pourrez retrouver leurs produits au sein de nos plateaux de fromages et dans nos tapas.</p>
      </div>
    </div>
    <Newsletter/>
  </div>
</template>

<script>

import Newsletter from '../../components/default/Newsletter'
export default {
  components: {
    Newsletter,
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
