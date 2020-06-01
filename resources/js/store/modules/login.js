const state = {
    auth: [],
}

const getters = {
    authUser: state => state.auth
}

const actions = {

    async authUserAction({commit}) {
        await commit('authUserMutate',state.auth)
    },
    async postLogin({commit},data) {
        await axios.post('/login',data).then(response => {
            commit('authenticate',response.data)
        })
        .catch(err => console.log(err))
    }
}

const mutations = {
    authenticate: (state,user) => state.user = user,
    authUserMutate: (state,user) => state.user = user,
}

export default  {
    state,getters,actions,mutations
}