<template>
    
      <div class="row row-loggin">

          <div class="col-sm-8 sm-8"> <!--Recuadro del lado izquierdo con imagen-->
            <div><img class="col-sm-8-img-1" align="left" src="../assets/Grupo 18222@2x2.png"></div>
            <div><h2 class="col-sm-8-tittle">¡Explota todo tu potencial <br> tecnológico!</h2></div>
            <div><p class="col-sm-8-text">Con nuestros programas <br> de especialización</p></div>
            <div class="col-sm-8-img-2"><img src="../assets/Grupo 17720.png"></div>
          </div>


          <div class="col-sm-4 sm-4"> <!--Recuadro del lado derecho-->
            
            <div>

                <div class="col-sm-4-header">
                  <div class="col-sm-4-header-text">Iniciar sesión</div>
                  <div class="col-sm-4-header-text">Registrarse</div>
                </div>

                <div class="col-sm-4-body">
                  <div><input class="col-sm-4-body-input-1" type="email" placeholder="Correo electrónico"></div>
                  <div><input class="col-sm-4-body-input-2 inputpassword" type="password" placeholder="Contraseña"></div>
                  <div class="col-sm-4-body-firsttext"><p>Ingresa un correo válido</p></div>
                  <div><button class="btn-loggin" type="submit">Ingresar</button></div>
                  <div class="col-sm-4-body-secondtext"><p>¿Olvidaste tu contraseña?</p></div>
                </div>

            </div>
             
          </div>
          


      </div>
    
    



</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Loggin',
  components: {
    HelloWorld
  }
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

.col-sm-4-header-text {
  margin: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  cursor: pointer;

}

.col-sm-4-body {
  width: 100%;
  height: 600px;
  background-color: white;
  border: 1px solid gray;
}

.col-sm-4-body-input-1,.col-sm-4-body-input-2 {
  width: 350px;
  height: 50px;
  border: 1px solid #8B9099;
  border-radius: 5px;
}

.col-sm-4-body-input-1 {
  margin: 150px 0px 10px 0px;
}

.col-sm-4-body-firsttext{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10px;
  color: #F22A40;
  text-align: right;
  margin: 5px 65px 0px 0px
}

.btn-loggin {
  width: 350px;
  height: 50px;
  background-color: #5640FF;
  border-radius: 10px;
  border: 1px solid #5640FF;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 150px 0px 0px 0px;
}

.col-sm-4-body-secondtext {
  font-size: 12px;
  font-weight: bold;
  color: #5640FF;
  text-decoration: underline;
  justify-items: flex-end;
  margin: 10px 0px 0px 0px;
  cursor: pointer;
}



/*Versión celular*/

@media screen and (max-width: 600px) {
.sm-8 {
display:none;
}
}


</style>

