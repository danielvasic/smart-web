<template>
  <v-app>
    <v-app-bar fixed app elevation="0" color="primary" height="70px">
      <img
        alt="Smart Campus Logo"
        src="/logo.svg"
        height="50px"
        class="ml-5"
      >
      <v-spacer />
      <v-btn text color="white">
        O PROJEKTU
      </v-btn>
      <v-btn text color="white">
        PAMETNA RJEŠENAJA
      </v-btn>
      <v-btn text color="white">
        NOVOSTI
      </v-btn>
      <v-btn text color="white">
        <v-icon left dark>
          mdi-web
        </v-icon>
        HR
        <v-icon right dark>
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-img align="top" src="cover.png" width="100%" height="400px" style="margin-top:70px" class="d-flex align-end">
      <div class="ma-5">
        <h1 class="primary--text">Smart Campus</h1>
        <span class="blue-line"></span>
        <p class="primary--text" style="font-weight:300; width: 450px; font-size:20px">Projekt u suradnji Sveučilišta u Mostaru, Ericsson Nikola Tesla i HT Eroneta</p>
      </div>
    </v-img>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <div align="center">
              <h1 class="primary--text">O PROJEKTU</h1>
              <span class="blue-line"></span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex">
            <div class="d-flex flex-column align-center justify-center" height="100%">
              <v-btn
                class="ma-2"
                outlined
                fab
                small
                color="primary"
                @click="nextSlide"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
              <v-btn
                class="ma-2"
                outlined
                fab
                small
                color="primary"
                @click="prevSlide"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </div>
            <v-slide-group
              v-model="model"
              active-class="active-card"
              disable-arrows
            >
              <template v-slot:prev>
                <div></div>
              </template>
              <v-slide-item
                v-for="item in items"
                :key="item.key"
                v-slot="{active, toggle}"
              >
                <v-card class="ma-4 rounded-xl" width="494" height="250" @click="setActive(item.key)">
                  <v-card-title class="d-flex justify-space-between">
                    <h2 class="primary--text" style="display:inline-block; width:55%; word-break: normal">{{item.title}}</h2>
                    <v-icon large>{{item.icon}}</v-icon>
                  </v-card-title>
                  <v-card-text>{{item.text}}</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      outlined
                      rounded
                      small
                      width="100px"
                      @click="dialog=true"
                    >
                      Više
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
        <v-row class="p-0 m-0">
          <v-col class="pa-0 ma-0">
            <div align="center">
              <h1 class="primary--text">PAMETNA RJEŠENJA</h1>
              <span class="blue-line"></span>
            </div>
            <v-img v-for="solution in smartSolutions" :key="solution.key" :src=solution.background cover width="100%" v-bind:style= "[solution.position=='left' ? {'margin-left':'45px'} : {'margin-left':'-45px'}]" style=" margin-top:70px; overflow:visible">
              <v-row>
                <v-col v-if="solution.position=='left'" cols="12" md="4"> 
                  <img
                    :alt=solution.title
                    :src=solution.image
                    style="margin-left:-50px;margin-top:-30px"
                  >
                </v-col>
                <v-col cols="1" v-if="solution.position=='right'"></v-col>
                <v-col cols="12" md="7" class="pa-5" v-bind:style= "[solution.position=='left' ? {'margin-left':'45px'} : '']">
                  <div fill-height class="d-flex flex-column justify-space-between"> 
                    <h1 class="white--text">{{solution.title}}</h1>
                    <span class="blue-line"></span>
                    <p class="white--text mt-5" style="font-weight:200">{{solution.text}}</p>
                    <div class="d-flex flex-row-reverse align-end">
                      <v-btn
                        outlined
                        dark
                      >
                      <v-icon left dark>
                        mdi-information-outline
                      </v-icon>
                        Tehnički detalji
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col v-if="solution.position=='right'" cols="12" md="4"> 
                  <img
                    :alt=solution.title
                    :src=solution.image
                    style="margin-right:-100px;margin-top:-30px"
                  >
                </v-col>
              </v-row>
             </v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-0 pa-0">
            <div align="center" class="mt-5">
              <h1 class="primary--text">SMART CAMPUS U BROJKAMA</h1>
              <span class="blue-line"></span>
            </div>
            <v-img src="numbers.png" cover height="271px" class="mt-5">
              <v-container fluid fill-height class="grow d-flex flex-column flex-nowrap">
              <v-row>
              <v-col class="d-flex align-center flex-column justify-center">
                <v-icon style="font-size:75px" dark>
                  mdi-car
                </v-icon>
                <h1 class="white--text">50 000+</h1>
                <p class="white--text" style="font-weight:200">detektiranih promjena na parkingu</p>
              </v-col>
              <v-col class="d-flex align-center flex-column justify-center">
                <v-icon style="font-size:75px" dark>
                  mdi-account-group
                </v-icon>
                <h1 class="white--text">100 000+</h1>
                <p class="white--text" style="font-weight:200">detektiranih osoba na kamerama</p>
              </v-col>
              <v-col class="d-flex align-center flex-column justify-center">
                <v-icon style="font-size:75px" dark>
                 mdi-weather-snowy-rainy
                </v-icon>
                <h1 class="white--text">25 000+</h1>
                <p class="white--text" style="font-weight:200">zapisa o vremenskim uvjetima na kampusu</p>
              </v-col>
              <v-col class="d-flex align-center flex-column justify-center">
                <v-icon style="font-size:75px" dark>
                  mdi-camera
                </v-icon>
                <h1 class="white--text">800+</h1>
                <p class="white--text" style="font-weight:200">mogućnosti detektiranja objekata na 4 pametne kamere</p>
              </v-col>
              </v-row>
              </v-container>
            </v-img>

            <v-row>
              <v-col>
                <div align="center" class="mt-5">
                  <h1 class="primary--text">NOVOSTI</h1>
                  <span class="blue-line"></span>
                </div>
                <News />
              </v-col>
            </v-row>

            <v-img src="footer-bg.png" cover height="238px" class="mt-5">
              <v-container fluid fill-height class="grow d-flex">
              <v-row>
                <v-col class="d-flex align-center flex-column justify-center">
                  <img src="logo.svg" />
                </v-col>
                <v-col class="d-flex flex-column justify-start">
                  <h3 class="white--text">Korisne poveznice</h3>
                  <span class="blue-line"></span>
                  <ul class="mt-5" style="list-style-type:none; padding:0; margin:0">
                    <li><a style="text-decoration:none" class="white--text" href="https://sum.ba/">Sveučilište u Mostaru</a></li>
                    <li><a style="text-decoration:none"  class="white--text" href="https://sumit.sum.ba/">Centar za informacijske tehnologije Sveučilišta u Mostaru</a></li>
                    <li><a style="text-decoration:none"  class="white--text" href="https://ericsson.hr/">Ericsson Nikola Tesla</a></li>
                    <li><a style="text-decoration:none"  class="white--text" href="https://hteronet.ba/">HT Eronet</a></li>
                  </ul>
                </v-col>
                <v-col class="d-flex flex-column justify-start">
                  <h3 class="white--text">Sponzori</h3>
                  <span class="blue-line"></span>
                  <img class="mt-5 w-100" src="sponsors.svg" />
                </v-col>
              </v-row>
              </v-container>
            </v-img>
            <v-row style="background-color:#3F3F3F">
              <v-col class="d-flex align-center justify-space-between">
                <p class="white--text pa-0 ma-0 mt-3 ml-3" style="font-weight:200">Smart Campus</p>
                <p class="white--text pa-0 ma-0 mt-3 mr-3" style="font-weight:200">Razvoj i oblikovanje SUMIT 2022</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-dialog
      v-model="dialog"
      width="700"
    >
      
      <v-card>
        <v-img fit align="left" :src=this.activeItem.image width="100%" height="400px" class="d-flex align-end">
          <v-card-title class="grey lighten-2 primary--text">
            {{this.activeItem.title}}
          </v-card-title>
        </v-img>


        <v-card-text class="mt-5">
          {{this.activeItem.largeText}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            outlined
            rounded
            small
            @click="dialog = false"
          >
            Zatvori
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
  
</template>

<script>
import News from "../components/News.vue"
export default {
  name: 'DefaultLayout',
  components: {
    News
  },
  data () {
    return {
      model: 0,
      dialog: false,
      news: [],
      currentNews: 0,
      smartSolutions: [
        {
          key: 0,
          position: "left",
          image: "leo.png",
          background: "leo-bg.png",
          title: "Leo rover",
          text: "Leo Rover je stabilan mobilni robot kojeg možete postaviti na otvorenom jer je vodootporan i dovoljno čvrst za ekstremno okruženje. Leo rover je pokretni robot kojim se upravlja preko LTE mreže HT Eroneta, a ova platforma ima mogućnost proširivanja različitim senzorima i omogućava razvoj raznih korisničkih slučajeva za primjenu u konkretnim poslovnim sustavima. "
        },
        {
          key: 1,
          position: "right",
          image: "sprinkler.png",
          background: "sprinkler-bg.png",
          title: "Pametno zalijevanje zelenih površina",
          text: "U sklopu Smart Campus projekta implementiran je sustav za praćenje količine vlage u tlu korištenjem Watermark 200SS senzora. Na osnovu podataka sa senzora uz pomoć Arduino Uno pločice koja preko interneta šalje podatke na poslužitelj te regulira dotok vode na zelene površine kampus. U sklopu Smart Kiosk rješenja sustav automatski prepoznaje trenutak paljenja prskalica te sukladno tome prikazuje odgovarajuću poruku."
        },
        {
          key: 2,
          position: "left",
          image: "kiosk-1.png",
          background: "kiosk.png",
          title: "Pametni kiosk",
          text: "Pametni kiosk je koncept gdje studenti mogu dobiti informacije o događajima na Sveučilištu u Mostaru. Na pametni kiosk postavljeno je LED osvjetljenje koje se upravlja korištenjem releja i Raspberry PI računala. Pored osvjetljenja bočnih panela postavljeno je i LED osvjetljenju u boji duž ruba krova koje te pored signala za paljenje i gašenje programski se može upravljati bojama i načinom osvjetljavanja LED trakama koje se nalaze fiksirane duž cijelog kioska."
        },
        {
          key: 3,
          position: "right",
          image: "meteo.png",
          background: "meteo-bg.png",
          title: "Meteorološka stanica",
          text: "U sklopu projekta postavljena je i Davis Instruments meteorološka stanica Vintage Vue Pro. Meteorološka stanica prikuplja podatke o temperaturi, vlagi, smjeru vjertra količini padailna i brojne druge podatke. Ova meteorološka stanica postavljena je 26.10.2019. i od tada kontinuirano u intervalima od 15 minuta prati navedene podatke. Podaci sa senzora za pametno zalijevanje se koriste za prediktivni model koji na osnovu podataka s meteorološke stanice (temperatura, količina padalina, vlažnost zraka, itd.) automatski predviđa trenutak kada je potrebno zalijaveti zelene površine. "
        },
        {
          key: 4,
          position: "left",
          image: "parking.png",
          background: "parking-bg.png",
          title: "Pametni parking",
          text: "Projekt Smart parking, započeo je niz novih projekata s ciljem daljnjeg razvoja Smart Campus projekta. Parking sustav se sastoji od uređaja za detekciju zauzetosti parking mjesta koji u sebi imaju senzore. Implementaciju ugradnje senzora provodi tvrtka Ericsson Nikola Tesla. Na uređajima je omogućena preko mreže korištenjem tehnologije NB-IoT koju je za potrebe ovog projekta omogućio HT Eronet."
        },
        {
          key: 5,
          position: "right",
          image: "ramp.png",
          background: "ramp-bg.png",
          title: "Pametna rampa i kamere",
          text: "Sveučilište u Mostaru je pokriveno pametnim kamerama za nadzor gdje se na osnovu RTMP podataka s kamera u stvarnom vremenu prikupljaju i obrađuju podaci. Svi podaci se u stvarnom vremenu pohranjuju u bazu podataka te distribuiraju sustavima koji imaju pristup tim podacima. Trenutno na sveučilištu postavljene su 3 pametne kamere koji mogu prepoznati i aktivno prate oko 900 objekata koje detektiraju i spašavaju na bazu podataka u oblaku koja te iste podatke šalje svim klijentima koji imaju pravo pristupa tim podacima."
        },
      ],
      items: [
        {
          key: 0,
          icon: 'mdi-parking',
          title: 'Arhitektura parking sustava',
          image: "smart_campus.4c25baa2.png",
          text: "Parking sustav se sastoji od uređaja za detekciju zauzetosti parking mjesta koji u sebi imaju senzore. Implementaciju ugradnje senzora provodi tvrtka Ericsson Nikola Tesla. Na uređajima je omogućena preko mreže korištenjem tehnologije NB-IoT.",
          largeText: "Parking sustav se sastoji od uređaja za detekciju zauzetosti parking mjesta koji u sebi imaju senzore. Implementaciju ugradnje senzora provodi tvrtka Ericsson Nikola Tesla. Na uređajima je omogućena preko mreže korištenjem tehnologije NB-IoT."
        },
        {
          key: 1,
          icon: 'mdi-school',
          title: 'Implementacija sustava',
          image: "smart.0e842725.png",
          text: "Izgradnja sustava započela je prvim projektom Smart parking kojeg su radili studenti. Studenti su imali mentore pri izradi projekta. Mentori su osobe iz IT Centar Sveučilišta u Mostaru i iz tvrtke Ericsson Nikola Tesla. Svaki sljedeći projekt koji je dio Smart Campusa bili su uključeni studenti.",
          largeText: "Izgradnja sustava započela je prvim projektom Smart parking kojeg su radili studenti. Studenti su imali mentore pri izradi projekta. Mentori su osobe iz IT Centar Sveučilišta u Mostaru i iz tvrtke Ericsson Nikola Tesla. Svaki sljedeći projekt koji je dio Smart Campusa bili su uključeni studenti."
        },
        {
          key: 2,
          icon: 'mdi-xml',
          title: 'Razvoj i testiranje novih rješenja',
          image: "smart_campus.4c25baa2.png",
          text: "Studentima je omogućeno programsko sučelje (API), preko kojeg će moći izraditi i testirati svoja vlastita rješenja. Tako će moći razvijati i testirati svoja rješenja, te samim time učiti koristiti najnovije tehnologije i biti konkurentiniji na tržištu rada.",
          largeText: "Studentima je omogućeno programsko sučelje (API), preko kojeg će moći izraditi i testirati svoja vlastita rješenja. Tako će moći razvijati i testirati svoja rješenja, te samim time učiti koristiti najnovije tehnologije i biti konkurentiniji na tržištu rada."
        },
        {
          key: 3,
          icon: 'mdi-human-greeting-variant',
          title: 'Sudjelovanje na projektu',
          image: "smart-home-2769210_1920.jpg",
          text: "Projekt Smart parking, započeo je niz novih projekata s ciljem daljnjeg razvoja Smart Campus projekta. Neki od tih projekata su automatsko prepoznavanje registracijskih oznaka, detekcija vozila i detekcija osoba. Svime ovim će upravljati centralni sustav za nadzor.",
          largeText: "Projekt Smart parking, započeo je niz novih projekata s ciljem daljnjeg razvoja Smart Campus projekta. Neki od tih projekata su automatsko prepoznavanje registracijskih oznaka, detekcija vozila i detekcija osoba. Svime ovim će upravljati centralni sustav za nadzor."
        },
      ],

    }
  },
  methods: {
    nextSlide () {
      this.model++
      this.model == 4 ? (this.model = 0) : "";
    },
    prevSlide () {
        this.model--;
        this.model == -1 ? (this.model = 3) : "";
    },
    setActive(key) {
      this.model = this.items.findIndex(d => d.key===key)
    },
  },
  computed: {
    activeItem () {
      return this.items[this.model];
    }
  }
}
</script>
<style scoped>
  .blue-line {
    width: 80px;
    height: 6px;
    background-color: #69B9F2;
    display: block;
  }

  .active-card {
    background-color: #365A83;
  }
  .active-card .v-card__title h2, .active-card .v-card__title i {
    color: white !important;
  }

  .active-card > .v-card__text {
    color: white !important;
  }

  .active-card .v-card__actions .v-btn.v-btn, .active-card > .v-btn__content {
    color: white;
    border-color: white !important;
  }
</style>
