<template>
  <v-card class="mx-auto">
    <v-card-title>
      <Header />
    </v-card-title>
    <v-container class="stockCards">
      <v-item-group v-model="selected" multiple>
        <v-row>
          <v-col v-for="(item, i) in itemList" :key="i" cols="12" md="2">
            <StockCard :item="item" :index="i" />
          </v-col>
          <v-card class="card" outlined elevation="10" style="background: blue">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="cardHeader" >
          <span>Add Instrument</span>
        </div>

                <v-list-item-title class="amount"> 
                     
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
      <v-btn style="background:blue; font-size:22px;" elevation="2" fab small>+</v-btn>
    </v-card-actions>
          </v-card>
        </v-row>
      </v-item-group>
    </v-container>
    <v-card-actions>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
          circle
        ></v-pagination>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import StockCard from "./Card.vue";
import Header from "./Header.vue";

export default {
  data: () => ({
    selected: [],
    page: 1,
  }),
  components: {
    StockCard,
    Header,
  },
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
    ...mapGetters(["diffPercentAmount", "cardStyleClass"]),
  },
  methods: {
    ...mapActions(["selectItem", "togglePercentDisplay", "accept"]),
  },
};
</script>



<style scoped>

.stockCards {
    height: 79vh;
    overflow: auto;
}

.card {
    width: 11em;
    height: 11em;    
    border: solid 2px rgba(0, 0, 0, 0.12);
    box-shadow: 3px 3px 7px 3px #8888884a;
    border-radius: 30px;
}

.cardHeader {
    align-content: space-between;
    font-weight: bold;
 font-size: 20px;
 
}


.v-pagination__item--active {
  background: blue;
  color: red;
}
.v-pagination__item .v-pagination__item--active .primary {
    background: blue;
}

.v-pagination__item--active {
  background: blue;
}
</style>






