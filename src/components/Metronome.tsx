// The main metronome component

import preact from 'preact'

import useMetronome from '../hooks/useMetronome'

import { TempoSlider } from './controls/TempoSlider'
import { PlayButton } from './controls/PlayButton'
import { TapTempoButton } from './controls/TapTempoButton'
import { BeatCounter } from './controls/BeatCounter';
import { useEffect } from 'preact/hooks';


export const Metronome = () => {
    const [, dispatch] = useMetronome()

    return (
        <div>
            <BeatCounter />
            <TempoSlider />
            <PlayButton />
        </div>
    )
}