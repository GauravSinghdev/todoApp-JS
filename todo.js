setInterval(showDate,10);

function showDate()
{
    let a = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

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
    else{
        x = "AM";
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
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>`
    });
    document.getElementById("todos").innerHTML = html;

    if(html == "")
    document.getElementById("todos").innerHTML = `<p class="todop">Todos are empty</p>`
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




