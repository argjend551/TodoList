let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function () {
     if (inputField.value == 0) {
          alert('Please write something')
     } else {
          let paragraph = document.createElement('p');
          let div = document.createElement('div');
          let trash = document.createElement('a');
          let trash1 = document.createElement('i');
          let check = document.createElement('a');
          let check1 = document.createElement('i');
          check.className = "check"
          check1.className = "fa fa-check"
          check.appendChild(check1);
          trash.className = "trash"
          trash1.className = "fa fa-times"
          trash.appendChild(trash1);

          div.className = "todos"
          paragraph.innerText = inputField.value;
          toDoContainer.appendChild(div);
          div.appendChild(trash)

          div.appendChild(check)
          div.appendChild(paragraph);
          inputField.value = "";

          trash.addEventListener('click', function () {
               toDoContainer.removeChild(div);
          })
          check.addEventListener('click', function () {
               if (this.getAttribute("class") == "check") {
                    paragraph.style.textDecoration = "line-through";
                    this.className = "checkdone"
               } else {
                    paragraph.style.textDecoration = "none";
                    this.className = 'check'
               }


          })

     }




})



inputField.addEventListener("keyup", function (event) {
     if (event.key == "Enter") {
          if (inputField.value == 0) {
               alert('Please write something')
          } else {
               let paragraph = document.createElement('p');
               let div = document.createElement('div');
               let trash = document.createElement('a');
               let trash1 = document.createElement('i');
               let check = document.createElement('a');
               let check1 = document.createElement('i');
               check.className = "check"
               check1.className = "fa fa-check"
               check.appendChild(check1);
               trash.className = "trash"
               trash1.className = "fa fa-times"
               trash.appendChild(trash1);

               div.className = "todos"
               paragraph.innerText = inputField.value;
               toDoContainer.appendChild(div);
               div.appendChild(trash)

               div.appendChild(check)
               div.appendChild(paragraph);
               inputField.value = "";

               trash.addEventListener('click', function () {
                    toDoContainer.removeChild(div);
               })
               check.addEventListener('click', function () {
                    if (this.getAttribute("class") == "check") {
                         paragraph.style.textDecoration = "line-through";
                         this.className = "checkdone"
                    } else {
                         paragraph.style.textDecoration = "none";
                         this.className = 'check'
                    }


               })

          }

     }


});


