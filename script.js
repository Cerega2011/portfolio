// let source = document.querySelectorAll(".projects__source")
// let videos = document.querySelectorAll('.video__game')
let projects = document.querySelector(".projects")
let initialCards = [
    {
        title:'Часы с датой',
        subtitle:'Стильные часы с датой',
        linkVideo:'/video/watch.mp4',
        linkImage:'/poster/Screenshot_1.png',
        linkProject:'https://app.prntscr.com/ru/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/car.mp4',
        linkImage:'/poster/Car.png',
        linkProject:'https://app.prntscr.com/ru/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/ded-moroz.mp4',
        linkImage:'/poster/ded_Moroz.png',
        linkProject:'https://app.prntscr.com/ru/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/kamen.mp4',
        linkImage:'/poster/Rock.png',
        linkProject:'https://app.prntscr.com/ru/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/canye.mp4',
        linkImage:'/poster/quotes.png',
        linkProject:'https://app.prntscr.com/ru/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/platformer.mp4',
        linkImage:'/poster/platformer.png',
        linkProject:'https://app.prntscr.com/ru/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/mesto.mp4',
        linkImage:'/poster/Mesto.png',
        linkProject:'https://mesto-zeta.vercel.app/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/quest.mp4',
        linkImage:'/poster/Quest.png',
        linkProject:'https://quest-nine-theta.vercel.app/',
    },
    {
        title:'Заголовок',
        subtitle:'Описание',
        linkVideo:'/video/snake.mp4',
        linkImage:'/poster/Snake.png',
        linkProject:'https://snake-liart-one.vercel.app/',
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
    let videoElement = newCard.querySelector(".video__game")
    let videoSource = videoElement.querySelector(".projects__source")
    
    videoSource.src = card.linkVideo
    linkProject.href = card.linkProject
    img.src = card.linkImage 
    title.textContent = card.title
    subTitle.textContent = card.subtitle

    linkProject.addEventListener("mouseenter", function () {
        videoElement.play()
        img.style.display = 'none'
    })

    linkProject.addEventListener("mouseleave", function () {
        videoElement.pause()
        videoElement.currentTime = 0
        img.style.display = 'flex'
    })


    return newCard
    
}

initialCards.forEach((card)=> { 
    projects.prepend(createCards(card))
})



