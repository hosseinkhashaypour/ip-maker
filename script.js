function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  // alert('سرور خود را به راحتی بسازید !')