<template>
  <div class="details">
      <h2>La prestations en détail.</h2>
      <p @click="cocktails = !cocktails">fermé</p>
                  <div class="details_group">
                      <h3>Buffets déposés</h3>
                  </div>
                  <div class="group">
                      <div class="title_group" @click="apero = !apero">
                          <p>L'apéro</p>
                         <div class="price_content">
                              <p>8€/pers </p>
                              <p class="plus" :class="{ plus_open : apero}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="apero">
                          <p>Assortiment de charcuteries artisanales et fromages affinés du moment</p>
                      </div>
                      <div class="title_group" @click="bBasque = !bBasque">
                          <p>Buffet Basque</p>
                          <div class="price_content">
                              <p>15	€/pers </p>
                              <p class="plus" :class="{ plus_open : bBasque}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="bBasque">
                          <p><strong>Amuses bouches :</strong> <br>
                          tartelette de boudin au piment d’espelette et confits d’oignons <br>
                            tortilla au chorizo <br>
                            pintxo piperade et txistorra <br>
                            pintxo de filet de thon et poivrons grillees </p>
                            <p><strong>Charcuteries :</strong> <br> jambon de bayonne de la ferme elizaldia <br>
                            lomo seché au piment d’espelette <br>
                            coppa basque <br>
                            Guindillas </p>
                            <p><strong>Fromages :</strong> <br>
                            tomme de vache au lait cru de la fromagerie des aldudes <br>
                            ossau-iraty fermier de la ferme ekiola <br>
                            cremeux de brebis de la fromagerie des aldudes <br>
                            confiture de cerise</p>
                      </div>
                      <div class="title_group" @click="bFrance = !bFrance">
                          <p>Buffet Français</p>
                          <div class="price_content">
                              <p>15	€/pers </p>
                              <p class="plus" :class="{ plus_open : bFrance}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="bFrance">
                          <p><strong>Amuses-bouches : </strong> <br>
                        Biscuit sablé cantaloup <br>
                        Navette fromage frais de brebis ciboulette et truite de la ferme du ciron fumée <br>
                        Mini burger magret seché basque foie gras mi-cuit et confit d’oignons <br>
                        Navette bleu d’auvergne, poire pochée et noix</p>
                        <p><strong>Charcuteries : </strong><br>
                        Jambon de cochon fermier 12 mois laborie <br>
                        Saucisse seche du haut mont <br>
                        Terrine de campagne <br>
                        Cornichons</p>
                        <p><strong>Fromages : </strong><br>
                        Comte de chez vagne <br>
                        Cantal affinage entre deux <br>
                        Saint nectaire fermier <br>
                        Noix du perigord </p>
                      </div>
                  </div>
                   <div class="details_group">
                      <h3>Coktails avec service</h3>
                  </div>
                  <div class="group">
                      <div class="title_group" @click="cBasque = !cBasque">
                          <p>Cocktails Basque</p>
                          <div class="price_content">
                              <p>25	€/pers </p>
                              <p class="plus" :class="{ plus_open : cBasque}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="cBasque">
                          <p><strong>Amuses bouches :</strong> <br>
                          tartelette de boudin au piment d’espelette et confits d’oignons <br>
                            tortilla au chorizo <br>
                            pintxo piperade et txistorra <br>
                            pintxo de filet de thon et poivrons grillees <br>
                            Cassolette d’axoa de veau <br>
                            Cassolette de txistora deglacée au vinaigre de cidre et pommes de terre <br>
                            Cabillaud en croute de chorizo </p>
                            <p><strong>Charcuteries :</strong> <br> 
                            jambon de bayonne de la ferme elizaldia <br>
                            lomo seché au piment d’espelette <br>
                            coppa basque <br>
                            Guindillas </p>
                            <p><strong>Fromages :</strong> <br>
                            tomme de vache au lait cru de la fromagerie des aldudes <br>
                            ossau-iraty fermier de la ferme ekiola <br>
                            cremeux de brebis de la fromagerie des aldudes <br>
                            confiture de cerise </p>
                            <p><strong>Desserts :</strong> <br>
                            Mini gâteau basque <br>
                            Mini flans basque (koka)  </p>
                      </div>
                      <div class="title_group" @click="cFrance = !cFrance">
                          <p>Cocktails Français</p>
                          <div class="price_content">
                              <p>25	€/pers </p>
                              <p class="plus" :class="{ plus_open : cFrance}">+</p>
                          </div>
                      </div>
                      <div class="content_group" v-if="cFrance">
                          <p><strong>Amuses-bouches : </strong> <br>
                        Biscuit sablé cantaloup <br>
                        Navette fromage frais de brebis ciboulette et truite de la ferme du ciron fumée <br>
                        Mini burger magret seché basque foie gras mi-cuit et confit d’oignons <br>
                        Navette bleu d’auvergne, poire pochée et noix <br>
                        Crémeux de vache roti et ventreche grillée <br>
                        Croque monsieur à la truffe <br>
                        Parmentier de canard gratiné</p>
                        <p><strong>Charcuteries : </strong><br>
                        Jambon de cochon fermier 12 mois laborie <br>
                        Saucisse seche du haut mont <br>
                        Terrine de campagne <br>
                        Cornichons </p>
                        <p><strong>Fromages : </strong><br>
                        Comte de chez vagne <br>
                        Cantal affinage entre deux <br>
                        Saint nectaire fermier <br>
                        Noix du perigord </p>
                        <p><strong>Desserts : </strong><br>
                        Cannelés <br>
                        Moelleux au chocolat </p>
                      </div>
                  </div>
              </div>
</template>

<script>
export default { 
    data() {
        return {
            plus: true,
            plus_1: false,
            plus_2: false,
            plus_3: false,
            active_devis: false,
            apero: true,
            bBasque: false,
            bFrance: false,
            cBasque: false,
            cFrance: false,
            cocktails: true, 
        }
    },
    methods: {
        openContent() {
            this.plus = !this.plus
        },
        openContent_1() {
            this.plus_1 = !this.plus_1
        },
         openContent_2() {
            this.plus_2 = !this.plus_2
        },
         openContent_3() {
            this.plus_3 = !this.plus_3
        },
        
    },

}
</script>

<style>



a {
    text-decoration: none; 
}


.color {
    fill: var(--orange)!important;
}

.rotate {
    transform: rotate(45deg);
    fill: var(--orange)!;
    transition: .3s all; 
    z-index: 20;
}

.title_color {
    color: var(--orange)!important;
}

.plus {
    font-size: 24px;
    color: var(--orange);
    margin-top: 2px;
    margin-left: 5px;
    transition: all .4s ease-in-out;
}



.plus_open {
    font-size: 24px;
    color: white;
    transform: rotate(45deg)!important;
    margin-top: 2px;
    margin-left: 5px;
}



/* CONTENT */

















.details {
    background-color: var(--black);
    padding: 100px 10px;
    margin-top: 10px;
    width: 100%;
     position: fixed; 
    inset: 0; 
    z-index: 2;
    overflow-y: scroll;
}

.details h2 {
    color: var(--white);
}

.details_group {
    display: flex; 
    margin-top: 10px; 
    font-size: 18px;
    color: white; 
    justify-content: space-between;
    align-items: center; 
}

.details_group h3 {
    color: white; 
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 15px;
}

.title_group {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    color: var(--orange);
    font-weight: bold; 
    font-size: 14px;
}

strong {
    font-family: bodyBold, sans-serif; 
}

.content_group {
    margin-top: 5px;
    color: white;
    font-size: 14px;
    line-height: 26px;
    margin-top: 5px;
}

.content_group p {
    line-height: 26px;
    margin-bottom: 10px;
    margin-top: 5px;
}

.devis_mobile {
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    position: fixed;
    z-index: 20;
    overflow: scroll;
}

.intro {
    background-color: var(--orange);
    padding: 15px 20px;
    display: flex; 
    flex-flow: row; 
    justify-content: space-between; 
    align-items: center;
}

.fleche_bottom {
    transform: rotate(-90deg);
    transition: .6s all; 
}

.fleche_top{
    transform: rotate(90deg);
}

.intro p {
    color: white;
    font-weight: bold;
    font-size: 18px;
    background-color: var(--orange);
}

.title_block_content h2 {
    font-family: bebas-neue-pro, sans-serif; 
    font-size: 32px;
    font-weight: bold; 
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--orange);
    text-transform: uppercase; 
    text-align: left;
}


.title_block_content p {
    color: var(--black);
    line-height: 22px;
    text-align: left;
}

.price_content {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
}

@media screen and (min-width: 768px){
     .details {
    background-color: var(--gray);
    padding: 100px 10px;
    margin-top: 10px;
    width: 50%;
    left: 0;
    bottom: 0;
     position: fixed; 
    z-index: 2;
    overflow-y: scroll;
}
}

@media screen and (min-width: 1024px){
  
 .details {
    background-color: var(--gray);
    padding: 100px 10px;
    margin-top: 10px;

    left: 0;
    bottom: 0;
     position: fixed; 
    z-index: 2;
    overflow-y: scroll;
}
  
}

@media screen and (min-width: 1440px){
    .details {
    background-color: var(--gray);
    padding: 100px 10px;
    margin-top: 10px;
 
    left: 0;
    bottom: 0;
     position: fixed; 
    z-index: 2;
    overflow-y: scroll;
}


    
}

</style>