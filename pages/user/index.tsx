export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
 
    return {
      props: {
         users: data
      }
    };
 }
 
 export default function Fetch({users}:any) {
     console.log(users);
 
     return (
       <div>
           Users
           {users.map((elem:any) => (
            <div key={elem.id}> 
                <h2>{elem.name}</h2>
            </div>
           ))}
       </div>
     );
 };