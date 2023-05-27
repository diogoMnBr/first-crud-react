import React, {Fragment} from 'react';
import Planet from './planet';

/* async function getPlanets() {
    let url = 'http://localhost:3001/planets.json'
    const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
    const data =  await response.json()
    console.log(data.name)
    return data;
} */

class Planets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [
                    {
                      "id": "pluto",
                      "name": "Pluto",
                      "description": "Pluto (minor planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered and is the largest known plutoid (or ice dwarf).",
                      "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
                      "link": "https://en.wikipedia.org/wiki/Pluto"
                    },    
                    {
                      "id": "uranus",
                      "name": "Uranus",
                      "description": "Uranus (from the Latin name Ūranus for the Greek god Οὐρανός) is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
                      "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg",
                      "link": "https://en.wikipedia.org/wiki/Uranus"
                    }
            ]
        }
    }

    /* componentDidMount() {
        getPlanets().then(data => {
            this.setState(state => ({
                planets: data['planets']
            }))
        })
    } */

    //removendo o último planeta
    removeLast = () => {
        let new_planets = [...this.state.planets]

        new_planets.pop()

        this.setState({
            planets: new_planets
        })
    }
    //duplicando o ultimo planeta - alterando State
    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button>Show Message!</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate Last!</button>
                <button onClick={this.removeLast}>Remove Last!</button>
                <hr/>
                {this.state.planets.map((planet) =>
                <Planet name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url} 
                        link={planet.link}
                        
                />)}
                <hr/>
            </Fragment> //substitui a div e não renderiza nenhuma tag na árvore DOM
        )
    }
}

export default Planets;