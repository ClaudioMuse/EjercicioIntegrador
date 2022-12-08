function determinarTotal(){
    console.log("Ingreso a Determinar Total")
    let total = 0
    console.log(total)
    let entrada = 200
    console.log(entrada)
    let x = document.getElementById("cantidad").value;
    let y = document.getElementById("categoria").value;
    
    console.log(x);
    console.log(y);
    

    if (y==0){
        total = x * (entrada * 0.2)
        console.log(total);
    } else if (y==1){
        total = x * (entrada * 0.5)
        console.log(total);
    } else if (y==2){
        total = x * (entrada * 0.85)
        console.log(total); 
    }

    let z = (x * entrada) - total
    console.log(z);


    document.getElementById("total").innerHTML="Total a pagar: $ "+z;


}