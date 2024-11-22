import  viajes  from '../viajes.json'
export function ViajesFiltrados(){
    console.log("Cargando componente Viajes map")
    console.log(viajes)
    const filtrados = viajes.filter((item, index) => {
         console.log("Elemento:", index, "Destino:", item.id);
         return item.id != 2
     }); 
     console.log(filtrados);


    return(
        <div style={{border: "1px solid black"}} className="componente">
            <h3> Vista viajes Filtrados</h3>
            <ul>
            {
                filtrados.filter(function(item,index){
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