let simbolos = ["&#129300;", "&#128526;","&#128528;"]

let listaCasillas=[]


let casillaTurnoAnterior=null

let numeroTurno=1
function CrearCasillas(){

    
    for (let i = 0; i < simbolos.length; i++) {
        let casilla1= {
            simbolo: simbolos[i],
            mostrandoSimbolo: false

        }   
        let casilla2={
            simbolo: simbolos[i],
            mostrandoSimbolo: false
        }
        listaCasillas.push(casilla1) 
        listaCasillas.push(casilla2)     
        
    }


}
function devolverCasilla(row,col){
    const pos = (row*3)+col
    return listaCasillas[pos]
}
function ponerSimbolosCasillas(){
    for (let i = 0; i < 2; i++) {
        
        for (let j = 0; j < 3; j++) {
            const but =document.getElementById(i+"_"+j)
            const casilla =devolverCasilla(i,j)
            if (casilla.mostrandoSimbolo) {
                but.innerHTML= casilla.simbolo
            }
            else{
                but.innerHTML= "UL"
            }
            
            
        }
        
    }
}

function mostrarEnCasoDeError() {
    
}
let casillaId=[]
function casillaOnClick(i,j){
    console.log("Hizo Click")
    
    const casilla =devolverCasilla(i,j)
    
    if (numeroTurno==1) {
        numeroTurno=2
        casilla.mostrandoSimbolo=true
        casillaTurnoAnterior=casilla
        
        casillaId.push(i)
        casillaId.push(j)
        


        ponerSimbolosCasillas()
    }
    else{
        
        casilla.mostrandoSimbolo=true
        
        if (casillaTurnoAnterior.simbolo != casilla.simbolo) {
            //ocultarse
            
            
            ponerSimbolosCasillas()

            setTimeout(function(){

                casilla.mostrandoSimbolo=false
                casillaTurnoAnterior.mostrandoSimbolo=false
                ponerSimbolosCasillas()
                casillaTurnoAnterior=null
                numeroTurno=1
            }, 2000)
            console.log("sigma Click")
            casillaId.pop()
            casillaId.pop()
        }
        else{

            casillaTurnoAnterior=null
            
            ponerSimbolosCasillas()
            
            let antiCheat1 =document.getElementById(i+"_"+j)
            let antiCheat2 =document.getElementById(casillaId[0]+"_"+casillaId[1])
            console.log(i+"_"+j)
            console.log(casillaId[0]+"_"+casillaId[1])

            antiCheat1.disabled= true
            antiCheat2.disabled= true
            casillaId.pop()
            casillaId.pop()
            console.log(casillaId[0]+"_"+casillaId[1])
            numeroTurno=1
            
        }
        

    }
    

}
function main(){
    CrearCasillas()
    console.log(listaCasillas)
    const casilla = devolverCasilla(1,0)
    console.log(casilla)
    const but= document.getElementById("0_0")
    console.log(but)
    ponerSimbolosCasillas()
}
main()