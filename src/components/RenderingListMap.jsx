//Rendering using Map Method....

const RenderingMap = () => {

    const fruits = [
        {id:1, name:"Apple"},
        {id:2, name:"Lemon"}
    ];

    const names = ["Raj","Saish"]
    const MapName = names.map(name => <h2>{name}</h2>)

    return (
        <div>
        <div>
            <ul>
                {fruits.map(({id, name}) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
           
        </div>
        <div>
        {
            MapName
        }
            
        </div>
        </div>
    )

}

export default RenderingMap;