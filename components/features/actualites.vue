<template>
  <section class="actualites">
    <div class="title_section">
      <h2>Nos dernières actualités</h2>
    </div>
    <div class="box_cards">
      <div class="cards">
        <div class="card">
          <img src="~assets/img/png/authentiques.jpg" alt="" />
          <div class="infos_card">
            <p>Le 31 mai 2021</p>
            <p>Par Stéphane E.</p>
          </div>
          <div class="title_card">
            <hr />
            <p>Le plaisir de se retrouver</p>
          </div>
          <div class="content_card">
            <p>
              Retour sur les prestations du weekend. Quel plaisir de pouvoir
              vous retrouver et de vous accompagner pour tous vos événements
            </p>
          </div>
        </div>
        <div class="card">
          <img src="~assets/img/png/authentiques.jpg" alt="" />
          <div class="infos_card">
            <p>Le 31 mai 2021</p>
            <p>Par Stéphane E.</p>
          </div>
          <div class="title_card">
            <hr />
            <p>Le plaisir de se retrouver</p>
          </div>
          <div class="content_card">
            <p>
              Retour sur les prestations du weekend. Quel plaisir de pouvoir
              vous retrouver et de vous accompagner pour tous vos événements
            </p>
          </div>
        </div>
        <div class="card">
          <img src="~assets/img/png/authentiques.jpg" alt="" />
          <div class="infos_card">
            <p>Le 31 mai 2021</p>
            <p>Par Stéphane E.</p>
          </div>
          <div class="title_card">
            <hr />
            <p>Le plaisir de se retrouver</p>
          </div>
          <div class="content_card">
            <p>
              Retour sur les prestations du weekend. Quel plaisir de pouvoir
              vous retrouver et de vous accompagner pour tous vos événements
            </p>
          </div>
        </div>
        
      </div>
    </div>
    <div class="cta_actualites">
       <nuxt-link to='/blog'>
      <button>
        Nos actualités
      </button>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.actualites {
  background-color: var(--gray);
  padding-bottom: 30px;
}

.title_section h2 {
  background-image: url('~assets/img/svg/tache.svg');
  background-size: 100%;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-3deg);
  color: var(--white);
  background-repeat: no-repeat;
}

.box_cards {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  margin-top: 50px;
}

.cards {
  display: flex;
  margin: auto; 
  justify-content: space-between;
}

.card {
  width: 300px;
  padding-bottom: 10px;
  margin-right: 20px;
  margin-left: 15px;
  background-color: var(--white);
  box-shadow: 10px 10px rgba(184, 184, 184, 0.082);
}

.card img {
  width: 100%;
  object-fit: cover;
}

.infos_card {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.infos_card p:nth-child(1) {
  color: #8b8b8b;
}

.infos_card p:nth-child(2) {
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

.infos_card p {
  font-size: 12px;
}

.title_card {
  display: flex;
  flex-flow: column-reverse;
  padding: 3px 10px 10px 10px;
}

.title_card hr {
  border: none;
  width: 20px;
  background-color: var(--orange);
  height: 2px;
  border-radius: 4px;
  margin-right: 5px;
}

.title_card p {
  font-size: 18px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
}

.content_card {
  padding: 10px 15px 10px 10px;
  font-size: 13px;
  line-height: 24px;
  color: var(--black);
}

.cta_actualites button {
  background-color: var(--orange);
  padding: 10px 48px;
  display: flex;
  margin: 40px auto;
  color: var(--white);
  cursor: pointer; 
  font-size: 16px;
  font-family: bodyBold;
  border: none;
  transition: all .3s; 
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
}

.cta_actualites button:hover {
     box-shadow: 5px 5px rgba(0, 0, 0, 0.274);
   background-color: var(--black);
}

@media screen and (min-width: 1024px) {
    .title_section h2 {
  font-size: 28px;
      background-size: 100%;
      width: 600px;
      height: 100px;
      margin-left: 50px;
      margin-bottom: 90px;
}

.card {
    margin-right: 30px;
    width: 400px;
}
}
</style>
