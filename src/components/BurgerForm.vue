<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div class="form-container">
     
        <form id="burger-form" @submit="createBurger">
          <div class="input-container">
            <label for="nome">Nome do cliente:</label>
            <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
          </div>
          <div class="input-container">
            <label for="pao">Escolha seu pão:</label>
            <select name="pao" id="pao" v-model="pao">
              <option value="">Selecione o seu pão</option>
              <option v-for="var_pao in paes" :key="var_pao.id" :value="var_pao.tipo">{{ var_pao.tipo }}</option>
            </select>
          </div>
          <div class="input-container">
            <label for="pontoDaCarne">Escolha o ponto da sua carne:</label>
            <select name="pontoDaCarne" id="pontoDaCarne" v-model="pontoDaCarne">
              <option value="">Selecione o ponto carne</option>
              <option v-for="var_carne in pontoCarne" :key="var_carne.id" :value="var_carne.tipo">{{ var_carne.tipo }}</option>
            </select>
          </div>
        </form>
     
     
        <form id="burger-form" @submit="createBurger">
          <div class="input-container">
            <label for="batata">Escolha sua Batata:</label>
            <select name="batata" id="batata" v-model="batata">
              <option value="">Selecione sua batata</option>
              <option v-for="var_batata in batatas" :key="var_batata.id" :value="var_batata.tipo">{{ var_batata.tipo }}</option>
            </select>
          </div>
          <div class="input-container">
            <label for="bebida">Escolha sua Bebida:</label>
            <select name="bebida" id="bebida" v-model="bebida">
              <option value="">Selecione sua bebida</option>
              <option v-for="var_bebida in bebidas" :key="var_bebida.id" :value="var_bebida.tipo">{{ var_bebida.tipo }}</option>
            </select>
          </div>
          <div id="toppings-container" class="input-container">
            <label id="toppings-title" for="topping">Toppings:</label>
            <div class="checkbox-container" v-for="var_topping in toppings" :key="var_topping.id">
              <input type="checkbox" name="topping" v-model="topping" :value="var_topping.tipo">
              <span>{{ var_topping.tipo }}</span>
            </div>
          </div>
        </form>
        
        <div class="input-container">
            <input type="submit" class="submit-btn" value="Criar Burger!">
          </div>
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
      batatas: null,
      bebidas: null,
      nome: null,
      // Armazenam as escolhas especificas do usuário 
      pao: null,
      pontoDaCarne: null,
      topping: [],
      batata: null,
      bebida: null,
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
      this.batatas = data.batatas;
      this.bebidas = data.bebidas;
      this.toppings = data.toppings;
    },

    async createBurger(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        pontoDaCarne: this.pontoDaCarne,
        pao: this.pao,
        topping: Array.from(this.topping),
        batata: this.batata,
        bebida: this.bebida,
        status: "Solicitado"
      }

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      this.batata = "";
      this.bebida = "";
    }
  },
  mounted() {
    this.getIngredientes();
  }
}
</script>

<style scoped>

.form-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 820px;
  margin: auto;
}

#burger-form {
  width: calc(45% - 35px);
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  justify-content: center;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
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
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 18px;
  font-size: 26px;
  cursor: pointer;
  transition: .5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>