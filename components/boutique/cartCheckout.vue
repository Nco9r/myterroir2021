<template>
    <section class="panier">
        <div class="title_panier">
            <h2>Récapitulatif du panier</h2>
        </div>
        <div class="products_panier" >
            <p>Il y a <strong></strong> produits dans votre panier</p>
        </div>
        <!-- <div class="table_panier">
            <p>Produits</p>
            <p>Quantité</p>
            <p>Prix</p>
        </div> -->
        <div class="items_products_cart" >
        <div class="products_items" v-for="cart in carts" :key="cart.id">
            <input type="text" class="name" v-model="cart.name" disabled>
            <p class="title_products">
                {{cart.product}}
            </p>
            <div class="price_products">
                <p>{{cart.price }} €</p>
                <div class="number_products">
              
                <p>{{cart.quantity}}</p>
               
            </div>
            </div>
            <div class="delete_products">
                <p @click="deleteOne(cart.id)">Supprimer</p>
            </div>
            <hr class="hr_product">
        </div>
        </div>
        <div class="bottom_of_cart">
            <div class="table_bottom">
            <p>TOTAL</p>
            <p>TTC</p>
            </div>
            <div class="result">
                <div class="dispo">
                    <p>Disponibilité</p>
                    <p>3/4 jours ouvrés</p>
                </div>
                <div class="price_cart">
                    <p>{{total}}€</p>
                </div>
            </div>
            <hr>
        </div>
        <div class="commande_valide" v-if="commande">
            <div class="svg_valide">
            </div>
            <div class="content_valide">
                <h2><strong>Merci</strong> pour votre commande</h2>
                <p>Vous allez recevoir un mail de confirmation de commande! À bientôt chez my terroir ! </p>
            </div>
            <div class="btn_valide" @click="commande = !commade">
              <nuxt-link to="/boutique"><button> <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#fff"/>
                </svg>Boutique</button></nuxt-link>
          </div>
        </div>
    </section>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            commande: false, 
        }
    },
    computed: {
        carts() {
            return this.$store.state.cart.datas
        },
        ...mapGetters('cart', ['total'])
        
    }

}
</script>

<style scoped>

.panier {
   background-color: var(--gray);
   margin-top: 10px;
}

input {
    background-color: transparent;
    border: none;
}

.title_panier {
    margin-top: 20px;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
}

.title_panier h2 {
    font-weight: lighter; 
    font-size: 22px;
    line-height: 36px;
}

.products_panier p {
    font-size: 14px;
    color: rgb(138, 138, 138);

}

.opacity {
    opacity: 0;
    pointer-events: none; 

}

.title_panier {
    margin-top: 100px;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
}

.title_panier h2 {
    font-size: 22px;
    color: var(--black)
}

.table_panier {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    background-color: var(--gray);
    padding: 8px 10px;
    margin-top: 30px;
}

strong {
    color: var(--black);
}

.table_panier p{
    font-family: bodyBold, sans-serif; 
    font-size: 14px;
    color: var(--black)

}

.products_items {
    display: flex; 
    justify-content:flex-start; 
    margin-top: 10px;
    flex-flow: column; 
   
    padding: 0 5px;
}

.title_products {
  font-size: 14px;
}

.number_products {
    display: flex; 
    justify-content: space-between; 
    width: 92px;
    cursor: pointer;
}

.number_products input{
    display: flex; 
  
    justify-content: space-between;
}

.number_products p{
    font-weight: bold;
    color: var(--orange);
}

.name {
    font-size: 12px; 
    margin-bottom: 10px;
    color: var(--orange); 
    font-family: bodyBold, sans-serif; 
}

.price_products {
   
    justify-content: space-between;
    display: flex;align-items: center;

    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: title, sans-serif;
}

.delete_products {
    display: flex; justify-content: flex-end;
    cursor: pointer;
}

.delete_products p {
    border: 1Px solid #e9e9e9;
    padding: 10px;
    border-radius: 1px;
    font-size: 14px;
}

.bottom_of_cart {
    background-color: var(--gray);
}

.table_bottom {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    background-color: white;
    padding: 8px 10px;
    margin-top: 30px;
}

.table_bottom p{
 
    font-weight: bold;
}

.result {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    padding: 8px 10px;
    color: rgb(138, 138, 138);
    font-size: 13px;
    margin-top: 10px;
}


.dispo p:nth-child(2) {
    color: var(--black);
    font-weight: bold;
}

.price_cart {
    font-size: 42px;
    font-family: bebas-neue-pro, sans-serif; 
    font-weight: bold;
    color: var(--black)
}

.items_products_cart {
    margin-top: 20px;
}

hr {
    border: none; 
    width: 100%; 
    height: 2Px;
    background-color: var(--white);
    display: flex; 
    margin: 5px auto 0 auto; 
}

.hr_product {
    border: none; 
    width: 100%; 
    height: 2Px;
    background-color: var(--white);
    display: flex; 
    margin: 15px auto 0 auto;
}

.cta_cart {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin: 20px 0px;
}

.cta_cart a  {
    width: 48%;
    border: none; 
    padding: 15px 2px;
    font-family: bodyBold, sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.cta_cart a:nth-child(1) {
    color: white; 
    background-color: var(--black);
}

.cta_cart a:nth-child(2) {
    color: white; 
    background-color: var(--orange);
}


.delete{
    margin-left: 15px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--orange);
}
.commande_valide {
    position: fixed; 
    background-color: var(--black); 
    width: 100%; 
    height: 100%;
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    z-index: 900;
    text-align: center;
    padding: 0 30px;
}

.svg_valide {
    margin-top: 150px;
    margin-bottom: 20px;
}

.content_valide h2{
    color: white;
    font-weight: lighter;
    font-size: 38px;
}

.content_valide p{
    color: white;
    margin-top: 20px;
}

.btn_valide button {
    margin: 50px auto; 
    padding: 8px 16px; 
    width: 100%;
    font-family: bebas-neue-pro, sans-serif; 
    background-color: var(--orange);
    border: none; 
    box-shadow: 4px 4px rgba(218, 71, 9, 0.486);
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold; 
    text-transform: uppercase;
    cursor: pointer; 
    outline: none; 

}

.btn_valide button svg {
    margin-right: 10px;
}

@media screen and (min-width: 1024px) {
    
    
    .bottom_of_cart {
        position: absolute; 
        right: 300px;
        left: 300px;
    }
}

</style>