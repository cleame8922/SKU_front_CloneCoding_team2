window.onload = () => {
    document.querySelector('.dropbtn_click').onclick = () => {
      dropdown();
    };
    dropdown = () => {
      var v = document.querySelector('.dropdown-content');
      var dropbtn = document.querySelector('.dropbtn');
      v.classList.toggle('show');
    };
  
    showMenu = (value) => {
      var dropbtn_content = document.querySelector('.dropbtn_content');
      var dropbtn_click = document.querySelector('.dropbtn_click');
      var dropbtn = document.querySelector('.dropbtn');
    };
  };
  
  window.onclick = (e) => {
    if (!e.target.matches('.dropbtn_click')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };