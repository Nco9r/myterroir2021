<template>
  <section class="about">
    <div class="about_content">
      <h2>Le service traiteur de my terroir</h2>
      <hr />
      <p>
        Cassez les <strong>codes</strong>, choisissez un
        <strong>traiteur</strong> sur <strong>Bordeaux</strong> pas comme les
        autres qui vous propose une sélection de <strong>produits</strong> de
        <strong>qualité</strong> dénichée chez des
        <strong>producteurs</strong> artisanaux en France, Espagne et en Italie.
        Vous <strong>organisez</strong> votre mariage, un anniversaire ou
        simplement des retrouvailles entre copains.
        <strong>Choisissez</strong> avec nous les produits qui s’accorderont au
        mieux avec votre <strong>événement</strong>. Nous pouvons nous occuper
        des <strong>services</strong> complémentaires comme la vaisselle ou le
        mobilier.
      </p>
      <nuxt-link to="/traiteur"
        ><button>
          Nos prestations
        </button></nuxt-link
      >
    </div>
    <div class="about_img">
      <img src="~assets/img/png/traiteur.jpg" alt="image de produits" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
strong {
  font-family: bodyBold, sans-serif;
}

.about {
  display: flex;
  flex-flow: column;
  padding: 50px 15px;
}

.about_content h2 {
  color: var(--black);
  font-size: 24px;
  line-height: 34px;
}

.about_content hr {
  border: none;
  width: 30px;
  margin: 10px 0;
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.about_content p {
  color: var(--black);
  font-size: 14px;
  margin-top: 20px;
  line-height: 26px;
  margin-bottom: 10px;
}

.about_content button {
  margin-top: 20px;
  background-color: var(--orange);
  padding: 10px 48px;
  color: var(--white);
  font-size: 14px;
  width: 100%;
  margin-bottom: 30px;
  font-family: bodyBold;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.overbutton {
  margin-top: 10px !important;
  background-color: transparent !important;
  padding: 10px 48px;
  color: var(--orange) !important;
  font-size: 14px;
  width: 100%;
  border: 1px solid var(--orange) !important;
  font-family: bodyBold;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s;
}

.about_content button:hover {
  background-color: var(--black);
}

.about_img {
  display: flex;
  flex-flow: column;
  margin-top: 20px;
}

.about_img img {
  width: 100%;
}

.about_img img:nth-child(2) {
  box-shadow: 10px 10px rgba(5, 5, 5, 0.096);
}

@media screen and (min-width: 1024px) {
  .about {
    display: flex;
    flex-flow: row-reverse;
    margin: auto;
    padding: 100px 80px 100px 80px;
    justify-content: space-between;
    align-items: center;

    max-width: 1240px;
  }

  .about_content button {
  width: 250px;
}
  
  .about_content {
    width: 40%;
  }

  .about_content h2 {
    width: 350px;
    font-size: 32px;
    line-height: 52px;
  }

  .about_content p {
    font-size: 14px;
    line-height: 28px;
    width: 350px;
  }

  .about_img {
    width: 50%;
  }
}

@media screen and (min-width: 1300px) {
  .about_content p {
    width: 450px;
  }

  .about_content h2 {
    width: 500px;
  }
}
</style>
