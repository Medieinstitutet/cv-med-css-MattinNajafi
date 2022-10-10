let width = window.innerWidth
let pause = true
let pageIndex = 0
window.addEventListener('resize', () => {
    width = window.innerWidth
    nextPage(pageIndex)
})

const imageArray = ['https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80', 'https://images.unsplash.com/photo-1617300040847-369dee9d35f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1866&q=80', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80', 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'] 

function nextPage(page) {
    pause = true;
    pageIndex = page
    const pageLayout = document.querySelector('.page-layout')
    pageLayout.style.transition = 'all 2s'
    switch (page) {
        case 0:
            pageLayout.style.left = '-' + 0 + 'px'
            break;
        case 1:
            pageLayout.style.left = '-' + width + 'px'
            break;
        case 2:
            pageLayout.style.left = '-' + width * 2 + 'px'
            break;
        case 3:
            pause = false;
            initSlideShow(0)
            pageLayout.style.left = '-' + width * 3 + 'px'
            break;
        default:
            break;
    }
}

function initSlideShow(index) {
        setTimeout(() => {
            const p = document.querySelectorAll('section div')
            const background = document.querySelector('.interests')
            background.style.background = `url(${imageArray[index]})`
            p.forEach(x => x.style.fontWeight = 'normal')
            p[index].style.fontWeight = 'bold'
            index !== 4 ? index++ : index = 0;
            if(!pause) requestAnimationFrame(() => {initSlideShow(index)})
        },2500)
}
