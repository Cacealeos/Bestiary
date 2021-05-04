//import logo from './logo.svg';
import './App.css'
import './grid.css'
import TeamMenu from './Components/TeamMenu'
import Bestiary from './Components/Bestiary'
import EnemySlider from './Components/EnemySlider'
import { useState } from 'react'
import Enemies from './bestiaryData'
//import './scss/grid.scss';

function App() {

    const [EnemyList, setEnemyList] = useState(Enemies)
    const [showHomeTeam, setHomeTeam] = useState({
        "A": {
            Name: "A",
            Enabled: false,
            Enemies: []
        },
        "B": {
            Name: "B",
            Enabled: false,
            Enemies: []
        },
        "C": {
            Name: "C",
            Enabled: false,
            Enemies: []
        }
    })
    const [showAwayTeam, setAwayTeam] = useState({
        "A": {
            Name: "A",
            Enabled: false,
            Enemies: []
        },
        "B": {
            Name: "B",
            Enabled: false,
            Enemies: []
        },
        "C": {
            Name: "C",
            Enabled: false,
            Enemies: []
        }
    })
    const [entryHeightR, setHeightR] = useState(null)
    const [entryHeightL, setHeightL] = useState(null)
    const [open, setOpen] = useState(false)
 

    function addGroupEntry(Entry, gName, Team) {
        
        if (Team === "Home") {
            for (const X in showHomeTeam) {
                if (X === gName)
                    setHomeTeam(prev => ({
                        ...prev,
                        [`${X}`]: { ...prev[`${X}`], Enemies: [...prev[`${X}`].Enemies, Entry] }
                    }));
                //console.log(showHomeTeam[`${X}`].Enemies)
            }
        }
        if (Team === "Away") {
            for (const X in showAwayTeam) {
                if (X === gName)
                    setAwayTeam(prev => ({
                        ...prev,
                        [`${X}`]: { ...prev[`${X}`], Enemies: [...prev[`${X}`].Enemies, Entry] }
                    }));
                //console.log(showAwayTeam[`${X}`].Enemies)
            }
        }
    }

    return (
        <div className="App">
            <div className='App-body1'>
                <TeamMenu
                    AddGroup={() => {
                        for (const X in showHomeTeam) {
                            if (!showHomeTeam[`${X}`].Enabled) {
                                setHomeTeam(prevState => ({
                                    ...prevState,
                                    [`${X}`]: { ...prevState[`${X}`], Enabled: true }
                                }));
                                console.log(X);
                                return
                            }
                        }
                    }}
                    setGroup={showHomeTeam}
                    removeGroup={false}
                />
                <div className="dropdownL" style={{ height: entryHeightL }}>
                        <Bestiary Data={EnemyList} AddGroup={addGroupEntry} cSS='bEntry-primary' Team='Home' Groups={
                            Object.values(showHomeTeam).filter(group => group.Enabled)
                        } />
                </div>
            </div>

            

            <div className="GroupSectionA">
                <h1>GA</h1>
                {Object.values(showHomeTeam).map(E => {
                    if (E.Enabled)
                        return <EnemySlider Group={E} />
                    else return
                })}
            </div>

            <div className="GroupSectionB">
                <h1>GB</h1>
                {Object.values(showAwayTeam).map(E => {
                    if (E.Enabled)
                        return <EnemySlider Group={E} />
                    else return
                })}
            </div>

            <div className='App-body2'>
                <TeamMenu
                    AddGroup={() => {
                        for (const X in showAwayTeam) {
                            if (!showAwayTeam[`${X}`].Enabled) {
                                setAwayTeam(prevState => ({
                                    ...prevState,
                                    [`${X}`]: { ...prevState[`${X}`], Enabled: true }
                                }));
                                console.log(X);
                                return
                            }
                        }
                    }}
                    setGroup={showAwayTeam}
                    removeGroup={false}
                />
                <div className="dropdownR" style={{ height: entryHeightR }}>
                    <Bestiary Data={EnemyList} AddGroup={addGroupEntry} Click={() => setOpen(!open)} cSS='bEntry-secondary' Team='Away' Groups={
                        Object.values(showAwayTeam).filter(group => group.Enabled)
                    } />
                </div>
            </div>
            

    </div>
    )
}

export default App;
