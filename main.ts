basic.showString("Rafa y Gonzalo, bienvenido al proyecto")
basic.pause(500)
basic.showString("Ahora vas a escuchar musica")
music.playMelody("E E F G G F E D ", 95)
music.playMelody("C C D E E D D - ", 95)
music.playMelody("E E F G G F E D ", 95)
music.playMelody("C C D E D C C - ", 95)
basic.showString("ANIMACION, JEJE")
while (true) {
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
}
basic.forever(function () {
	
})
