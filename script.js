let clique = document.getElementById('btn-click');
let score = document.getElementById('score');
let bonus10 = document.getElementById('btn-10');
let points = 0;

function addPoints()
{   
    points = points+1;
    score.innerHTML = points;  
}

// function addPoints10()
// {
//     points+=10;
//     score.innerHTML = points;
// }




clique.addEventListener("click", addPoints);
// clique.addEventListener("click", addPoints10);




