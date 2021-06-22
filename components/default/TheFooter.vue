<template>
  <footer class="footer">
    <div class="block_footer">
      <div class="content_footer">
        <div class="logo_footer">
          <img src="~assets/img/svg/logo_mt.svg" alt="" />
          <p>
            Distributeur de produits authentiques pour professionnels et
            particuliers .
          </p>
          <div class="icons_sociaux_mobile">
                <a href="https://fr-fr.facebook.com/myterroir/" target="_blank"><img src="~assets/img/svg/facebook.svg" alt="" /></a>
                <a href="https://www.instagram.com/myterroir/?hl=fr" target="_blank"><img src="~assets/img/svg/instagram.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/myterroir/?originalSubdomain=fr" target="_blank"><img src="~assets/img/svg/linkedin.svg" alt="" /></a>
          </div>
        </div>
        <hr class="hr_items" />
        <div class="items_footer">
          <div class="item">
            <div class="title_item">
              <p>Plan du site</p>
            </div>
            <div class="content_item">
              <nuxt-link to="/traiteur"><p>Traiteur</p></nuxt-link>
              <nuxt-link to="/producteurs"><p>Producteurs</p></nuxt-link>
              <nuxt-link to="/blog"><p>Blog</p></nuxt-link>
              <nuxt-link to="/boutique"><p>Boutique</p></nuxt-link>
            </div>
          </div>
          <div class="item">
            <div class="title_item">
              <p>Contact</p>
            </div>
            <div class="content_item">
              <a href="tel:+33754827676"><p>+33 (0)7 54 82 76 76</p></a>
              <a
                href="mailto:contact@my-terroir.fr?subject=Demande de contact site web."
                ><p>contact@my-terroir.fr</p></a
              >
              <a
                href="https://ul.waze.com/ul?place=Ei00ODIgUnVlIGR1IENvdXJkb3VuZXksIDMzMTQwIENhZGF1amFjLCBGcmFuY2UiURJPCjQKMgljQ41WnSFVDREmH0OhPx9VCRoeCxDuwe6hARoUChIJ7WD-BTghVQ0R0IivkRplBhwMEOIDKhQKEglz1V5xeCFVDRGm2dFzEAWfJg&ll=44.73625560%2C-0.53585240&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location"
                ><p>
                  482 rue du Courdonney <br />
                  33140 Cadaujac
                </p></a
                
              >
              <p>du Lundi au Vendredi <br> de 9h à 18h</p>
            </div>
          </div>
          <div class="item">
            <div class="title_item">
              <p>Légales</p>
            </div>
            <div class="content_item">
              <nuxt-link to="/mentions-legales"
                ><p>Mentions légales</p></nuxt-link
              >
              <nuxt-link to="/politique-confidentialite"
                ><p>Politique de confidentialité</p></nuxt-link
              >
              <nuxt-link to="/conditions-generales-ventes"
                ><p>Conditions générales de ventes</p></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="copyright_footer">
        <div class="picto_bancaire">
          <div class="picto">
            <img src="~assets/img/png/logo_cb.jpeg" alt="" />
            <img src="~assets/img/png/visa_logo.png" alt="" />
            <img src="~assets/img/png/logo_mastercard.png" alt="" />
          </div>
          <div class="icons_sociaux_desktop">
                <a href="https://fr-fr.facebook.com/myterroir/" target="_blank"><img src="~assets/img/svg/facebook.svg" alt="" /></a>
                <a href="https://www.instagram.com/myterroir/?hl=fr" target="_blank"><img src="~assets/img/svg/instagram.svg" alt="" /></a>
                <a href="https://www.linkedin.com/company/myterroir/?originalSubdomain=fr" target="_blank"><img src="~assets/img/svg/linkedin.svg" alt="" /></a>
          </div>
        </div>
        <hr class="hr_copyright" />
        <div class="infos_copyright">
          <p>©2021 - My Terroir</p>
          <p>Charte graphique <a href="https://noemiepulido-graphiste.com" target="_blank">Noémie PULIDO</a>. Développement <a href="https://rouxnicolas.fr" target="_blank"> Nicolas ROUX</a>.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--white);
}
.footer {
  background-color: var(--black);
  padding: 20px 15px;
  display: flex;
  flex-flow: column;
}

.content_footer {
  color: var(--white);
}

.logo_footer img {
  width: 100px;
}

.logo_footer p {
  width: 230px;
  color: rgb(153, 153, 153);
  line-height: 26px;
  font-size: 14px;
  margin: 20px 0;
}

.hr_items {
  width: 100%;
  border: none;
  background-color: rgb(192, 192, 192);
  height: 1px;
  border-radius: 4px;
}

.items_footer {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-top: 30px;
}

.item {
  width: 160px;
  margin-bottom: 50px;
}

.title_item p {
  font-size: 14px;
  text-transform: uppercase;
  font-family: bodyBold, sans-serif;
}


.content_item {
  font-size: 14px;
  margin-top: 10px;
}

.content_item p {
  margin-top: 10px;
  opacity: 0.6;
  transition: all 0.3s;
}

.content_item p:hover {
  opacity: 1;
}

.hr_copyright {
  width: 100%;
  border: none;
  background-color: rgb(192, 192, 192);
  height: 1px;
  border-radius: 4px;
}

.picto {
  display: flex;
  margin-bottom: 20px;
}

.picto img {
  width: 40px;
  margin-right: 5px;
}

.infos_copyright {
  color: var(--white);
  display: flex;
  flex-flow: column;
  margin: 20px 0;
}

.icons_sociaux_mobile {
  display: flex; 
  margin-bottom: 10px;
}

.icons_sociaux_mobile img{
  width: 30px;
  margin-right: 10px;
}

.icons_sociaux_desktop {
    display: none; 
  }

.infos_copyright p {
  font-size: 14px;
  margin-bottom: 10px;
}

@media screen and (min-width: 768px) {

  .footer {
    padding: 50px 50px 0px 50px;

  }
  .item {
    width: 220px;
  }

  
}

@media screen and (min-width: 1024px) {
  .footer {
    padding: 50px 50px 0px 50px;
  }

  .picto_bancaire {
    display: flex; 
    justify-content: space-between;
  }

  .icons_sociaux_desktop {
    display: flex; 
  }

  .icons_sociaux_desktop img{
    width: 35px; 
    margin-right: 10px;
  }

  .block_footer {
        width: 90%;
    margin: auto;
  }
  .content_footer {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .hr_items {
    display: none;
  }

  .logo_footer {
    width: 250px;
  }

  .icons_sociaux_mobile {
    display: none; 
  }

  .item {
    width: 190px;
  }

  .infos_copyright {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}

@media screen and (min-width: 1440px) {
    .block_footer {
    max-width: 1640px;
    margin: auto;
  }

  .item {
    width: 300px;
  }
}
</style>
