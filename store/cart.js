export const state = () => ({
    datas: [
    ]
})

export const getters = {
    total(state) {
        return state.datas.reduce((acc, p ) => {
          acc += p.price
          return acc;
        }, 0);
    }
}

export const mutations = {
    addOne(state, charcuterie) {
        const indexCharcuterie = state.datas.findIndex( d => d.id === charcuterie.id);

        if ( indexCharcuterie !== -1 ) {
            state.datas[indexCharcuterie].qty++;
        }

        charcuterie.qty = 1
        state.datas.push(charcuterie);
    },
    deleteOne(state, id) {
        const index = state.datas.findIndex( d => d.id === id);
        state.datas.splice(index, 1);
    }
}

export const actions = {
    
}