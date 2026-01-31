import Link from 'next/link'

// array of objs
const characters = [
    {name: "Clover", url: "/clover"},
    {name: "Stranger", url: "/stranger"},
    {name: "Furnace", url: "/furnace"}
];

// convert characters into lists
const listCharacters = characters.map(character => {
    return (
        <li key={"/art/oular/characters" + character.url}>
            <Link href={"/art/oular/characters" + character.url}>
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