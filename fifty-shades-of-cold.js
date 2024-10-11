import { colors } from './fifty-shades-of-cold.data.js'

export function generateClasses() {
    const style = document.createElement('style')
    let styleContent = ''

    colors.forEach(color => {
        styleContent += `.${color} { background: ${color}; }\n`
    })

    style.textContent = styleContent
    document.head.appendChild(style)
}

export function generateColdShades() {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    const container = document.createElement('div')
    container.style.display = 'flex'
    container.style.flexWrap = 'wrap'
    container.style.justifyContent = 'center'

    colors.forEach(color => {
        if (coldColors.some(coldColor => color.includes(coldColor))) {
            const div = document.createElement('div')
            div.className = color
            div.textContent = color
            container.appendChild(div)
        }
    })

    document.body.appendChild(container)
}

export function choseShade(shade) {
    const divs = document.querySelectorAll('div')
    divs.forEach(div => {
        div.className = shade
    })
}