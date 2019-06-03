// import "./Ship.css"
/** @jsx jsx */
import { jsx } from '@emotion/core'


const ship = props => {
    return (
        <div css={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            height: "100%",
            backgroundColor: "#6200ee",
            borderRadius: "5px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            WebkitTransition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
            transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
            color: "#ffffff",
            '&:after': {
                borderRadius: "5px",
                position: "absolute",
                zIndex: "-1",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                opacity: "0",
                WebkitTransition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
            },
            '&:hover': {
                WebkitTransform: "scale(1.25, 1.25)",
                transform: "scale(1.25, 1.25)",
            },
            '&:hover::after': {
                opacity: "1",
            }
            
        }}>
            <h3 >{props.name}</h3>
            <p>{props.model}</p>
            <p>{props.manufacturer}</p>
        </div >
    )
}

export default ship;