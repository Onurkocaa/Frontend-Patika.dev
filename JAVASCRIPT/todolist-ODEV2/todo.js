btnDOM = document.querySelector("#liveToastBtn");
listDOM = document.querySelector("#list");
taskDom = document.querySelector("#task");

ullength = document.getElementsByTagName("li");

for(let i =0; i<ullength.length;i++)
{
    let closeButton=document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close")
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton)
    ullength[i].onclick = check;
}
btnDOM.addEventListener('click', toDoEkle);

function check()
{
    this.classList.toggle("checked");
}
function removeButton()
{
    this.parentElement.remove();
}

function toDoEkle()
{
    if(taskDom.value =="")
    {
        $('.error').toast('show');
    }
    else{
        let lidom = document.createElement('li');
        lidom.innerHTML=taskDom.value;
        listDOM.appendChild(lidom); 
        $('.success').toast('show');
        localStorage.setItem('text',taskDom.value)    
        taskDom.value=""

        lidom.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        lidom.append(closeButton);
        lidom.append(lidom);
        inputElement.value = ("");
    }
}