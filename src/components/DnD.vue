<template>
    <GridLayout :layout.sync="itemList"
                 :col-num=6
                 :row-height=200
                 :maxRows=3
                 :is-draggable=true
                 :is-resizable=false
                 :vertical-compact=false
                 :use-css-transforms=true
    >
        <GridItem v-for="(item, idx) in itemList" v-bind:key="item.id"
                   :static="item.static"
                   :x="item.x"
                   :y="item.y"
                   :w=1
                   :h=1
                   :i="item.id"
        >
        <!-- {{item}} -->
        <!-- <div v-on:click="selectItem(idx)">
                            <v-row class="label">
                                <div><p style="font-weight: bold; font-size: 25px; padding-left: 12px;">{{linkname.name}}</p></div>
                                <div><span :data-letters="linkname.amountParcent"></span></div>
                            </v-row>
                            <div><p style="padding-left: 0.8rem;">{{ linkname.companyName }}</p></div>
                            <v-row class="label">
                                <div v-if="linkname.from">
                                   <div class="chip">Form</div>
                                </div>
                                <div v-if="linkname.to">
                                     <div class="chip">To</div>
                                </div>
                                
                            </v-row>
                            </div> -->
          
  <StockCard :item="item" :index="idx"/>
        </GridItem>
        
    </GridLayout>
    
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

import { GridLayout, GridItem } from "vue-grid-layout"
import StockCard from './Card.vue'
// import AddCard from './AddCard.vue'
export default {
    components: {
        GridLayout,
        GridItem,
        StockCard,
        // AddCard
    },
    data() {
        return {
            draggable: true,
            resizable: false,
            index: 0
        }
    },
     computed: {
        itemList(){
            return this.$store.state.itemList
          
        },
        
        selectedItems(){
             return this.$store.state.selectedItems
        },
        header(){
            return this.$store.state.header
        },
        ...mapGetters([
            'diffPercentAmount',
            'updatedItems'
        ])
    },
   
    methods: {
        itemTitle(item) {
            let result = item.i;
            if (item.static) {
                result += " - Static";
            }
            return result;
        },
         moveEvent: function(i, newX, newY){
            const msg = "MOVE i=" + i + ", X=" + newX + ", Y=" + newY;
            this.eventLog.push(msg);
            console.log(msg);
        },
        movedEvent: function(i, newX, newY){
            const msg = "MOVED i=" + i + ", X=" + newX + ", Y=" + newY;
            this.eventLog.push(msg);
            console.log(msg);
        },
        resizeEvent: function(i, newH, newW, newHPx, newWPx){
            const msg = "RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx;
            this.eventLog.push(msg);
            console.log(msg);
        },
        resizedEvent: function(i, newX, newY, newHPx, newWPx){
            const msg = "RESIZED i=" + i + ", X=" + newX + ", Y=" + newY + ", H(px)=" + newHPx + ", W(px)=" + newWPx;
            this.eventLog.push(msg);
            console.log(msg);
        },
        containerResizedEvent: function(i, newH, newW, newHPx, newWPx){
            const msg = "CONTAINER RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx;
            this.eventLog.push(msg);
            console.log(msg);
        },
        layoutCreatedEvent: function(newLayout){
            this.eventLog.push("Created layout");
            console.log("Created layout: ", newLayout)
        },
        layoutBeforeMountEvent: function(newLayout){
            this.eventLog.push("beforeMount layout");
            console.log("beforeMount layout: ", newLayout)
        },
        layoutMountedEvent: function(newLayout){
            this.eventLog.push("Mounted layout");
            console.log("Mounted layout: ", newLayout)
        },
        layoutReadyEvent: function(newLayout){
            this.eventLog.push("Ready layout");
            console.log("Ready layout: ", newLayout)
        },
        layoutUpdatedEvent: function(newLayout){
            this.eventLog.push("Updated layout");
            console.log("Updated layout: ", newLayout)
        },
         ...mapActions([
            'selectItem',
            'togglePercentDisplay',
            'accept'
        ])
    }
}
</script>

<style scoped>
.vue-grid-layout {
    /* background: #eee; */
}
.vue-grid-item:not(.vue-grid-placeholder) {
    /* background: #ccc; */
    /* border: 1px solid black; */
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    /* background: #cce; */
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
