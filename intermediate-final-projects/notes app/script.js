const addBtn = document.querySelector(".add");

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}


addBtn.addEventListener("click", () => {
    addNewNote();
});
function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="notes">
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
     </div>
    `;

    const editBtn = note.querySelector('.edit');
        const deleteBtn = note.querySelector('.delete');
     
        const main = note.querySelector( '.main');
        const textArea = note.querySelector("textarea");
 
        textArea.value = text;
    main.innerHTML = marked(text);

        editBtn.addEventListener("click",()=>{
            main.classList.toggle("hidden");
            textArea.classList.toggle("hidden");

        });

        deleteBtn.addEventListener('click',()=>{
           note.remove();
           updateLs();

        });

        textArea.addEventListener("input", (e) => {
            const { value } = e.target;
    
            main.innerHTML = marked(value);
            updateLs();
    
        });

    document.body.appendChild(note);

}


function updateLs() {
    const notesText = document.querySelectorAll("textarea");
    const notes= [];

     notesText.forEach((note)=>{
        notes.push(note.value);
     });
     localStorage.setItem("notes",JSON.stringify(notes));
}



    //     <div class="notes hidden">
    //     <div class="tools">
    //         <button class="edit"><i class="fas fa-edit"></i></button>
    //         <button class="delete"><i class="fas fa-trash-alt"></i></button>
    //     </div>
    //     <div class="main hidden"> </div>
    //    <!-- textarea seperat eform div split note for edit -->
    //     <textarea></textarea>  

    //  <!-- name="" id="" cols="30" rows="10" -->
    // </div>
    