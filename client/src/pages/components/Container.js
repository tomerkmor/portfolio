import React from "react"
import Title from "./Title"

const Container = ({ title, subtitle, children }) => {
    return (
        <div className="container-login100-22">
            <div className="wrap-login100-2">
                <Title title={title} subtitle={subtitle}/>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Container