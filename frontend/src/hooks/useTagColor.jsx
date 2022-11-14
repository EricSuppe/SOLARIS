import propTypes from "prop-types";

const useTagColor = (value) => {
    switch(value) {
        case "Prime League": return {backgroundColor: "#00fffc", color: "black"}
        case "League Of Legends": return {backgroundColor: "rgb(207, 82, 82)", color: "black"}
        default: return {backgroundColor: "#ff5c00", color: "white"}
    }
}

export default useTagColor

useTagColor.propTypes = {
    value: propTypes.string.isRequired,
}