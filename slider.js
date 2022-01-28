const imageElement = document.getElementById("slider-image");
const commentElement = document.getElementById("comment");
const nameElement = document.getElementById("name");
const jobElement = document.getElementById("job");
const btn_prev = document.getElementById("prev");
const btn_next = document.getElementById("next");
const employees = [
    {
        name: "Tanya Sinclair",
        job: "UX Engineer",
        image: "image-tanya.jpg",
        statment: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        image: "image-john.jpg",
        statment: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    }
];
let index = 0;

// cycle through employees backwards
btn_prev.addEventListener("click", () => {
    index--;
    if (index < 0) index = employees.length - 1;
    setEmployee(index);
});

// cycle through employees forward
btn_next.addEventListener("click", () => {
    index++;
    setEmployee(index);
});

function setEmployee(index) {
    const employee = employees[index % employees.length];
    imageElement.setAttribute("src", `images/${employee.image}`);
    nameElement.textContent = employee.name;
    jobElement.textContent = employee.job;
    commentElement.style.opacity = 0;
    commentElement.textContent = employee.statment; 

    // animate statement fade in using opacity
    let animate = setInterval(() => {
        let opacity = Number(window.getComputedStyle(commentElement).getPropertyValue("opacity"));
        if (opacity < 1) {
            opacity += 0.1;
            commentElement.style.opacity = opacity;
        } else {
            clearInterval(animate);
        }
    }, 50);
}
