// A custom hook to use the metronome

import { useEffect, useReducer } from 'preact/hooks';
import { Synth, Transport, Time, TimeClass } from 'tone';

const synth = new Synth().toDestination();

type Action =
  | { type: 'play' }
  | { type: 'pause' }
  | { type: 'setTempo'; tempo: number }
  | { type: 'setTimeSignature'; timeSignature: string }
  | { type: 'setCurrentBeat'; currentBeat: number }
  | { type: 'tapTempo'; time: number };

type State = {
  isPlaying: boolean;
  tempo: number;
  timeSignature: string;
  currentBeat: number;
};

const initialState: State = {
  isPlaying: false,
  tempo: 120,
  timeSignature: '4/4',
  currentBeat: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'play':
      Transport.start();
      return { ...state, isPlaying: true };
    case 'pause':
      Transport.stop();
      return { ...state, isPlaying: false, currentBeat: 0 };
    case 'setTempo':
      Transport.bpm.value = action.tempo;
      return { ...state, tempo: action.tempo };
    case 'setTimeSignature':
      return { ...state, timeSignature: action.timeSignature };
    case 'setCurrentBeat':
      const currentBeat = Math.round(action.currentBeat - 1.1);
      return { ...state, currentBeat: action.currentBeat };
    default:
      return state;
  }
}

export default function useMetronome(): [State, (action: Action) => void] {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    Transport.scheduleRepeat((time) => {
      dispatch({ type: 'setCurrentBeat', currentBeat: Number(Time(time).toBarsBeatsSixteenths().split(':')[1]) });
    }, '16n');
  }, [state.currentBeat]);

  useEffect(() => {
    if (state.isPlaying) {
      console.log(state.currentBeat)
      if (state.currentBeat === 0) {
        synth.triggerAttackRelease('C4', '16n');
      } else {
        synth.triggerAttackRelease('C3', '16n');
      }
    }
  }, [state.currentBeat]);

  return [state, dispatch];
}
