// TODO: make the list dynamiclly generated using an array of strings?
// TODO: add little hole on the left of the paper!

export default function Todo() {
    return (
        <div className="bg-notepad">
            <h3 className="text-center font-semibold">TODO</h3>
            <ul>
                <li className="line-through">Make a TODO list</li>
                <li>Fix Blog</li>
                <li>Actually learn React</li>
                <li>Learn dynamic routing</li>
                <li>Set up custom domain and hosting</li>
                <li>Make everything mobile friendly</li>
            </ul>
        </div>
    )
}