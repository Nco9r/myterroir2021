<template>
<div>
    <div class="overlay" v-if="cart"></div>
    <transition name="cartOpen" appear>
    <section class="panier" v-if="cart">
        <div class="title_panier">
            <h2>Mon panier</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="23.242" height="16.215" viewBox="0 0 23.242 16.215">
                    <path id="Tracé_1781" data-name="Tracé 1781" d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z" transform="translate(31.823 -16.655)" fill="#202020"/>
                </svg>
        </div>
        <div class="products_panier" >
            <p>Il y a <strong>0</strong> produits dans votre panier</p>
        </div>
        <div class="table_panier">
            <p>Produits</p>
            <p>Quantité</p>
            <p>Prix</p>
        </div>
        <div class="items_products_cart" >
        <div class="products_items" v-for="cart in carts" :key="cart">
            <p class="title_products">
                {{cart.product}}
            </p>
            <div class="number_products">
            </div>
            <div class="price_products">
                <p>{{cart.price / 100 * 100}}€</p>
               
            </div>
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
                    <p></p>
                </div>
            </div>
            <hr>
            <div class="cta_cart" @click="cart =!cart">
                <nuxt-link to="/boutique">Continuer achats</nuxt-link>
                <nuxt-link to="/">Valider</nuxt-link>
            </div>
             
        </div>
    </section>
    </transition>
    </div>
</template>

<script>

// import {mapMutations} from 'vuex';
// import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            cart: true,
            items: {
                qty: 1
            }
        }
    },
    computed: {
        carts() {
            return this.$store.state.cart.datas
        }
        
    },
//     computed: {
//         carts() {
//             return this.$store.state.cart.datas
//         },
//         ...mapGetters('cart', ['total'])
        
//     },
//     methods: {
//     ...mapMutations('cart', ['deleteOne'])
//   },
  
    
}
</script>

<style scoped>


/* TRANSITION */

.cartOpen-enter-active {
    animation: open .7s ease-in-out;
}

.cartOpen-leave-active {
    animation: close .7s ease-in-out;
}

@keyframes open {
    from {
        transform: translateY(-100%)
    }
    to {
        transform: translateY(0)
    }
}

@keyframes close {
    from {
        transform: translateY(0)
    }
    to {
        transform: translateY(-100%)
    }
}

.panier {
    width: 100%; 
    position: fixed; 
    top: 0; 
    bottom: 0;

    background-color: white;
    z-index: 99;
    padding: 0 15px;
}

.overlay {
  position: fixed;
  inset: 0;
  -webkit-z-index: 3;
  -moz-z-index: 3;
  -ms-z-index: 3;
  -o-z-index: 3;
  z-index: 3;
  background-color: rgba(15, 15, 15, 0.658);
}

.products_panier p {
    font-size: 14px;
    color: rgb(138, 138, 138);

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
    justify-content: space-between; 
    margin-top: 10px;
    align-items: center;
    padding: 0 5px;
}

.title_products {
    width: 120px;
}

.number_products input{
    display: flex; 
    width: 50px;
    justify-content: space-between;
}

.number_products p{
    font-weight: bold;
    color: var(--orange);
}

.price_products {
    width: 100px;
    justify-content: flex-end;
    display: flex;align-items: center;
    font-weight: bold;
    font-size: 18px;
    font-family: bebas-neue-pro, sans-serif;
}

.delete{
    margin-left: 15px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--orange);
}

.delete p {
    margin-left: 6.3px;
    margin-top: -3px;
    color: white;
}


.bottom_of_cart {
    position: absolute; 
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--gray);
}

.table_bottom {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    background-color: white;
    margin: 0 15px;
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
    margin: 0 15px;
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

hr {
    border: none; 
    width: 90%; 
    height: 2Px;
    background-color: white;
    display: flex; 
    margin: 5px auto 0 auto; 
}

.cta_cart {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin: 20px 15px;
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

.paiement {
    margin: 0 15px;
    font-size: 12px;

}

.paiement p:nth-child(1) {
    color: var(--hint);
    font-weight: bold;
}

.paiement p:nth-child(2) {
    color: var(--black);
    font-weight: bold;
}

.icon_cart {
    margin: 10px 15px;
}

.icon_cart img {
    width: 30px;
    margin-right: 10px;
}

.items_products_cart {
    overflow: scroll;
    height: 38%;
}

@media screen and (min-width: 1024px) {
    .panier {
            width: 30%; 
            position: fixed; 
            right: 0;
            z-index: 10;
    }

    .cartOpen-enter-active {
    animation: open .3s ease-in-out;
}

.cartOpen-leave-active {
    animation: close .3s ease-in-out;
}

@keyframes open {
    from {
        transform: translateX(100%)
    }
    to {
        transform: translateX(0)
    }
}

@keyframes close {
    from {
        transform: translateX(0)
    }
    to {
        transform: translateX(100%)
    }
}
    
}




</style>