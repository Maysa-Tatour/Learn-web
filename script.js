const toggelMenu=document.getElementById("sideBar");
const toggleNav=document.getElementById("topNav");
function toggleSidebar(){
    toggelMenu.classList.toggle("active");
}
function toggleNavMenu(){
   toggleNav.classList.toggle("active");
}

 const links = document.querySelectorAll('.sidebar a');
 function clickLink(){
    links.forEach(link => {
      link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });
}