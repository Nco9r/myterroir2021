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
  line-height: 28px;
}

.about_content button {
  margin-top: 30px;
  background-color: var(--orange);
  padding: 8px 48px;
  color: var(--white);
  border: none; 
  font-size: 14px;
  font-family: bodyBold;
  cursor: pointer;
  transition: all .3s; 
  width: 100%;
  margin-bottom: 30px;
}

.about_content button:hover {
   background-color: var(--black);
}

.about_img {
  display: flex;
  flex-flow: column;
  margin-top: 20px;
  position: relative;
}





.about_img img {
  width: 100%;
  box-shadow: 5px 5px rgba(20, 20, 20, 0.096);
 

}

@media screen and (min-width: 1024px) {
  .about {
    display: flex;
    flex-flow: row;
    margin: auto;
    padding: 100px 80px 100px 80px;
    justify-content: space-between;
    align-items: center;

    max-width: 1240px;
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
      width: 350px;
  }

  .about_img {
      width: 50%;
  }

  .about_img img {
  box-shadow: 15px 15px rgba(20, 20, 20, 0.096);

  }

  .about_content button {
    width: 200Px;
  }
}

@media screen and (min-width: 1300px) {
  .about_content p {
    width: 450px;
  }
}


</style>
