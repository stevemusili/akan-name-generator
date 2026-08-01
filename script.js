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

    const date = new Date(day, month - 1, year);

    if (
        date.getDate() !== day ||
        date.getMonth() !== month - 1 ||
        date.getFullYear() !== year
    ) {
        alert("Invalid date.");
        return;
    }



});