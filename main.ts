input.onButtonPressed(Button.A, function () {
    Peso += 1
    basic.showString("p=")
    basic.showNumber(Peso)
})
input.onGesture(Gesture.Shake, function () {
    Peso = 74
    basic.showString("p=")
    basic.showNumber(Peso)
})
input.onButtonPressed(Button.AB, function () {
    IMC = 10000 * Peso / (Altura * Altura)
    basic.showString("IMC=")
    basic.showNumber(IMC)
    if (IMC < 18.5) {
        basic.showString("D")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (IMC > 25) {
        basic.showString("S")
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (IMC >= 30) {
        basic.showString("O")
        basic.showLeds(`
            . . # . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.B, function () {
    Peso += -1
    basic.showString("p=")
    basic.showNumber(Peso)
})
let IMC = 0
let Peso = 0
let Altura = 0
Altura = 160
Peso = 70
