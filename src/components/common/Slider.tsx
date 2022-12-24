// A universal slider component that can be used for any slider on the site

import preact from 'preact'

export function Slider(props: preact.JSX.HTMLAttributes<HTMLInputElement>) {
    return (
        <div className="slider">
            <input
                {...props}
                type="range"
                className="slider-range"
                min={40}
                max={240}
                step="1"
            />
        </div>
    )
}