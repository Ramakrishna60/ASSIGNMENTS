var todo = document.getElementById("inputTask");

function addText(){
    var input = document.getElementById('inputTask').value;
    var node=document.createElement("p");
    var textnode=document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('addTask').appendChild(node);
    //REMOVE
    var removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Delete");
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function(e) {
        node.parentNode.removeChild(node);
    }, false);
    node.appendChild(removeTask);

   //STRIKE 
    var strikeTask = document.createElement('input');
    strikeTask.setAttribute('type', 'button');
    strikeTask.setAttribute("value", "Done");
    strikeTask.setAttribute("id", "strikeButton");
    strikeTask.addEventListener('click', function(e) {
     node.style.textDecoration="line-through";
    }, false);
    node.appendChild(strikeTask);        
        }

        todo.addEventListener("keypress",function(event){
            if(event.keyCode === 13){
                event.preventDefault();
                addText();
            }
        })
    
    
 
    
    

