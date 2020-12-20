//constructor to add book

function book(name,author,type){
    this.name=name;
    this.author= author;
    this.type = type;
}
//Display Constructor 
function Display(){

}

//Display in UI
Display.prototype.add = function(Book){
    tableBody = document.getElementById("tableBody")
    let uistring =` <tr>
                        <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>@${Book.type}</td>
                    </tr>`
     tableBody.innerHTML += uistring   
   }
Display.prototype.clear = function(){
    let Libraryform = document.getElementById("Libraryform");   
    Libraryform.reset();
}

//Add Submit Event Listener to Library Form

let Libraryform = document.getElementById("Libraryform");
Libraryform.addEventListener("submit",submitlibrarayform);

function submitlibrarayform(e){
    console.log("You have submitted the form successfuly");
    let name = document.getElementById("name").value;
    let author =document.getElementById("Author").value;
    let Python = document.getElementById("Python");
    let PHP = document.getElementById("PHP");
    let JavaScript = document.getElementById("JavaScript");
    let type;
        if(Python.checked)
        {
            type = Python.value;
        }
        else if (PHP.checked)
        {
            type = PHP.value;
        }
        else if (JavaScript.checked)
        {
            type = JavaScript.value;        
        }
        let Book = new book(name, author,type)
        e.preventDefault()
        let display = new Display();
        display.add(Book);
        display.clear()
}