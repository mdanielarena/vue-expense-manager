const state = {
    categories: [],
    expenses: [],
}

const getters = {
    categories: state => state.categories,
    allExpenses: state => state.expenses,
}

const actions = {

    async fetchAllCategories ({commit}) {
        await axios.get(`/api/expense-categories`).then(response => {
            commit('categories',JSON.parse(Base64.decode(response.data)))
        })
    },

    // async fetchAllExpenses ({commit}) {
    //     await axios.get(`${url}/api/expenses`).then(response => {
    //         commit('Expenses',JSON.parse(Base64.decode(response.data)))
    //     })
    // },
}

const mutations = {
    categories: (state,data) => state.categories = data.sort().reverse(),
    Expenses: (state,data) => console.log(data),
}

export default {
    state,getters,actions,mutations
}