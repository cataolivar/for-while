//FOR

for (let i=0; i<10; i++) 
{
    console.log (i + 1);
}

//WHILE

let entrada = prompt("Ingresar un dato");

while(entrada != "x")
{
    alert("El usuario ingreso " + entrada);
    entrada = prompt("Ingrese otro dato");
}