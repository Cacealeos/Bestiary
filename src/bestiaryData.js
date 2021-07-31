

export const Enemies = [
    {
        Name: "Dark-Magian Shadow Manticore",
        ID:     0,
        Flavor: "A giant, controlled, artificial creature made from an enormous toxic mass of miasma with the consciousness of a Dark Magian sorcerer sealed inside. This forsaken remnant of the great war travels through the miasma of Dark Magi and materializes whenever it moves in to attack any intruder to the Dark Magian continent.",
        Abilities: [
            {
                Name: "Phase Step",
                Info: ""
            },
            {
                Name: "Dispersal",
                Info: "Difficulty (6+) Dispersal The Manticore retreats into the miasma but can still be sensed on the peripherals where it will stalk its targets and join in on any further battles."
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
        ID: 1,
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
    },//END ENEMY
    {
        Name: "Warp Stalker",
        ID: 2,
        Flavor: "A demon-possessed shadow. This demon has gained a unique ability to thrive off the effects of teleportation and the disturbance made by the influx of positively charged manna into Cacealeos which it then uses to ensnare demonic essence through the demonic phase over a large area, growing its power.",
        Abilities: [
            {
                Name: "Demonic Phase"
            },
            {
                Name: "Warp Step",
                Info: "Speed and Flight increases by 3 for three turns. (Max of 6) 3 turn cool down. Can be used as a defensive measure."
            },
            {
                Name: "Warp Touch",
                Info: "When targets are successfully hit with melee they make a Resistance Check : 11. IF fail, a part of their body becomes afflicted with dimensional instability, resulting in disable, or if three stack, death. Effect dissipates after Vitalize "
            }
        ],
        Power: 3,
        Endurance: 3,
        Speed: 3,
        Flight: 3,
        Int: 6,
        Res: 7,
        Con: 6,
        Disc: 7,
        Essence: 1300,
        Pain: 180,
        Acc: 350,
        Eva: 200,
        GG: 200,
        Melee: 65,
        Attacks: [
            {
                Name: "Misogi",
                Base: 85,
                Scaling: "35 / 15",
                Info: "Unblockable and Nullifies defensive measures from targets under 85 melee."
            },
            {
                Name: "Warp Spasm",
                Check: "Res: 12",
                Info: "Target becomes tainted with demons from Renzealeos. Possession ensues at 35% per turn. When possessed, parts of their body turn animalistic. "
            },
            {
                Name: "Demonic Massacre",
                Base: +6,
                Info: "Acc + 300"
            },
            {
                Name: "Interloper Sigil",
                Vitality: 25,
                Info: "Immune to Physcial. Plants a diamond shaped glow in an area that is interpreted as a dimensional anomaly. IF 3 interloper sigils are formed close together, a clone of Warp Stalker will appear doubling its turn eco and damage received from AOE if in range."
            }
        ]
    },//END ENEMY
    {
        Name: "Undead Titan",
        Flavor: "A headless, towering creature comprised of millions of undead stands at a height numbering in the hundreds of meters like a mountain. (See: Info 1) It thrives off the commands of the necromancer who summons it and holds the ability to spawn several undead monstrosities from its mass. But perhaps what is most distinguishing about it is the enormous mass inside its chest cavity that hold an unknown mass of manna-bases-energy. (See Info 2)",
        Info1: "Inspection or natural Discipline Check : 8. Upon inspection, the scroll appears to bound with a compound seal that the holder does not recognize. (Purgatory Flame) If upon more adept examination, (Through resources from Magi for instance : Lore Master LV 3 Check: 14) the scroll with be revealed to have the properties of an ancient power known to the Hell God as Purgatory Flame and that the giant upon summoning, will be ignited with this flame until dead. The reason for the unique composition of this seal is unknown to the holder. (The unnamed Ones intended for the Giant to destroy the tower if needed.) ",
        Info2: "Upon Summoning or Summoning insight only. – Sealing or Sage Arts magic Proficiency Check: 9 / 11 respectively. The mass at the center of the Giant’s hollow cavity exudes extremely potent manna that is numbing to your senses. (Exhibits characteristics of Ethereal) Bases on the currently volatility of the mass and nature of the Giant, it is likely that this mass is meant to detonate when the Giants is destroyed or is compromised.This of course, assumes that the Giant itself does not have the innate functions that allow it to self - destruct on its own(It does not)",
        Power: 3,
        Endurance: 5,
        Speed: 1,
        Flight: 0,
        Int: 3,
        Res: 5,
        "Necro-Force": 3000,
        Abilities: [
            {
                Name: "Devour Undead",
                Info: "Recovers Necro-Force equal to one quarter of the Target’s max Necro-Force. Target must be smaller than Undead Titan."
            },
            {
                Name: "Greater Convalescence",
                Info: "Regenerates 100 Necro – Force after summoning a creature from its mass."
            },
            {
                Name: "Purgatory Flame Aura",
                AutoCast: true,
                Info1: "Neutralizes Holy influence in the vicinity of the Titan. (Moderate AOE)",
                Info2: "Deals 3 Soul Damage to all targets in influenced zone.",
                Info3: "Deals 150 Damage to Titan every turn.",
                Info4: "Extreme difficulty in removing."
            },
            {
                Name: "Spawn Undead Goliath",
                Info: "Deals 300 Damage to Titan. Spawns 1 Undead Goliath."
            },
            {
                Name: "Spawn Undead Behemoth",
                Info: "Deals 200 Damage to Titan. Spawns 1 Undead Behemoth."
            },
            {
                Name: "Spawn Undead Beholder",
                Info: "Deals 150 Damage to Titan. Spawns 1 Undead Beholder."
            },
            {
                Name: "Spawn Undead Giant x2",
                Info: "Deals 100 Damage to Titan."
            }
        ],
        Attacks: [
            {
                Name: "Telekinesis"
            },
            {
                Name: "Impact Telekinesis"
            },
            {
                Name: "Telekinetic Storm"
            },
            {
                Name: "Etheral Spike",
                Base: 250,
                Power: 8,
                Scaling: "0/70",
                Effects: "Can only be Guarded with barriers or Guards capable of withstanding Ethereal Energy"
            },
            {
                Name: "Strike",
                Base: 35,
                Scaling: "12/12"
            }
        ]
    },//END ENEMY
    {
        Name: "Undead Goliath",
        Flavor: "A greater Undead Beast that stands 8 Meters tall and moves on four limbs with unnatural speed. This creature sports a small dismayed face with a disjointed jaw that opens wide when it seeks to devour undead and living alike.",
        Power: 3,
        Endurance: 3,
        Speed: 2,
        Flight: 0,
        Melee: 55,
        Int: 3,
        Res: 5,
        Con: 10,
        Acc: 280,
        Eva: 35,
        GG: 350,
        "Necro-Force": 1000,
        Abilities: [
            {
                Name: "Defend",
                Info: "Reduces damage recieved froma single attack by 30%"
            },
            {
                Name: "Devour Undead",
                Info: "Recovers Necro-Force equal to one quarter of the Target’s max Necro-Force. Target must be small than Undead Goliath."
            },
            {
                Name: "Devour Living",
                Info: "Target makes Power to Con Check (6). Target loses 30 Life – Force every turn while devoured and cannot except to attempt to escape with Power to Con Check (6). Undead Goliath recovers Necro-Force equal to lost life-force of target(s). Up to three human size target may be devoured at once."
            },
            {
                Name: "Restless Death",
                Info: "Recovers Necro-Force equal to 1/3 of total lost life-force every turn"
            }
        ],
        Attacks: [
            {
                Name: "Maw",
                Base: 30,
                Scaling: "10 / 10",
                Adv: "SS"
            },
            {
                Name: "Necro-Blast",
                Base: 40,
                Scaling: "0 / 10",
                Cost: 60
            },
            {
                Name: "Necro-Devastation",
                Info: "Goliath Self Destructs. Moderate AOE.",
                Base: "Remaining Necro-Force / 7",
                Power: 4,
                Scaling: "0 / 70"
            }]
    },//END ENEMY
    {
        Name: "Undead Behemoth",
        Flavor: "This abomination stands at around 30 meters with bulking appendages along its body all made of the same light-grey, rotting skin that reeks of death when torn.",
        Power: 3,
        Endurance: 3,
        Speed: 3,
        Flight: 0,
        Melee: 40,
        Int: 3,
        Res: 5,
        Con: 10,
        Acc: 280,
        Eva: 35,
        GG: 350,
        "Necro-Force": 1000,
        Abilities: [
            {
                Name: "Defened",
                Info: "Reduce damage taken by 30%"
            },
            {
                Name: "Devour Undead",
                Info: "Recovers Necro-Force equal to one quarter of the Target’s max Necro-Force. Target must be small than Undead Goliath."
            }
        ],
        Attacks: [
            {
                Name: "Pungent Miasma",
                Info: "Large AOE. Lowers Comat & Weapon Arts by 15. Lowers Acc by 60 while in Miasma.",
                ChecK: "Res: 8"
            }]
    }//END ENEMY
    ]

export default Enemies;
//END of File
