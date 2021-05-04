

export const Enemies = [
    {
        Name: "Dark-Magian Shadow Manticore",
        ID: "0",
        Flavor: "A giant, controlled, artificial creature made from an enormous toxic mass of miasma with the consciousness of a Dark Magian sorcerer sealed inside. This forsaken remnant of the great war travels through the miasma of Dark Magi and materializes whenever it moves in to attack any intruder to the Dark Magian continent.",
        Abilities: [
            {
                "Name": "Phase Step",
                "Info": ""
            },
            {
                "Name": "Dispersal",
                "Info": "Difficulty (6+) Dispersal The Manticore retreats into the miasma but can still be sensed on the peripherals where it will stalk its targets and join in on any further battles."
            }
        ],
        Attacks: [
            {
                "Name": "Tail Sweep",
                "Base": "20",
                "Positive": "10",
                "Negative": "10",
                "Area": "Small AOE",
                "Info": ""
            },
            {
                "Name": "Claw",
                "Base": "10",
                "Positive": "10",
                "Negative": "5",
                "Area": "",
                "Info": "Attacks 4 times"
            },
            {
                "Name": "Bite",
                "Base": "30",
                "Positive": "10",
                "Negative": "15",
                "Area": "",
                "Info": "Attempts 'Consume' if successful"
            },
            {
                "Name": "Dive",
                "Base": "15",
                "Positive": "15",
                "Negative": "5",
                "Area": "",
                "Info": "Only useable when descending from airborne position"
            },
            {
                "Name": "Alchemy : Metaphysical – Transmute Light/Heat (Shadow Wave-Force)",
                "Base": "36",
                "Power": "4",
                "Cost": "100",
                "Area": "Medium AOE"
            },
            {
                "Name": "Arcane : Cursed Breath",
                "Check": ["Resistance 7", "Mage Tech 60"],
                "Info": ["Curses Magi-tech and equipment with great durability damage over time.", "Removes decay from mana structure with vitalize"]

            },
            {
                "Name": "Consume",
                "Info": "GRAB that plces target inside dragon"
            }
        ],
        Power: "4",
        Endurance: "3",
        Speed: "0",
        Flight: "4",
        Int: "4",
        Res: "5",
        Spirit: "500",
        Manna: "300",
        Drops: [{}]
    },//END ENEMY
    {
        Name: "Cursed Wind Elemental",
        ID: "1",
        Flavor: "A concentrated Elemental entrapped by Sorcery made by the Dark magians to ensnare servants of elementalists who have long served them. They have since been assimilated to guard the barrens of Dark Magi",
        Abilities: [{}],
        Attacks: [
            {
                "Name": "Razor",
                "Base": "64",
                "Power": "GMD",
                "Positive": "0",
                "Negative": "22",
                "Area": "Single Target"
            },
            {
                "Name": "Stream",
                "Base": "40",
                "Power": "GMD",
                "Positive": "0",
                "Negative": "13",
                "Area": "Moderate AOE"
            },

            {
                "Name": "Sonic Pressure",
                "Base": "98",
                "Power": "GMD",
                "Positive": "0",
                "Negative": "33",
                "Area": "Large AOE"
            }
        ],

        Power: "5",
        Endurance: "1",
        Speed: "0",
        Flight: "6",
        LifeForce: "80",

        Drops: [
            {
                "Name": "Depleated Propagation Seal",
                "Info": "If charged, will cause sealed elemental to replicate overtime."
            }
        ] //END of Enemy Entries
    }
    ]

export default Enemies;
//END of File
