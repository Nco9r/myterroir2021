export const state = () => ({
    datas: [
        {
            product: 'Axoa de porc 2 personnes',
            weight: '380 GR',
            price: 8.9,
            name: 'La ferme Elizaldia',
            quantity: 1,
            id: 21
          },
          {
            product: 'Piperade',
            weight: '380 GR',
            price: 4.5,
            name: 'La ferme Elizaldia',
            quantity: 1,
            id: 22
          },
          {
            product: 'Tajine de mouton 3-4 personnes',
            weight: '750 GR',
            price: 15.9,
            name: 'La ferme Elizaldia',
            quantity: 1,
            id: 23
          },
          {
            product: '4 saucisses confites',
            weight: '330 GR',
            price: 7,
            name: 'La ferme Elizaldia',
            quantity: 1,
            id: 24
          },
          {
            product: 'Couscous de mouton 3-4 personnes',
            weight: '750 GR',
            price: 15.9,
            name: 'La ferme Elizaldia',
            quantity: 1,
            id: 35
          },
    ]
  })
  
  export const mutations = {
    addProductQuantityV(state, id) {
      const index = state.datas.findIndex((d) => d.id === id)
      state.datas[index].quantity++
    },
    removeQuantityV(state, id) {
      const index = state.datas.findIndex((d) => d.id === id)
      if (index.quantity === 0) {
        state.datas[index].splice(index, 1)
      }
      state.datas[index].quantity--
    }
  }
  