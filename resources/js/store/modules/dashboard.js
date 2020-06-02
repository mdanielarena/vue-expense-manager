const state = {
   dashboard: []
}

const getters = {
   AllExpenses: state => state.dashboard
}

const actions = {

    async fetchExpenses({commit}) {
        await axios.get(`/api/dashboard`).then(res => {
            commit('Dashboard',JSON.parse(Base64.decode(res.data)))
        })
    }
}

const mutations = {
    Dashboard: (state,data) => state.dashboard = data,
}

export default {
    state,getters,actions,mutations
}