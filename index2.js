function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // This condition controls the empty string
    if (!taskInput.value.trim()) {
        return alert("Todo can't be empty");
    }

    // Create list item for unordered list
    var li = document.createElement("li");
    li.textContent = taskInput.value; // Fixed "Value" to "value"

    // Create a remove button
    var removeBtn = document.createElement("button"); // Fixed "documnet" to "document"
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Adding click event to mark task as completed
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the new task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
