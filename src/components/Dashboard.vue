<template>
  <Message :msg="msg" v-show="msg"/>
  <div id="burger-table" v-if="burgers">
    <div>
      <div id="burger-table-heading">
        <div class="order-id">N° Pedido:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Batata:</div>
        <div>Bebida:</div>
        <div>Toppings:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div class="container">{{ burger.nome }}</div>
        <div class="container">{{ burger.pao }}</div>
        <div class="container">{{ burger.pontoDaCarne }}</div>
        <div class="container2">{{ burger.batata }}</div>
        <div class="container2">{{ burger.bebida }}</div>
        <div class="container3">{{ burger.topping }}</div>



        <ul v-for="(opcional, index) in burger.opcionais" :key="index">
          <li>{{ opcional }}</li>
        </ul>

        <div>
          <select name="status" class="status" @change="updateBurger($event, burger.id)">
            <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="burger.status == s.tipo">
              {{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Não há pedidos no momento!</h2>
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  name: "DashboardComponent",
  components: {
    Message
  },
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
      msg: null
    }
  },
  methods: {
    async getPedidos() {
      const req = await fetch('http://localhost:3000/burgers')

      const data = await req.json()

      this.burgers = data

      // Resgata os status de pedidos
      this.getStatus()

    },
    async getStatus() {

      const req = await fetch('http://localhost:3000/status')

      const data = await req.json()

      this.status = data

    },
    async deleteBurger(id) {

      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE"
      });

      const res = await req.json()

      // colocar uma msg de sistema
      this.msg = `Pedido N° ${res.id} removido com sucesso`;

      // limpar msg
      setTimeout(() => this.msg = "", 3000);

      console.log(res);

      this.getPedidos()

    },
    async updateBurger(event, id) {

      const option = event.target.value;

      const dataJson = JSON.stringify({ status: option });

      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      });

      const res = await req.json()

      // colocar uma msg de sistema
      this.msg = `Pedido N° ${res.id} atualizado com sucesso para ${res.status}`;

      // limpar msg
      setTimeout(() => this.msg = "", 3000);

      console.log(res)

    }
  },
  mounted() {
    this.getPedidos()
  }
}
</script>

<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading {
  display: flex;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#burger-table-heading>div {
  flex: 1;
}

.burger-table-row {
  font-size: small;
  text-align: left;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #CCC;
  
}

.container {
  text-align: left;
}

.container2 {
  text-align: left;
}

.container3 {
  text-align: left;
}

.burger-table-row>div {
  flex: 1;
}


select {
  padding: 12px 6px;
  margin-right: 12px;
  margin-bottom: 12px;
  margin-top: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  margin-bottom: 12px;
  font-size: 16px;
  width: 100px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>