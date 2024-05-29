const form = document.form
const nameInput =form.name
const emailInput =form.email
const passwordInput =form.password
const birthdayInput =form.birthday
const preferredTimeInput =form.preferred_time
const contactEmailInput =form.contact_email
const languageInput =form.language
const profilePicInput =form.profile_pic
const telephoneInput =form.telephone
const submitBtn = document.getElementById('submit');
const colorInput = form.color
const notesInput = form.notes
const rangeInput = form.range
const foodInput = form.food
// language
// textarea
// notes
// profile pic

//BUTTONS
// submit
// reset

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(passwordInput.value);
    console.log(birthdayInput.value);
    console.log(preferredTimeInput.value);
    console.log(contactEmailInput.value);
    console.log(languageInput.value);
    console.log(notesInput.value);
    console.log(profilePicInput.value);
    console.log(telephoneInput.value);
    console.log(colorInput.value);
    console.log(rangeInput.value);
    console.log(foodInput.value);

});
