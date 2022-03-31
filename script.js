function compute()
{
    //Variable initializing and calculations
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * rate * years / 100;
    let year = new Date().getFullYear()+parseInt(years);

    //Display results and alert if invalid input in principal
    if (document.getElementById("principal").value > 0)
    {
        document.getElementById("result").innerHTML =
        "If you deposit <span class=\"highlight\">" + principal +
        "</span>,<br> at an interest rate of <span class=\"highlight\">" + rate +
        "%</span>.<br> You will receive an amount of <span class=\"highlight\">" + interest +
        "</span><br>in the year <span class=\"highlight\">" + year + "</span>";
    }
    else
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}

//Display interest rate value changes with slider
function updateRate()
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}