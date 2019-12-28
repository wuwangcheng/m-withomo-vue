<template>
    <div class="m-withomo-home">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img src="../../../assets/img/swiper/wallhaven-kwr27q.jpg" style="max-width: 100%" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../../assets/img/swiper/wallhaven-j5kr8p.jpg" style="max-width: 100%" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../../assets/img/swiper/wallhaven-dgvzvl.jpg" style="max-width: 100%" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../../assets/img/swiper/wallhaven-p8mpgm.jpg" style="max-width: 100%" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--            <div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--            <div class="swiper-button-next" slot="button-next"></div>-->
        </swiper>
        <div class="home-hot-product">
            <div class="hot-left">
                <div class="left-content">
                    <p style="font-size:36px;font-family:PingFang SC;font-weight:500;color:rgba(255,255,255,1);letter-spacing:2px;margin-bottom: 16px">
                        热门产品</p>
                    <p style="font-size:16px;font-family:PingFang-SC;font-weight:500;color:rgba(255,255,255,1);margin-bottom: 16px">
                        这里放有一句话产品简介，消防智能化产品方管理，很好哦，丰富内容</p>
                    <div style="width:94px;height:6px;background:rgba(63,124,248,1);border-radius:1px;margin-bottom: 16px"></div>
                    <p style="font-size:16px;font-family:PingFang SC;font-weight:500;color:rgba(255,255,255,1);letter-spacing:1px;margin-bottom: 16px">
                        HOT POPULAR</p>
                    <div class="left-content-button">
                        <div class="title" :class="hotClick === index?'isActiveTitle':''"
                             v-for="(item,index) in hotList"
                             :key="index" @click="hotClick=index">{{item}}
                            <i v-show="hotClick === index" class="el-icon-right" style="padding-left: 5px"></i></div>
                    </div>
                </div>
            </div>
            <div class="hot-right">
                <div class="hot-right-wrap" v-for="item in 3">
                    <div class="title">RFID reader</div>
                    <div class="product-img">
                        <img src="../../../assets/img/common/tianxain.png">
                    </div>
                    <div class="description">
                        <p>RFID 读写器</p>
                        <p>产品也给一句话介绍吧</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-solutions">
            <home-header title="解决方案" enTitle="SOLUTIONS"></home-header>
            <div class="solutions-content">
                <div class="content-item" v-for="item in 6">
                    <div class="item-img">
                        <img src="../../../assets/img/swiper/wallhaven-p8mpgm.jpg"
                             style="width: 100%">
                        <div class="item-img-hover">
                            <div class="description" style="padding: 0 71px;text-align-last:center;text-align:center;">
                                智能仓储系统是对仓库装备进行标识唯一
                                RFID码，开启全生命周期管理仓库物资， 这里是一段描述文字
                            </div>
                            <div class="view-more">
                                VIEW MORE
                            </div>
                        </div>
                    </div>

                    <div class="item-title">智能仓储系统</div>
                </div>
            </div>
        </div>
        <div class="home-news">
            <home-header title="最新资讯" enTitle="Latest News"></home-header>
            <div class="home-new-swiper">
                <div class="swiper-container" id="swiper-news">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in 3">
                            <div class="swiper-slide-container">
                                <div class="swiper-content">
                                    <img src="../../../assets/img/swiper/wallhaven-dgvzvl.jpg" style="max-width: 100%">
                                    <div class="content">
                                        <div class="content-top-icon"></div>
                                        <div class="content-title">华为拿下运营商及路由器市场第一，超越思科</div>
                                        <div class="content-description">
                                            作为一家“长跑型选手”，华为在ICT行业各个领域不断演绎着从追赶到超越，乃至突入“无人区”的戏码，就在今天，国家统计局数据显示，华为运营商及路由器市场第一…
                                        </div>
                                        <div class="content-time">2019-12-18 09:00</div>
                                        <div class="content-bottom-jiaobiao"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-partners">
            <home-header title="合作伙伴" enTitle="Partners"></home-header>
            <div class="partners-wrapper">
                <div class="wrapper-item" v-for="item in 6">
                    <i class="icon iconfont icon-ali"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import HomeHeader from "../../common/home-header"

    export default {
        name: "index",
        components: {swiper, swiperSlide, HomeHeader},
        data() {
            return {
                swiperOption: { //更多的参数的配置看swiper4官网介绍：http://www.swiper.com.cn/api/navigation/210.html
                    notNextTick: true,
                    loop: true,
                    autoplay: 3000,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    paginationClickable: true,
                    navigation: { //最新版本的需要这样配置，按钮才有效
                        prevEl: '.swiper-button-prev',//上一张
                        nextEl: '.swiper-button-next'//下一张
                    },
                    scrollbar: '.swiper-scrollbar',//滚动条
                    mousewheelControl: true,
                    observeParents: true
                },
                hotList: ["电子标签", "天线", "读写器", "全部产品"],
                hotClick: 0,
                mySwiper: ''
            }
        },
        mounted() {
            this.mySwiper && this.mySwiper.init();
            this.initSwiper();
        },
        deactivated() {
            this.mySwiper && this.mySwiper.init();
        },
        methods: {
            initSwiper() {
                this.$nextTick(() => {
                    let mySwiper1 = new Swiper('#swiper-news', {
                        loop: false,
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                        autoplay: {}
                    });
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "../../../../node_modules/swiper/css/swiper.css";

    .m-withomo-home {
        width: 100%;

        .swiper-container {
            width: 100%;
            max-height: 90vh;

            .swiper-wrapper {
                width: 100%;
                height: 100%;
            }
        }

        .home-hot-product {
            display: flex;

            .hot-left {
                padding-left: 240px;
                padding-right: 60px;
                padding-top: 85px;
                padding-bottom: 85px;
                /*padding: 85px 0px 85px 100px;*/
                background: rgba(8, 92, 207, 1);

                .left-content {
                    width: 336px;
                }

                .left-content-button {

                    .title {
                        padding: 0px 24px;
                        width: fit-content;
                        line-height: 44px;
                        margin-bottom: 24px;
                        border: 2px solid rgba(63, 124, 248, 1);
                        border-radius: 22px;
                        color: rgba(255, 255, 255, 1);
                        cursor: pointer;
                    }

                    .isActiveTitle {
                        background: rgba(63, 124, 248, 1);
                        box-shadow: 2px 2px 8px 0px rgba(8, 92, 207, 0.5);
                    }
                }
            }

            .hot-right {
                flex: 1;
                display: flex;
                float: left;


                .hot-right-wrap {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background: rgba(255, 255, 255, 1);
                    padding: 40px 0 72px 0;
                    margin-right: 1px;

                    .title {
                        padding-left: 40px;
                        font-size: 20px;
                        font-family: PingFang-SC;
                        font-weight: 500;
                        color: rgba(45, 46, 44, 0.5);
                        line-height: 28px;
                    }

                    .product-img {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        > img {
                            max-width: 100%;
                        }
                    }

                    .description {
                        text-align: center;

                        p:first-child {
                            font-size: 22px;
                            font-family: PingFang-SC;
                            font-weight: 500;
                            color: rgba(45, 46, 44, 1);
                        }

                        p:last-child {
                            font-size: 16px;
                            font-family: PingFang-SC;
                            font-weight: 500;
                            color: rgba(45, 46, 44, 0.8);
                            line-height: 22px;
                        }
                    }

                    .hot-right-wrap:hover {
                        box-shadow: 2px 2px 14px 0px rgba(201, 201, 201, 0.5);
                    }
                }
            }
        }

        .home-solutions {
            min-width: 470px;
            padding: 0 240px;

            .solutions-content {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                margin-top: 46px;

                .content-item {
                    width: 460px;
                    /*height: 360px;*/
                    border-radius: 10px;
                    margin-bottom: 16px;
                    overflow: hidden;

                    .item-img {
                        flex: 1;
                        position: relative;
                    }

                    .item-img-hover {
                        display: none;
                    }

                    .item-img:hover {
                        .item-img-hover {
                            flex: 1;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background-color: rgba(0, 20, 61, 0.6);
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;

                            .description {
                                font-size: 18px;
                                font-family: PingFang-SC-Medium, PingFang-SC;
                                font-weight: 500;
                                line-height: 34px;
                                color: rgba(255, 255, 255, 1);
                            }

                            .view-more:before {
                                content: url("../../../assets/img/icon/icon-right.png");
                            }

                            .view-more {
                                width: fit-content;
                                padding: 5px 24px;
                                background: rgba(63, 124, 248, 1);
                                border-radius: 22px;
                                border: 2px solid rgba(63, 124, 248, 1);
                                font-size: 16px;
                                font-family: PingFang-SC-Medium, PingFang-SC;
                                font-weight: 500;
                                color: rgba(255, 255, 255, 1);
                                margin-top: 49px;
                            }
                        }
                    }


                    .item-title {
                        height: 76px;
                        background: rgba(255, 255, 255, 1);
                        font-size: 20px;
                        font-family: PingFang-SC-Medium, PingFang-SC;
                        font-weight: inherit;
                        color: rgba(45, 46, 44, 1);
                        line-height: 76px;
                        letter-spacing: 1px;
                        padding-left: 24px;
                    }
                }
            }

            .home-news {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                margin-top: 46px;
            }
        }

        .home-news {
            min-width: 1000px;
            padding: 0 240px;
            background: rgba(255, 255, 255, 1);

            .home-new-swiper {
                padding-bottom: 88px;

                .swiper-container {
                    padding: 0 10px;

                    .swiper-wrapper {
                        display: flex;
                        align-items: center;

                        .swiper-slide {
                            max-height: 676px;
                            /*transition: 0.5s;*/
                            /*transform: scale(0.75);*/

                            .swiper-slide-container {
                                display: flex;
                                flex-direction: column;

                                /*中间swiper*/
                                .swiper-content {
                                    background: rgba(63, 124, 248, 1);
                                    box-shadow: 0px 8px 18px -2px rgba(63, 124, 248, 0.25);
                                    border-radius: 10px;
                                    overflow: hidden;

                                    > img {
                                        max-width: 100%;
                                    }

                                    .content {
                                        padding: 28px 32px;


                                        .content-top-icon:before {
                                            content: url("../../../assets/img/common/swiper-icon-tixing-isActive.png");
                                        }

                                        .content-top-icon {
                                            margin-bottom: 23px;
                                        }

                                        .content-title {
                                            height: 30px;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            white-space: nowrap;
                                            font-size: 22px;
                                            font-family: PingFangSC-Medium, PingFang SC;
                                            font-weight: 500;
                                            color: rgba(255, 255, 255, 1);
                                            line-height: 30px;
                                            letter-spacing: 1px;
                                            margin-bottom: 16px;
                                        }

                                        .content-description {
                                            height: 96px;
                                            font-size: 16px;
                                            display: -webkit-box;
                                            -webkit-box-orient: vertical;
                                            -webkit-line-clamp: 3;
                                            overflow: hidden;
                                            font-family: PingFang-SC-Medium, PingFang-SC;
                                            font-weight: 500;
                                            color: rgba(255, 255, 255, 1);
                                            line-height: 32px;
                                            letter-spacing: 1px;
                                            margin-bottom: 32px;
                                            text-align: justify;

                                        }

                                        .content-time {
                                            font-size: 16px;
                                            font-family: PingFang-SC-Medium, PingFang-SC;
                                            font-weight: 500;
                                            color: rgba(255, 255, 255, 0.7);
                                            line-height: 22px;
                                            letter-spacing: 1px;
                                        }

                                        .content-bottom-jiaobiao {
                                            text-align: right;
                                        }

                                        .content-bottom-jiaobiao:after {
                                            content: url("../../../assets/img/common/swiper-jiaobiao-isActive.png");
                                        }
                                    }


                                }
                            }
                        }

                        .swiper-slide-next, .swiper-slide-prev {
                            .swiper-content {
                                background: rgba(255, 255, 255, 1) !important;
                                box-shadow: 2px 2px 14px 0px rgba(201, 201, 201, 0.5) !important;
                                border-radius: 10px !important;

                                .content-top-icon:before {
                                    content: url("../../../assets/img/common/swiper-icon-tixing.png") !important;
                                }

                                .content-title {
                                    font-size: 22px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: rgba(45, 46, 44, 1) !important;
                                    line-height: 30px;
                                    letter-spacing: 1px;
                                    margin-bottom: 16px;
                                }

                                .content-description {
                                    font-size: 16px;
                                    font-family: PingFang-SC-Medium, PingFang-SC;
                                    font-weight: 500;
                                    color: rgba(45, 46, 44, 1) !important;
                                    line-height: 32px;
                                    letter-spacing: 1px;
                                    margin-bottom: 32px;
                                    text-align: justify;
                                }

                                .content-time {
                                    font-size: 16px;
                                    font-family: PingFang-SC-Medium, PingFang-SC;
                                    font-weight: 500;
                                    color: rgba(45, 46, 44, 0.7) !important;
                                    line-height: 22px;
                                    letter-spacing: 1px;
                                }

                                .content-bottom-jiaobiao {
                                    text-align: right;
                                }

                                .content-bottom-jiaobiao:after {
                                    content: url("../../../assets/img/common/swper-jiaobiao.png") !important;
                                }

                                > img {
                                    display: none;
                                }
                            }
                        }

                    }
                }


            }
        }

        .home-partners {
            padding: 0 240px;
            margin-bottom: 64px;

            .partners-wrapper {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;

                .wrapper-item {
                    width: 216px;
                    height: 162px;
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0px 2px 12px 0px rgba(204, 204, 204, 0.5);
                    text-align: center;
                    line-height: 162px;

                    > i{
                        font-size: 35px;
                        color: #FF6204;
                    }
                }
            }
        }
    }
</style>
