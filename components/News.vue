<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="d-flex align-center justify-center">
    <swiper-slide v-for="newsItem in news" :key="newsItem.id" class="d-flex align-center justify-center">
        <v-container width="50%" class="ma-5">
            <v-row>
                <v-col class="d-flex align-center">
                    <v-img style="z-index:-1" width="100%" height="358px" :src="'https://web-admin.sum.ba/api/storage/' + newsItem.image"></v-img>
                </v-col>
                <v-col>
                    <div class="textNews">
                    <h2 style="color: #365a83">{{newsItem.title}}</h2>
                    <div class="d-flex mt-5 mb-5">
                        <v-icon left>
                            mdi-clock
                        </v-icon>
                        {{newsItem.date_diff}}
                        <v-icon right left>
                            mdi-eye
                        </v-icon>
                        {{newsItem.views}}
                    </div>
                    <small>{{newsItem.subtitle}}</small>
                    <div>{{newsItem.content|truncate(20)}}</div>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        outlined
                        rounded
                        small
                        @click="dialog = false"
                        class="mt-5"
                    >
                        Više
                    </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <div class="swiper-button-next" @click="slideNext"></div>
        <div class="swiper-button-prev" @click="slidePrev"></div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
 
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                el: '.swiper-pagination'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }, 
            news: []
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      this.getNews();
    },
    methods: {
        async getNews() {
            var categories = ["SMART campus"]
            let requestBody = {
                categories: categories,
                postsPerPage: 0
            };
            const news = await this.$axios.$post(
                "objave",
                requestBody,
            );
            this.news = news;
        },
        slideNext(){
            this.swiper.slideNext()
        },
        slidePrev(){
            this.swiper.slidePrev()
        },
    },
    filters: {
        truncate: function(value) {
            const div = document.createElement('div')
            div.innerHTML = value
            let text = div.textContent || div.innerText || ''

            if (text.length > 400) {
                text = text.substring(0, 400) + '...';
            }
            return text
        },

    }
}
</script>
<style>
.textNews {
    background-color: #FFFFFFCC; margin-left:-75px; margin-top:75px; padding:50px; z-index:1000; box-shadow: 0 0 10px gray
}
.swiper-button-next, .swiper-button-prev {
    border: 2px solid #365a83;
    border-radius: 50px;
    font-size: 15px !important;
    width: 50px;
    height: 50px;
    text-align: center;
}
.swiper-button-next::after, .swiper-button-prev::after{
    font-size: 25px;
    color: #365a83;
}
</style>