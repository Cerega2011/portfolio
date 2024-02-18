let source = document.querySelectorAll(".projects__source")
let videos = document.querySelectorAll('.video__game')
let projects = document.querySelector(".projects")
let initialCards = [
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/watch.mp4',
        linkImage:'/poster/Screenshot_1.png',
        linkProject:'https://app.prntscr.com/ru/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/watch.mp4',
        linkImage:'/poster/Screenshot_1.png',
        linkProject:'https://app.prntscr.com/ru/',
    }
]




function createCards(card) {
    let projectsTemplate = projects.querySelector('#projects__template').content
    let newCard = projectsTemplate.querySelector(".projects__cell").cloneNode(true)
    let linkProject = newCard.querySelector(".project__item")
    let img = newCard.querySelector(".video-poster")
    let video = newCard.querySelector(".projects__source") 
    let title= newCard.querySelector('.projects__title')
    let subTitle = newCard.querySelector(".projects__sub-title")
    linkProject.href = card.linkProject
    img.src = card.linkImage 
    video.src = card.linkVideo
    title.textContent = card.title
    subTitle.textContent = card.subtitle
    return newCard
    
}

initialCards.forEach((card)=> { 
    projects.prepend(createCards(card))
})

videos.forEach(function (video) {
    let poster = video.previousElementSibling;
    video.addEventListener("mouseenter", function (event) {
        video.play()
        poster.style.display = 'none'
    })

    video.addEventListener("mouseleave", function (event) {
        video.pause()
        video.currentTime = 0
        poster.style.display = 'flex'
    })

})

