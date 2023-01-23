let vm = Vue.createApp({
  data() {
    return {
      mode: 1,
      birds: ["Pigeons", "Eagles", "Doves", "Parrots"],
      people: [
        { name: "John", age: 20 },
        { name: "Rick", age: 18 },
        { name: "Amy", age: 33 },
      ],
    };
  },
}).mount("#app");
