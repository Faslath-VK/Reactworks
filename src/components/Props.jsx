const Props = ({ states }) => {

    return (
        <div  >
            {states.map((state) => (
                <div key={state.name}>
                    <h1 >{state.name}</h1>
                    <p>{state.about}</p>

                </div>
            ))}
        </div>

    )

}
export default Props