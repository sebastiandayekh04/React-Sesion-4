import { ConsolaForeach } from './componentes/ConsolaForEach'
import { ViajesMap } from './componentes/Viajes'
import { ViajesFiltrados } from './componentes/ViajesFiltrados'
//import  viajes  from './viajes.json'

export default function App(){
  console.log("componente app cargando")
  //console.log(viajes)
  return( 
    <>
    <div><h1>Titulo principal</h1></div>
    <div><p>Que pasa por tu casa</p></div>
    <ConsolaForeach/>
    <ViajesMap/>
    <ViajesFiltrados/>
    </>
)
}

