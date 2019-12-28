<template>
    <div class="home-header">
        <div class="header-title">
            <p>{{title}}</p>
            <div></div>
            <p>{{enTitle}}</p>
        </div>
        <div class="header-read-more">
            <img src="../../assets/img/common/link-icon.png">
            <span>READ MORE</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home-header",
        props: {
            title: {
                type: String,
                default: null
            },
            enTitle: {
                type: String,
                default: null
            }
        }
    }
</script>

<style lang="scss">
    .home-header {
        display: flex;
        justify-content: space-between;

        .header-title {
            > div {
                width: 94px;
                height: 6px;
                background: rgba(63, 124, 248, 1);
                border-radius: 1px;
                margin-bottom: 16px
            }

            > p:first-child {
                font-size: 36px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                letter-spacing: 2px;
                margin-bottom: 16px
            }

            > p:last-child {
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(45, 46, 44, 1);
                letter-spacing: 1px;
                margin-bottom: 16px
            }
        }

        .header-read-more {
            display: flex;
            align-items: center;

            > img {
                width: auto;
                margin-right: 10px;
            }

            > span {
                font-size: 16px;
                font-family: PingFang-SC-Medium, PingFang-SC;
                font-weight: 500;
                color: rgba(45, 46, 44, 0.6);
            }
        }
    }
</style>
