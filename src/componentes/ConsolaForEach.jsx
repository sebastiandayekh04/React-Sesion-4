import  viajes  from '../viajes.json'
export function ConsolaForeach(){
    console.log("Cargando componente ConsolaForeach")
    //console.log(viajes)
   // viajes.forEach(function(item, index) {
   // console.log("Elemento:", index, "Destino:", item.destino);
//});

    return (
        <div style={{border: "1px solid black"}} className="componente">
            <h3>Vista consola foreach</h3>
        </div>
)
}

//viajes.forEach(function(  ){    elemento, index     })
//array.forEach(function(  ){    interaccion, index de la interaccion     })