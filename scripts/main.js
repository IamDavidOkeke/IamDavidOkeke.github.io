var mobilemenulinks = document.querySelector('.mobilemenulinks');
var experience = document.querySelector('.experience');
var projects = document.querySelector('.projects');
var education = document.querySelector('.education');
var button = document.querySelector('.mobileicon');
var template = document.querySelector('.template');
var skills = document.querySelector('.skills');

button.addEventListener('click', function(){mobilemenulinks.classList.toggle('open');
})
const set = (value)=>{
    template.innerHTML = value
    template.classList.add('animate')
    setTimeout(function(){
        template.classList.remove('animate')
    }, 500)
}
experience.addEventListener('click', function(){
    set(templates.experience)
})
projects.addEventListener('click', function(){
    set(templates.projects)
})
education.addEventListener('click', function(){
    set(templates.education)
})
skills.addEventListener('click', function(){
    set(templates.skills)
})

const templates ={ 
    experience:
     '<h3>Frontend Developer</h3><p>SASTA: Society for the Advancement of Science and Technology in the Arab World.</p><p>Mar 2022 - Present (8 months +)</p><ul><li> Spearheading the development of the visual display of components in HTML/CSS/Javascript for useas component for incorporation into web pages or other contexts.</li><li>Developing and implementing highly-responsive user interface components using React.</li><li>Monitoring and improving front-end performance.</li></ul><h3>Frontend React Developer</h3><p>One Community Global</p><p>Jan 2022 - Feb 2022 (2 months)</p><ul><li> Advanced the capabilities of our front end web application with React</li><li>Implemented state management with Redux</li><li>Help breakdown complex work into deliverables working closely with cross-functional team members</li></ul>',
    skills: 
    '<p> Git   •   Redux.js   •   Front-End Development   •   Node.js   •   MongoDB   •   React.js   •HTML   •   Cascading Style Sheets (CSS)   •   JavaScript</p>',
    education: 
    '<h3>JavaScript Data Structures and Algorithms</h3><h4>freeCodeCamp</h4><h6>2020 - 2021</h6><h3>Full Stack Web Development</h3><h4>Udemy</h4><h6>2019 - 2020</h6><h3>Fundamentals of Digital Marketing</h3><h4>Google Digital Garage</h4><h6>2020 - 2020</h6>',
    projects:
     '<h3>React UI Library</h3><a href="https://github.com/IamDavidOkeke/AutocompleteOption">Project link</a><p>I created a react component library that autocomplete search options.</p><p>I built the search logic using the prefix tree data structure tooptimise performance and react jsx for the user interface.</p><h3>E-learning App</h3><a href="https://materials-for-ubemsa.web.app">Project link</a><p>Technologies used: HTML | CSS | JavaScript | Reactjs | Nodejs | MongoDb</p><p> Description: Built a Full stack progressive web app that delivers educational materials to students in my university </p><h3>Order app</h3><a href="https://liteexports.com">Project link</a><p>Technologies used: HTML | CSS | JavaScript | Nodejs | Google API</p><p>Description: Built a nodejs app for an export business and integrated the Google spreadsheet api to store order details of customers.</p>'

}