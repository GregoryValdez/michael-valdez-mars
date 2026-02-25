// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});
// Close the menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

// Skills
const skills = ['JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i]; // .textContent also works here 
    skillsList.appendChild(skill);
}

// Footer
// const footer = document.createElement('footer');
const footer = document.querySelector('footer');
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `<small>&copy; Michael Valdez ${thisYear}</small>`;

footer.append(copyright);

// Leave a Message
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    let formName = event.target.usersName.value;
    let formEmail = event.target.usersEmail.value;
    let formMessage = event.target.usersMessage.value;
    console.log(formName, formEmail, formMessage);

    // Messages section
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${formEmail}">${formName}</a>: <span>${formMessage}</span>`; 
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.setAttribute('type', 'button'); // Set type attribute to button

    removeButton.style.marginLeft = '1em'; 
    removeButton.style.padding = '.5em';
    removeButton.style.backgroundColor = '#125769';
    removeButton.style.color = '#E8E9F3';
    newMessage.style.listStyleType = 'none';
    newMessage.querySelector('a').style.textDecoration = 'none';
    newMessage.querySelector('a').style.color = '#125769';
    newMessage.querySelector('a').style.fontWeight = 'bold';
    newMessage.style.padding = '.5em';
    newMessage.style.marginRight = '2.75em';

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode; // Get the parent <li> element
        entry.remove(); // Remove the entire message entry
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset(); // Clear the whole form after submission
})

fetch('https://api.github.com/users/GregoryValdez/repos')
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(repo => {
        const repositories = JSON.parse(JSON.stringify(repo)); // Creates a deep copy(deep clone) of an object or array.
        console.log(repositories);
        const projectSection = document.getElementById('Projects');
        const projectList = projectSection.querySelector('ul');
        repositories.forEach(repo => {
            const project = document.createElement('li');
            project.innerText = repo.name;
            projectList.appendChild(project);
        })
    })
    .catch(error => {
        console.error('Error fetching repositories:', error);
    })