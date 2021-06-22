export const state = () => ({
  datas: [
    {
      product: 'Tomette de brebis basque',
      weight: '650 GR',
      price: 9.9,
      quantity: 1,
      name: 'Aldudes',
      id: 26
    },
    {
      product: 'Ekigori Fromage de brebis basque pâte semi-molle',
      weight: '250 GR',
      price: 7.9,
      quantity: 1,
      name: 'France',
      id: 27
    },
    {
      product: 'Comté Saphir',
      weight: '250 GR',
      quantity: 1,
      price: 5.9,
      name: 'Chez Vagne',
      id: 28
    },
    {
      product: 'Comté bleu',
      weight: '250 GR',
      price: 5.9,
      quantity: 1,

      name: 'Marcel Petite',
      id: 29
    },
    {
      product: 'Reblochon fermier',
      weight: '250GR',
      price: 5.9,
      quantity: 1,
      name: 'France',
      id: 30
    },

    {
      product: 'Gouda à la truffe',
      weight: '250 GR',
      price: 7.9,
      quantity: 1,

      name: 'France',
      id: 31
    },
    {
      product: 'Tome de brebis',
      weight: 'env 250 GR',
      price: 3.9,
      quantity: 1,
      name: 'Espagne',
      id: 32
    },
    {
      product: 'Morbier au lait cru',
      weight: '250 GR',
      price: 5.9,
      quantity: 1,

      name: 'France',
      id: 33
    },
    {
      product: 'Tome de vache basque',
      weight: '250 GR',
      price: 4.9,
      quantity: 1,
      name:  'Aldudes',
      id: 34
    }
  ]
})

export const mutations = {
  addProductQuantityF(state, id) {
    const index = state.datas.findIndex((d) => d.id === id)
    state.datas[index].quantity++
  },
  removeQuantityF(state, id) {
    const index = state.datas.findIndex((d) => d.id === id)
    if (index.quantity === 0) {
      state.datas[index].splice(index, 1)
    }
    state.datas[index].quantity--
  }
}
