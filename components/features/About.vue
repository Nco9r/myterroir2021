<template>
  <section class="about">
    <div class="about_content">
      <h2>dénicheur de produits authentiques.</h2>
      <hr />
      <p>
        Notre secret : de bons <strong>produits</strong> achetés directement au <strong>producteur</strong>, une
        équipe <strong>passionnée</strong>, motivée et quelques bons <strong>livres</strong> de grand-mères. Bon
        on avoue : il nous aura fallu 5 ans, <strong>beaucoup de travail</strong>, de nombreux
        <strong>voyages</strong> et autant de rencontres pour pouvoir vous proposer en toute
        humilité notre <strong>expertise</strong> en la matière. Pourquoi chercher compliqué
        quand nous pouvons vous <strong>régaler en toute simplicité!</strong>
      </p>
      <nuxt-link to='/boutique'>
      <button>
        Boutique
      </button>
      </nuxt-link>
    </div>
    <div class="about_img">
      <img src="~assets/img/svg/feuille.svg" alt="verdure" />
      <img src="~assets/img/png/authentiques.jpg" alt="image de produits" />
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
  padding: 30px 15px;
}

.about_content h2 {
  color: var(--black);
  font-size: 24px;
  line-height: 32px;
}

.about_content hr {
  border: none;
  width: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.about_content p {
  color: var(--black);
  font-size: 14px;
  margin-top: 20px;
  line-height: 26px;
}

.about_content button {
  margin-top: 30px;
  background-color: var(--orange);
  padding: 10px 48px;
  color: var(--white);
  font-size: 16px;
  font-family: bodyBold;
  cursor: pointer;
  border: none;
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
  transition: all .3s; 
}

.about_content button:hover {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.274);
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
    flex-flow: row;
    margin: auto;
    padding: 30px 80px 100px 80px;
    justify-content: space-between;
    align-items: flex-end;

    width: 1240px;
  }

  .about_content {
      width: 40%;
  }

  .about_content h2 {
      width: 500px;
      font-size: 32px; 
      line-height: 52px;
  }

  .about_content p {
      font-size: 14px; 
      line-height: 26px;
      width: 450px;
  }

  .about_img {
      width: 50%;
  }
}
</style>
