// A button component that sets the tempo of the metronome on click

import preact from 'preact'

import useMetronome from '../../hooks/useMetronome'

export function TapTempoButton() {

    const [, dispatch] = useMetronome()

    return (
        <button onClick={() => dispatch({type: 'tapTempo', time: 120})}>
            Tap Tempo
        </button>
    )
}
