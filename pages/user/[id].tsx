export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map((elem:any) => (
        {
            params: {id: elem.id.toString()}
        }
     )
    ) 

    return ({
        paths: paths,
        fallback: false
    })
}

export const getStaticProps = async (context:any) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const user = await res.json();

    return ({
        props: {user}
    })
}

const User = ({user}:any) => {
    console.log(user);

    return ( 
        <div>
           <h5>{user.name}</h5>
        </div>
     );
}
 
export default User;
