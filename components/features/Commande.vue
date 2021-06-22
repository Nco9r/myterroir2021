<template>
  <section class="commande">
    <div class="commande_title">
      <h2>Commandez nos produits en toute simplicité</h2>
      <p>Un clic et c'est prêt</p>
    </div>
    <div class="commande_wrapper">
      <div class="items_commande">
        <div class="items">
          <img src="~assets/img/svg/commande.svg" alt="" />
          <p><span class="orange">#1.</span> Passez commande</p>
          <p>Sur notre boutique en ligne</p>
        </div>
        <div class="items">
          <img src="~assets/img/svg/valideC.svg" alt="" />
          <p><span class="orange">#2.</span> Confirmation</p>
          <p>Recevez la confirmation par mail</p>
        </div>
        <div class="items">
          <img src="~assets/img/svg/bag.svg" alt="" />
          <p><span class="orange">#3.</span> Livraison</p>
          <p>Retirez ou faites vous livrer la commande</p>
        </div>
      </div>
      <nuxt-link to="/boutique">
      <button>Boutique</button>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>

a {
  text-decoration: none; 
}
section {
  background-color: var(--gray);
  width: 100%;
  margin-top: 20px;
  padding: 20px 15px;
}

.commande_title {
  display: flex;
  flex-flow: column;
}

.commande_title h2 {
  color: var(--black);
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.commande_title p {
  background-image: url('~assets/img/svg/tache.svg');
  background-size: 100%;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-3deg);
  font-family: bodyBold, sans-serif;
  color: var(--white);
  background-repeat: no-repeat;
}

hr {
  border: none;
  width: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.commande_wrapper {
  background-color: var(--beige);
  width: 100%;
  display: flex;
  flex-flow: column;
  margin-top: 40px;
  background-image: url('~assets/img/png/texture_mt.png');
  background-repeat: repeat;
  background-size: 80%;
  border-radius: 1px;
  padding-bottom: 40px;
  margin-bottom: 40px;
}

.items_commande {
  display: flex;
  flex-flow: column;
}

.items {
  text-align: center;
  margin-bottom: 50px;
}

.items img {
  width: 200px;
  margin-bottom: -40px;
}

.items p:nth-child(2) {
  text-transform: uppercase;
  font-family: bodyBold;
}

.items p:nth-child(3) {
  font-family: bodyBold;
  color: var(--white);
  width: 200px;
  display: flex;
  margin: auto;
}

.orange {
  color: var(--orange);
}

.commande_wrapper button {
  margin-top: 20px;
  background-color: var(--orange);
  padding: 10px 78px;
  display: flex;
  cursor: pointer;
  margin: 0 auto 20px auto;
  color: var(--white);
  font-size: 14px;
  font-family: bodyBold;
  border: none;
  transition: all .3s; 
}

.commande_wrapper button:hover {

   background-color: var(--black);
}

@media screen and (min-width: 1024px) {

   section {
       padding-bottom: 100px;
   } 

  .commande_title {
      display: flex; 
        max-width: 1100px;
        margin: 50px auto; 
      flex-flow: column;
      text-align: center;
      justify-content: flex-start; 
  }

  .commande_title h2{
    width: 600px;
    margin: auto;
    font-size: 32px; 
    line-height: 46px; 
  }

  .commande_title p {
      font-size: 28px;
      background-size: 100%;
      width: 400px;
      margin: 20px auto; 
  }

  .commande_wrapper {
    background-color: var(--beige);
    width: 100%;
    max-width: 1100px;
    display: flex;
    padding: 0 90px;
    margin: auto;
    margin-top: 150px;
    background-image: url('~assets/img/png/texture.png');
    background-repeat: repeat;
    background-size: 40%;
    border-radius: 4px;
    padding-bottom: 40px;
  }

  .items_commande {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-top: -100px;
  }

  .items {
    width: 30%;
  }
}
</style>
