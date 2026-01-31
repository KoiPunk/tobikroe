import Link from 'next/link'

// array of objs
const animals = [
    {name: "", url: "/"}
];

// convert characters into lists
const listCharacters = animals.map(character => {
    return (
        <li>
            <Link key={"/art/oular/characters" + character.url} href={"/art/oular/characters" + character.url}>
                {character.name}
            </Link>
        </li>
    )
})

export default function Page() {
    return (
        <div className="w-fit mx-auto pt-10 px-8">
            <ul>
                {listCharacters}
            </ul>
        </div>
    )
}