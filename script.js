const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("nameform").addEventListener("submit", function(e){
    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    const gender = document.querySelector('input[name="gender"]:checked');

    if (day < 1 || day > 31) {
        alert("Please enter a valid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    const date = new Date(year, month - 1, day);

    if (
        date.getDate() !== day ||
        date.getMonth() !== month - 1 ||
        date.getFullYear() !== year
    ) {
        alert("Invalid date.");
        return;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    let MM = month;


    if (MM === 1){
        MM = 13;
    }

    if (MM === 2) {
        MM = 14;
    }

    let adjustedYear = year;

    if (month === 1 || month === 2) {
        adjustedYear--;    
    }

    const adjCC = Math.floor(adjustedYear / 100)
    const adjYY = adjustedYear % 100;

    let dayOfWeek = (
        Math.floor(adjCC / 4)
        - 2 * adjCC
        - 1
        + Math.floor((5 * adjYY) / 4)
        + Math.floor((26 * (MM + 1)) / 10)
        + day
    ) % 7;

    if (dayOfWeek < 0) {
        dayOfWeek += 7;
    }

    let akanName = "";

    if (gender.value === "male"){
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    document.getElementById("result").innerHTML = 
    `You were born on <strong>${days[dayOfWeek]}</strong>.<br> 
    Your Akan name is <strong>${akanName}</strong>.`;
});