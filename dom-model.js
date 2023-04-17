const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

let newParagraph = document.createElement('p');
newParagraph.style.color='Red';
newParagraph.textContent="Hey I'm red!";
container.appendChild(newParagraph);

let newHeading = document.createElement('h3');
newHeading.style.color='Blue';
newHeading.textContent="I'm a blue h3!";
container.appendChild(newHeading);

let newDiv = document.createElement('div');
newDiv.style.border=("black");
newDiv.style.backgroundColor=("pink");

newHeading = document.createElement('h1');
newHeading.textContent="I'm in a div";
newDiv.appendChild(newHeading);

newParagraph = document.createElement('p');
newParagraph.textContent="ME TOO!";
newDiv.appendChild(newParagraph);

container.appendChild(newDiv);

let alertFunction = () => alert("Hello World!");

let btn = document.querySelector('#btn');
btn.onclick = alertFunction;

let btnM3 = document.querySelector('#btnM3');
btnM3.addEventListener('click', alertFunction);
btnM3.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
})

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

