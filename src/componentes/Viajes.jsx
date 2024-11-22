import  viajes  from '../viajes.json'
export function ViajesMap(){
    //console.log("Cargando componente Viajes map")
   // console.log(viajes)
    const listaViajes = viajes.map((item, index) => {
       // console.log("Elemento:", index, "Destino:", item.destino);
        return 
    }); 
    console.log(listaViajes);
    return(
        <div style={{border: "1px solid black"}} className="componente">
            <h3> Vista viaje maps</h3>
          <ul>
            {
                listaViajes.map(function(item,index){
                    return(
                        <li key={index}>{
                            item
                            }</li>
                    )
                })
            }
          </ul>
        </div>
        
    )
   
}