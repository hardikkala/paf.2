function back()
{
    window.location = "index_1.html";
}

function getScore()
{
    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score: " + score + "</h1>";
}