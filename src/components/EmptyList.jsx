import catFace from "../Image/catFace.jpeg"

export const EmptyList = () => {
    return (
        <div>
            <img src={catFace} alt="a cat face" />
            <p>
                Your todo list is empty...
            </p>
        </div>
    )
}