const music = ["The Doors", "Janis Joplin", "Turtles", "The Rolling Stones", "Led Zeppelin"];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

const ListTitle = (props) => {
    return <h1>{props.listTitle}</h1>
}

const MusicItem = (props) => {
    return <li>{props.musItem}</li>
}

const MusicList = (props) => {
    const listOfMusic = props.musicArray
    return (
        <ul>
            {listOfMusic.map(artist => {
               return <MusicItem  musItem={artist}/>
            })}
        </ul>
    )
}

const Description = (props) => {
    return <p>{props.description}</p>
}
const Main =(props) => {
    return (
        <div className="music-list">
        <ListTitle listTitle="All time favourites" />
        <MusicList musicArray={music} />
        <Description description="JHSJhajhjkasbjkhbajksjakljhsjkh" />
        </div> 
    )
}

const Footer = (props) => {
    return (
        <footer>
            <p>{props.copyright}</p>
        </footer>
    )
}

const App = (props) => {
    return (
        <div>
            <Header title="Music" />
            <Main />
            <Footer copyright="Copyright"/>
        </div>
    )
}

const rootEl = document.querySelector("#root");
ReactDOM.render(<App />, rootEl);

// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     )
// }

// const ListItem = (props) => {
//     return <li>{props.artists}</li>
// }

// const MusicList =(props) => {
//     const listOfMusic = props.music;
//     return (
//         <ul>
//         {listOfMusic.map(artist => {
//             return <ListItem artists={artist} />
//         })}
//         </ul>
//     )
// }

// const App = (props) => {
//     return (
//         <div>
//         <Header  title="All time favourite music artists"/>
//         <MusicList music={music} />
//         </div>
//     )
// }

// const rootEl = document.querySelector("#root");
// ReactDOM.render(<App />, rootEl)