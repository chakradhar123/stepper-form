let submission = {};


function handleSubmit1() {

    let form = document.getElementById("form-1");
    form.querySelectorAll("input").forEach(input=>{
        name=input.name;
        submission[name]=input.value;
    })
    form.style.display = "none";
    let prevstep = document.getElementById("step-1");
    prevstep.classList.toggle("current-step");
    prevstep.classList.toggle("completed");
    let nextForm = document.getElementById("form-2");
    let nextstep = document.getElementById("step-2");
    nextstep.classList.toggle("current-step");
    nextForm.style.display = "flex";
}

function handleSubmit2() {

    let form = document.getElementById("form-2");
    form.querySelectorAll("input").forEach(input=>{
        name=input.name;
        submission[name]=input.value;
    })
    form.style.display = "none";
    let prevstep = document.getElementById("step-2");
    prevstep.classList.toggle("current-step");
    prevstep.classList.toggle("completed");
    let nextForm = document.getElementById("form-3");
    let nextstep = document.getElementById("step-3");
    nextstep.classList.toggle("current-step");
    nextForm.style.display = "flex";
}

function handleSubmit3() {

    let form = document.getElementById("form-3");
    form.querySelectorAll("input").forEach(input=>{
        name=input.name;
        submission[name]=input.value;
    })
    form.style.display = "none";
    document.getElementById("steps").style.display="None"
    alert("thanks for submiting")
    const details=document.getElementById("details")
    details.style.display='flex'
    const details_heading=document.createElement("h1")
    details_heading.textContent="Details"
    details_heading.id="details-head"
    details.appendChild(details_heading)
    const submissions=Object.entries(submission)
    for (const [name, entry] of submissions) {
        let entrydiv=document.createElement("div")
        entrydiv.textContent=`${name}: ${entry}`
        details.appendChild(entrydiv)
      }

}
window.onload=()=>{
    document.getElementById("step-1").classList.toggle("current-step");
}
