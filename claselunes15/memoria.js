let simbolos = ["&#129300;", "&#128526;","&#128528;"]
document.write("ay")
let listaCasillas=[]

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
            but.innerHTML= casilla.simbolo
            
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