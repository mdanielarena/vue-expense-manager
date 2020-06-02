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

    async fetchAllExpenses ({commit}) {
        await axios.get(`/api/expenses`).then(response => {
            commit('Expenses',JSON.parse(Base64.decode(response.data)))
        })
    },

    async addExpense ({commit},data) {
        await axios.post(`/api/expenses-add`,data).then(response => {
            commit('AddExpense',JSON.parse(Base64.decode(response.data)))
        })
    },

    async deleteExpense ({commit}, data ) {
        await axios.delete(`api/expenses-delete`,{data}).then(response => {
            commit('DeleteExpense',JSON.parse(Base64.decode(response.data)))
        })
    },

    async updateExpense ({commit}, data) {
        await axios.patch(`api/expenses-update`,{data}).then(response => {
            commit('UpdateExpense',JSON.parse(Base64.decode(response.data)))
        })
    }
}

const mutations = {
    categories: (state,data) => state.categories = data.sort().reverse(),
    Expenses: (state,data) => state.expenses = data.sort().reverse(),
    AddExpense: (state,data) => state.expenses.unshift(data),
    DeleteExpense: (state,data) => state.expenses = state.expenses.filter(expenses => expenses.id != data),
    UpdateExpense: (state,data) => {

        const index = state.expenses.filter(expenses => expenses.id == data.id)
        state.expenses.slice(index , 1 , data)

    }
}

export default {
    state,getters,actions,mutations
}