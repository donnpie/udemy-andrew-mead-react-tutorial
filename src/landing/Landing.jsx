import './landing.css';

function Landing() {
    const links = [
            {
                name: "HomeTest",
                url: "/"
            },
            {
                name: "Counter app",
                url: "/counter-app"
            },
            {
                name: "Indecision app",
                url: "/indecision-app"
            }
        ]
    return (
        <ul>
            {
                links.map((link, idx) => <li key={idx}><a key={idx} href={link.url}>{link.name}</a></li>)
            }
        </ul>
    )
}

export default Landing

