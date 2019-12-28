<template>
    <div class="m-withomo-footer">
        <div class="footer-wrapper">
            <div class="info-wrap">
                <div class="item">
                    <p>产品中心</p>
                    <span>电子标签</span>
                    <span>天线</span>
                    <span>读写器</span>
                    <span>通道门</span>
                    <span>通道机</span>
                    <span>手持机</span>
                </div>
                <div class="item">
                    <p>解决方案</p>
                    <span>智能仓储</span>
                    <span>固定资产</span>
                    <span>漏液检测</span>
                    <span>访客管理</span>
                    <span>安全生产</span>
                    <span>无人零售</span>
                </div>
                <div class="item">
                    <p>关于我们</p>
                    <span>公司简介</span>
                    <span>联系我们</span>
                    <span>招聘信息</span>
                </div>
                <div class="item">
                    <p>联系我们</p>
                    <span>电话：400-888-1234</span>
                    <span>邮箱：smartiot@withomo.com</span>
                    <span>地址：无锡市泰山路2号D栋</span>
                </div>
            </div>
            <div class="info-contact">
                <img src="../../assets/img/common/logo-small.png" style="max-width: 100%">
                <img src="../../assets/img/common/qrcode.png" style="max-width: 100%">
            </div>

        </div>
        <div class="footer-copyright">
            <span>Copyright@2018 江苏省中科智睿物联网科技有限公司.   苏ICP备18025732号-1</span>
        </div>
    </div>
</template>

<style lang="scss">
    .m-withomo-footer {
        background-color: rgba(0, 0, 0, 0.9);
        padding: 0 240px;
        min-width: 1000px;

        .footer-wrapper {
            display: flex;
            padding: 60px 0;
            min-height: 200px;
            /*border: 1px salmon solid;*/

            .info-wrap {
                flex: 1;
                display: flex;
                margin-right: 100px;


                .item {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    > p {
                        cursor: pointer;
                        font-size: 20px;
                        font-family: PingFang-SC-Medium, PingFang-SC;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 1);
                        line-height: 48px;
                        letter-spacing: 1px;
                    }

                    > span {
                        cursor: pointer;
                        font-size: 16px;
                        font-family: PingFang-SC-Medium, PingFang-SC;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 0.6);
                        line-height: 35px;
                        letter-spacing: 1px;
                    }
                }
            }

            .info-contact {
                width: 100px;
            }
        }

        .footer-copyright {
            height: 100px;
            text-align: center;
            line-height: 100px;
            border-top: 2px #50555D solid;

            > span {
                font-size: 16px;
                font-family: PingFang-SC-Medium, PingFang-SC;
                font-weight: 500;
                color: rgba(255, 255, 255, 0.6);
                line-height: 22px;
                letter-spacing: 1px;
            }
        }
    }
</style>
