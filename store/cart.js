export const state = () => ({
    datas: [
    ]
})

export const getters = {
    total(state) {
        return state.datas.reduce((acc, p ) => {
          acc += p.price * p.quantity
          return acc;
        }, 0);
    }
}

export const mutations = {
    addOne(state, charcuterie) {
        state.datas.push(charcuterie);
    },

    addOne(state, fromages) {
        state.datas.push(fromages);
    },

    addQuantity(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        state.datas[index].quantity++;
    },
    removeQuantity(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        if (index.quantity < 0) {
            state.datas[index].splice(index, 1);
        }
        state.datas[index].quantity--;
    },
    deleteOne(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        state.datas.splice(index, 1);
    }
}

export const actions = {
    sendCart({state}) {
        state.datas = []
      }
}