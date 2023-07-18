
class ContadordePalabras {
    
    wordsSp = ["que","de","no","a","la","el","es","y","en","lo","un","por","qué","me","una","te","los","se","con","para","mi","está","si","bien","pero","yo","eso","las","sí","su","tu","aquí","del","al","como","le","más","esto","ya","todo","esta","vamos","muy","hay","ahora","algo","estoy","tengo","nos","tú","nada","cuando","ha","este","sé","estás","así","puedo","cómo","quiero","sólo","soy","tiene","gracias","o","él","bueno","fue","ser","hacer","son","todos","era","eres","vez","tienes","creo","ella","he","ese","voy","puede","sabes","hola","sus","porque","dios","quién","nunca","dónde","quieres","casa","favor","esa","dos","tan","señor","tiempo","verdad","estaba"]

    wordsEn = ["the","of","and","to","a","in","for","is","on","that","by","this","with","i","you","it","not","or","be","are","from","at","as","your","all","have","new","more","an","was","we","will","home","can","us","about","if","page","my","has","search","free","but","our","one","other","do","no","information","time","they","site","he","up","may","what","which","their","news","out","use","any","there","see","only","so","his","when","contact","here","business","who","web","also","now","help","get","pm","view","online","c","e","first","am","been","would","how","were","me","s","services","some","these","click","its","like","service","x","than","find"]
    

    wordCounter(paragraph, omitCommonWords=false) 
    {
    paragraph = paragraph.replace(/[¡!“”"#$%&'()*+,-./:;<=>¿?@[\]^_`{|}~]/g,"") //se quitan todos los simbolos de puntuacion de las palabras
    paragraph = paragraph.replace(/\s{2,}/g," ") //se reemplazan lo espacios multiples por un espacio
    let paragraphList=paragraph.toLowerCase().split(' ') //se crea un array de palabras en minuscula separando palabras en base a los espacios
    let counter={} //objeto que almacenara los set de key value con palabras y sus frecuencias
    let contadorFor=1
    
    if (omitCommonWords==true) {
        paragraphList = paragraphList.filter((word => !(this.wordsSp.includes(word) ))) //se filtran las palabras comunes, primero en espa;ol y luego en ingles
        paragraphList = paragraphList.filter((word => !(this.wordsEn.includes(word) )))

    }
    
    for (const key in paragraphList) 
    {
        if (counter[paragraphList[key]]==undefined) // crear un nuevo set de key value si la palabra paragraphList[key] no esta en el obj counter 
        {
            counter[paragraphList[key]]=0
        }
    }
    
    for (let word in paragraphList) //incrementar el contador si key1 coincide con word de paragraphList 
    {
        contadorFor+=1
        for (let key1 in counter) 
        {
            if (paragraphList[word]==key1)  
            {
                counter[paragraphList[word]]+=1 
            } 
            
        }   
                                
    }
    return counter // devuelve un objeto counter sets de key values de cada palabra y su frecuencia
    }

    sortArray(counterObj) {
        let twoDimArray=[]
        for (const key in counterObj) {
            twoDimArray.push([key, counterObj[key]])
        }
        twoDimArray.sort(function (firstElement, secondElement){
            return secondElement[1] - firstElement[1]
        })
        return twoDimArray //devuelve array bidimensional ordenado con key (string) y value (int)
    }

    printAsciiBarChart(twoDimArray) {
        let output=''
        output +=`Cantidad de palabras contabilizadas: ${twoDimArray.length}<br>`
        let longestWord = ''
        for (const key in twoDimArray) { //se busca la palabra mas larga y se la almacena en longestWord
            if (twoDimArray[key][0].length > longestWord.length) {
                console.log(`${twoDimArray[key][0]} > ${longestWord.length}`)
                longestWord = twoDimArray[key][0]
            }
        }
        console.log (`longestWord = ${longestWord}`)
        for (const i in twoDimArray) 
            {
                let symbol =`#` 
                let frequency = symbol.repeat(twoDimArray[i][1]) // se repite symbol tantas veces como sea frecuente la palabra
                let percentage = twoDimArray[i][1]/twoDimArray.length*100 // porcentaje sobre el total
                let paddingS = '-'
                let paddingM = paddingS.repeat(longestWord.length - twoDimArray[i][0].length) //'padding' calculado en base a la palabra mas larga para que la salida de texto sea pareja
                console.log(`${twoDimArray[i][0]} ${frequency} ${twoDimArray[i][1]}`)
                output += `${twoDimArray[i][0]}${paddingM} |${frequency} ${twoDimArray[i][1]} | ${percentage.toFixed(2)}% <br>`
            }
            return output
        }
}

