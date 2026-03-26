function addTask(){

let title=document.getElementById("title").value;

let description=document.getElementById("description").value;

let status=document.getElementById("status").value;

let date=document.getElementById("date").value;

let error=document.getElementById("error");

let empty=document.getElementById("emptyMessage");

if(title===""){

error.innerText="Task title is required";

return;

}

error.innerText="";

empty.style.display="none";

let statusClass="todo";

if(status==="In Progress")

statusClass="progress";

if(status==="Done")

statusClass="done";

let li=document.createElement("li");

li.className="task";

li.innerHTML=

`<div>

<h4>${title}</h4>

<p class="desc">${description}</p>

<p class="${statusClass} badge">

${status}

</p>

<p class="date">

Due: ${date}

</p>

</div>

<button class="delete"
onclick="deleteTask(this)">
Delete
</button>`;

document.getElementById("taskList")
.appendChild(li);

document.getElementById("title").value="";

document.getElementById("description").value="";

document.getElementById("date").value="";

}



function deleteTask(button){

button.parentElement.remove();

let list=document.getElementById("taskList");

if(list.children.length===0){

document
.getElementById("emptyMessage")
.style.display="block";

}

}
