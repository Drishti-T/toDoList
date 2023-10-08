

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

            

            alert("hello");
            console.log("heyyy u clicked it", targetId);
        }

    });

});




window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    console.log(windowWidth);



});
