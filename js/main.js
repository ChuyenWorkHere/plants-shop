document.getElementById('show-menu').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        var element = document.getElementById('show-x');
        element.className = 'fa-solid fa-xmark';
    } else {
        menu.style.display = 'none';
        var element = document.getElementById('show-x');
        element.className = 'fas fa-bars';
    }

})
document.addEventListener('DOMContentLoaded', function () {
    var showCategory = document.querySelector('#show-category');
    var menuCategory = document.getElementById('menu-category');

    if (showCategory && menuCategory) {
        showCategory.addEventListener('click', function () {
            var currentDisplay = window.getComputedStyle(menuCategory).display;

            if (currentDisplay === 'none') {
                menuCategory.style.display = 'block';
            } else {
                menuCategory.style.display = 'none';
            }
        });
    } else {
        console.error('NGU');
    }
});

/* || Range price slider */
const rangeInput = document.querySelectorAll(".min-max-range input"),
progress =  document.querySelector(".min-max-range div"),
reset_button = document.getElementById("reset");

let priceGap = 6;
rangeInput.forEach(input => {
    input.addEventListener("input", e =>{
        //Lấy 2 giá trị max min và chuyển nó về dạng số
        let minVal =  parseInt(rangeInput[0].value), 
            maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < priceGap) {
            if(e.target.className === "min-range"){
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            document.getElementById("input-min").textContent ="$" + minVal+"";
            document.getElementById("input-max").textContent = "$"+ maxVal+"";
            progress.style.left = ((minVal - rangeInput[0].min) / (rangeInput[0].max - rangeInput[0].min)) * 100 + "%";
            progress.style.right = 100 - ((maxVal - rangeInput[0].min) / (rangeInput[0].max - rangeInput[0].min)) * 100 + "%";
        }
        if(minVal !== rangeInput[0].min || maxVal !== rangeInput[0].max){
            reset_button.style.opacity = "1";
            reset_button.style.pointerEvents = 'auto';
        } else {
            reset_button.style.opacity = "0";
        }
        reset_button.addEventListener('click', function() {
            rangeInput[0].value = rangeInput[0].min;
            rangeInput[1].value = rangeInput[0].max;
            progress.style.left =  "0";
            progress.style.right = "0";
            document.getElementById("input-min").textContent ="$" + rangeInput[0].min +"";
            document.getElementById("input-max").textContent = "$"+ rangeInput[0].max +"";
            reset_button.style.opacity = "0";
            reset_button.style.pointerEvents = 'none';
        });
        console.log(minVal, maxVal);
    });
} )
