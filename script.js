function calculateAge() {
    
    const form = document.forms["ageCalculator"];
    const birthDate = moment(form["birthDate"].value.split("-"));
    const currentDate = moment(new Date().toISOString());

    const age = {
        years : currentDate.diff(birthDate, 'years'),
        months : null
    };

    // Calcula os meses restantes
    birthDate.add(age.years, 'years');
    age.months = currentDate.diff(birthDate, 'months');

    document.getElementById("ageOutput").innerHTML = `${age.years} years ${age.months} months`;
    
}