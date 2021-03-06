import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  

  state: {
    itemList: [
      {
        id: 1,
        name: "ADBE",
        companyName: "Adobe Syatem Inc",
        amount: 14528.4,
        amountParcent: 1.09,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":0,"y":0,"w":1,"h":1,"i":"1", static: false
      },
      {
        id: 2,
        name: "ALL",
        companyName: "Allstate",
        amount: 20766,
        amountParcent: 1.02,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":1,"y":0,"w":1,"h":1,"i":"2", static: false
      },
      {
        id: 3,
        name: "BK",
        companyName: "Bank New York Mellon",
        amount: 8024,
        amountParcent: 1.01,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":2,"y":0,"w":1,"h":1,"i":"3", static: false
      },
      {
        id: 4,
        name: "BX",
        companyName: "Blackstone Group Inc",
        amount: 18420,
        amountParcent: 1.28,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":3,"y":0,"w":1,"h":1,"i":"4", static: false
      },
      
      {
        id: 5,
        name: "CAT",
        companyName: "Caterpiller Inc",
        amount: 20955.6,
        amountParcent: 0.98,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":4,"y":0,"w":1,"h":1,"i":"5", static: false
      },
      {
        id: 6,
        name: "CASH",
        companyName: "Cash Account",
        amount: 17414.22,
        fixed: true,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":5,"y":0,"w":1,"h":1,"i":"6", static: true
      },
      {
        id: 7,
        name: "CSGP",
        companyName: "Costar Group Inc",
        amount: 17414,
        amountParcent: 0.92,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":0,"y":1,"w":1,"h":1,"i":"7", static: false

      },
      {
        id: 8,
        name: "DIS",
        companyName: "Allstate",
        amount: 20766,
        amountParcent: 1.02,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":1,"y":1,"w":1,"h":1,"i":"8", static: false
      },
      {
        id: 9,
        name: "EA",
        companyName: "Bank New York Mellon",
        amount: 8024,
        amountParcent: 1.01,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":2,"y":1,"w":1,"h":1,"i":"9", static: false
      },
      {
        id: 10,
        name: "ED",
        companyName: "Blackstone Group Inc",
        amount: 18420,
        amountParcent: 1.28,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":3,"y":1,"w":1,"h":1,"i":"10", static: false
      },
      {
        id: 11,
        name: "ETN",
        companyName: "Eaton Corp",
        amount: 20955.6,
        amountParcent: 0.98,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":4,"y":1,"w":1,"h":1,"i":"11", static: false
      },
      {
        id: 12,
        name: "MM$",
        companyName: "Money Market",
        amount: 435964.40,
        fixed: true,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":5,"y":1,"w":1,"h":1,"i":"12", static: true
      },
      {
        id: 13,
        name: "FB",
        companyName: "facebook",
        amount: 17414,
        amountParcent: 0.92,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":6,"y":1,"w":1,"h":1,"i":"13", static: false
      },
      {
      id: 14,
        name: "FDX",
        companyName: "FedEx",
        amount: 58540,
        amountParcent: 1.1,
        fixed: false,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":0,"y":2,"w":1,"h":1,"i":"14", static: false
		},
		{
        id: 15,
        name: "HRL",
        companyName: "Hormel",
        amount: 18896,
        amountParcent: 0.43,
        fixed: false,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":1,"y":2,"w":1,"h":1,"i":"15", static: false
		},
		{
        id: 16,
        name: "INTC",
        companyName: "Intel",
        amount: 15297,
        amountParcent: 1.16,
        fixed: false,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        "x":2,"y":2,"w":1,"h":1,"i":"16", static: false
		},{
		id: 17,
        name: "ISRC",
        companyName: "Intutive Surgical Inc",
        amount: 15174.40,
        amountParcent: 1.13,
        fixed: false,
        from: true,
        to: false,
        selected: false,
        accepted: false,
        
        "x":3,"y":2,"w":1,"h":1,"i":"17", static: false
    },
    {
      id: 18,
      name: "EA",
      companyName: "Bank New York Mellon",
      amount: 8024,
      amountParcent: 1.01,
      from: true,
      to: false,
      selected: false,
      accepted: false,
      "x":4,"y":2,"w":1,"h":1,"i":"18", static: false
    },
    {
      id: 19,
          name: "Add Instrument",
          // companyName: "Intutive Surgical Inc",
          // amount: 15174.40,
          // amountParcent: 1.13,
          // fixed: false,
          // from: true,
          // to: false,
          // selected: false,
          // accepted: false,
          isAdd: true,
          "x":5,"y":2,"w":1,"h":1,"i":"18", static: true
      }
      
    ],
    selectedItems: {
      fromItem: null,
      toItem: null,
    },
    header: {
      totalAmount: 21736048,
      diffAmount: 0,
      diffPercentAmount: 0,
      showPercent: true,
    },
  },
  getters: {
    updatedItems: (state) => {
      const totalCol = 6;
            // const totalRows = layout1.length / totalCol;
            let rowNo = 0;
            let colNo  = 0;
            const updaedItemList = [];
                

            state.itemList.map((el, index) => {
                let data = null;
                if(colNo < totalCol){
//                     colNo = index;
                    data = {...el, "x":colNo,"y":rowNo,"w":1,"h":1,"i":"1", static: false}
                    updaedItemList.push(data);
                    colNo++;

                }else{
                    colNo = 0
                    rowNo++
                    data = {...el, "x":colNo,"y":rowNo,"w":1,"h":1,"i":"1", static: false}
                    updaedItemList.push(data);
                    colNo++;
                }

                console.log(updaedItemList[index]);
            })
            return updaedItemList;

    },
    diffPercentAmount: (state) => {
      if (state.selectItems) {
        const diffAmount =
          state.selectItems.fromItem.amount - state.selectItems.toItem.amount;
        const diffAmountPercent =
          (diffAmount / state.selectItems.toItem.amount) * 100;
        return diffAmountPercent;
      }
    },
    diffAmount: (state) => {
      if (state.selectItems) {
        const diffAmount =
          state.selectItems.fromItem.amount - state.selectItems.toItem.amount;
        return diffAmount;
      }
    },
    cardStyleClass(item) {
      if(item.selected){
          return "cardselected"
      }else if(item.accepted){ 
          return "cardaccepted";
      }else if(item.isAdd){
        return "addInstrument";
      }else{
        return "normal";
      }
          
      
    },
  },
  mutations: {
    SELECT_FROM_ITEM: (state, index) => {
      const updatedItems = state.itemList.map((it, idx) => {
        if (idx === index) {
          it.selected = true;
          it.from = true;
          it.to = false;
          //
          if (!state.selectedItems.fromItem) {
            state.selectedItems.fromItem = it;
            console.log(
              "state.selectedItems.fromItem:: ",
              state.selectedItems.fromItem
            );
          }
        } else {
          it.to = true;
          it.from = false;
        }
        return it;
      });
      state.itemList = updatedItems;
    },
    SELECT_TO_ITEM: (state, index) => {
      const toItem = state.itemList[index];
      toItem.selected = true;
      state.selectedItems.toItem = toItem;
      console.log("toItem:: ", toItem.amount);
      console.log(
        "state.selectedItems fromItem.amount:: ",
        state.selectedItems.fromItem.amount
      );

      const diffAmount = state.selectedItems.fromItem.amount - toItem.amount;
      const diffAmountPercent =
        (diffAmount / state.selectedItems.fromItem.amount) * 100;
      console.log("diffAmount:: ", diffAmount);
      console.log("diffAmountPercent:: ", diffAmountPercent);
      // state.obj = {...state, header: {...state.header, diffAmount: diffAmount,
      //     diffPercentAmount: diffAmountPercent}}
      state.header.diffAmount = diffAmount;
      state.header.diffPercentAmount = diffAmountPercent.toFixed(2);

      console.log("state in SELECT_TO_ITEM:: ", state);
    },
    TOGGLE_PERCET_AMOUNT: (state) => {
      const locShowPercent = !state.header.showPercent;
      state.header = {...state.header, showPercent: locShowPercent};
    },
    ACCEPT: (state) => {
        let selList = [state.selectedItems.fromItem.name, state.selectedItems.toItem.name];
        console.log("selected List is ", selList);
        const filterdList = state.itemList.filter(item => {
            return !selList.includes(item.name);
        });
        state.selectedItems.fromItem.selected = false;
        state.selectedItems.toItem.selected = false;
        state.selectedItems.fromItem.accepted = true;
        state.selectedItems.toItem.accepted = true
        state.itemList = [state.selectedItems.fromItem, state.selectedItems.toItem, ...filterdList]
        state.selectedItems = {};

    }
  },
  actions: {
    selectItem: (context, payload) => {
      if (!context.state.selectedItems.fromItem) {
        context.commit("SELECT_FROM_ITEM", payload);
      } else {
        context.commit("SELECT_TO_ITEM", payload);
      }
    },
    accept: (context) => {
        context.commit("ACCEPT");

    },
    togglePercentDisplay: (context) => {
      context.commit("TOGGLE_PERCET_AMOUNT");
    },
    // moveSlider: (context, payload) => {},
  },
});
