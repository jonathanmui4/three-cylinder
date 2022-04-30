import { setGlobalState } from "../state";

export default function PinkButton() {

    const switchToPink = () => setGlobalState("color", "pink");

    return (
        <button 
            type="button" 
            onClick={switchToPink} 
            className='btnpink'
        >
            Switch to Pink
        </button>
    );
}