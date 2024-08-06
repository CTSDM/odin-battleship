const stateValues = [
        `&nbsp; ~ ~ ~ ~ ~ ~ ~`,
        `~ ~ ~ ~ ~ ~ ~ ~`
];
const waveGroup = [...document.querySelector('.separator.ocean').children];

export function backgroundWaves() {
        let state = 0;
        setInterval(function() {
                waveGroup.forEach((wave) => {
                        wave.appendChild(getConfiguredWave(state));
                        wave.removeChild([...wave.children][0]);
                });
                state = 1 - state;
        }, 250);
}

export function initializeWaves() {
        waveGroup.forEach((wave) => {
                for (let i = 0; i < waveGroup.length * 2; ++i)
                        wave.appendChild(getConfiguredWave(i % 2));
        });
}

function getConfiguredWave(state) {
        const divWave = document.createElement('div');
        divWave.innerHTML = stateValues[state];
        return divWave;
}
