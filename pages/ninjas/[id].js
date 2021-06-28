

//The job of NEXT is to build static packages and JS bundles based upon our components

//GetStaticPaths determines how many pages are needed based upon our data
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {

        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {

        //paths : paths
        paths,
        fallback: false

    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: {ninja: data}
    }
}

const Details = ({ninja}) => {

    return (
        <div>
            <h1>Name: {ninja.name}</h1>
            <p>Email: {ninja.email}</p>
            <p>Webiste: {ninja.website}</p>
            <p>City: {ninja.address.city}</p>

   
            <div>
            
            </div>
        </div>
    );
}

export default Details;
