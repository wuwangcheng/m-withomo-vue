<template>
    <div class="m-withomo-header" :class="navBarFixed?'m-withomo-header-scroll':''">
        <div class="normal-header" @mouseenter="onmouseenterHeader" @mouseleave="onmouseleaveHeader">
            <div class="left"></div>
            <div class="nav">
                <div class="nav-container">
                    <div v-for="(item,index) in menus" :key="index" class="nav-content"
                         @mouseenter="onmouseenter(item,index)">
                        <span class="p-title">{{item.title}}</span>

                        <!--                <div v-if="true" class="children-header">-->
                        <div v-if="childMenus.length>0 && index===activeIndex" class="children-header"
                             @mouseleave="childMenus = ''">
                            <div class="left">
                                <!--                                <div class="left-container">-->
                                <!--                                    <div class="title">产品中心</div>-->
                                <!--                                    <div class="description">这边是对产品中心的一句话描述 我们的产品很好</div>-->
                                <!--                                    <div class="route-button">-->
                                <!--                                        全部产品-->
                                <!--                                    </div>-->
                                <!--                                </div>-->

                            </div>
                            <div class="right">
                                <!--                                <div class="right-container">-->
                                <!--                                    <div class="right-container-content" v-for="(e,i) in childMenus" :key="i">-->
                                <!--                                        <span>{{e.title}}</span>-->
                                <!--                                    </div>-->
                                <!--                                </div>-->

                            </div>

                        </div>
                    </div>

                </div>


            </div>
            <div class="right">
                <el-input v-if="navBarFixed||iconVisible" size="small" v-model="keyword" suffix-icon="el-icon-search"
                          placeholder="搜索您感兴趣的内容"></el-input>
                <i v-else class="el-icon-search" style="color: #F4F4F4"></i>
            </div>
            <div></div>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";

    export default {
        data() {
            return {
                logo: require("../../assets/img/common/logo-nohover.png"),
                navBarFixed: false,
                menus: require("../../apis/menu"),
                keyword: '', // 导航搜索
                childMenus: [],
                activeIndex: -1,
                iconVisible: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.watchScroll);
        },
        methods: {
            watchScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                //  当滚动超过 50 时，实现吸顶效果
                if (scrollTop > 50) {
                    this.navBarFixed = true;
                    this.logo = require("../../assets/img/common/logo.png");
                } else {
                    this.navBarFixed = false;
                    this.logo = require("../../assets/img/common/logo-nohover.png");
                }
            },
            onmouseenter(item, index) {
                this.childMenus = item.children;
                this.activeIndex = index;
            },
            onmouseenterHeader() {
                this.logo = require("../../assets/img/common/logo.png");
                this.iconVisible = true;
            },
            onmouseleaveHeader() {
                if (this.navBarFixed) {
                    this.logo = require("../../assets/img/common/logo.png");
                } else {
                    this.logo = require("../../assets/img/common/logo-nohover.png");
                }
                this.iconVisible = false;
            }
        }
    }
</script>
<style lang="scss">
    .m-withomo-header {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100px;
        background: rgba(255, 255, 255, 0);
        z-index: 999;
    }

    .m-withomo-header-scroll {
        background: rgba(255, 255, 255, 1);

        .normal-header {
            .left {
                min-width: 210px;
                background: url("../../assets/img/common/logo.png") no-repeat;
                background-size: 100% 100%;
                height: 45px;
            }
        }

        .p-title {
            color: rgba(0, 0, 0, 1);
        }
    }

    .m-withomo-header:hover {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 4px 12px -1px rgba(204, 204, 204, 0.4);

        .normal-header {
            .left {
                min-width: 210px;
                background: url("../../assets/img/common/logo.png") no-repeat;
                background-size: 100% 100%;
                height: 45px;
            }
        }

        .p-title {
            color: rgba(0, 0, 0, 1);
        }

    }

    .normal-header {
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 7%;

        .left {
            min-width: 210px;
            background: url("../../assets/img/common/logo-nohover.png") no-repeat;
            background-size: 100% 100%;
            height: 45px;
        }

        .nav {
            flex: 1;
            min-width: 800px;
            display: flex;
            justify-content: center;

            .nav-container {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 15%;

                .nav-content {
                    width: auto;
                    white-space: nowrap;
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 1);
                    letter-spacing: 1px;

                    .p-title {
                        cursor: pointer;
                    }
                }

                .nav-content:hover {
                    .p-title {
                        color: #3F7CF8;
                    }
                }

                .children-header {
                    width: 100%;
                    height: 292px;
                    position: absolute;
                    top: 100px;
                    left: 0;
                    background: rgba(249, 249, 249, 1);
                    display: flex;
                    padding: 0 15%;

                    .left {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;

                        .left-container {
                            width: 268px;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;

                            > div {
                                margin-bottom: 30px;
                            }

                            .title {
                                font-size: 18px;
                                font-family: PingFang SC;
                                font-weight: 600;
                                color: rgba(45, 46, 44, 1);
                                line-height: 25px;
                                letter-spacing: 1px;
                            }


                            .description {
                                max-width: 100%;
                                width: fit-content;
                                font-size: 18px;
                                font-family: PingFang SC;
                                font-weight: 500;
                                color: rgba(45, 46, 44, 0.6);
                                line-height: 32px;
                                letter-spacing: 1px;
                            }

                            .route-button {
                                cursor: pointer;
                                width: 132px;
                                height: 44px;
                                background: rgba(63, 124, 248, 1);
                                box-shadow: 0px 2px 8px 0px rgba(8, 92, 207, 0.5);
                                text-align: center;
                                line-height: 44px;
                                font-size: 16px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: rgba(255, 255, 255, 1);
                                letter-spacing: 1px
                            }
                        }
                    }

                    .right {
                        flex: 1;
                        height: 100%;
                        display: flex;
                        flex-wrap: wrap;

                        .right-container {
                            height: 100%;
                            border: 1px red solid;
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;

                            .right-container-content {
                                flex: 1;
                                border: 1px blue solid;
                            }
                        }
                    }
                }
            }
        }

        .right {
            width: 244px;
            height: 44px;
            line-height: 44px;
        }
    }

    @media screen and(min-height: 910px) and(max-width: 1200px) {
        .normal-header {
            padding: 0;
        }
    }

    @media screen and(max-width: 910px) {
        .m-withomo-header {
            background: rgba(255, 255, 255, 1);

            .p-title {
                color: rgba(0, 0, 0, 1);
            }
        }

        .normal-header {
            .left {
                min-width: 210px;
                background: url("../../assets/img/common/logo.png") no-repeat;
                background-size: 100% 100%;
                height: 45px;
            }

            .nav {
                display: none;
            }

            .right {
                display: none;
            }
        }
    }
</style>
