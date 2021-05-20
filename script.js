let filterColor = document.querySelectorAll(".filter");  // iske andr buttons h -> buttons ka array  
let mainContainer = document.querySelector(".main-container"); // toolbar k neeche vala area
let modalContainer = document.querySelector(".modal_container");
let modalColor = document.querySelectorAll(".modal-color");
let taskBox = document.querySelector(".task_box")
let plusBtn = document.querySelector(".plus");

let modalFlag = false;
let iColor = "black";

for (let i = 0; i < filterColor.length; i++) {              //har ek index p 2 classes h
    filterColor[i].addEventListener("click", function () {  //function add kiya        
        let classes = filterColor[i].getAttribute("class"); //space seperated classes nikaal li har index k liye
        // console.log(classes);
        let strArr = classes.split(" ");                    //array bna liya 2 classes ka   
        let color = strArr[1];                              //color 2nd index pr milega array k

        let mainClasses = mainContainer.getAttribute("class");  //maincontainer ki classes nikaal li
        let mainCArr = mainClasses.split(" ");                  //array bna diya
        mainCArr[1] = color;                                    //yahan array k 1 index p color daal diya -> phle hoga koi to change ho jaega vrna add ho jaega 
         mainClasses = mainCArr.join(" ");                      //arr ko vapas join kiya 
        mainContainer.setAttribute("class",mainClasses);        //mainContainer ki class ko wapas se set krdiya
    })
}

plusBtn.addEventListener("click", function () {
    
    modalContainer.style.display = "flex";
})
for(let i =0 ; i < modalColor.length ; i++){
    modalColor[i].addEventListener("click", function(){
        
    })
}
taskBox.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && taskBox.value != "") {
        let taskContainer = document.createElement("div");
        let task = taskBox.value;
        taskContainer.setAttribute("class", "ticket_container");
        taskContainer.innerHTML = `<div class="ticket_color ${iColor}"></div>
        <div class="ticket_desc_container">
        <div class="ticket_id">#ExampleId</div>
        <div class="ticket_desc">${task}</div>
        </div>`;
        mainContainer.appendChild(taskContainer);
        // cleanup code
        modalContainer.style.display = "none";
        taskBox.value = "";

    }

})