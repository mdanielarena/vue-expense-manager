import Vuex from 'vuex'
import Vue from 'vue';
import roles from './modules/roles'
import users from './modules/users'
import expenseCategories from './modules/expenseCategories'
import expense from './modules/expenses'
import resetPassword from './modules/resetPassword'
import login from './modules/login'
import dashboard from './modules/dashboard'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        roles,
        users,
        expenseCategories,
        expense,
        resetPassword,
        login,
        dashboard
    }
})