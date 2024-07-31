export default function backgroundWaves() {
        // let's add some event listeners to the ocean div
        let state = 0;
        const stateValues = [`
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~`,
                `       &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~`
        ];
        const waveSpan = document.querySelector('.ocean > span');
        setInterval(() => {
                waveSpan.innerHTML = stateValues[state];
                state = 1 - state;
        }, 250);
}
