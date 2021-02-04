<template>
  <v-card
    :class="cardStyleClass"
    outlined
    elevation="10"
    v-on:click="selectItem(index)"
    :style="item.fixed ? 'background:green' : ''"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="cardHeader">
          <span>{{ item.name }}</span>
        </div>
        <v-list-item-subtitle :style="item.selected ? 'color:white' : ''">
          {{ item.companyName }}</v-list-item-subtitle
        >
        <v-list-item-title class="amount">
          ${{ item.amount }}
        </v-list-item-title>
      </v-list-item-content>

      
      <v-avatar
        v-if="item.fixed !== true"
        color="primary"
        size="30"
        class="avtar"
        >{{ item.amountParcent }}</v-avatar
      >
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        :style="item.selected ? 'background:blue' : ''"
      >
        {{ item.from ? "From" : "To" }}
      </v-btn>
      <v-btn elevation="2" fab small>X</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";



export default {
  name: "Card",
  props: ["item", "index"],
  components: {
    
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
    cardStyleClass() {
      if (this.$props.item.selected) {
        return "cardselected";
      } else if (this.$props.item.accepted) {
        return "cardaccepted";
      } else {
        return "card";
      }
    },
    ...mapGetters(["diffPercentAmount"]),
  },
  methods: {
    ...mapActions(["selectItem", "togglePercentDisplay", "accept"]),
  },
};
</script>

<style scoped>
.card {
  width: 11em;
  height: 11em;

  border: solid 2px rgba(0, 0, 0, 0.12);
  box-shadow: 3px 3px 7px 3px #8888884a;
}
.v-card .cardselected {
  background: black;
}

.v-card .cardaccepted {
  background: darkgoldenrod;
}
.v-sheet .v-card {
  border-radius: 30px;
  /* border: solid 2px rgba(0, 0, 0, 0.12); */
}

.cardHeader {
  align-content: space-between;
  font-weight: bold;
  font-size: 20px;
}
.cardselected .cardHeader {
  align-content: space-between;
  font-weight: bold;
  font-size: 20px;
  color: white;
}
.cardselected .v-list-item__subtitle .company {
  color: white;
}
.v-card__actions {
  /* padding-top: 2em; */
  justify-content: space-between;
}
.v-application .mb-1 {
  margin-top: 10px;
}
.avtar {
  position: absolute;
  top: 1em;
  right: 0.5em;
  font-weight: bold;
  font-size: small;
  background: blueviolet;
}
.card:hover {
  border: 4px solid black;
}
.amount {
  padding-top: 1em;
  font-weight: bold;
  font-size: 20px;
}
.cardselected .amount {
  padding-top: 1em;
  font-weight: bold;
  font-size: 20px;
  color: white;
}

.theme--light.v-list-item .v-list-item__subtitle .cardselected {
  font-size: small;
  font-weight: bold;
  padding-top: 0.2em;
  color: white;
}

.v-pagination__item .v-pagination__item--active {
  background: blue;
}
.v-pagination__item .v-pagination__item--active .primary {
    background: blue;
}

.v-pagination__item--active {
  background: blue;
}
</style>
