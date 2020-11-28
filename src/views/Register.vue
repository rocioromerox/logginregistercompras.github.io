<template>
  <div class="row row-loggin">
          <!--Recuadro del lado izquierdo con imagen-->
          <div class="col-sm-8 sm-8"> 
            <div><img class="col-sm-8-img-1" align="left" src="../assets/Grupo 17590.png"></div>
            <div><h2 class="col-sm-8-tittle">¡Explota todo tu potencial <br> tecnológico!</h2></div>
            <div><p class="col-sm-8-text">Con nuestros programas <br> de especialización</p></div>
            <div class="col-sm-8-img-2"><img src="../assets/Grupo 17720.png"></div>
          </div>

          <!--Recuadro del lado derecho-->
          <div class="col-sm-4 sm-4"> 
            
            <div>

                <div class="col-sm-4-header">
                  <button class="col-sm-4-header-text-session">Iniciar sesión</button>
                  <button class="col-sm-4-header-text-register">Registrarse</button>
                </div>

                <!--FORMULARIO-->
                <form @sumbit.prevent='crearUsuarioAction({email:email, password:pass1})'>
                    
                <div class="col-sm-4-body">
                  <div><input class="col-sm-4-body-input-1" type="text" placeholder="Nombres y apellidos" required v-model="name"></div>
                  <div><input class="col-sm-4-body-input-2" type="email" placeholder="Correo electrónico" v-model="email" required></div>
                  <div><input class="col-sm-4-body-input-3 input-password" type="password" placeholder="Contraseña" v-model="pass1" required></div>
                  <div><input class="col-sm-4-body-input-4 input-password" type="password" placeholder="Repite contraseña" v-model="pass2" required></div>
                  
                  
                  <!--Términos y condiciones con modal-->
                  <label><input class="checkbox-terms" type="checkbox" value="first_checkbox" required><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Acepto <span class="checkbox-terms-span">los términos y condiciones</span></button></label>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Términos y condiciones</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <p class="modal-body-text" align="left" >Los términos y condiciones de uso describen todos los términos y condiciones de carácter general que resultan aplicables al uso de aquellos contenidos o servicios disponibles bajo el dominio y subdominios de www.idat.edu.pe.
                            Cuando el usuario accede a esta página web o cuando consulta la información que se encuentra contenida en ella, reconoce no solo que ha leído, sino que también ha entendido y aceptado, los términos y condiciones generales que se desarrollan a continuación.
                            En caso de no aceptarlos, se le solicita que no haga uso, ni acceda, ni manipule la información de los servicios ofrecidos por el sitio web, ya que en condición de usuario estaría haciendo un uso inadecuado de éste.
                            Todos los derechos de propiedad intelectual de la página web son de propiedad de Idat.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div><button class="btn-loggin-2" type="submit">Registrarse</button></div>
                </div> 
                
                </form>
                 
                 <div><p>{{error}}</p></div> 
                                
            </div>

          </div>
             
  </div>
</template>


<script scoped>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Register',

  data(){
    return {
      
      name: '',
      email: '',
      pass1: '',
      pass2: ''
      
    }
  },

  methods: {
      ...mapActions(['crearUsuarioAction'])
  },

  computed: {
      ...mapState(['error'])
  },
}
</script>

<style>

* { box-sizing: border-box;
}

.row-loggin {
  width: 100%;
  height: 660px;
}

.sm-8, .sm-4 {
  padding: 0;
  height: 660px;
}

/*Estilo del recuadro del lado izquierdo con imagen*/

.sm-8{
  width: 100%;
  background-image: url("../assets/Grupo 17721.png"); width: 50%px; height: 50%px;
}

.col-sm-8-img-1 {
  margin: 20px 0px 0px 80px;
  text-align: left;
}

.col-sm-8-tittle {
  text-align: right;
  color: #FFFFFF;
  margin: 250px 80px 0px 0px;
  font-size: 26px;
  font-weight: bold;
}

.col-sm-8-text {
  font-size: 16px;
  color: #FFFFFF;
  margin: 20px 80px 0px 0px;
  text-align: right;
}

.col-sm-8-img-2 {
  margin: 150px 0px 20px 80px;
  text-align: left;
}

/*Estilo del recuadro del lado derecho*/


.col-sm-4-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  border: 1px solid gray;
  background-color: white;
  
}

.col-sm-4-header-text-session, .col-sm-4-header-text-register {
  margin: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  cursor: pointer;
  border: none;
  background: white;
}


.col-sm-4-body {
  width: 100%;
  height: 600px;
  background-color: white;
  border: 1px solid gray;
  padding: 60px 40px 0px 40px;
}

.col-sm-4-body-input-1,.col-sm-4-body-input-2, .col-sm-4-body-input-3, .col-sm-4-body-input-4 {
  width: 350px;
  height: 50px;
  border: 1px solid #8B9099;
  border-radius: 5px;
}

.col-sm-4-body-input-1  {
  margin: 150px 0px 5px 0px;
}

.col-sm-4-body-input-2 {
 margin: 5px 0px 5px 0px;
}

.col-sm-4-body-input-3 {
 margin: 5px 0px 5px 0px;
}

.col-sm-4-body-input-4 {
 margin: 5px 0px 5px 0px;
}

.col-sm-4-body-firsttext{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10px;
  color: #F22A40;
  text-align: right;
  margin: 5px 65px 0px 0px
}

.checkbox-terms{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    color: #222222;
}

.checkbox-terms-span {
    font-weight: bold;
    text-decoration: underline;
}

.btn-loggin-2 {
  width: 350px;
  height: 50px;
  background-color: #5640FF;
  border-radius: 10px;
  border: 1px solid #5640FF;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 40px 0px 0px 0px;
}

.input-password {
  background-image: url('../assets/eye.png');
  background-repeat: no-repeat;
  background-position: right;
  cursor: pointer;
}

/*Estilos del modal*/ 
.btn-primary {
  border: none;
  color: #222222;
  background-color: white;
}

.btn-primary:hover{  
       border: none;
       color: white; 
       background-color: #5640FF;
       margin: 0;
}



/*Versión celular*/

@media screen and (max-width: 600px) {
.sm-8 {
display:none;
}

}


</style>