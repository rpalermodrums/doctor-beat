// A slider component that can be used to set the tempo of the metronome

import useMetronome from '../../hooks/useMetronome'

import { Slider } from '../common/Slider'

export function TempoSlider() {
    const [state, dispatch] = useMetronome()

    return (
        <div>
            <h2>{state.tempo} BPM</h2>
            <Slider
                value={state.tempo}
                onChange={e => {
                    dispatch({type: 'setTempo', tempo: parseInt(e.currentTarget.value, 10)})
                }}
                id="tempo-slider"
            />
        </div>
    )
}
