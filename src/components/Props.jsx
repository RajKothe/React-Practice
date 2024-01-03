//Props....

// const PropsDemo = (props) => {
// return (
//     <>
//         <h1>My Name is {props.FirstName} {props.LastName}.</h1>
//     </>
// )
// }

// export default PropsDemo; 


//Destructuring Props and State....

// const PropsDemo = ({FirstName,LastName}) => {
//     // const {FirstName,LastName} = props
//     return (
//         <>
//             <h1>My Name is {FirstName} {LastName}.</h1>
//         </>
//     )
//     }

        const PropsDemo=(props)=> {
                const {data} = props;
                return(
                    <div>
                        <h1>Props Expample : </h1>
                        <h4>{data.name}</h4>
                        <h4>{data.age}</h4>
                    </div>
                )
        }

    
    export default PropsDemo; 