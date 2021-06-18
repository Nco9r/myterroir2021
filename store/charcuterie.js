export const state = () => ({
  datas: [
    {
      product: 'Jambon de Bayonne 12 mois chiffonnade',
      weight: '100 GR',
      price: 3.90,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 1,

    },
    {
      product: 'Jambon de Bayonne 12 mois tranché sous-vide',
      weight: '100 GR',
      price: 3.90,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 2,
    },
    {
      product: 'Jambon Don Ibane 24 mois chiffonnade en barquette',
      weight: '100 GR',
      price: 5.9,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 3,


    },
    {
      product: 'Jambon Don Ibane 24 mois tranché sous-vide',
      weight: '100 GR',
      price: 5.9,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 4,


    },
    {
      product: 'Lomo séché au piment d’Espelette tranché sous-vide',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 5,


    },
    {
      product: 'Lomo séché au piment d’Espelette chiffonnade en barquette',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 6,
      

    },
    {
      product: 'Coppa basque tranché sous-vide',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 7,


    },
    {
      product: 'Coppa basque chiffonnade en barquette',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 8,


    },
    {
      product: 'Chorizo Iruña tranché sous vide',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 9,


    },
    {
      product: 'Chorizo Iruña chiffonnade en barquette',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 10,


    },
    {
      product: 'Rosette tranché sous vide',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 11,


    },
    {
      product: 'Rosette chiffonnade en barquette',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 12,


    },
    {
      product: 'Saucisson au piment d’Espelette tranché en barquette',
      weight: '100 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 13,


    },
    {
      product: 'Confit de porc',
      weight: '800 GR',
      price: 12.5,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 14,


    },
    {
      product: 'Pâté au foie gras',
      weight: '125 GR',
      price: 4,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 15,


    },
    {
      product: 'Pâté Basque au piment d’Espelette',
      weight: '125 GR',
      price: 2.5,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 16,


    },
    {
      product: 'Pâté de campagne',
      weight: '125 GR',
      price: 2.5,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 17,


    },
    {
      product: 'Boudin au piment d’Espelette',
      weight: '125 GR',
      price: 2.9,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 18,


    },
    {
      product: 'Chichons de porc',
      weight: '190 GR',
      price: 3.5,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 19,


    },
    {
      product: 'Pâté de tête',
      weight: '190 GR',
      price: 3.5,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 20,


    },
    {
      product: 'Axoa de porc 2 personnes',
      weight: '380 GR',
      price: 8.9,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 21,


    },
    {
      product: 'Piperade',
      weight: '380 GR',
      price: 4.50,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 22,


    },
    {
      product: 'Tajine de mouton 3-4 personnes',
      weight: '750 GR',
      price: 15.90,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 23,


    },
    {
      product: '4 saucisses confites',
      weight: '330 GR',
      price: 7,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 24,


    },
    {
      product: 'Couscous de mouton 3-4 personnes',
      weight: '750 GR',
      price: 15.9,
      name: 'La ferme Elizaldia',
      quantity: 1,
      id: 25,


    }
  ]
})

export const mutations = {
 
  addProductQuantity(state, id) {
    const index = state.datas.findIndex( d => d.id === id);
    state.datas[index].quantity++;
  },
  removeQuantity(state, id) {
      const index = state.datas.findIndex( d => d.id === id);
      if (index.quantity === 0) {
          state.datas[index].splice(index, 1);
      }
      state.datas[index].quantity--;
  },

}

