/* =====================================================================
   wiki-data.js — THE ENTIRE WIKI LIVES HERE. Edit this file to add content.
   Built from the Invincible Inc Trello board.
   SHOWN: cards labeled "Complete" or "Work In Progress", plus anything with
   a real write-up. HIDDEN ("hidden": true): "Haven't Started" empty cards.

   - "hidden": true  -> kept in the file but not shown. Delete the line to show it.
   - "wip": true     -> shows a WIP badge.
   - empty "sections"-> article shows an "under construction" page until filled
     in. (Plenty of Complete cards have no write-up yet — that's expected.)

   Add/edit = add/edit an object in "entries":
     { id:"example-id", cat:"powers", name:"Example", type:"Power",
       wip:false, sections:[ { heading:"Overview", body:"..." } ] }
   ===================================================================== */
window.WIKI_DATA = {
  "categories": [
    {
      "id": "guides",
      "name": "Guides",
      "icon": "📖",
      "color": "#2E6BFF",
      "blurb": "How to start, progress and master the mod."
    },
    {
      "id": "roadmap",
      "name": "Road Map",
      "icon": "🗺️",
      "color": "#070b06",
      "blurb": "What's planned, in progress and shipped."
    },
    {
      "id": "systems",
      "name": "System and Functions",
      "icon": "⚙️",
      "color": "#15171d",
      "blurb": "Stats, levels, workouts and core mechanics."
    },
    {
      "id": "race",
      "name": "Race",
      "icon": "🧬",
      "color": "#FFD23D",
      "blurb": "Every playable race and sub-race."
    },
    {
      "id": "powers",
      "name": "Powers",
      "icon": "⚡",
      "color": "#2E6BFF",
      "blurb": "Abilities, ultimates and how to unlock them."
    },
    {
      "id": "bloodlines",
      "name": "Bloodlines",
      "icon": "🧪",
      "color": "#15171d",
      "blurb": "Inherited bloodlines and their bonuses."
    },
    {
      "id": "curses",
      "name": "Curses",
      "icon": "☠️",
      "color": "#070b06",
      "blurb": "Curses, drawbacks and how to remove them."
    },
    {
      "id": "fighting",
      "name": "Fighting Styles",
      "icon": "🥊",
      "color": "#FFD23D",
      "blurb": "Combat styles, combos and techniques."
    },
    {
      "id": "npcs",
      "name": "NPCs",
      "icon": "👥",
      "color": "#2E6BFF",
      "blurb": "Heroes, villains and the full NPC roster."
    },
    {
      "id": "events",
      "name": "Events",
      "icon": "📅",
      "color": "#15171d",
      "blurb": "World events, missions and invasions."
    },
    {
      "id": "items",
      "name": "Items",
      "icon": "🎒",
      "color": "#070b06",
      "blurb": "Gear, drip armor, consumables and drops."
    }
  ],
  "entries": [
    {
      "id": "invincible",
      "cat": "npcs",
      "name": "Invincible",
      "type": "Mob",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Human-Viltrumite",
        "power": "Smart-Atoms",
        "reputation": 250,
        "affiliation": "The G.D.A",
        "str": 220,
        "dura": 210,
        "mastery": 25,
        "health": 340,
        "flight": 8
      }
    },
    {
      "id": "omniman",
      "cat": "npcs",
      "name": "Omniman",
      "type": "Mob",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Viltrumite",
        "power": "Smart-Atoms",
        "reputation": -400,
        "affiliation": "Viltrum-Empire",
        "str": 280,
        "dura": 260,
        "mastery": 55,
        "health": 400,
        "flight": 12
      }
    },
    {
      "id": "invinciboy",
      "cat": "npcs",
      "name": "InvinciBoy",
      "type": "Mob",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Human-Viltrumite",
        "power": "Smart-Atoms",
        "reputation": 250,
        "affiliation": "None",
        "str": 250,
        "dura": 280,
        "mastery": 55,
        "health": 340,
        "flight": 10
      }
    },
    {
      "id": "atom-eve",
      "cat": "npcs",
      "name": "Atom Eve",
      "type": "Mob",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Human",
        "power": "Atomic Manipulation",
        "reputation": 420,
        "affiliation": "The G.D.A",
        "str": 45,
        "dura": 55,
        "mastery": 85,
        "health": 120,
        "flight": 3
      }
    },
    {
      "id": "criminal",
      "cat": "npcs",
      "name": "Criminal",
      "type": "Mob",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Human / Monster",
        "power": "None",
        "reputation": -25,
        "affiliation": "None",
        "str": "1–45",
        "dura": "1–35",
        "mastery": 0,
        "health": "25–65"
      }
    },
    {
      "id": "tech-jacket",
      "cat": "npcs",
      "name": "Tech Jacket",
      "type": "Mob",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Human",
        "power": "Tech Jacket",
        "reputation": 420,
        "affiliation": "The Coalition",
        "str": 220,
        "dura": 240,
        "mastery": 60,
        "health": 340,
        "flight": 6
      }
    },
    {
      "id": "viltrumites",
      "cat": "npcs",
      "name": "Viltrumites",
      "type": "Mob",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Viltrumite",
        "power": "Smart-Atoms",
        "reputation": -400,
        "affiliation": "Viltrum-Empire",
        "str": "100–230",
        "dura": "100–240",
        "mastery": "10–45",
        "health": "200–300",
        "flight": "5–10"
      },
      "roster": [
        {
          "name": "Conquest",
          "stats": {
            "race": "Viltrumite",
            "power": "Smart-Atoms",
            "reputation": -500,
            "affiliation": "Viltrum-Empire",
            "str": 350,
            "dura": 370,
            "mastery": 85,
            "health": 500,
            "flight": 12
          }
        },
        {
          "name": "General Kregg",
          "stats": {
            "race": "Viltrumite",
            "power": "Smart-Atoms",
            "reputation": -400,
            "affiliation": "Viltrum-Empire",
            "str": 270,
            "dura": 260,
            "mastery": 75,
            "health": 380,
            "flight": 10
          }
        },
        {
          "name": "Lucan",
          "stats": {
            "race": "Viltrumite",
            "power": "Smart-Atoms",
            "reputation": -400,
            "affiliation": "Viltrum-Empire",
            "str": 260,
            "dura": 275,
            "mastery": 45,
            "health": 360,
            "flight": 12
          }
        },
        {
          "name": "Thula",
          "stats": {
            "race": "Viltrumite",
            "power": "Smart-Atoms",
            "reputation": -400,
            "affiliation": "Viltrum-Empire",
            "str": 235,
            "dura": 240,
            "mastery": 60,
            "health": 320
          }
        },
        {
          "name": "Anissa",
          "stats": {
            "race": "Viltrumite",
            "power": "Smart-Atoms",
            "reputation": -400,
            "affiliation": "Viltrum-Empire",
            "str": 245,
            "dura": 265,
            "mastery": 50,
            "health": 350,
            "flight": 15
          }
        }
      ]
    },
    {
      "id": "mister-liu",
      "cat": "npcs",
      "name": "Mister Liu",
      "type": "Mob",
      "wip": true,
      "sections": []
    },
    {
      "id": "damian-darkblood",
      "cat": "npcs",
      "name": "Damian Darkblood",
      "type": "NPC",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Demon",
        "power": "Demon Magic",
        "reputation": -50,
        "affiliation": "None",
        "str": 100,
        "dura": 120,
        "mastery": 70,
        "health": 120
      }
    },
    {
      "id": "conquest",
      "cat": "npcs",
      "name": "Conquest",
      "type": "Boss",
      "wip": false,
      "sections": [],
      "stats": {
        "race": "Viltrumite",
        "power": "Smart-Atoms",
        "reputation": -500,
        "affiliation": "Viltrum-Empire",
        "str": 350,
        "dura": 370,
        "mastery": 85,
        "health": 500,
        "flight": 12
      }
    },
    {
      "id": "original-guardians-of-the-globe",
      "cat": "npcs",
      "name": "Original Guardians Of The Globe",
      "type": "Mobs",
      "wip": true,
      "sections": [],
      "roster": [
        {
          "name": "Red Rush",
          "stats": {
            "race": "Human",
            "power": "Super Speed",
            "reputation": 420,
            "affiliation": "The G.D.A",
            "str": 90,
            "dura": 60,
            "mastery": 40,
            "health": 150
          }
        },
        {
          "name": "Darkwing",
          "stats": {
            "race": "Human",
            "power": "None",
            "reputation": 300,
            "affiliation": "The G.D.A",
            "str": 55,
            "dura": 60,
            "mastery": 80,
            "health": 140
          }
        }
      ]
    },
    {
      "id": "one-for-all",
      "cat": "powers",
      "name": "One For All (My Hero)",
      "type": "Guess Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "devil-s-footprint",
      "cat": "powers",
      "name": "Devil's Footprint (Fire Force)",
      "type": "Guess Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "thokk-s-curse-of-bloodlust",
      "cat": "curses",
      "name": "Thokk's Curse of Bloodlust",
      "type": "Curse",
      "wip": false,
      "sections": []
    },
    {
      "id": "curse-of-duplication",
      "cat": "curses",
      "name": "Curse of Duplication",
      "type": "Curse",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "dracula",
      "cat": "npcs",
      "name": "Dracula",
      "type": "NPC",
      "wip": true,
      "sections": []
    },
    {
      "id": "zechariah",
      "cat": "npcs",
      "name": "Zechariah",
      "type": "NPC",
      "wip": true,
      "sections": []
    },
    {
      "id": "cecil",
      "cat": "npcs",
      "name": "Cecil",
      "type": "NPC",
      "wip": true,
      "sections": []
    },
    {
      "id": "art",
      "cat": "npcs",
      "name": "Art",
      "type": "NPC",
      "wip": true,
      "sections": []
    },
    {
      "id": "titan",
      "cat": "npcs",
      "name": "Titan",
      "type": "Mob",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "lizard-league",
      "cat": "npcs",
      "name": "Lizard League",
      "type": "Mob",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "final-robot",
      "cat": "npcs",
      "name": "Final Robot",
      "type": "Boss",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "rus-livingson",
      "cat": "npcs",
      "name": "Rus Livingson",
      "type": "Boss",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "angstom-levy",
      "cat": "npcs",
      "name": "Angstom Levy",
      "type": "Boss",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "octoboss",
      "cat": "npcs",
      "name": "Octoboss",
      "type": "Boss",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "thragg",
      "cat": "bloodlines",
      "name": "Thragg",
      "type": "Viltrumite",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "This is the strongest of the Viltrumite blood…Being bread for battle, bread for conquest, bread to be the strongest.\n• You gain +0.25 to your bloodline multiplier"
        }
      ]
    },
    {
      "id": "conquest",
      "cat": "bloodlines",
      "name": "Conquest",
      "type": "Viltrumite",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Being of this bloodline you come from a family of strong conquerors…some would say one of the strongest\n• You gain +0.15 to your bloodline multiplier"
        }
      ]
    },
    {
      "id": "anissa",
      "cat": "bloodlines",
      "name": "Anissa",
      "type": "Viltrumite",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "This is one of the fastest bloodlines, being born of one of Viltrums quickest\n• Your speed is multiplied by 2."
        }
      ]
    },
    {
      "id": "argall",
      "cat": "bloodlines",
      "name": "Argall",
      "type": "Viltrumite",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "This is the royal bloodline of Viltrums wisest…You are one of the heirs to the Viltrum Empire.\n• You gain +3 to your daily age up for physical stats"
        }
      ]
    },
    {
      "id": "thokk",
      "cat": "bloodlines",
      "name": "Thokk",
      "type": "Beast",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "You are born from the strongest Dornian to ever exist…Due to your blood relation your ancestors burden…or curse\n• You are given Thokk’s Curse of Bloodlust (Check Curses to see what it does)"
        }
      ]
    },
    {
      "id": "allen",
      "cat": "bloodlines",
      "name": "Allen",
      "type": "Unopan",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "You are born from a bloodline of genetically modified Unopans, bread to rebel the Viltrum Empire\n• You spawn as a Modified Unopan"
        }
      ]
    },
    {
      "id": "clan-darkblood",
      "cat": "bloodlines",
      "name": "Clan Darkblood",
      "type": "Demon",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "You are born to a powerful clan of Demons with the natural talent to use Demon Magic\n• You spawn with the Demon Magic ability"
        }
      ]
    },
    {
      "id": "cho",
      "cat": "bloodlines",
      "name": "Cho",
      "type": "Humans",
      "wip": true,
      "sections": [
        {
          "heading": "Overview",
          "body": "You spawn to a family cursed with duplication.\n• You spawn with the Curse of Duplication"
        }
      ]
    },
    {
      "id": "conners",
      "cat": "bloodlines",
      "name": "Conners",
      "type": "Humans",
      "wip": true,
      "sections": []
    },
    {
      "id": "basic-fighting-style",
      "cat": "fighting",
      "name": "Basic Fighting Style",
      "type": "Fighting Style",
      "wip": false,
      "sections": []
    },
    {
      "id": "cutting-chops-and-severing-slices",
      "cat": "fighting",
      "name": "Cutting Chops and Severing Slices (Can only be used by viltrumites)",
      "type": "Fighting Style",
      "wip": false,
      "sections": []
    },
    {
      "id": "basic-flight-fighting",
      "cat": "fighting",
      "name": "Basic Flight Fighting",
      "type": "Fighting Style",
      "wip": false,
      "sections": []
    },
    {
      "id": "blocking",
      "cat": "systems",
      "name": "Blocking",
      "type": "System",
      "wip": false,
      "sections": []
    },
    {
      "id": "getting-started",
      "cat": "guides",
      "name": "Getting Started",
      "type": "Guide",
      "wip": false,
      "sections": [
        {
          "heading": "Invincible Inc | The Great Reboot v 1.0",
          "body": ""
        },
        {
          "heading": "Getting A Power and Race",
          "body": "In this first release, each player spawns with a race. If human, you will be given a random power as well. Any other race will give your that races Race Power (Ex: Viltrumite -----> Viltrumite Power Set)"
        },
        {
          "heading": "Gaining Xp For Levels and Xp For Mastery",
          "body": "This is actually pretty easy…just kill mobs. The higher the health of vanilla mobs the more xp they drop. For the mobs in the mod their xp drop is relative to their strength (Ex: Omni man drops around 320 XP due to his difficulty to kill). With that being said, Criminals will ALWAYS drop 5 XP no matter there strength.\n\nFor mastery all you need to do is land hits with your ability.\n\nInvincible Inc | Season 4 Expansion Update v1.5 (AND UP)\n\nThere will be a couple different ways to gain powers in these updates.\nRace\nFrom 'Birth'\nCurses\nSurvival Progression\n\nCheck the desired Power to learn how its obtained"
        }
      ]
    },
    {
      "id": "getting-blueprints",
      "cat": "guides",
      "name": "Getting Blueprints",
      "type": "Guide",
      "wip": false,
      "sections": [
        {
          "heading": "Invincible Inc | The Great Reboot v 1.0",
          "body": "Obtaining Blueprints\n\nTo obtain blueprints you have to find them in villages\n\nInvincible Inc | Season 4 Expansion Update v1.5 (AND UP)\n\nObtaining blueprints in these versions are a lot simpler.\n\nYou must either\n• Find and Buy them from Art Rosenbaum, the suit tailor for super heroes\n• Find Them In Structures"
        }
      ]
    },
    {
      "id": "what-are-bloodlines",
      "cat": "guides",
      "name": "What Are Bloodlines?",
      "type": "Guide",
      "wip": false,
      "sections": [
        {
          "heading": "What Are Bloodlines?",
          "body": "Bloodlines are your lineage, where you come from…Having certain bloodlines give certain buffs OR debuffs.\n\nCheck for your specific bloodline to see what it does and how if effects your player"
        }
      ]
    },
    {
      "id": "stats-multipliers-and-how-they-work",
      "cat": "guides",
      "name": "Stats Multipliers and How They Work",
      "type": "Guide",
      "wip": false,
      "sections": [
        {
          "heading": "Multipliers",
          "body": "There are a couple types of stat multipliers\nRace Multiplier\nBloodline Multiplier\nSub Race Multiplier\nPower Multiplier\nCurse Multiplier\nStrength Multiplier\nDurability Multiplier\nSpeed Multiplier\n\nThese can be added to your Stats or individual stats via Strength Multiplier, Durability Multiplier, Speed Multiplier"
        },
        {
          "heading": "How they are calculated",
          "body": "1 + Given Multiplier + Given Multiplier + Given Multiplier etc.\n\nExample: 1 + 0.6 (Race Multiplier) + 0.25 (Bloodline Multiplier) = Stat x 1.85"
        }
      ]
    },
    {
      "id": "how-to-change-race",
      "cat": "guides",
      "name": "How To Change Race?",
      "type": "Guide",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "how-to-change-powers",
      "cat": "guides",
      "name": "How To Change Powers?",
      "type": "Guide",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "stats",
      "cat": "systems",
      "name": "Stats",
      "type": "System",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Strength (1)\n-Attack Power (1.0)\n\nDurability (1)\n-Damage Tolerance (Dura x 0.5)\n-Damage Reduction (40%)\n\nYour dura would absorb all incoming damage. If someone Attack Pwr is less then 50% of your Damage tolerance then 0 damage will be done.\n\nIf someone's strength is higher than your damage tolerance then the damage will be absorb by your Damage reduction. The damage will be distributed between your damage tolerance and how much damage you actually take. Your damage tolerance should lower by 50% of what's reduced causing the next hit to take more damage until your damage tolerance is 0 meaning you take all the damage for incoming blows\n\nSpeed (1)\n-Damage Reduction Regeneration Speed (1)\n\nHealth (20)"
        }
      ]
    },
    {
      "id": "guis",
      "cat": "systems",
      "name": "GUIS",
      "type": "System",
      "wip": false,
      "sections": []
    },
    {
      "id": "drip-system",
      "cat": "systems",
      "name": "Drip System",
      "type": "System",
      "wip": false,
      "sections": []
    },
    {
      "id": "power-acquisition-system-for-existing-powers",
      "cat": "systems",
      "name": "Power Acquisition System For Existing Powers",
      "type": "System",
      "wip": false,
      "sections": []
    },
    {
      "id": "group-org-system",
      "cat": "systems",
      "name": "Group / Org System",
      "type": "System",
      "wip": false,
      "sections": []
    },
    {
      "id": "built-in-shader-impact-frame-system",
      "cat": "systems",
      "name": "Built In Shader/Impact Frame System",
      "type": "System",
      "wip": true,
      "sections": []
    },
    {
      "id": "art-s-suit-shop",
      "cat": "systems",
      "name": "Art's Suit Shop",
      "type": "System",
      "wip": true,
      "sections": []
    },
    {
      "id": "karma-rep-system",
      "cat": "systems",
      "name": "Karma/Rep System",
      "type": "System",
      "wip": true,
      "sections": []
    },
    {
      "id": "player-events",
      "cat": "systems",
      "name": "Player Events",
      "type": "System",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "punch-clashes",
      "cat": "systems",
      "name": "Punch Clashes",
      "type": "System",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "dimensional-travel",
      "cat": "systems",
      "name": "Dimensional Travel",
      "type": "System",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "vendetta-ai-engine",
      "cat": "systems",
      "name": "Vendetta AI Engine",
      "type": "System",
      "wip": false,
      "sections": [
        {
          "heading": "Vendetta AI Engine — System Concept",
          "body": "The Vendetta AI Engine would allow certain NPCs to remember your actions, develop generational hatred and return to exact revenge on players and those associated with them."
        },
        {
          "heading": "CORE CONCEPT",
          "body": "The Vendetta AI Engine will be a memory-based NPC system where entities persist across encounters and react to the player over time.\n\nNPCs:\n• Remember interactions with the player\n• Develop hatred based on events\n• Seek revenge dynamically\n• Gain stat increases only (no ranks or evolution)\n• May die, escape, or return later"
        },
        {
          "heading": "CORE COMPONENTS",
          "body": "NPC DATA\n\nEach important NPC stores:\n\nNPC_ID\nRace\nPower\nReputation\nFamily_ID (MCA intergration)\nHatred_Level (0–100)\nMemory_Log (list of named events)\nStats (damage, defense, speed, etc.)\nLast_Outcome (won / lost / escaped / died)\nArch_Enemy (target)\n\nMEMORY SYSTEM\n\nNPCs track key events:\n\nPLAYER_KILLED_ME\nPLAYER_KILLED_FAMILY\nI_KILLED_PLAYER\nSURVIVED_PLAYER\nPLAYER_SPARED_ME\n\nEach memory:\n• Increases Hatred_Level\n• May modify stats\n• Affects dialogue\n\nHATRED SYSTEM\n\n0–30 → Neutral / normal\n30–70 → Aggressive / may target player\n70–100 → Actively hunts player\n\nHatred increases from:\n• Losing fights\n• Player killing allies or family\n• Repeated encounters\n\nSTAT GROWTH SYSTEM (NO RANKS)\n\nStats increase based on events:\n\nKills player:\n\\+Damage\n\\+Confidence (less likely to flee)\n\nSurvives low HP:\n\\+Defense\n\\+Aggression\n\nLoses fight:\n\\+Hatred\n\\+Tracking behavior\n\nRepeated losses:\n\\+Speed OR +Ambush chance"
        },
        {
          "heading": "DEATH SYSTEM",
          "body": "When NPC reaches 0 HP:\n\nPERMANENT_DEATH = 60%\nESCAPE = 25%\nRETURN_LATER = 15%\n\nPERMANENT DEATH\n• NPC removed permanently\n• (May trigger family vendetta)\n\nESCAPE (PRIMARY LOOP)\n• NPC does NOT die\n• Forced retreat (knockback, vanish, flee)\n• Saves:\n• Increased hatred\n• Memory: SURVIVED_PLAYER\n\nRETURN LATER (RARE)\n• NPC flagged as dead but returns later\n• Gains:\n• Increased stats\n• Optional visual changes\n• Increased aggression\n\nCORE GAME LOOP\n\nEncounter → Outcome → Memory Update → Future Encounter\n\n REVENGE BEHAVIOR\n\nTriggered by Hatred_Level:\n\nMid-level hatred:\n• Random encounters\n• Increased aggression\n\nHigh hatred:\n• Targets player directly\n• Ambushes\n• Tracks player\n• Appears during other fights\n\nDIALOGUE SYSTEM\n\nContext-based:\n\nLost before:\n“Not this time.”\n\nWon before:\n“You remember how this ends.”\n\nSurvived:\n“You should’ve finished it.”\n\n(Future) Family killed:\n“You took everything.”\n\nMCA INTEGRATION\n\nFamily_ID system enables:\n• Linked NPC relationships\n• Shared hatred across family/friends\n• Group revenge behaviors\n• Chain-reaction hostility"
        }
      ]
    },
    {
      "id": "space",
      "cat": "systems",
      "name": "Space",
      "type": "System",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "viltrumite",
      "cat": "race",
      "name": "Viltrumite",
      "type": "Race",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Grants the Viltrumite power (Smart Atoms)"
        },
        {
          "heading": "Passives",
          "body": "Decelerated Aging (Lvl: 0)\n   As a Viltrumite, you will grow stronger with age.\nFlight (Lvl: 10)\n   As a Viltrumite, you are able to move freely through space.\nReactive Adaptation (Lvl: 25)\n   As a Viltrumite, you are able to adapt through near death experiences.\n   When surviving the \"impossible\", you will find yourself a little stronger than before."
        },
        {
          "heading": "Abilities",
          "body": "Sonic Clap (Lvl: 5)\n   Clap your hands to release a powerful shockwave that blasts targets back and deals damage at range.\nInvincible Rush (Lvl: 10)\n   Launch forward at high speed toward a target, striking them with force and knocking them back.\nOmnado (Lvl: 15)\n   Spin rapidly while moving, creating a destructive vortex that damages and pulls in nearby enemies.\nI Said No! (Lvl: 20)\n   Release an overwhelming burst of force that stuns targets in front of you, stopping them in place.\nAerial Barrage (Lvl: 25)\n   Use flight to unleash a rapid series of strikes from above, overwhelming enemies with continuous hits.\nSevering Slice (Lvl: 30)\n   Deliver a precise, high-speed chop capable of slicing through enemies with devastating power."
        },
        {
          "heading": "Weakness",
          "body": "• Viltrumites vulnerable to certain frequency of sounds\n• The Scourge Virus is a Viltrumites greatest weakness"
        },
        {
          "heading": "Race Acquisition",
          "body": "To obtain this race in survival, you need to either be born a Viltrumite or make a cloned body using the cloning machine."
        },
        {
          "heading": "Lore (Comic / Show)",
          "body": "In the Invincible comics and show, Viltrumites are a near-immortal warrior race who pose as protectors of weaker worlds while secretly conquering them for the Viltrum Empire. Omni-Man and his son Mark Grayson are both Viltrumite."
        }
      ]
    },
    {
      "id": "beast",
      "cat": "race",
      "name": "Beast",
      "type": "Race",
      "wip": false,
      "sections": []
    },
    {
      "id": "human",
      "cat": "race",
      "name": "Human",
      "type": "Race",
      "wip": false,
      "sections": []
    },
    {
      "id": "demon",
      "cat": "race",
      "name": "Demon",
      "type": "Race",
      "wip": false,
      "sections": []
    },
    {
      "id": "unopan",
      "cat": "race",
      "name": "Unopan",
      "type": "Race",
      "wip": false,
      "sections": []
    },
    {
      "id": "martian",
      "cat": "race",
      "name": "Martian",
      "type": "Race",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "ragnarr",
      "cat": "race",
      "name": "Ragnarr",
      "type": "Race",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "vampire",
      "cat": "race",
      "name": "Vampire",
      "type": "Sub Race",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Grants the Vampirism (Blood-Based Mutation)"
        },
        {
          "heading": "Passives",
          "body": "Regeneration (Lvl: 0)\nRegenerate health over time. Healing is significantly increased after feeding.\n\nBloodlust (Lvl: 0)\nWhen your blood meter reaches zero, you lose control and attack nearby entities until it is restored.\n\nDay Walker (Lvl: 10)\nReduces the harmful effects of sunlight."
        },
        {
          "heading": "Abilities",
          "body": "Feed (Lvl: 0)\nDrain blood from a target to restore your blood meter and health.\n\nClaws (Lvl: 5)\nUse sharpened claws to deal increased melee damage.\n\nBat Swarm (Lvl: 15)\nDash forward while hidden within a swarm of bats.\n\nBat Attack (Lvl: 20)\nSend a swarm of bats that blind and damage the target.\n\nHypnosis (Lvl: 25)\nControl or stun a target for a short duration.\n\nFulfillment (Lvl: 30)\nDrink your own blood to increase your stats by 25%."
        },
        {
          "heading": "Weakness",
          "body": "• Sunlight drains health and weakens abilities.\n• Blood depletion leads to loss of control through Bloodlust."
        },
        {
          "heading": "Power Acquisition",
          "body": "Vampirism is obtained through blood infection. Players must be exposed to vampiric blood or be attacked by a vampire."
        }
      ]
    },
    {
      "id": "werewolf",
      "cat": "race",
      "name": "Werewolf",
      "type": "Sub Race",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "reanimen-cyborg",
      "cat": "race",
      "name": "Reanimen/Cyborg",
      "type": "Sub Race",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "atomic-manipulation",
      "cat": "powers",
      "name": "Atomic Manipulation",
      "type": "Power",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Grants a Human to manipulate atoms on atomic level"
        },
        {
          "heading": "Passives",
          "body": "Flight (Lvl: 5)\n   Using atomic manipulation, you have gained the ability to fly.\nAtomic Reconstruction (Lvl: 20)\n   When close to death, you completely reconstruct each atom of your body, healing yourself and permanently adding to your physical stats."
        },
        {
          "heading": "Abilities",
          "body": "Atomic Blast (Lvl: 5)\n   Release a concentrated burst of atomic energy that explodes on impact.\nAtomic Slice (Lvl: 10)\n   Slice around you with atomic energy to cut through enemies with precision.\nAtomic Shards (Lvl: 15)\n   Launch multiple sharp fragments of atomic energy that pierce targets.\nAtomic Bubble (Lvl: 15)\n   Create a protective sphere that absorbs incoming damage for a short time.\nAtomic Disc (Lvl: 20)\n   Throw a spinning disc of atomic energy that slices through anything in its path.\nAtomic Armor (Lvl: 25)\n   Create armor out of pure atomic energy.\nAtomic Wave (Lvl: 35)\n   Release a wide wave of atomic energy that knocks back and damages all enemies in front of you.\nDensity Increase (Lvl: 40)\n   Increase your body density, greatly boosting durability and physical strength."
        },
        {
          "heading": "Weakness",
          "body": "• Mental Limiter: these powers are constrained by a mental limiter that prevents you from manipulating sentient matter"
        },
        {
          "heading": "Power Acquisition",
          "body": "Genetic Infusion: Atomic Manipulation can be obtained through an experimental genetic infusion process. Players must extract their own blood, use a centrifuge to isolate white blood cells. Then  they have to combine 4 of those isolated blood cells with decaying particles (6)  inside the Molecular Synthesizer. The infused white blood cells must then be recombined with a fresh blood sample to create a Genetic Sample.\n\nUsing the serum applies Genetic Instability, giving the player a 50% chance to unlock Atomic Manipulation."
        },
        {
          "heading": "Lore (Comic / Show)",
          "body": "In the source material this is the power of Atom Eve, who reshapes matter at the molecular level — though a mental block stops her from affecting organic tissue."
        }
      ]
    },
    {
      "id": "superspeed",
      "cat": "powers",
      "name": "Superspeed",
      "type": "Power",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Grants the Super Speed ability (Velocity Overload via Lightning)"
        },
        {
          "heading": "Passives",
          "body": "Regeneration (Lvl: 0)\nYour regeneration speed is increased while moving at high velocity.\n\nWall Running (Lvl: 5)\nRun up vertical surfaces when moving fast enough.\n\nWater Running (Lvl: 10)\nRun across water when moving at high speed."
        },
        {
          "heading": "Abilities",
          "body": "Speed Up and Down (Lvl: 0)\nControl your movement speed, allowing you to accelerate or decelerate at will.\n\nMach Dash (Lvl: 5)\nBurst forward at extreme speed, covering large distances instantly.\n\nSonic Punch (Lvl: 10)\nDeliver a high-speed punch that creates a shockwave on impact.\n\nSpeed Barrage Attack (Lvl: 15)\nUnleash a rapid series of high-speed strikes on a target.\n\nFlash Fury (Lvl: 20)\nMove faster than perception, striking multiple enemies in quick succession.\n\nStop Time (Lvl: 25)\nMove at such extreme speed that time appears frozen for a brief moment."
        },
        {
          "heading": "Weakness",
          "body": "High-speed movement rapidly drains stamina.\n\nLoss of control at extreme speeds can lead to self-damage or crashes."
        },
        {
          "heading": "Power Acquisition",
          "body": "Super Speed is obtained by pushing the body beyond its limits. Players must reach maximum levels of speed, strength, and jump enhancement. During a thunderstorm, while holding a lightning rod, being struck by lightning may permanently grant super speed abilities. Failure to survive the transformation will result in severe damage."
        }
      ]
    },
    {
      "id": "tech-jacket",
      "cat": "powers",
      "name": "Tech Jacket",
      "type": "Power",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Grants the Tech Jacket (Advanced Adaptive Alien Technology)"
        },
        {
          "heading": "Passives",
          "body": "Automatic Defense (Lvl: 0)\nWhen in danger, the Tech Jacket will automatically equip itself.\n\nA Friend (Lvl: 0)\nThe Tech Jacket will occasionally communicate with the user.\n\nStat Boost (Lvl: 10)\nWhile wearing the Tech Jacket, your stats are increased.\n\nFlight (Lvl: 10)\nGain the ability to fly while the Tech Jacket is active."
        },
        {
          "heading": "Abilities",
          "body": "Tech Blade (Lvl: 5)\nForm a sharp energy blade capable of cutting through enemies.\n\nTech Shield (Lvl: 10)\nGenerate a strong energy shield that blocks incoming damage.\n\nTech Jacket Equip (Lvl: 15)\nManually equip or summon the Tech Jacket at will.\n\nTech Blaster (Lvl: 20)\nFire concentrated energy blasts at targets from a distance.\n\nTech Machine Gun (Lvl: 25)\nUnleash a rapid stream of energy projectiles, dealing continuous damage.\n\nShield Bash (Lvl: 30)\nCharge forward with your shield, knocking back enemies.\n\nDashing Slice (Lvl: 35)\nDash forward while slashing enemies with a high-speed energy strike."
        },
        {
          "heading": "Weakness",
          "body": "• Can be disrupted or disabled by strong electromagnetic interference."
        },
        {
          "heading": "Power Acquisition",
          "body": "The Tech Jacket is obtained by bonding with advanced alien technology. Players must locate or acquire a dormant Tech Jacket and activate it. Once bonded, the suit integrates with the user, granting enhanced abilities and adaptive combat functions."
        },
        {
          "heading": "Lore (Comic / Show)",
          "body": "Tech Jacket is its own Robert Kirkman character: a teen bonded to advanced alien armor that talks, adapts and fights alongside him."
        }
      ]
    },
    {
      "id": "demon-magic",
      "cat": "powers",
      "name": "Demon Magic",
      "type": "Power",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Grants Demon Magic (Sigil-Based Casting)"
        },
        {
          "heading": "Passives",
          "body": "Occult Rituals (Lvl: 0)\nUse sigils to cast demonic spells through combinations, requiring precise input and timing."
        },
        {
          "heading": "Abilities",
          "body": "Sigils (Lvl: 0)\nUse sigil inputs to form and cast demonic spells. Different combinations produce different effects.\n\nFire Sigil – ⟁ (Lvl: 0)\nRepresents fire and destruction. Used in offensive spell combinations.\n\nBlood Sigil – ☍ (Lvl: 0)\nRepresents blood. Used for life drain, sacrifice, and strengthening spells.\n\nShadow/Light Sigil – ⟡ (Lvl: 0)\nRepresents shadow and light. Used for concealment, illusion, or balance-based spells.\n\nSoul Sigil – ⟟ (Lvl: 0)\nRepresents the soul. Used for control, binding, and spiritual manipulation.\n\nVoid Sigil – ⧖ (Lvl: 0)\nRepresents void and space. Used for distortion, teleportation, and high-level spells."
        },
        {
          "heading": "Weakness",
          "body": "Requires precise input and timing, making it difficult to use in fast combat."
        },
        {
          "heading": "Power Acquisition",
          "body": "Demon Magic can be obtained by being born with the ability or by discovering the Demonius Ex-Mortum, an ancient grimoire containing forbidden knowledge. Studying and mastering its contents grants access to sigil-based casting."
        }
      ]
    },
    {
      "id": "spirit-dragon",
      "cat": "powers",
      "name": "Spirit Dragon",
      "type": "Power",
      "wip": true,
      "sections": []
    },
    {
      "id": "monster-curse",
      "cat": "powers",
      "name": "Monster Curse",
      "type": "Power",
      "wip": true,
      "sections": []
    },
    {
      "id": "duplication",
      "cat": "powers",
      "name": "Duplication",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "neural-implant",
      "cat": "powers",
      "name": "Neural Implant",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "cryokinesis",
      "cat": "powers",
      "name": "Cryokinesis",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "shrink",
      "cat": "powers",
      "name": "Shrink",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "copy",
      "cat": "powers",
      "name": "Copy",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "spider-genetics",
      "cat": "powers",
      "name": "Spider-Genetics",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "electrokinesis",
      "cat": "powers",
      "name": "Electrokinesis",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "dimensional-travel",
      "cat": "powers",
      "name": "Dimensional Travel",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "teleportation",
      "cat": "powers",
      "name": "Teleportation",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "explosion",
      "cat": "powers",
      "name": "Explosion",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "gda",
      "cat": "powers",
      "name": "GDA",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "jaded-amulet",
      "cat": "powers",
      "name": "Jaded Amulet",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "blood-manipulation",
      "cat": "powers",
      "name": "Blood Manipulation",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "thorr-s-grace",
      "cat": "powers",
      "name": "Thorr's Grace",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "furnace",
      "cat": "powers",
      "name": "Furnace",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "giant",
      "cat": "powers",
      "name": "Giant",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "size-manipulation",
      "cat": "powers",
      "name": "Size Manipulation",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "magnetokinesis",
      "cat": "powers",
      "name": "Magnetokinesis",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "sequid-control",
      "cat": "powers",
      "name": "Sequid Control",
      "type": "Power",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "flaxan-invasion",
      "cat": "events",
      "name": "Flaxan Invasion",
      "type": "Server Event",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "omnipotus",
      "cat": "events",
      "name": "Omnipotus",
      "type": "Server Event",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "robot-s-takeover",
      "cat": "events",
      "name": "Robot's Takeover",
      "type": "Event",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "invincible-war",
      "cat": "events",
      "name": "Invincible War",
      "type": "Event",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "guardians-attack",
      "cat": "events",
      "name": "Guardians Attack",
      "type": "Player Event",
      "wip": false,
      "hidden": true,
      "sections": []
    },
    {
      "id": "injection-gun",
      "cat": "items",
      "name": "Injection Gun",
      "type": "Item",
      "wip": false,
      "sections": []
    },
    {
      "id": "vial",
      "cat": "items",
      "name": "Vial",
      "type": "Item",
      "wip": false,
      "sections": []
    },
    {
      "id": "centrifuge",
      "cat": "items",
      "name": "Centrifuge",
      "type": "Item",
      "wip": false,
      "sections": []
    },
    {
      "id": "demonius-ex-mortum",
      "cat": "items",
      "name": "Demonius Ex-Mortum",
      "type": "Item",
      "wip": false,
      "sections": [
        {
          "heading": "DEMONIUS EX-MORTUM",
          "body": ""
        },
        {
          "heading": "Verum Nomen: Liber Mortis et Imperium Daemonium",
          "body": "(True Name: The Book of Death and Dominion Over Demons)\n\n“What you call symbols are not symbols. They are laws.”\n\nThe ignorant speak words.\nThe worthy inscribe truth.\n\nThese sigils are not written—they are invoked."
        },
        {
          "heading": "The Five Truths",
          "body": "• ⟁ — Ignis (Fire / Destruction)\n• ☍ — Sanguis (Blood / Sacrifice)\n• ⟡ — Umbra (Shadow / Light / Perception)\n• ⟟ — Anima (Soul / Life Force)\n• ⧖ — Spatium (Void / Space / Control)\n“To combine them is to reshape reality.”"
        },
        {
          "heading": "HELL FIRE",
          "body": ""
        },
        {
          "heading": "Ignis Trinus",
          "body": "Sigil Rite:\n???\n\nTranslation:\nFlame perfected through repetition.\n\nRitual:\nInvoke Ignis three times without pause.\nBreak the rhythm, and the flame fractures.\n\nManifestation:\nA concentrated bolt of hellfire erupts forward, scorching all it touches.\n\nGrimoire Note:\n“Three flames become will. One flame is chaos.”"
        },
        {
          "heading": "HELL FIRE WAVE",
          "body": ""
        },
        {
          "heading": "Ignis Vacuum Expansio",
          "body": "Sigil Rite:\n????\n\nTranslation:\nFlame widened through the Void, then strengthened.\n\nRitual:\nIgnite.\nAllow the Void to stretch the flame.\nReinforce before release.\n\nManifestation:\nA sweeping infernal wave surges outward, engulfing all before you.\n\nGrimoire Note:\n“The Void does not extinguish fire—it teaches it to consume.”"
        },
        {
          "heading": "BLOOD SACRIFICE",
          "body": ""
        },
        {
          "heading": "Sanguis Pactum",
          "body": "Sigil Rite:\n?????\n\nTranslation:\nBlood offered, bound to flame and soul.\n\nRitual:\nOffer Sanguis willingly.\nBind it through Ignis and Anima.\nSeal the pact with further sacrifice.\n\nManifestation:\nConsumes your life essence to greatly enhance power.\n\nGrimoire Note:\n“Power given freely returns multiplied.”"
        },
        {
          "heading": "FEAR",
          "body": ""
        },
        {
          "heading": "Umbra Vacuum Mentis",
          "body": "Sigil Rite:\n???\n\nTranslation:\nShadow enters. Void collapses the mind.\n\nRitual:\nLet Umbra pierce perception.\nLet Vacuum echo twice within thought.\n\nManifestation:\nEnemies freeze, panic, or flee uncontrollably.\n\nGrimoire Note:\n“You do not create fear—you reveal it.”"
        },
        {
          "heading": "SHADOW STEP",
          "body": ""
        },
        {
          "heading": "Umbra Transitus",
          "body": "Sigil Rite:\n???\n\nTranslation:\nShadow layered, then displaced through space.\n\nRitual:\nWrap yourself in Umbra twice.\nAllow Vacuum to decide your position.\n\nManifestation:\nInstant repositioning through space.\n\nGrimoire Note:\n“You do not move. You simply arrive.”"
        },
        {
          "heading": "VINCULUM",
          "body": ""
        },
        {
          "heading": "SUMMONING MAGIC",
          "body": ""
        },
        {
          "heading": "Vacuum Sanguis Anima Invocatio",
          "body": "Sigil Rite:\n?????\n\nTranslation:\nThe Void opens. Blood calls. Soul binds.\n\nRitual:\nTear open space.\nOffer Sanguis as invitation.\nBind what answers with Anima.\nSeal the gateway.\n\nManifestation:\nSummons demonic entities bound to your will.\n\nGrimoire Note:\n“They are not yours. They are borrowed.”"
        },
        {
          "heading": "VOID PULL",
          "body": ""
        },
        {
          "heading": "Vacuum Gravis Attrahere",
          "body": "Sigil Rite:\n?????\n\nTranslation:\nVoid intensified, then forced into violent collapse.\n\nRitual:\nInvoke Vacuum repeatedly until space bends.\nRelease with Ignis.\n\nManifestation:\nDrags all nearby enemies into a single collapsing point.\n\nGrimoire Note:\n“Even space yields when commanded enough times.”"
        },
        {
          "heading": "COLLAPSING VOID EXPLOSION",
          "body": ""
        },
        {
          "heading": "Ignis Umbra Vacuum Ruina",
          "body": "Sigil Rite:\n????\n\nTranslation:\nFlame concealed, then detonated through void collapse.\n\nRitual:\nIgnite.\nHide the flame within Umbra.\nCollapse it through Vacuum.\n\nManifestation:\nA projectile that explodes violently on impact.\n\nGrimoire Note:\n“The unseen strike is the deadliest.”"
        },
        {
          "heading": "SOUL DRAIN",
          "body": ""
        },
        {
          "heading": "Anima Vinculum Absorptio",
          "body": "Sigil Rite:\n⟟ ⟟ ⟡ ⧖\n\nTranslation:\nSoul anchored, extended, and bound through space.\n\nRitual:\nInvoke Anima twice to assert control.\nExtend with Umbra.\nAnchor through Vacuum.\n\nManifestation:\nDrains life from a target and restores your own.\n\nGrimoire Note:\n“Life is not taken. It is redirected.”"
        },
        {
          "heading": "SOUL COLLAPSE",
          "body": ""
        },
        {
          "heading": "Anima Ruptura",
          "body": "Sigil Rite:\n⟟ ⧖ ⟟ ⟟ ⟁\n\nTranslation:\nSoul seized, compressed, then shattered.\n\nRitual:\nAnchor the soul.\nCrush it with Vacuum.\nReinforce control.\nRelease with Ignis.\n\nManifestation:\nMassive burst damage as souls are violently destroyed.\n\nGrimoire Note:\n“Even the strongest soul can break.”"
        },
        {
          "heading": "Final Passage",
          "body": "“You now read the language of demons.”\n“But understand this—”\n“The more you comprehend… the more it understands you.”"
        }
      ]
    },
    {
      "id": "genetic-infuser",
      "cat": "items",
      "name": "Genetic Infuser",
      "type": "Item",
      "wip": false,
      "sections": []
    },
    {
      "id": "the-great-reboot",
      "cat": "roadmap",
      "name": "The Great Reboot",
      "type": "v1.0",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Setting up the foundation of the mod that way future updates are easier and faster to release!\n\n• Races:\n• Viltrumite\n• Human Viltrumite\n• Thraxan Viltrumite\n• Human\n• Beast\n\n• Powers (Core Set):\n• Viltrumite\n• Beast\n• Super Speed\n• Atomic Manipulation\n• Tech Jacket\n\n• Systems:\n• Stat System\n• Set Up Basic Team System (WIP)\n• Reputation\n• Affiliations (Set up done, no real function yet)\n\n• NPCs:\n• Omni-Man\n• Invincible\n• Atom Eve\n• Red Rush\n• Invinciboy (Invincible Blue Suit)\n• Criminals\n\n• Gameplay:\n• Survival play"
        }
      ],
      "shipped": true
    },
    {
      "id": "monsters-and-curses",
      "cat": "roadmap",
      "name": "Monsters and Curses",
      "type": "v1.5",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Expands core gameplay with new content, systems, and world interaction based on Monsters and Curses.\n\n• 3-5 New Powers\n• Monster Curse (Maybe)\n• Duplication (Maybe)\n• Dragon Spirit\n• Vampire (Sub Race)\n• Demon Magic\n\n• More NPCs\n• Conqeust\n• Mister Liu\n• Titan\n• Viltrumites\n• Guardians Of The Globe\n• Zechariah + Dracula\n• Damian Darkblood\n• Cecil\n• Art Rosenbaum\n• Lizard League\n• TBD\n\n• Structures (TBD)\n• Art’s Suit Sailor\n• TBD\n• TBD\n\n• Bug Fixes\n\n• Power Acquisition System For Survival"
        }
      ],
      "shipped": true
    },
    {
      "id": "missions-and-events-update",
      "cat": "roadmap",
      "name": "Missions and Events Update",
      "type": "v2.0",
      "wip": true,
      "sections": [
        {
          "heading": "Overview",
          "body": "• Events System (Return + Revamp)\n\n• 3-5 New Powers\n• Jaded Amulet\n• Sequid Hive Mind (Concept Made)\n• Earth Manipulation\n• Energy Absorption\n• Electricity Control (Concept Made)\n\n• More NPCs\n• TBD\n• TBD\n• TBD\n• TBD\n• TBD\n• TBD\n\n• Bug Fixes"
        }
      ]
    },
    {
      "id": "server-release",
      "cat": "roadmap",
      "name": "Server Release",
      "type": "v2.0",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Small Break From Updates to set up the sever!"
        }
      ]
    },
    {
      "id": "multiversal-update",
      "cat": "roadmap",
      "name": "Multiversal Update",
      "type": "v3.0",
      "wip": false,
      "sections": [
        {
          "heading": "Overview",
          "body": "Introduces the multiverse, characters from different universes, and potentially even powers from another world.\n\nIntroduces dimension travel and alternate versions of characters.\n\n• New Powers (3–5):\n• Dimensional Travel\n• TBD\n• TBD\n• TBD\n• TBD\n\n• New NPCs (3–5):\n• Angstrom Levy\n• Alternate Viltrumites\n• Invincible Variants\n• TBD\n• TBD\n\n• Multiverse\n• TWD\n• Earth 616\n• Wasteland\n• TBD\n• TBD\n• TBD\n• TBD\n• TBD\n\n•Events:\n• Invincible War\n\n• Systems:\n• Dimension Travel\n• Variant System For Players\n\n• Gameplay:\n• Multiverse Events"
        }
      ]
    },
    {
      "id": "robotics-update",
      "cat": "roadmap",
      "name": "Robotics Update",
      "type": "v4.0",
      "wip": false,
      "sections": [
        {
          "heading": "Technology Expansion",
          "body": "Focuses on advanced tech, robotics, and artificial power systems.\n\n• New Powers (1–3):\n• Neural Link\n• TBD\n• TBD\n\n• New NPCs (3–5):\n• Robot\n• Reanimen\n• TBD\n• TBD\n\n• Systems:\n• Cloning System\n• Reanimen Creation\n• Limb System\n• Cybernetics System"
        }
      ]
    },
    {
      "id": "dark-s-space-mod-release",
      "cat": "roadmap",
      "name": "Dark's Space Mod Release",
      "type": "v1.0",
      "wip": false,
      "sections": [
        {
          "heading": "Space Framework Update",
          "body": "Introduces a full space expansion system built as its own mod, inspired by Galacticraft, Cosmic Horizon, and Ad Astra, with support for future addons.\n\nThis update focuses on space travel, planetary exploration, and the foundation for addon-based planet content.\n\n• Systems:\n• Space Travel System\n• Planet System (Planets in our solar system)\n• Space Survival Systems\n• Addon Support Framework\n\n• Gameplay:\n• Travel between planets\n• Explore space and planetary environments\n• Use the space framework alongside the Invincible Inc. mod\n\n• Notes:\n• This update is designed as a standalone space mod that works with the Invincible mod\n• Invincible-specific planets, mobs, and world content will come through a separate addon\n• Mobs from different planets will require the corresponding addon to spawn"
        }
      ]
    },
    {
      "id": "space-update",
      "cat": "roadmap",
      "name": "Space Update",
      "type": "v5.0",
      "wip": false,
      "sections": [
        {
          "heading": "Invincible Planetary Expansion",
          "body": "Expands the space framework with planets, mobs, and world content from the Invincible universe.\n\n• Planets:\n• Viltrum\n• Thraxa\n• Talescria\n• Coalition\n• Savage Planet\n• Dornin\n\n• Systems:\n• Planet-Based Mob Spawning\n• Invincible Planet Integration\n• Addon-Dependent World Content\n• Planet Destroying\n• Race-Based Planet Spawn System\n• Space Survival Systems\n\n• Gameplay:\n• Visit planets from the Invincible universe\n• Encounter race and planet-specific mobs\n• Experience lore-based planetary environments"
        }
      ]
    },
    {
      "id": "lineage-update",
      "cat": "roadmap",
      "name": "Lineage Update",
      "type": "v6.0",
      "wip": false,
      "sections": [
        {
          "heading": "Linegae Update Through MCA Support!",
          "body": "Adds long-term progression through family and inheritance systems.\n\n• New Powers (3–5):\n• TBD\n• TBD\n• TBD\n• TBD\n• TBD\n\n• Systems:\n• Reproduction System\n• Hybrid System\n\n• Gameplay:\n• Generational Progression"
        }
      ]
    }
  ]
};