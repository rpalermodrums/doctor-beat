// A button that can be used to play and pause the audio of the metronome player

import useMetronome from '../../hooks/useMetronome'

export function PlayButton() {

    const [state, dispatch] = useMetronome()

    return (
        <div>
            <button style={{backgroundColor: 'lightBlue'}} onClick={() => {
                console.log('Play')
                dispatch({type: state.isPlaying ? 'pause' : 'play'})
            }}>
                {state.isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}
