const stopwatch = {
    display_hours: document.querySelector('#hour'),
    display_minutes: document.querySelector('#minutes'),
    display_seconds: document.querySelector('#seconds'),
    display_hundredths: document.querySelector('#hundredths'),
    buttons: document.querySelector('#buttons'),
    btn_start: document.querySelector('.start'),
    btn_pause: undefined,
    btn_reset: undefined,
    counter: 0,
    interval: undefined,
    isCounting: false,
    isPaused: false,

    init_couting: () => {
        stopwatch.isCounting = true
        stopwatch.update_buttons()
        stopwatch.interval = setInterval(() => {
            console.log(stopwatch.counter)
            stopwatch.counter++
            stopwatch.update_display()
        }, 10);
    },
    
    pause_couting: () => {
        clearInterval(stopwatch.interval)
        stopwatch.isCounting = false
        stopwatch.isPaused = true
        stopwatch.update_buttons()
    },

    reset_couting: () => {
        stopwatch.pause_couting()
        stopwatch.isPaused = false
        stopwatch.update_buttons()
        stopwatch.counter = 0
        stopwatch.update_display()
    },

    update_buttons: () => {
        stopwatch.buttons.innerText = ''
        if(stopwatch.isCounting){
            stopwatch.buttons.append(createButton("pause"), createButton("reset"))

            stopwatch.btn_pause = document.querySelector('.pause')
            stopwatch.btn_reset = document.querySelector('.reset')
            stopwatch.btn_pause.addEventListener('click', stopwatch.pause_couting)
            stopwatch.btn_reset.addEventListener('click', stopwatch.reset_couting)

        }else if (stopwatch.isPaused){
            stopwatch.buttons.append(createButton("start"), createButton("pause"), createButton("reset"))

            stopwatch.btn_pause = document.querySelector('.pause')
            stopwatch.btn_reset = document.querySelector('.reset')
            stopwatch.btn_start = document.querySelector('.start')
            stopwatch.btn_start.addEventListener('click', stopwatch.init_couting)
            stopwatch.btn_pause.addEventListener('click', stopwatch.pause_couting)
            stopwatch.btn_reset.addEventListener('click', stopwatch.reset_couting)  
        } else {
            stopwatch.buttons.append(createButton("start"))
            stopwatch.btn_start = document.querySelector('.start')
            stopwatch.btn_start.addEventListener('click', stopwatch.init_couting)
        }
    },

    update_display: () => {
        let hundredths = stopwatch.counter % 100
        stopwatch.display_hundredths.innerText = formatNumber(hundredths)

        let seconds = Math.floor(stopwatch.counter / 100) % 60
        stopwatch.display_seconds.innerText = formatNumber(seconds)

        let minutes = Math.floor(stopwatch.counter / 6000) % 60
        stopwatch.display_minutes.innerText = formatNumber(minutes)

        let hours = Math.floor(stopwatch.counter / 360000) % 60
        stopwatch.display_hours.innerText = formatNumber(hours)
    }
}

function createButton(className){
    let button = document.createElement("button")
    button.classList.add(className)
    button.classList.add('btn')
    button.innerText = className

    return button
}

function formatNumber(number){
    return number.toString().padStart(2, '0');
}
stopwatch.update_buttons()