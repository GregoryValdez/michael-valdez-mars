// Note: I already had a footer element from last lesson/assignment.

// Footer
// const footer = document.createElement('footer');
const footer = document.querySelector('footer');
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `<small>&copy; Michael Valdez ${thisYear}</small>`;

footer.append(copyright);

// Skills
const skills = ['JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i]; // .textContent also works here 
    skillsList.appendChild(skill);
}