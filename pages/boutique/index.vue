<template>
  <main>

    <HeroBoutique />
    <div class="categories" id="categorie">
      <p>Nos produits par catégories</p>
      <div class="box_categories">
        <div
          class="item_categorie"
          @click=";(viande = true), (fromages = false), (charcuterie = false)"
          :class="{ active_categorie: viande }"
        >
          <img src="~assets/img/svg/viandes.svg" alt="" />
          <p>Viandes</p>
        </div>
        <div
          class="item_categorie"
          :class="{ active_categorie: charcuterie }"
          @click=";(viande = false), (charcuterie = true), (fromages = false)"
        >
          <img src="~assets/img/svg/charcuteries.svg" alt="" />
          <p>Charcuteries</p>
        </div>
        <div
          class="item_categorie"
          :class="{ active_categorie: fromages }"
          @click=";(viande = false), (charcuterie = false), (fromages = true)"
        >
          <img src="~assets/img/svg/fromages.svg" alt="" />
          <p>Fromages</p>
        </div>
      </div>
    </div>
    <div class="cards_products">


      <div class="box_products" v-if="charcuterie">
        <div class="product" v-for="product in products" :key="product.id" >
          <div class="infos_product">
            <div class="map">
              <img src="~assets/img/svg/mapboutique.svg" alt="" />
              <p>{{product.name}}</p>
            </div>
            <div class="weight">
              <p>{{product.weight}}</p>
            </div>
          </div>
          <div class="title_product">
            <p>{{product.product}}</p>
          </div>
          <hr />
          <div class="infos_price">
            <div class="quantite">
              <p @click="removeQuantity(product.id)" :class="{ opacity : product.quantity < 2 }">-</p>
              <p>{{product.quantity}}</p>
              <p @click="addProductQuantity(product.id)">+</p>
            </div>
            <div class="price">
                <p>{{product.price |  currency('')}} €</p>
            </div>
          </div>
          <hr>
          <div class="cta_product" @click="addOne(product)">
            
              <p>Ajouter au panier</p>
          </div>
        </div>
      </div>

      <div class="box_products" v-if="viande">
        <div class="product" v-for="product in productsViande" :key="product.id" >
          <div class="infos_product">
            <div class="map">
              <img src="~assets/img/svg/mapboutique.svg" alt="" />
              <p>{{product.name}}</p>
            </div>
            <div class="weight">
              <p>{{product.weight}}</p>
            </div>
          </div>
          <div class="title_product">
            <p>{{product.product}}</p>
          </div>
          <hr />
          <div class="infos_price">
            <div class="quantite">
              <p @click="removeQuantityV(product.id)" :class="{ opacity : product.quantity < 2 }">-</p>
              <p>{{product.quantity}}</p>
              <p @click="addProductQuantityV(product.id)">+</p>
            </div>
            <div class="price">
                <p>{{product.price |  currency('')}} €</p>
            </div>
          </div>
          <hr>
          <div class="cta_product" @click="addOne(product)">
              <p>Ajouter au panier</p>
          </div>
        </div>
      </div>


       <div class="box_products" v-if="fromages">
        <div class="product" v-for="product in productsFromages" :key="product.id" >
          <div class="infos_product">
            <div class="map">
              <img src="~assets/img/svg/mapboutique.svg" alt="" />
              <p>{{product.name}}</p>
            </div>
            <div class="weight">
              <p>{{product.weight}}</p>
            </div>
          </div>
          <div class="title_product">
            <p>{{product.product}}</p>
          </div>
          <hr />
          <div class="infos_price">
            <div class="quantite">
              <p @click="removeQuantityF(product.id)" :class="{ opacity : product.quantity < 2 }">-</p>
              <p>{{product.quantity}}</p>
              <p @click="addProductQuantityF(product.id)">+</p>
            </div>
            <div class="price">
                <p>{{product.price |  currency('')}} €</p>
            </div>
          </div>
          <hr>
          <div class="cta_product" @click="addOne(product)">
              <p>Ajouter au panier</p>
          </div>
        </div>
      </div>
    </div>
    <Newsletter/>
  </main>
</template>

<script>
import HeroBoutique from '../../components/boutique/HeroBoutique'
import Newsletter from '../../components/default/Newsletter'
import { mapMutations } from 'vuex';
import Vue2Filters from 'vue2-filters'


export default {
head: {
    title: "Produits de terroir Bordeaux | MyTerroir",
    meta: [
      {
        hid: 'Produits de terroir Bordeaux | MyTerroir',
        name: 'Produits de terroir Bordeaux | MyTerroir',
        content: "Retrouvez la liste de nos produits de terroir que nous avons spécialement sélectionné pour vous. Charcuteries, viandes, fromages il y en a pour tous les gôuts.",
        keywords: "Producteurs, Bordeaux, Producteurs-Bordeaux, Boutique, boutique, Produits de terroir, charcuterie, charcuteries, fromage, fromages, viandes, viande, brasero, plancha, mariages, cocktails, buffets, repas"
      }
    ],
  },
  
  components: {
    HeroBoutique,
    Newsletter
  },
  data() {
    return {
      viande: true,
      charcuterie: false,
      fromages: false,
      // products: [],
    }
  },
  mixins: [Vue2Filters.mixin],
  computed: {
    products() {
      return this.$store.state.charcuterie.datas
    },
    productsFromages() {
      return this.$store.state.fromages.datas
    },
    productsViande() {
      return this.$store.state.viande.datas
    },

  },
  methods: {
    ...mapMutations('cart', ['addOne']),
     ...mapMutations('charcuterie', ['addProductQuantity']),
     ...mapMutations('fromages', ['addProductQuantityF']),
     ...mapMutations('viande', ['addProductQuantityV']),
    ...mapMutations('charcuterie', ['removeQuantity']),
    ...mapMutations('fromages', ['removeQuantityF']),
    ...mapMutations('viande', ['removeQuantityV']),

 
  }
}
</script>

<style scoped>
.categories {


  flex-flow: row nowrap;
  overflow: scroll;
  background-color: var(--white);
  padding: 10px 20px 10px 20px;
}

.opacity {
    color: rgb(173, 173, 173);
    pointer-events: none; 

}

.categories p:nth-child(1) {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: bodyBold, sans-serif;
}

.box_categories {
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll !important;
  width: 100%;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 20px;
  height: 100%;
}

.item_categorie {
  padding: 5px 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 1px solid var(--gray);
  cursor: pointer;
}

.item_categorie img {
  width: 40px;
}

.item_categorie p {
  font-family: bodyBold, sans-serif;
  margin-bottom: 0;
  font-size: 11px;
  width: 100px;
  text-align: center;
}

.active_categorie {
  background-color: var(--beige);
  border: none;
  color: var(--white);
  font-family: bodyBold !important;
}

.cards_products {
  padding: 20px 15px 50px 15px;
}

.box_products {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.product {
  width: 100%;
  border: 1px solid rgb(245, 245, 245);
  padding: 20px;
  box-shadow: 0 0 5px rgb(230, 230, 230);
  margin-bottom: 20px;
}

.infos_product {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
}

.map {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 2px;
}

.map img {
  width: 15px;
  margin-right: 10px;
}

.map p {
  color: var(--orange);
  font-size: 11px;
  font-family: bodyBold, sans-serif;
}

.weight {
  background-color: rgb(253, 240, 234);
  padding: 4px 10px;
}

.weight p {
  font-size: 12px;
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

.title_product {
  margin-top: 15px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
  font-size: 17px;
  line-height: 24px;
}

.infos_price {
    display: flex; 
    justify-content: space-between;
    margin-top: 20px;
    align-items: flex-end;
}

.quantite {
    display: flex; 
    width: 90px; 
    justify-content: space-between; 
    cursor: pointer;
    font-family: body, sans-serif; 
    color: var(--black);
}

.quantite p {
    font-size: 18px;
    font-family: bodyBold, sans-serif; 

}

.price p {
    font-size: 26px; 
    font-family: title, sans-serif; 
    color: var(--black)
}

.price p::after {
    content: 'ttc';
    font-size: 12px;
    margin-left: 10px;
}

hr {
  border: none; 
  background-color: rgb(223, 223, 223);
  width: 100%; 
  height: 1Px;
  margin-top: 20px;
  
}

.cta_product {
    background-color: var(--orange);
    width: 100%;
    padding: 10px;
    font-size: 14px;
    margin-top: 20px;
    text-align: center; 
    cursor: pointer;
}

.cta_product p {
    color: var(--white); 
    font-family: bodyBold, sans-serif; 
}

@media screen and (min-width: 767px) {
  .product {
    width: 300px;
    margin: 10px 20px 10px 20px;
  }

  .title_product {
    height: 100px;
  }

  .box_products {
      margin: auto; 
      max-width: 700px;
      justify-content: flex-start;
  }
}
@media screen and (min-width: 1024px) {
  .box_search {
    display: flex;
    flex-flow: column;
    padding: 100px 150px 1000px 150px;
    background-color: var(--orange);
    position: sticky;
    top: 60px;
  }

  .categories {
    position: sticky;
    width: 100%;
    top: 50px;
    background-color: var(--white);
    padding: 30px 90px;
  }


  .box_products {
      margin: auto; 
      max-width: 1440px;
      justify-content: flex-start;
  }

  .categories p:nth-child(1) {
    margin-bottom: 10px;
    font-family: bodyBold, sans-serif;
  }

  .box_categories {
    position: sticky;
    top: 100px;
  }
  .item_categorie {
    width: 300px;
  }

  .card {
    width: 350px;

    margin: 0 40px 0 0;
  }

  .cards_producteurs_viande {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 50px;
  }

  .box_products {
      margin: auto; 
      justify-content: flex-start;
  }

  .title_product {
      height: 80px;
  }

  .product {
  width: 260px;
  border: 1px solid rgb(245, 245, 245);
  padding: 20px;
  margin-right: 20px;
  box-shadow: 0 0 5px rgb(230, 230, 230);
  margin-bottom: 20px;
}

.cards_products {
  padding: 30px 50px 30px 50px;
  margin: auto;
}

@media screen and (min-width: 1440px) {
  .product {
    width: 290px;
  }
}
}
</style>
