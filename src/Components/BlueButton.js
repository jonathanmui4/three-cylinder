import { setGlobalState } from "../state";

export default function BlueButton() {

    const switchToBlue = () => setGlobalState("color", "aqua");

    return (
        <button 
            type="button" 
            onClick={switchToBlue} 
            className='btnblue'
        >
            Switch to Turqoise
        </button>
    );
}