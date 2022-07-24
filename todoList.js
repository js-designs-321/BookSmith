var task = document.getElementById('task');
var submitBtn = document.getElementById('submit-button');
var tasks = document.getElementById('tasks');
var taskList = document.getElementsByTagName("LI");
var deleteTask = document.getElementsByClassName("delete");

submitBtn.addEventListener('click',function(){
    if(task.value == ''){
        alert('Please write something ... '); 
        return;
    }
    var li = document.createElement("LI");
    var t = document.createTextNode(task.value);
    li.appendChild(t);
    tasks.appendChild(li);
    task.value = ""; 
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < deleteTask.length; i++) {
        deleteTask[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
});