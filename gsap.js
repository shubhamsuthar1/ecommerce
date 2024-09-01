function marqueAnimation(){
    window.addEventListener('wheel', function (det) {
        // console.log(det.deltaY)
        if (det.deltaY > 0) {
            // console.log('up')
            gsap.to(".marque", {
                transform: 'translateX(-200%)',
                repeat:-1,
                duration: 4,
                ease: "none"
            })
            gsap.to(".marque img", {
                rotate: 180
            })
        
        } else {
            gsap.to(".marque", {
                transform: 'translateX(0%)',
                repeat:-1,
                duration: 4,
                ease: "none"
            })
            gsap.to(".marque img", {
                rotate: 0
            })
            // console.log('down')
        }
        
        
    })
    
}
marqueAnimation()