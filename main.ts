let duty = 0
basic.forever(function () {
    if (duty < 1023) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty + 1
        basic.pause(10)
    }
    if (duty > 0) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty - 1
    }
    basic.pause(10)
})
