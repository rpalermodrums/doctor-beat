// A universal button component that can be used for any button on the site

import preact from 'preact'


export function Button(props: preact.JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} />
    )
}