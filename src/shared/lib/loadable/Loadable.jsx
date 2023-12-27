import {Component, Suspense} from "react";

export const Loadable = (Component) => {
    return function (...props) {
        return (
            <Suspense fallback={'Loading...'}>
                <Component {...props}/>
            </Suspense>
        )
    }
}