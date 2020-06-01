import Axios from "axios"

const state = {
    users: [],
    roles: []
}

const getters = {
    allUsers: state => state.users,
    userRoles: state => state.roles
}

const actions = {

    async fetchUsers ({commit}) {
        await axios.get(`${url}/api/users-fetch-data`).then(response => {
            commit('FetchUsers',JSON.parse(Base64.decode(response.data)))
        })
    },

    async fetchRoles ({commit}) {
        await axios.get(`${url}/api/roles-fetch-data`).then(response => {
            commit('FetchRoles',JSON.parse(Base64.decode(response.data)))
        })
    },

    async addUser ({commit}, postData) {
        await axios.post(`/api/users-add-user`,postData).then(response => {
            commit('AddUser',JSON.parse(Base64.decode(response.data)))
        })
    },

    async deleteUser ({commit}, postData) {
        await axios.delete(`/api/users-delete-user`,{data: postData}).then(response => {
            commit('DeleteUser',JSON.parse(Base64.decode(response.data)))
        })
    },

    async updateUser ({commit}, data) {
        await axios.patch(`/api/users-update-user`,{data}).then(response => {
            commit('UpdateUser',JSON.parse(Base64.decode(response.data)))
        })
    }
}

const mutations = {
    FetchUsers: (state,users) => state.users = users.sort().reverse(),
    FetchRoles: (state,roles) => state.roles = roles.sort().reverse(),
    AddUser: (state,user) => state.users.unshift(user),
    DeleteUser: (state,user) => state.users = state.users.filter(stateUser => stateUser.id !== user),
    UpdateUser: (state,user) => {
        const index = state.users.filter(stateUser => stateUser.id == user.id)
        state.users.splice(index,1,user)
    }
}

export default {
    state,getters,actions,mutations
}