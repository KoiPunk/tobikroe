const image_hover = 
{
    title: "",
    src: ""
}

const image_click = 
{
    title: "",
    src: ""
}


export default function Confetti() {
    let image;

    function handleHover() {
        image = image_hover;
    }
    
    function handleClick() {
        // Make confetti!
        image = image_click;
        alert("Confettis are loading...")
    }
    return <button onClick={handleClick}>Confetti!</button>
}