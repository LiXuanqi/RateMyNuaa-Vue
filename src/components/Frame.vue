<template>
    <md-toolbar>
        <div class="left-section">
            <md-button href="/" class="md-primary"><img height="48" width="48" src="../assets/logo.png"></md-button>
            <h3 class="md-title">RateMyNUAA</h3> 
        </div>   
    </md-toolbar>
</template>

<style scoped>
.md-toolbar {
    background-color: #303030;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 300;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
md.button {
    float: left;
}
.left-section{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.user-info {
    display: flex;
    align-items: center;
}
</style>

<script>
export default {

}
</script>
