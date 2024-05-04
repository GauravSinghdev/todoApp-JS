setInterval(showDate,10);

function showDate()
{

    console.log("hey")
    let a = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = a[date.getDay()];
    let x;

    if(hour>=12 && hour<=24)
    {
        x = "PM";
        hour = hour - 12;
    }
    document.getElementById("dt").innerHTML = `${day} - ${hour}:${min}:${sec} ${x}`
}


function checkValid(txt)
{
    if(txt == ""){
        alert("Todo is empty!");
        return false;
    }
    return true;
}


function showData()
{
    let alltodos;
    if(localStorage.getItem("alltodos") == null)
    {
        alltodos = [];
        
    }
    else{
        alltodos = JSON.parse(localStorage.getItem("alltodos"));
    }

    let html = "";

    alltodos.map((ele, indx) => {
        html += `<div class="todo-div">
                <p class="todo">${ele}</p>
                    <button onclick="deleteTodo(${indx})" 
                        class= "btn">
                        Del
                    </button>
                </div>`
    });
    document.getElementById("todos").innerHTML = html;

    if(html == "")
    document.getElementById("todos").innerHTML = `<p>Todos are empty</p>`
}
document.onload = showData();

function addTodo()
{
    let txt = document.getElementById("txt").value;

    if(checkValid(txt) == true)
    {
        let alltodos;
        if(localStorage.getItem("alltodos") == null)
        {
            alltodos = [];
        }
        else{
            alltodos = JSON.parse(localStorage.getItem("alltodos"));
        }

        alltodos.push(txt);

        localStorage.setItem("alltodos", JSON.stringify(alltodos));
        showData();

        document.getElementById("txt").value = "";
    }
    
}

function deleteTodo(index)
{
    console.log("clicked");
    let alltodos;
    if(localStorage.getItem("alltodos") == null)
    {
        alltodos = [];
        
    }
    else{
        alltodos = JSON.parse(localStorage.getItem("alltodos"));
    }

    alltodos.splice(index, 1);
    localStorage.setItem("alltodos", JSON.stringify(alltodos));

    showData();
}




