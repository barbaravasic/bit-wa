const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

const Main = (props) => {
    return (
        <main>
            <h2>{props.description}</h2>
        </main>
    )
}

const Body = (props) => {
    return (
        <div>
            <img src={props.photo} />
            <p>{props.info.name}</p>
        </div>
    )
}

class Info{
    constructor(name, surname, yob) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
    }
}

const Footer = (props) => {
    return (
        <footer>
            <p>{props.copyright}</p>
        </footer>
    )
}

const myInfo = new Info("Barbara", "Vasic", 1991);

const App = (props) => {
    return (
        <div>
            <Header title="My first React project"/>
            <Main description="Practice makes it perfect" />
            <Body photo="https://www.w3schools.com/w3css/img_lights.jpg" info={myInfo} />
            <Footer copyright="Copyright" />

        </div>
    )
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);