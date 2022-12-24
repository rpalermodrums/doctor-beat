// A display of the current beat number of the metronome

import useMetronome from '../../hooks/useMetronome';

export function BeatCounter() {
    const [{isPlaying, currentBeat}] = useMetronome()

    if (currentBeat === 0 && !isPlaying) {
        return (
            <div>
                <h1>Metronome</h1>
            </div>
        )
    }

    return (
        <div>
            {<h1>{Number(currentBeat) + 1} / 4</h1>}
        </div>
    )
}