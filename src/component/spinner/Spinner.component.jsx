import {
    SpinnerOverlay,
    SpinnerContainer,
    SpinnerOverlayChats
} from "./spinner.style"


export const SPINNER_TYPE_CLASSES = {
    baseSpinner: "base-spinner",
    chatsSpinner: "chats-spinner"
}


const getSpinner = (spinnerType = SPINNER_TYPE_CLASSES.baseSpinner) => (
    {
        [SPINNER_TYPE_CLASSES.baseSpinner]: SpinnerOverlay,
        [SPINNER_TYPE_CLASSES.chatsSpinner]: SpinnerOverlayChats
    }[spinnerType ]
)


const Spinner = ({spinnerType}) => {
    const CustomSpinner = getSpinner(spinnerType)
    return (
        <CustomSpinner>
            <SpinnerContainer />
        </CustomSpinner>
    )
}

export default Spinner