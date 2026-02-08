
export default function Page({ params }: { params: { id:string }}) {
    // I don't actually understand this. Got from the CodeAcademy doc
    const id = params.id //access dynamic segment data
    return (
        <p> Here it is: {id}</p>
    )
}