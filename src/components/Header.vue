<template>

  
      <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col  cols=4>
        
        <span style="font-weight: bold; font-size: 22px; padding-left: 12px"
        >What-If Analysis| $21,41,234 |</span
      >
      <span style="font-size: 15px">Account</span>
        
      </v-col>
          
      <v-col cols=4 >
          <div v-if="selectedItems.toItem">
       
         <v-btn class="toggleBtn" outlined v-on:click="togglePercentDisplay">
        {{ header.diffPercentAmount }}
      </v-btn>

      <input type="range" v-model.number="header.diffPercentAmount" />{{
        header.diffPercentAmount
      }}
      <v-btn class="acceptBtn" outlined rounded v-on:click="accept"
        >Accept
      </v-btn>
          </div>
      </v-col>
      <v-col  cols=3>
         <i class="fa fa-search" aria-hidden="true"></i>
      
      <select name="" >
    <option value="">Sort by value</option>
    
  </select>
      </v-col>
    </v-row>
  </v-container>
    <!-- <div>
      <v-icon dark left> mdi-arrow-left </v-icon>
      <span style="font-weight: bold; font-size: 25px; padding-left: 12px"
        >What-If Analysis| $21,41,234 |</span
      >
      <span style="font-size: 15px">Account</span>
    </div>
    <div v-if="selectedItems.toItem">
      <v-btn class="toggleBtn" outlined v-on:click="togglePercentDisplay">
        {{ header.diffPercentAmount }}
      </v-btn>

      <input type="range" v-model.number="header.diffPercentAmount" />{{
        header.diffPercentAmount
      }}
      <v-btn class="acceptBtn" outlined rounded v-on:click="accept"
        >Accept
      </v-btn>
    </div>
    <div>
      <i class="fa fa-search" aria-hidden="true"></i>
      <input placeholder="Sort by Value" />
    </div> -->
 
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    itemList() {
      return this.$store.state.itemList;
    },
    selectedItems() {
      return this.$store.state.selectedItems;
    },
    header() {
      return this.$store.state.header;
    },
    ...mapGetters(["diffPercentAmount"]),
  },
  methods: {
    ...mapActions(["selectItem", "togglePercentDisplay", "accept"]),
  },
};
</script>

<style scoped>
.hader {
  display: flex;
  justify-content: space-between;
}
.acceptBtn {
  background: blue;
  color: white;
}
</style>