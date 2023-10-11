

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