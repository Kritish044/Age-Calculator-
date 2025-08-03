document.getElementById('submit').addEventListener("click", function() {
    var date = document.getElementById("day").value;
    var mth = document.getElementById("month").value;
    var yr = document.getElementById("year").value;

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // getMonth() is 0-based
    const day = today.getDate();

    
    document.getElementById("submit").addEventListener("click", function() {
    let new_day = day - date;
    let new_month = month - mth;
    let new_year = year - yr;

    if (new_day < 0) {
        new_month--;
        new_day += 30; // Approximate, for simplicity
    }
    if (new_month < 0) {
        new_year--;
        new_month += 12;
    }

        document.getElementById("result").value = "You are " + new_year + " years, " + new_month + " months, and " + new_day + " days old.";
    });

    
});







