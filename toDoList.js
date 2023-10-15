

let windowWidth = window.innerWidth;



document.addEventListener('DOMContentLoaded', ()=> {

   let activeSectionId = localStorage.getItem('activeSectionId');
   if(activeSectionId){
   let activeId = document.getElementById(activeSectionId);
   activeId.classList.add('active');}


})

const whichTasks = document.querySelectorAll('.whichTask');
console.log(whichTasks);

whichTasks.forEach(task => {

    task.addEventListener('click', (Event) => {

        if (windowWidth >= 1001) {


            let activeSectionId = localStorage.getItem('activeSectionId');

            if(activeSectionId){
            let activeId = document.getElementById(activeSectionId);
            activeId.classList.remove('active');
            }

            const clickedElement = Event.currentTarget;
            const targetId = clickedElement.getAttribute('data-target');

            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                

                section.classList.remove('active');
            })
            

            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active'); 

            localStorage.setItem('activeSectionId' , targetId);

            

            
        }
        else if (windowWidth <=699){


         const sectionOne = document.querySelector(".sectionOne");
          sectionOne.classList.add('displayOff');
        
          const clickedButton = Event.currentTarget;
          const button = clickedButton.getAttribute('data-target');

          const Id = document.getElementById(button);
          console.log(Id);
          Id.classList.add('displayOn'); 





        }



    });
});

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    console.log(windowWidth);
    console.log("hello");



});


const addTask = document.getElementsByClassName('addTaskLogo')[0];
const prompt = document.getElementsByClassName('prompt')[0];
const close = document.getElementsByClassName('close')[0];
console.log(addTask);

addTask.addEventListener('click', ()=>{

prompt.style.display ='block';      
      
});

close.addEventListener('click', ()=> {
       
         prompt.style.display = 'none';

});


let addTaskLogo = document.querySelector(".addTaskLogo ");

// addTaskLogo.addEventListener("mouseenter", () =>{

//     addTaskLogo.style.backgroundColor = "rgba(78, 78, 78, 0.635)"
// });


addTaskLogo.addEventListener("mousedown", () =>{
    addTaskLogo.style.transform = "scale(0.9)";


});


addTaskLogo.addEventListener("mouseup", () => {
    console.log("bye");

    addTaskLogo.style.transform = "scale(1)";
})
