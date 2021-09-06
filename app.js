'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function()
    {
        document.body.classList.toggle('dark-theme');


    var className = document.body.className;
    if(className == "light-theme")
        {
            this.textContent = "Dark";
        }
        else
        {
            this.textContent = "Light";
        }
    console.log('current class name: ' + className);
    });

    var button = document.getElementById("counter"),
    count = 0;

    button.onclick = function() 
    {
        count += 1;
        button.innerHTML = count;
    };



    




