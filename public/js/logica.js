function logica() {
        const entryText = document.getElementById('entry').value
        const omitCommonWords = document.getElementById('omit').checked
        const contador = new ContadordePalabras()
        const counter = contador.wordCounter(entryText,omitCommonWords)
        const sorted_array = contador.sortArray(counter)
        const output = contador.printAsciiBarChart(sorted_array)
        document.getElementById("results").innerHTML = output
    }