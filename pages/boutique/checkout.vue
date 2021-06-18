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
          <!-- <div class="check">
            <input type="checkbox" required checked />
            <p>
              En cochant cette case vous accepter que les informations fournies
              soient utilisées pour vous contacter suite à votre commande.
            </p>
          </div> -->
          <cart-checkout />
           <div class="cta_cart">
                <nuxt-link to="/boutique">Retour</nuxt-link>
                <button  @click="sendCart()"> Confirmer</button>
            </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import cartCheckout from '../../components/boutique/cartCheckout'
import {mapActions} from 'vuex'
export default {
  components: {
    cartCheckout
  },
  data() {
    return {
      retrait: true,
      livraison: false,
      form: {
          name: '',
          email: '',
          phone: '',
          promo: '',
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1200)
    })
  },
  methods: {
    submit(e) {
      e.preventDefault()
      console.log({ ...this.form, ...this.carts })
      this.$axios
        .post('http://localhost:4330/send', { ...this.form })
        .then((res) => (this.form = ''))
        .catch(e)
      this.error = true
    },
    ...mapActions('cart', ['sendCart']),

  },
  computed: {
        carts() {
            return this.$store.state.cart.datas
        },
  }
}
</script>

<style scoped>
.recapitulatif {
  padding: 100px 15px 20px 15px;
  background-color: var(--gray);
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
  margin: 20px 0px;
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
  font-size: 14px;
  margin-top: 10px;
}

.port_livraison ul {
    margin-top: 10px;
    margin-bottom: 10px;
}

.port_livraison ul li {
  color: var(--orange);
    font-size: 14px;
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
    padding: 15px 2px;
    font-family: bodyBold, sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
}

.cta_cart button  {
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

@media screen and (min-width: 1024px) {
  main {
    margin: 0 300px;
  }

  .bottom_of_cart {
    position: absolute;
    right: 300px;
    left: 300px;
  }
}
</style>
