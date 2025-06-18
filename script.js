const students = {
    advanced: [
        "Laura", "Sophie", "Camden", "Presley", "Catalina",
        "Natalie", "Zara", "Addie", "Sasha", "Dylan", "Dakota", "Adella", "Darian"
    ],
    cs1: [
        "Charlotte", "Claire", "Bella", "Sabrina", "Rowan", "Colette"
    ],
    art: [
        "Sophie H", "Avery", "Sophie S", "Nicole", "Jet", "Abigail"
    ]
}

// Durstenfeld shuffle
function shuffle(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function generatePairs() {
    const classSelector = document.getElementById("classSelector");
    const selectedClass = classSelector.value;
    const studentList = students[selectedClass];
    const resultDiv = document.getElementById("result");
  
    const times = Math.floor(Math.random() * 50)
    for (let i = 0; i < times; i++) {
      shuffle(studentList)
    }

    // Create pairs and handle the last student if there's an odd number
    let pairs = "";
    const length = studentList.length;
    for (let i = 0; i < length; i += 2) {
        if (i + 1 < length) {
            pairs += `<p>${studentList[i]} & ${studentList[i + 1]}</p>`;
        } else {
            pairs += `<p>${studentList[i]}</p>`;
        }
    }

    resultDiv.innerHTML = pairs;
}

