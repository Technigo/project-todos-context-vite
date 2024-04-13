import yellow from "../Image/yellow.jpeg"

export const EmptyList = () => {
    return (
        <div>
            <img src={yellow} alt="a yellow" />
            <p>
                Your todo list is empty...
            </p>
        </div>
    )
}