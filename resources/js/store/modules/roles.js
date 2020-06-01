const state = {

    roles: []
}

const getters = {
    
    allRoles: state => state.roles

}

const actions = {

    async fetchAllRoles ({commit}) {

        await axios.get(`/api/roles-fetch-data`).then(response => {
            commit('FetchAllRoles',JSON.parse(Base64.decode(response.data)))
        })
            
    },

    async addRole({commit}, data) {
        await axios.post(`/api/roles-store-data`,data).then(response => {
            commit('AddRole',JSON.parse(Base64.decode(response.data)))
        })
        
    },

    async deleteRole({commit}, id) {
        let payload =  { id: id }
        await axios.delete(`/api/roles-delete-data`,{ data: payload }).then(response => {
            commit('DeleteRole',JSON.parse(Base64.decode(response.data)))
        })
    },

    async updateRole({commit}, data) {
        
        await axios.patch(`/api/roles-update-data`,{ data }).then(response => { 
            commit('UpdateRole',JSON.parse(Base64.decode(response.data)))
        })
    }

}

const mutations = {
  
    FetchAllRoles: (state,roles) =>  state.roles = roles.sort().reverse(),
    AddRole: (state,role) => state.roles.unshift(role),
    DeleteRole: (state,role) => state.roles = state.roles.filter(stateRole => stateRole.id !== role),
    UpdateRole: (state,role) => {

        const index = state.roles.filter(stateRole => stateRole.id == role.id)
        state.roles.splice(index, 1 , role)
    },

}

export default {

    state,getters,actions,mutations

}