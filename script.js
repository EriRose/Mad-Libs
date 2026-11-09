
const button = document.getElementById("button");
button.addEventListener("click", startMadLib);


// create a function for our silly poem
function startMadLib() {
    // hide the instructions
    instructions.style.visibility = 'hidden';

    const adj1 = prompt('Enter an adjective').toLowerCase();
    const verb1 = prompt('Enter a past-tense verb').toLowerCase();
    const pluralNoun1 = prompt("Enter a plural noun").toLowerCase();
    const adj2 = prompt('Enter an adjective').toLowerCase();
    const verb2 = prompt('Enter a verb ending in -ing').toLowerCase();
    const pluraNoun2 = prompt('Enter a plural noun').toLowerCase();
    const noun1 = prompt('Enter a noun').toLowerCase();
    const adj3 = prompt('Enter an adjective').toLowerCase();
    const pluralNoun3 = prompt('Enter a plural noun').toLowerCase();
    const adv1 = prompt('Enter an adverb').toLowerCase();
    const noun2 = prompt('Enter an noun').toLowerCase();
    const adv2 = prompt('Enter an adverb').toLowerCase();
    const noun3 = prompt('Enter an noun').toLowerCase();
    const adj4 = prompt('Enter an adjective').toLowerCase();
    const adv3 = prompt('Enter an adverb').toLowerCase();
    const occupation = prompt('Enter an occupation').toLowerCase();

    const inst = document.getElementById("instructions");
    const button = document.getElementById("button");
    inst.style.display = "none";
    button.style.display = "none";

    // create Mad Lib
let message = `<p>The universe is quite a <b>${adj1}</b> place full of mysteries to be <b>${verb1}</b>.
It is filled with black <b>${pluralNoun1}</b> and <b>${adj2}</b> stars. 
We are <b>${verb2}</b> at the past whenever we look a the <b>${pluraNoun2}</b> in our sky.
Most elements in the <b>${noun1}</b>ic table were forged within <b>${adj3}</b> stars!
That means that <b>${pluralNoun3}</b> alive today are <b>${adv1}</b> made up of matter that was once a star!
Exoplanets are found because of the wobble they cause the <b>${noun2}</b> they <b>${adv2}</b> orbit.
We recently sent a <b>${noun3}</b> around the moon! Eventually, we will have a <b>${adj4}</b> moon base.
Perhaps in the near future, we will all be <b>${adv3}</b> saving up for a moon vacation and we won't have to be a <b>${occupation}</b> to go! </p>`;

    const madlib = document.getElementById("madlib");
    madlib.innerHTML = message;
}
