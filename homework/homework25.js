//exercitiul 2
let substantiv = "pig";
substantiv = substantiv.toLowerCase();
let numarul = 6;
const plural = function(numarul, substantiv){
if (substantiv === "pig" || substantiv === "hamster" || substantiv === "parrot"){
    if (numarul === 1 || numarul === 0){
        console.log(`I have ${numarul} ${substantiv}.`);
    } else {
        console.log(`I have ${numarul} ${substantiv}s.`)
    };
}
if (substantiv === "sheep"){
    if (numarul === 1 || numarul === 0){
        console.log(`I have ${numarul} sheep.`)
    } else {
        console.log(`I have ${numarul} sheep.`)
    };
}
if (substantiv === "goose" || substantiv === "geese"){
    if (numarul === 1 || numarul === 0){
        console.log(`I have ${numarul} goose.`)
    } else {
        console.log(`I have ${numarul} geese.`)
    };
}
};

plural(6, 'pig');
plural(0, "hamster");
plural(1, "parrot");
plural(9, "goose");
plural(4, "sheep")




//exercitiul 4
let name;
let birthYear;
let isF = false;//true if female, false if male

const calculateAge = function(birthYear){
    return 2024 - birthYear;
};

const retirementAge = function(isF) {
   return isF ? 64 : 67;
}
function retirementInfo(name, birthYear, isF){
    let age = calculateAge(birthYear);
    let retireAge = retirementAge(isF);

    if (age >= retireAge){
        return `${name} este deja penionat`;
    } else {
        let yearsLeft = retireAge - age;
        let minorStatus = age < 18 ? "is a minor" : "is an adult";
        console.log(`${name} mai are ${yearsLeft} ani pana la penionare. `);
    }
    
}

retirementInfo('Sergiu', 1979, false);
retirementInfo('Anastasia', 1963, true);
retirementInfo('Andreea', 2010, true);
