const state = {
    categories: []
}

const getters = {
   allCategories: state => state.categories
}

const actions = {

    async fetchCategories ({commit}) {
        await axios.get(`/api/expense-categories`).then(response => {
            commit('ExpenseCategories',JSON.parse(Base64.decode(response.data)))
        })
    },

    async addCategory ({commit},data) {
        await axios.post(`/api/expense-categories-add`,data).then(response => {
            commit('addCategory',JSON.parse(Base64.decode(response.data)))
        })
    },

    async deleteCategory ({commit},data) {
        await axios.delete(`/api/expense-categories-delete`,{data}).then(response => {
            commit('deleteCategory',JSON.parse(Base64.decode(response.data)))
        })
    },

    async updateCategory ({commit}, data) {
        await axios.patch(`/api/expense-categories-update`,{data}).then(response => {
            commit('updateCategory',JSON.parse(Base64.decode(response.data)))
        })
    }

}

const mutations = {
   ExpenseCategories: (state,categories) => state.categories = categories.sort().reverse(),
   addCategory: (state,categories) => state.categories.unshift(categories),
   deleteCategory: (state,categories) => state.categories = state.categories.filter(category => category.id !== categories),
   updateCategory: (state,categories) => {
       const index = state.categories.filter(cat => cat.id == categories.id)
       state.categories.splice(index,1,categories)
   }
}

export default {
    state,getters,actions,mutations
}