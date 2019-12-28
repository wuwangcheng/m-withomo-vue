<template>
    <div class="m-withomo-main">
        <div class="header">
            <m-header></m-header>
        </div>
        <div class="container">
            <router-view/>
        </div>
        <div class="footer">
            <m-footer></m-footer>
        </div>
    </div>
</template>
<script>
    import MHeader from "./m-header"
    import MFooter from "./m-footer"

    export default {
        components: {MHeader, MFooter},
        data() {
            return {};
        }
    };
</script>

<style lang="scss">
    .m-withomo-main {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        background-color: #F4F4F4;
      .header {
        width: 100%;
        height: auto;
      }
      .container{
        width: 100%;
        /*border: 1px salmon solid;*/
      }
      .footer{
        width: 100%;
        /*border: 1px seagreen solid;*/
      }
    }

</style>
