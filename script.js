//2
let message = "Bonjour!"
console.log(message)

let firstname = "beyonce"

message = "Bonjour " + firstname + " !" //je reprends la valeur de de ma variable message "bonjour" et j'y rajoute également ma nvl variable car je veux qu'il y affiche la valeur également 

console.log(message)


//3
/*Encapsule ton code précédent dans une fonction nommée sayHello()
Appelle la fonction sayHello() dans ton code pour t’assurer que tout continue de fonctionner.
Tu devrais toujours avoir le message Bonjour Beyonce ! qui s’affiche dans la console.
Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
Exécute ton code. Tu devrais obtenir dans ta console Bonjour undefined ! 🤔
Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !
*/


function sayHello(firstname){

    let message = "Bonjour!"

    console.log(message)
    
  // j'ai supprimer la varible let firstname = "beyonce"
    
    message = "Bonjour " + firstname + " !"
    
    console.log(message)

}

    

message = ("Bonjour "+ firstname + " !")

sayHello ("beyonce") //j'ai redéfini le paramètre de la valeur 
















