<template>
<div>
  <h1>Philemon</h1>
  <div v-if="user" class="header">
    <div>
      <h2>{{user.name}}</h2>
    </div>
    <div class="button">
      <p><button @click=" logout" class="pure-button pure-button-primary">Logout</button></p>
    </div>
    <form @submit.prevent="addItem">
      <input type="text" v-model="text">
      <button type="submit">Add</button>
    </form>
    <div class="controls">
      <button @click="showAll()">Show All</button>
      <button @click="showActive()">Show To Study</button>
      <button @click="showCompleted()">Show Completed</button>
    </div>
    <ul>
      <li v-for="item in filteredItems">
        <label :class="{ item: true, completed: item.completed }">
          {{ item.text }}
          <input type="checkbox" v-model="item.completed" @click="completeItem(item)" />
          <span class="checkmark"></span>
        </label>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>If you would like to study, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'philemon',
  data() {
    return {
      text: '',
      completed: false,
      show: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    activeItems() {
      return this.items.filter(item => {
        return !item.completed;
      });
    },
    items() {
      return this.$store.state.items;
    },
    filteredItems() {
      if (this.show === 'active')
        return this.items.filter(item => {
          return !item.completed;
        });
      if (this.show === 'completed')
        return this.items.filter(item => {
          return item.completed;
        });
      return this.items;
    },
  },
  created() {
    this.$store.dispatch("getUser");
    this.$store.dispatch("getItems", {
      book: 'Philemon'
    });
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    showAll() {
      this.show = 'all';
    },
    showActive() {
      this.show = 'active';
    },
    showCompleted() {
      this.show = 'completed';
    },
    addItem() {
      this.$store.dispatch("addItem", {
        text: this.text,
        completed: this.completed,
        book: 'Philemon',
      });
      this.text = "";
      this.completed = false;
      this.$store.dispatch("getItems", {
        book: 'oneCorinthians'
      });
    },
    completeItem(item) {
      this.$store.dispatch("completeItem", {
        id: item.id,
        text: item.text,
        completed: !item.completed,
        book: 'Philemon',
      });
    }
  }
}
</script>

<style scoped>
.pure-button {
  margin: 0px 20px;
}

.header {
  display: flex;
}

.header .button {
  margin-left: 50px;
  order: 2;
}

body {
  font-family: 'Arvo';
  font-size: 16px;
  padding: 20px 100px 0px 100px;
  background: #f3f3f3;
}

/* List */
ul {
  list-style: none;
}

li {
  background: #fff;
  width: 500px;
  min-height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1em;
  display: flex;
  align-items: center;
}

.delete {
  display: none;
  margin-left: auto;
}

li:hover .delete {
  display: block;
}

label {
  width: 400px;
}

.completed {
  text-decoration: line-through;
}

/* Form */
input[type=checkbox] {
  transform: scale(1.5);
  margin-right: 10px;
}

input[type=text] {
  font-size: 1em;
}

button {
  font-family: 'Arvo';
  font-size: 1em;
}

/* Controls */
.controls {
  margin-top: 20px;
}

/* Custom checkbox
/* Customize the label (the container) */
.item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.item:hover input~.checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.item input:checked~.checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.item input:checked~.checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.item .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
