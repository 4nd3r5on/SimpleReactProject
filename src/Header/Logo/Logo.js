import React from "react"
import "./Logo.css"
import Typical from "react-typical";

function Logo() {
    return(
        <div className="logo">
            <Typical
                steps={['Hello', 1000, 'Hello, Friend!', 500, ' ', 100, 'We are ANONYMOUS',
                    1000, '', 500, "We want...", 1000 ,"...to make this world batter", 50 ]}
                loop={false}
                wrapper="p"
            />
        </div>
    )
}

export default React.memo(Logo)