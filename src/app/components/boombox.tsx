// TODO: create an array of music to play here!
// TODO: set up JS control so that audio play when you click img

function playMusic() {
    new Audio("/audio/duster_moon_age.mp3");
}

export default function Boombox() {
    return (
        <>
            {/* <img src="/boombox.png" alt="" onClick={playMusic}></img> */}
            <audio controls src="/audio/duster_moon_age.mp3"></audio>
        </>
    )
}