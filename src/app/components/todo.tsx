export default function Todo() {
    return (
        <div className="bg-linear-to-r from-cyan-500 to-blue-500">
            <h3 className="text-center font-semibold pt-4">To-Do List</h3>
            <ul>
                <li className="bg-gradient-to-r">
                    <span className="bg-gradient-to-b from-notepad to-notepad-hori">Fix Blog</span>
                </li>
                <li>Actually learn React</li>
                <li>Learn dynamic routing</li>
                <li>Set up custom domain and hosting</li>
                <li>Make everything mobile friendly</li>
            </ul>
        </div>
    )
}