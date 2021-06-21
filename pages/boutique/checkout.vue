<template>
  <div>
    <main>
      <section class="recapitulatif">
        <div class="title_recapitulatif">
          <h2>Informations personnelles</h2>
        </div>
        <form @submit="submit">
          <div class="label">
            <p>Nom et prénom</p>
            <input type="text" v-model="form.name" />
          </div>
          <div class="label">
            <p>E-mail</p>
            <input type="email" v-model="form.email" />
          </div>
          <div class="label">
            <p>Téléphone portable</p>
            <input type="text" v-model="form.phone" />
          </div>
          <div class="label">
            <p>Code promo</p>
            <input type="text" v-model="form.promo" />
          </div>
          <div class="label">
            <p>Conditions de livraison</p>
            <div class="livraison">
              <p
                @click=";(retrait = true), (livraison = false)"
                :class="{ color_orange: retrait }"
               >
                Retrait
              </p>
              <p
                @click=";(retrait = false), (livraison = true)"
                :class="{ color_orange: livraison }"
              >
                Livraison
              </p>
            </div>
          </div>
          <div class="retrait" v-if="retrait">
            <div class="title_retrait">
              <h5>Conditions de retrait.</h5>
              <p>
                Commande à retirer au 482 rue du Courdonney <br />
                33140 Cadaujac du lundi au vendredi de 9h à 18h à la réception
                du SMS.
              </p>
            </div>
          </div>
          <div class="livraison_card" v-if="livraison">
            <div class="label">
              <p>Adresse</p>
              <input type="text" />
            </div>
            <div class="label">
              <p>Adresse complémentaire</p>
              <input type="text" />
            </div>
            <div class="label">
              <p>Code Postal</p>
              <input type="text" />
            </div>
            <div class="label">
              <p>Ville</p>
              <input type="text" />
            </div>
            <div class="label">
              <p>Préférence livraison</p>
              <input type="text" placeholder="tranche horraire" />
            </div>
            <div class="port_livraison">
              <div class="title_retrait">
                <h5>
                  Frais
                    de livraison.
                </h5>
                <p>
                  Livraison dans toute la métropole bordelaise. Au délà veuillez
                  nous contactez.
                </p>
                <ul>
                  <li>Commande inférieur à 50€ = 10€ de frais</li>
                  <li>Commande entre 50€ et 100€ = 5€ de frais</li>
                  <li>
                    Commande supérieur à 100€ =
                    <span class="gratuit">Gratuit</span>
                  </li>
                </ul>
                <p>
                  À noter que les frais de port seront rajoutés sur la
                  confirmation de commande.
                </p>
              </div>
            </div>
          </div>
          
           <div class="title_panier">
            <h2>Récapitulatif du panier</h2>
        </div>
        <div class="products_panier" >
            <p>Il y a <strong></strong> produits dans votre panier</p>
        </div>
          <div class="products_items" v-for="cart in carts" :key="cart.id">
            <input type="text" class="name" :value="cart.name" disabled>
            <p class="title_products">
                {{cart.product}}
            </p>

            <input type="text" v-model="cart.prenom">
            <div class="price_products">
                <p>{{cart.price | currency('')}} €</p>
                <div class="number_products">
              
                <p>{{cart.quantity}}</p>
               
            </div>
            </div>
            <div class="delete_products">
                <p @click="deleteOne(cart.id)">Supprimer</p>
            </div>
            <hr class="hr_product">
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
                    <p v-if="total > 1">{{total | currency('')}}€</p>
                </div>
            </div>
            <hr>
             <div class="frais_port" v-if="livraison">
            <div class="bloc_port">
              <div class="content_port">
                Frais de livraion estimés
              </div>
              <div class="price_content">
                <p v-if="(total >= 1 && total < 50)">10€</p>
                <p v-if="(total >= 50 && total < 100)">5€</p>
                <p v-if="total >= 100">Gratuit</p>
              </div>
            </div>
          </div>
        </div>
          <!-- <div class="check">
            <input type="checkbox" required checked />
            <p>
              En cochant cette case vous accepter que les informations fournies
              soient utilisées pour vous contacter suite à votre commande.
            </p>
          </div> -->
          <!-- <cart-checkout /> -->
           <div class="cta_cart">
                <nuxt-link to="/boutique">Retour</nuxt-link>
                <button> Confirmer</button>
            </div>
        </form>
         <div class="commande_valide" v-if="valide">
            <div class="svg_valide">
            </div>
            <div class="content_valide">
                <h2>Merci pour votre commande</h2>
                <p>Vous allez recevoir un mail de confirmation de commande! À bientôt chez my terroir ! </p>
            </div>
            <div class="btn_valide" @click="commande = !commande">
              <a href="/boutique"><button>Boutique</button></a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// import cartCheckout from '../../components/boutique/cartCheckout'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
export default {
  components: {
    // cartCheckout
  },
  data() {
    return {
      retrait: true,
      livraison: false,
      valide: false,
      form: {
          name: '',
          email: '',
          phone: '',
          promo: '',
      },
      cart: {
        name: 'ok'
      },
     
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      // return this.$store.dispatch('cart'['SendCart'])
      this.$axios
        .post('http://localhost:4330/shop', [this.form, this.$store.state.cart.datas, this.total], )
        .then((res) => (this.form = ''),
        (this.valide = true))
        .catch(e)
      this.error = true
    },
    ...mapActions('cart', ['sendCart']),
    ...mapMutations('cart', ['deleteOne']),

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
.recapitulatif {
  padding: 100px 15px 20px 15px;
  background-color: var(--gray);
}

.bloc_port {
  display: flex;
  margin-top: 10px;
  padding: 5px 10px;
  justify-content: space-between;
  font-size: 13px; 
  color: var(--black);
}

.content_port {
  color: rgb(138, 138, 138);

}

.price_content {
    font-family: bodyBold; 
color: var(--orange);
font-size: 15px;
}

.title_recapitulatif h2 {
  font-size: 22px;
  line-height: 36px;
  color: var(--black);
}

.orange {
  color: var(--orange);
}

.label {
  margin-bottom: 10px;
}

.label p {
  padding: 10px 0 5px 5px;
  font-size: 12px;
  color: var(--black);
  font-family: bodyBold;
}

.label input {
  width: 100%;
  border: none;
  background-color: white;
  padding: 10px 16px;
  font-size: 16px;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}

.label input::placeholder {
  font-size: 14px;
  color: var(--hint);
  font-family: body, sans-serif;
}

.livraison {
  display: flex;
  font-size: 12px;
  font-family: body;
}

.livraison p:nth-child(1) {
  background-color: var(--white);
  padding: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--orange);
  font-size: 14px;
  width: 130px;
}

.color_orange {
  background-color: var(--orange) !important;
  color: white !important;
}

.livraison p:nth-child(2) {
  background-color: white;
  padding: 12px 0px;
  color: var(--black);
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-left: 20px;
}

.retrait {
  margin: 20px 0px 0px 0px;
  padding: 15px;
  background-color: var(--black);
}

.retrait h5 {
  color: var(--white);
  font-size: 16px;
}

.retrait p {
  color: var(--white);
  margin-top: 10px;
  font-size: 12px;
}

.port_livraison {
  padding: 10px 15px;
  margin-top: 30px;
  background-color: var(--black);
}

.port_livraison h5 {
  color: white;
  font-size: 16px;

}

.port_livraison p {
  color: white;
  font-size: 12px;
  margin-top: 10px;
}

.port_livraison ul {
    margin-top: 10px;
    margin-bottom: 10px;
}

.port_livraison ul li {
  color: var(--orange);
    font-size: 12px;
  margin-bottom: 5px;
}

.gratuit {
  color: white;
}

.check {
  display: flex;
  margin-top: 20px;
  padding: 0 15px;
}

.check input {
  margin-right: 10px;
}

.check p {
  margin-top: -2px;
  font-size: 12px;
  font-weight: bold;
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
    padding: 12px 2px;
    font-family: bodyBold, sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.cta_cart button  {
    width: 48%;
    border: none; 
    padding: 12px 2px;
    font-family: bodyBold, sans-serif;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.cta_cart a:nth-child(1) {
    color: white; 
    background-color: var(--black);
}

.cta_cart button:nth-child(2) {
    color: white; 
    background-color: var(--orange);
}

input[type='checkbox' i] {
  background-color: var(--black) !important;
  width: 30px;
  height: 20px;
  border-radius: 0px;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked {
  background-color: var(--orange) !important;
  width: 30px;
  height: 20px;
  -webkit-appearance: none;
  display: flex;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked::after {
  content: 'x';
  font-size: 16px;
  color: white;
  font-weight: bold;
  display: flex;
  margin: auto;
}

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

.price_cart p{
  font-size: 32px;
  font-family: title, sans-serif;
  font-weight: bold;
  color: var(--black);
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
    align-items: flex-end; 
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
    padding: 12px 2px;
    font-family: bodyBold, sans-serif;
    font-size: 14px;
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
    background-image: url('~assets/img/png/texture_mt.png');
    display: flex; 
    flex-flow: column; 
    align-items: center; 
    justify-content: center; 
    bottom: 0; 
    right: 0;
    z-index: 90;
    padding: 0 30px;
}


.content_valide h2{
    color: white;
    font-size: 32px;
    line-height: 46px;
    text-align: center;
}

.content_valide p{
    color: white;
    margin-top: 20px;
    padding: 0 10px;
    line-height: 24px; 
    text-align: center;
    font-size: 14px;
}

.btn_valide button {
    margin: 30px 15px; 
    padding: 12px 46px; 
    font-family: bodyBold, sans-serif; 
    background-color: var(--orange);
    border: none; 
    box-shadow: 4px 4px rgba(218, 71, 9, 0.486);
    text-decoration: none;
    color: white;
    font-size: 14px; 
    cursor: pointer; 
    outline: none; 

}

.btn_valide button svg {
    margin-right: 10px;
}

@media screen and (min-width: 1440px) {
  main {
    padding: 0 300px;
    background-image: url('~assets/img/png/traiteur.jpg');
    background-repeat: no-repeat;
    background-size: 100%;

  }

  .recapitulatif {
    padding: 100Px 50px;
  }



  .bottom_of_cart {
    position: absolute;
    right: 300px;
    left: 300px;
  }
}
</style>
