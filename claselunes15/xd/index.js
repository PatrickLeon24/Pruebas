function main() {

    document.write("HOLA")
    let num = 10
    let nombre = "Edgar"
    let serHumano = true
    let altura = 1.70
    let listado = [9, 9, 9]


    let objetos1 = {
        nombre: "julericius",
        edad: 25,
        codigo: "2011454"

    }
    let objetos = {
        nombre: "juler",
        edad: 25,
        codigo: "2011454",
        obje: objetos1

    }
    let datoNulo= null
    let indefinido=undefined
    document.write(listado)
    console.log(listado[1])

}


function saludar() {
    alert("Hola mundo");
}
saludar()
main()


