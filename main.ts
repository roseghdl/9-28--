basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P5, 0)
    music.playTone(523, music.beat(BeatFraction.Half))
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P5, 1)
    music.playTone(523, music.beat(BeatFraction.Half))
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
	
})
