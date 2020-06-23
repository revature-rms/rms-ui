import React from 'react';

/**
 * Super cool animation feature that is included on the login screen.
 * NOTE: this is NOT required for any features of the application, this was just something that Sprint 2 did.
 * NO functionality is dependent on this, so it is **technically** okay if you remove this, (but don't)
 * If you want a fun story about animation and CSS you can ask Wezley about Hao Allen Tran, the king of the front end.
 */
export function LoginAnimationComponent() {
    return (
        <>
            <div className="animation-background">
                <div className="building-holder-2 unselect">
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                </div>
                <div className="building-holder unselect">
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                    <div className="building unselect"></div>
                </div>

                <div className="road unselect">
                </div>
                <div className="building-holder-4 unselect">
                    <div className="building-2 unselect"></div>
                    <div className="building-2 hidden unselect"></div>
                    <div className="building-2 unselect"></div>
                    <div className="building-2 hidden unselect"></div>
                    <div className="building-2 unselect"></div>
                    <div className="building-2 hidden unselect"></div>
                </div>
                <div className="building-holder-3 unselect">
                    <div className="building-2 unselect"></div>
                    <div className="building-2 hidden unselect"></div>
                    <div className="building-2 unselect"></div>
                    <div className="building-2 hidden unselect"></div>
                    <div className="building-2 unselect"></div>
                </div>
                <div className="ocean unselect">
                </div>
                <div className="beach unselect">
                </div>
                <div className="car-holder unselect">
                    <div className="car unselect"></div>
                </div>
            </div>
        </>
    )
}