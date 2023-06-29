var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");
var counter = 1;

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});

function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = '<span class="delete-button">X</span>' + convertToRomanNumerals(counter) + '. ' + taskText;
    taskList.appendChild(li);

    taskInput.value = "";
    counter++;
}

function convertToRomanNumerals(num) {
    var romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    var result = "";
    for (var i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    return result;
}

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        var li = event.target.parentNode;
        taskList.removeChild(li);
    }
});
