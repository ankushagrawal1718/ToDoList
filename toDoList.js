var display = document.getElementById("inputTask");
var addButton = document.getElementById("addBtn");
var ol = document.getElementById("task");
var deleteBtn = document.getElementsByClassName("remove");


function addtask(){ 
    var text = display.value;
    document.getElementById('error').innerText = "";
    if(text == ""){
        document.getElementById('error').innerText = "please add some task";
    }
    // console.log(text);
    else{
        var li = document.createElement("li");
        li.innerText = text;
        ol.appendChild(li);


        // remove button
        let a = document.createElement('button');
        a.textContent = 'Delete Task';
        // a.href = 'javascript:void(0)';
        a.className = "remove";
        li.appendChild(a);
        a.addEventListener('click',function(e){
            var li = e.target.parentNode;
            console.log(li);
            ol.removeChild(li);
        }
        )
    }
    
    
    display.value = "";
    console.log(deleteBtn);
}


addButton.addEventListener('click',addtask);
document.addEventListener('keypress',function(e){
if(e.key == 'Enter'){
    addtask();
}
// console.log(e.key);
});

// deleteBtn.addEventListener('click',function(e){
//     var li = e.target.parentNode;
//     console.log(li);
//     ol.removeChild(li);
// })

// for(item of deleteBtn){
//     item.addEventListener('click',function(e){
//         var li = e.target.parentNode;
//         console.log(li);
//         ol.removeChild(li);
//     })
// }

