//loader
window.onload = function() {
    const loader = document.getElementById('loader');
    const body = document.body;

    if (loader) {
        loader.style.transition = 'opacity 0.5s';
        loader.style.opacity = '0';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }

    body.classList.remove('hidden');
};

//mouse-accesorie
const symbol = document.querySelector('.cursor-symbol');
document.addEventListener('mousemove', (e) => {
    let offsetX = 25;
    let offsetY = 25;
    symbol.style.transform = `translate(${e.clientX + offsetX}px, ${e.clientY + offsetY}px)`;
});

//set-lenis
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

//imagenes
ScrollTrigger.create({
    trigger: ".ws",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
        const galleryWrapper = document.querySelector(".gallery-wrapper");
        const sideCols = document.querySelectorAll(".col:not(.main)");
        const mainImg = document.querySelector(".img.main img");
    
        const scale = 1 + self.progress * 2.65;
        const yTranslate = self.progress * 300;
        const mainImgScale = 2 - self.progress * 0.85;
        
        galleryWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
        
        sideCols.forEach((col) => {
            col.style.transform = `translateY(${yTranslate}px)`;
        });
        
        mainImg.style.transform = `scale(${mainImgScale})`;
    },
});

//cards
const cards = document.querySelectorAll(".card");
const footer = document.querySelector(".footer");

ScrollTrigger.create({
    trigger: cards[0],
    start: "top top",
    endTrigger: cards[cards.length - 1],
    end: "top top",
    pinSpacing: false
});

cards.forEach((card, index) => {
    const isLastCard = index === cards.length - 1;
    const cardInner = card.querySelector(".card-inner");
    if (!isLastCard) {
        ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: footer,
            end: "top top",
            pin: true,
            pinSpacing: false
        });
        gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}px`,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top top",
                endTrigger: footer,
                end: "top top",
                scrub: true
            }
        });
    }
});