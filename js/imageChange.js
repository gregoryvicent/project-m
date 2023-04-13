function imageChange() {
    const $cardImg = document.querySelector('.Carousel-cardImg')
    const $cardText = document.querySelector('.Carousel-cardText')
    const imagesList = [
        'https://i.ibb.co/5FTvwKr/IMG-20230315-WA0026.jpg',
        'https://i.ibb.co/7pJTVBs/IMG-20230315-WA0024.jpg',
        'https://i.ibb.co/N71bJL8/IMG-20230307-WA0014.jpg',
        'https://i.ibb.co/VDHtwLN/IMG-20230308-WA0055.jpg'
    ]
    const messagesList = [
        '...lo mucho que te amo 💘',
        '...todo lo que haces por mí 😍',
        '...el tiempo que pasamos juntos 💞',
        '...lo especial que eres 🔆'
    ]
    let counter = 0
    setInterval(() => {
        counter++
        if(counter >= messagesList.length) {
            counter = 0
        }
        $cardImg.setAttribute('src', imagesList[counter])
        $cardImg.setAttribute('alt', messagesList[counter])
        $cardText.textContent = messagesList[counter]
    }, 3000)    
}

export { imageChange }
