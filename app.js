document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('nav').classList.toggle('responsive')
})


function welcomeNoteAppear(){
    var welcomeNote = document.querySelector('.welcomeNote');
    var welcomeNotePos = welcomeNote.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (welcomeNotePos < winHeight){
        welcomeNote.classList.add('welcomeNoteAppear')
    }

    else{
        welcomeNote.classList.remove('welcomeNoteAppear')
    }
}

window.addEventListener('scroll', welcomeNoteAppear)


function missionAppear(){
    var mission = document.querySelector('.mission');
    var missionPos = mission.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (missionPos < winHeight){
        mission.classList.add('missionAppear')
    }

    else{
        mission.classList.remove('missionAppear')
    }
}

window.addEventListener('scroll', missionAppear)

function missionImgAppear(){
    var missionImg = document.querySelector('.missionImg');
    var missionImgPos = missionImg.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (missionImgPos < winHeight){
        missionImg.classList.add('missionImgAppear')
    }

    else{
        missionImg.classList.remove('missionImgAppear')
    }
}

window.addEventListener('scroll', missionImgAppear)


function visionAppear(){
    var vision = document.querySelector('.vision');
    var visionPos = vision.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (visionPos < winHeight){
        vision.classList.add('visionAppear')
    }

    else{
        vision.classList.remove('visionAppear')
    }
}

window.addEventListener('scroll', visionAppear)



function visionImgAppear(){
    var visionImg = document.querySelector('.visionImg');
    var visionImgPos = visionImg.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (visionImgPos < winHeight){
        visionImg.classList.add('visionImgAppear')
    }

    else{
        visionImg.classList.remove('visionImgAppear')
    }
}

window.addEventListener('scroll', visionImgAppear)



function goalAppear(){
    var goal = document.querySelector('.goal');
    var goalPos = goal.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (goalPos < winHeight){
        goal.classList.add('goalAppear')
    }

    else{
        goal.classList.remove('goalAppear')
    }
}

window.addEventListener('scroll', goalAppear)



function goalAppear(){
    var goal = document.querySelector('.goal');
    var goalPos = goal.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (goalPos < winHeight){
        goal.classList.add('goalAppear')
    }

    else{
        goal.classList.remove('goalAppear')
    }
}

window.addEventListener('scroll', goalAppear)


function reasonAppear(){
    var reason = document.querySelector('.reason');
    var reasonPos = reason.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (reasonPos < winHeight){
        reason.classList.add('reasonAppear')
    }

    else{
        reason.classList.remove('reasonAppear')
    }
}

window.addEventListener('scroll', reasonAppear)


function bbAppear(){
    var bb = document.querySelector('.bb');
    var bbPos = bb.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (bbPos < winHeight){
        bb.classList.add('bbAppear')
    }

    else{
        reason.classList.remove('bbAppear')
    }
}

window.addEventListener('scroll', bbAppear)


function sctAppear(){
    var sct = document.querySelector('.stream');
    var sctPos = sct.getBoundingClientRect().top;
    winHeight = window.innerHeight/1.5;

    if (sctPos < winHeight){
        sct.classList.add('sctAppear')
    }

    else{
        reason.classList.remove('sctAppear')
    }
}

window.addEventListener('scroll', sctAppear)

