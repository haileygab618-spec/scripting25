// helper: get pronouns based on dropdown choice
function getPronouns(set) {
if (set === "he") {
return {
subj: "he",
obj: "him",
possAdj: "his",
};
}

if (set === "they") {
return {
subj: "they",
obj: "them",
possAdj: "their",
};
}

// default: she / her
return {
subj: "she",
obj: "her",
possAdj: "her",
};
}

function generateStory(event) {
// pevent the form from actually submitting or reloading the page
event.preventDefault();

// Collect user inputs (with simple fallbacks)
const protagonistName =
document.getElementById("protagonistName").value.trim() || "Aria";
const pronounSet = document.getElementById("pronounSet").value;
const academyName =
document.getElementById("academyName").value.trim() ||
"Moonridge Magic Academy";
const objectToTripOver =
document.getElementById("objectToTripOver").value.trim() ||
"rubber chicken";
const creature =
document.getElementById("creature").value.trim() || "tiny goblin";
const foodItem =
document.getElementById("foodItem").value.trim() || "blueberry muffins";
const professorName =
document.getElementById("professorName").value.trim() ||
"Professor Willowthorn";
const className =
document.getElementById("className").value.trim() || "Potion Crafting";
const potionContainer =
document.getElementById("potionContainer").value.trim() ||
"glittering potion bottle";
const numberOfDrops =
document.getElementById("numberOfDrops").value.trim() || "7";
const boomWord =
document.getElementById("boomWord").value.trim() || "BOOM";
const sparklesColor =
document.getElementById("sparklesColor").value.trim() || "pink sparkles";
const transformedCreature =
document.getElementById("transformedCreature").value.trim() ||
"fluffy bunnies";
const eventName =
document.getElementById("eventName").value.trim() || "Winter Festival";

// radio buttons: outcome
const outcome = document.querySelector('input[name="outcome"]:checked')
?.value || "success";

// pronoun object
const pronouns = getPronouns(pronounSet);

// choose image based on outcome (you must create these images yourself!)
let imageSrc = "Images/Story.png";
let imageAlt = "A glowing successful potion at the magic academy.";

if (outcome === "disaster") {
imageSrc = "images/disaster.png";
imageAlt =
"A chaotic potion explosion with sparkles and transformed students everywhere.";
}

// optional: plural version of transformed creature
const transformedPlural =
transformedCreature.endsWith("s") || transformedCreature.endsWith("ies")
? transformedCreature
: transformedCreature + "s";

// build the story using your original text as the base
const storyHTML = `
<p>
<span class="character-name">${protagonistName}</span> was already late for
${pronouns.possAdj} first day at <strong>${academyName}</strong>. Hurrying
down the hallway, ${pronouns.subj} stumbled over a
<strong>${objectToTripOver}</strong> and crashed into a
<strong>${creature}</strong> carrying a tray of
<strong>${foodItem}</strong>.
</p>

<p>
"Watch it!" the ${creature} barked, but
<span class="character-name">${protagonistName}</span> was in a rush because
${pronouns.subj} had to meet with
<strong>${professorName}</strong> for ${pronouns.possAdj} very first
<strong>${className}</strong> class.
</p>

<p>
As <span class="character-name">${protagonistName}</span> stepped into the
classroom, ${professorName} picked up a
<strong>${potionContainer}</strong> that shimmered under the floating
candles and handed it to ${pronouns.obj}.
</p>

<p>
"Today it is your job to mix
<strong>${numberOfDrops}</strong> drops of this into the magical cauldron,"
the professor said. "Be cautious, the last pupil caused an explosion with
<span class="magic-word">${boomWord}</span>."
</p>

<p>
${protagonistsSentence(protagonistName, pronouns.subj)} reached for the spoon,
${pronouns.possAdj} hands shaking, and began to stir the mixture.
</p>

${outcomeParagraph(
outcome,
sparklesColor,
transformedCreature,
transformedPlural,
academyName
)}

<p>
Every eye in the room locked on
<span class="character-name">${protagonistName}</span>. With a tired sigh,
${pronouns.subj} shrugged and said,
"Well... I guess this is still better than being dog-piled at
<strong>${eventName}</strong>."
</p>

<img
src="${imageSrc}"
alt="${imageAlt}"
class="img-fluid rounded mt-3"
>
`;

// inject into the page
const storyOutput = document.getElementById("storyOutput");
storyOutput.innerHTML = storyHTML;
}

// only one sentence so we don't repeat logic
function protagonistsSentence(name, subjPronoun) {
// Capitalize first letter of subject pronoun just in case
const capitalSubj = subjPronoun.charAt(0).toUpperCase() + subjPronoun.slice(1);
// “Aria, nervous but also excited” feeling
return `${capitalSubj} was nervous but also excited as ${name}`;
}

// helper for the outcome paragraph
function outcomeParagraph(
outcome,
sparklesColor,
transformedCreature,
transformedPlural,
academyName
) {
if (outcome === "success") {
return `
<p>
Suddenly, <strong>${sparklesColor}</strong> burst out of the potion,
swirling through the air like a glitter storm. Instead of destroying the room,
the magic neatly lifted every desk and turned it into a tiny
<strong>${transformedCreature}</strong> throne.
The class cheered as the room shimmered with soft light, and rumors of the
"most dramatic success in ${academyName} history" began immediately.
</p>
`;
}

// disaster version
return `
<p>
Suddenly, <strong>${sparklesColor}</strong> exploded out of the potion,
bouncing off the stone walls and racing between the desks. With a loud
<span class="magic-word">FOOOOMP</span>, the spell misfired and turned the
entire class into <strong>${transformedPlural}</strong>. Panicked hopping,
squeaking, and magical chaos echoed across the halls of ${academyName}.
</p>
`;
}

// set the year in the footer
document.addEventListener("DOMContentLoaded", function () {
const yearSpan = document.getElementById("yearSpan");
if (yearSpan) {
yearSpan.textContent = new Date().getFullYear();
}
});