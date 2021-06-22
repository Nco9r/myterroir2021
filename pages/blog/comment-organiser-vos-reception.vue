<template>
  <div>
    <div class="article">
      <div class="title_article">
        <h1>Comment organiser vos réceptions ?</h1>
        <hr />
      </div>
      <div class="infos_article">
        <p>Par Stéphane Eclache, le 3 avril 2018</p>
      </div>
      <div class="content_article">
        <p>
          Dans cet article nous avons voulu vous aiguiller un petit peu sur
          l'organisation de vos événements afin qu'ils soient le plus réussi
          possible et en vous donnant les clés pour vous simplifier la vie.
        </p>
      </div>
      <div class="img_article">
        <img src="~assets/img/png/card_cocktails_5.jpg" alt="" />
      </div>
      <div class="content_article">
        <p>
          Que vous organisiez un anniversaire, une réception d'entreprise ou
          bien votre mariage vous trouverez dans ce petit guide les quelques
          tips que nous avons trouvé les plus importants à vous donner.
        </p>
        <p class="sous_title">1. Le planning</p>
        <p>
          Tout d'abord nous vous conseillons d'établir un planning, pour que
          vous ayez toutes les échéances en tête. Il serait dommage de se rendre
          compte le jour J qu'il vous manque l'essentiel.
        </p>
        <div class="sous_title">2. Le budget</div>
        <p>
          En effet, vous allez devoir délimiter un budget dès le début pour
          avoir une idée du nombres de personnes que vous allez invité, le type
          d'événement que vous allez pouvoir réaliser et les services ou
          animations que vous allez pouvoir ajouter à votre réception. De plus
          ce budget vous permettra également de sélectionner des prestataires
          adapter à ce dernier ou au moins de connaitre votre marge de manoeuvre
          en terme de négociation.
        </p>
        <div class="sous_title">3. Le nombre d'invités</div>
        <p>
          Vous l'aurez comprit, définir le nombre de convives va être assez
          rapidement essentiel. Ce nombre va définir le lieux que vous pourrez
          sélectionner. Vous allez devoir choisir un lieu adéquat à ce nombre.
          Rien ne sert de choisir un lieu immense si vous n'êtes qu'un petit
          nombre. Cela rendrait votre événement froid et impersonnel, voire
          gênant pour vos invités. À l'inverse si le lieu est trop petit par
          rapport à votre événement, vos invités ne seront pas à l'aise.
        </p>
        <div class="sous_title">4. Le type de réception</div>
        <p>
          Le nombre d'invités va également vous permettre de définir le type de
          réception possible. Si le nombre d'invités est assez élevé nous vous
          conseillons de ne pas faire un repas assis qui manquera de
          convivialité. Néanmoins si vous êtes en plus petit comité ce type
          d'organisation peut être très bonne pour créer quelque chose de plus
          intimiste. Selon ce que vous choisirez vous pourrez ainsi orienter vos
          choix pour le traiteur. Le traiteur que vous choisira devra
          correspondre à l'ambiance que vous voulez créer. Nous essayons, avec
          My Terroir, e nous adapter autant que possible aux spécificités de vos
          événements.
        </p>
      </div>
      <div class="img_article">
        <img src="~assets/img/png/reception.jpg" alt="" />
      </div>
      <div class="content_article">
        <div class="sous_title">5. Le lieu</div>
        <p>
          Le lieu va être très important et interdépendant des éléments cités
          précédemment. Ce dernier va également dépendre de l'atmosphère que
          vous voulez créer lors de votre événement. De plus, si vous avez mit
          en place un thème à votre soirée nous vous conseillons d'adapter ce
          dernier par rapport à la thématique choisit. Selon l'occasion de cet
          événements certains lieux selon à valoriser. Nous vous conseillons par
          exemple si vous organiser un gala ou un diners de remerciement de
          choisir un lieu type hotel de prestige ou un espace prévu aux
          événements. Au contraire si votre événement est moins formel vous
          pouvez très bien organiser ce dernier dans vos locaux, en extérieur ou
          encore chez vous.
        </p>
        <div class="sous_title">6. Les invitations</div>
        <p>
          N'oubliez surtout pas de prévenir vos invités à temps. Et pensez
          également à choisir une date stratégique. Oubliez les week-end de
          ponts ou de fêtes. Il sera de très bon goût d'envoyer des invitations
          papiers à vos convives.
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

.content_article .sous_title {
  font-family: bodyBold !important;
  color: var(--orange);
  font-size: 16px;
  margin-bottom: 10px;
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
