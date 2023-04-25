import { Link } from "react-router-dom";

const Page404 = () => {
    return ( 
        <section className="page404">
            <h1>404</h1>
            <h2>Page Not Found</h2>

            <Link to="/">Back to HomePage</Link>
        </section>
     );
}
 
export default Page404;