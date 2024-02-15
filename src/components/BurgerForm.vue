<template>
  <div>
    <Message :msg="msg" v-show="msg"/>
    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome">Nome do cliente:</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
        </div>
        <div class="input-container">
          <label for="pao">Escolha seu pão:</label>
          <!--v-model irá armazenar a informação na variavel criada-->
          <select type="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
              <!-- nome v-for sempre será um nome generico -->
            <option v-for="var_pao in paes" :key="var_pao.id" :value="var_pao.tipo">{{ var_pao.tipo }}</option>
          </select>
        </div>
        <div class="input-container">
          <label for="pontoDaCarne">Escolha o ponto da sua carne:</label>
          <!--v-model irá armazenar a informação na variavel criada-->
          <select type="pontoDaCarne" id="pontoDaCarne" v-model="pontoDaCarne">
            <option value="">Selecione o ponto carne</option>
             <!-- nome v-for sempre será um nome generico -->
            <option v-for="var_carne in pontoCarne" :key="var_carne.id" :value="var_carne.tipo">{{ var_carne.tipo }}</option>
          </select>
        </div>
        <div id="toppings-container" class="input-container">
        <label id="toppings-title" for="topping">Toppings:</label>
         <!-- nome v-for sempre será um nome generico -->
        <div class="checkbox-container" v-for="var_topping in toppings" :key="var_topping.id">
          <!--v-model irá armazenar a informação na variavel criada-->
          <input type="checkbox" name="topping" v-model="topping" :value="var_topping.tipo">
          <span>{{ var_topping.tipo }}</span>
        </div>
      </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar um Burger!">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  name: "BurgerForm",
  components: {
    Message
  },
  data() {
    return {
      // Contem as opções diponiveis para seleção 
      paes: null,
      pontoCarne: null,
      toppings: null,
      nome: null,
      // Armazenam as escolhas especificas do usuário 
      pao: null,
      pontoDaCarne: null,
      topping: [],
      status: "Solicitado",
      msg: null
    }
  },
  methods: {
    async getIngredientes() {

      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.paes = data.paes;
      this.pontoCarne = data.pontoCarne;
      this.toppings = data.toppings;
    },
    
    async createBurger(e) {
      e.preventDefault();
     
      const data = {
        nome: this.nome,
        pontoDaCarne: this.pontoDaCarne,
        pao: this.pao,
        topping: Array.from(this.topping),
        status: "Solicitado"
      }

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJson
      });

      const res = await req.json();
      console.log(res)

      // colocar uma msg de sistema
      this.msg = `Pedido N° ${res.id} realizado com sucesso`;

      // limpar msg
      setTimeout(() => this.msg = "", 3000);

      // limpar os campos 
      this.nome = "";
      this.pontoDaCarne = "";
      this.pao = "";
      this.topping = "";
    }
  },
  mounted() {
    this.getIngredientes();
  }
}
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
  margin-right: 10px;
  margin-left: 10px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  ;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#toppings-container {
  flex-direction: row;
  flex-wrap: wrap;
}

#toppings-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
  
  margin-left: 0px;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>