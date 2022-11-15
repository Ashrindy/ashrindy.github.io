const createScreenshot = config => {}

const images = [{
    src: 'path/to/image.png',
    alt: 'Alt tag for image'
}]

createScreenshot({
    selector: '.screenshot',
    trigger: 'click',
    images
})