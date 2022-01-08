function saugerNachRechts () {
    if (saugerRaum == 1) {
        saugerRaum = 2
    }
}
function raumStaubigMachen () {
    if (randint(1, 2) == 1) {
        staubInRaum1 = true
    } else {
        staubInRaum2 = true
    }
}
input.onButtonPressed(Button.A, function () {
    saugerNachLinks()
})
function saugerNachLinks () {
    if (saugerRaum == 2) {
        saugerRaum = 1
    }
}
input.onButtonPressed(Button.B, function () {
    saugerNachRechts()
})
input.onGesture(Gesture.Shake, function () {
    raumSaugen()
})
function createDisplayStates () {
    return [
    images.createImage(`
        # # # . .
        # # # . .
        . . # . .
        . . # . .
        . . # . .
        `),
    images.createImage(`
        . . # # #
        . . # # #
        . . # . .
        . . # . .
        . . # . .
        `),
    images.createImage(`
        # # # . .
        # # # . .
        . . # . .
        . . # . .
        # # # . .
        `),
    images.createImage(`
        . . # # #
        . . # # #
        . . # . .
        . . # . .
        # # # . .
        `),
    images.createImage(`
        # # # . .
        # # # . .
        . . # . .
        . . # . .
        . . # # #
        `),
    images.createImage(`
        . . # # #
        . . # # #
        . . # . .
        . . # . .
        . . # # #
        `),
    images.createImage(`
        # # # . .
        # # # . .
        . . # . .
        . . # . .
        # # # # #
        `),
    images.createImage(`
        . . # # #
        . . # # #
        . . # . .
        . . # . .
        # # # # #
        `)
    ]
}
function raumSaugen () {
    if (saugerRaum == 1) {
        staubInRaum1 = false
    } else {
        staubInRaum2 = false
    }
}
function staubsaugerWeltVisualisieren (pSaugerRaum: number, staubInRaum1: boolean, staubInRaum2: boolean) {
    displayStateAsNumber = pSaugerRaum - 1
    if (staubInRaum1) {
        displayStateAsNumber = displayStateAsNumber + 2
    }
    if (staubInRaum2) {
        displayStateAsNumber = displayStateAsNumber + 4
    }
    currentDisplay = displayStates[displayStateAsNumber]
    currentDisplay.showImage(0)
}
let currentDisplay: Image = null
let displayStateAsNumber = 0
let displayStates: Image[] = []
let staubInRaum2 = false
let staubInRaum1 = false
let saugerRaum = 0
saugerRaum = 1
staubInRaum1 = false
staubInRaum2 = true
displayStates = createDisplayStates()
let loopCounter = 0
basic.forever(function () {
    loopCounter = loopCounter + 1
    if (randint(1, 16) == 13) {
        raumStaubigMachen()
    }
    staubsaugerWeltVisualisieren(saugerRaum, staubInRaum1, staubInRaum2)
})
