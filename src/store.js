import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    items: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    async addItem(context, data) {
      try {
        await axios.post("/api/items", data);
      } catch (error) {
        console.log(error);
      }
    },
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getItems(context, data) {
      try {
        let response = await axios.get("/api/items/" + data.book);
        context.commit('setItems', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async completeItem(context, data) {
      try {
        let response = await axios.put("/api/items", data);
        context.commit('setItems', response.data);
      } catch (error) {
        console.log(error);
      }
    },
  }
});