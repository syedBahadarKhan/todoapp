function addTask(){
    var taskInput = document.getElementById("taskinput");
    var taskList = document.getElementById("tasklist");

    //this condition control the empty string
      if(!taskInput.value.trim()){
        return alert("todo can't be Empty")
      }


    //here we create list item for unorder list
    var li = document.createElement("li");
    li.textContent = taskInput.Value;


    //here we create a remove button

var removeBtn=documnet.createElement("button");
removeBtn.textContent="Remove";
removeBtn.className="remove-btn";
removeBtn.onclick = function() {
    taskList.removeChild("li");

};


    //adding click event
li.onclick = function() {
    li.classList.toggle("completed");
};

      //here the remove buton is appended
      li.appendChild(removeBtn);

      //this will show our task added by append method
      taskList.appendChild(li);

      //for clear the input field
      taskInput.value="";


}