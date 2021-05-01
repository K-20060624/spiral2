let x_list = [0, 1, 2, 3, 4, 4, 4, 4, 4, 3, 2, 1, 0, 0, 0, 0, 1, 2, 3, 3, 3, 2, 1, 1, 2]
let y_list = [0, 0, 0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 4, 3, 2, 1, 1, 1, 1, 2, 3, 3, 3, 2, 2]
basic.forever(function () {
    for (let index = 0; index <= 25; index++) {
        led.plot(x_list[index], y_list[index])
        basic.pause(100)
    }
    basic.pause(100)
    for (let index2 = 0; index2 <= 25; index2++) {
        led.unplot(x_list[25 - index2], y_list[25 - index2])
        basic.pause(100)
    }
})
