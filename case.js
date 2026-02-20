const allCaseData = [
  {
    "metadata": {
      "case_id": "FR-1840-EXT",
      "case_name": "The Metallic Mirror",
      "year": 1840,
      "location": "Tulle, France",
      "status": "Closed",
      "briefing": "A wealthy landowner dies of 'gastric fever.' His wife is suspected of poisoning him with food. You must use the Marsh Test to prove the presence of an invisible killer."
    },
    "clues": [
      {
        "description": "The Marsh Test involves mixing stomach samples with zinc and acid, then heating the gas. A silvery-black 'mirror' deposit forms on a porcelain plate.",
        "question": "What does the appearance of this 'metallic mirror' specifically confirm?",
        "options": [
          "The presence of high levels of iron in the blood.",
          "The presence of Arsenic, as it is the only element that sublimates into this specific metallic film under these conditions.",
          "That the victim died of a bacterial infection."
        ],
        "answer_index": 1,
        "logic": "Correct. The Marsh Test was the first reliable chemical test for arsenic, turning a suspicion into a visible, undeniable 'mirror' of poison."
      },
      {
        "description": "The defense claims the arsenic came from the soil in the cemetery, not the wife's kitchen.",
        "question": "How can you scientifically disprove this 'environmental leaching' theory?",
        "options": [
          "Arsenic in soil is always a different color than arsenic in food.",
          "It is impossible for minerals to move from soil into a coffin.",
          "Quantitative analysis: if the concentration in the body is significantly higher than a control sample of the surrounding soil, the source was internal."
        ],
        "answer_index": 2,
        "logic": "Correct. By comparing the 'background' arsenic in the earth to the 'body' arsenic, you can prove the poison was ingested, not absorbed."
      },
      {
        "description": "The victim's hair is analyzed. Arsenic is found in 'bands' or segments along the hair shaft rather than throughout the whole strand.",
        "question": "What does segmented poisoning in hair reveal about the killer's method?",
        "options": [
          "The victim was poisoned in multiple small doses over time (chronic) rather than one large dose (acute).",
          "The victim had naturally high-arsenic hair.",
          "The poison was applied topically as a hair tonic."
        ],
        "answer_index": 0,
        "logic": "Correct. Hair grows at a steady rate. Arsenic is deposited in the hair as it grows; 'bands' of poison act as a timeline of when the doses were administered."
      },
      {
        "description": "The victim's fingernails show 'Mees' Lines'—white transverse bands across the nail.",
        "question": "How do Mees' Lines support the hair analysis?",
        "options": [
          "They are a sign of a vitamin deficiency.",
          "They only appear after a massive heart attack.",
          "They are a physiological reaction to heavy metal poisoning, appearing roughly 3–4 weeks after a toxic event."
        ],
        "answer_index": 2,
        "logic": "Correct. Like hair, nails record the body's trauma. Mees' Lines provide secondary confirmation of the timing of the poisoning."
      },
      {
        "description": "A search of the wife's pantry reveals 'Fly Paper.' In 1840, fly paper was coated in a specific substance.",
        "question": "How does the wife claim she was 'cleaning' the house with it?",
        "options": [
          "She was boiling the paper to extract arsenic 'water' to treat her skin, a common (but deadly) beauty practice of the time.",
          "She was using it to catch mice.",
          "She was using the paper as a spice for cooking."
        ],
        "answer_index": 0,
        "logic": "Correct. Before it was regulated, arsenic-laced fly paper was a common household source for poisoners, often masked by the excuse of cosmetic use."
      }
    ],
    "summary": "Toxicology and physiological markers (Mees' Lines and hair banding) proved a pattern of chronic poisoning that soil contamination could not explain."
  },
  {
    "metadata": {
      "case_id": "US-1968-EXT",
      "case_name": "The Ink Migration",
      "year": 1968,
      "location": "New York, USA",
      "status": "Closed",
      "briefing": "A disputed will is dated 1955. The family claims the document was forged recently using a ballpoint pen. You must prove the 'age' of the ink."
    },
    "clues": [
      {
        "description": "Thin-Layer Chromatography (TLC) is used to separate the dyes in the blue ballpoint ink. It reveals a specific synthetic dye called 'Phthalocyanine Blue'.",
        "question": "Why is this dye the 'smoking gun' for a forgery?",
        "options": [
          "Phthalocyanine Blue was not commercially available in ballpoint inks until 1960, making a 1955 date impossible.",
          "This dye only glows under moonlight.",
          "It is a natural dye that would have faded by 1968."
        ],
        "answer_index": 0,
        "logic": "Correct. Chemical 'first-use' dates are absolute barriers. A document cannot be older than the invention of its ingredients."
      },
      {
        "description": "The ink shows a low level of 'solvent evaporation' when tested in a vacuum chamber.",
        "question": "Ink solvents evaporate at a predictable rate. What does 'low evaporation' tell you about the ink's age?",
        "options": [
          "The ink is ancient and has already lost all its solvent.",
          "The ink is very fresh (less than 2 years old), as it is still releasing high levels of volatile organic compounds (VOCs).",
          "The ink is waterproof."
        ],
        "answer_index": 1,
        "logic": "Correct. Fresh ink 'gasses off' solvents. If the document were truly from 1955, the ink would be 'stable' and release almost no VOCs."
      },
      {
        "description": "Under 100x magnification, the ink lines show 'skipping' and 'burr strikes'—small blobs of ink at the turns of letters.",
        "question": "These are characteristic of a ballpoint pen. Why is this a problem for a 1955 document?",
        "options": [
          "Ballpoint pens weren't invented until 1965.",
          "While ballpoints existed, the specific 'high-pressure' ink used here didn't match the 'gravity-fed' styles common in 1955.",
          "Burr strikes only happen when a left-handed person writes."
        ],
        "answer_index": 1,
        "logic": "Correct. The physics of ink delivery evolved. 1950s ballpoints were notorious for leaking; the clean 'burr strikes' here indicate a more modern 1960s precision pen."
      },
      {
        "description": "Scanning Electron Microscopy (SEM) shows that the ink is sitting *on top* of the paper fibers rather than being absorbed into them.",
        "question": "How does this differ from how ink would look after 13 years?",
        "options": [
          "Over time, ink 'migrates' and settles into the fiber intersections due to gravity and humidity.",
          "After 13 years, the ink should have turned into a powder.",
          "Ink actually moves *upward* away from the paper over time."
        ],
        "answer_index": 0,
        "logic": "Correct. 'Ion migration' and physical settling are slow processes. Ink that looks like it's 'sitting on top' is a sign of a very recent application."
      },
      {
        "description": "The signature crosses over a printed line on the document. Under the microscope, the ink of the signature sits *on top* of the toner of the printed line.",
        "question": "The document was printed on a laser printer. Laser printers were not in offices in 1955. What does this confirm?",
        "options": [
          "The signature was added before the document was printed.",
          "The document is a complete fabrication, as the printing technology itself post-dates the alleged year of signing.",
          "The printer was a very early prototype."
        ],
        "answer_index": 1,
        "logic": "Correct. This is a 'sequence of strokes' check. If a '1955 signature' is on top of '1980s toner,' the document is a total fraud."
      }
    ],
    "summary": "By identifying modern dyes, analyzing solvent evaporation, and noting the use of laser-printer toner, the '1955' will was proven to be a modern fake."
  },
  {
    "metadata": {
      "case_id": "CA-2015-EXT",
      "case_name": "The Luminescent Laundry",
      "year": 2015,
      "location": "Vancouver, Canada",
      "status": "Active Investigation",
      "briefing": "A night-time hit-and-run leaves a victim in critical condition. The suspect's car is clean, but the victim's safety vest may have left a mark."
    },
    "clues": [
      {
        "description": "Under 365nm UV light, tiny glowing specks are found on the suspect's bumper and his own jeans.",
        "question": "What property of the victim's safety vest causes this specific reaction?",
        "options": [
          "The vest is made of radioactive material.",
          "The vest uses fluorescent dyes and retro-reflective micro-beads designed to return light to its source.",
          "The vest was wet."
        ],
        "answer_index": 1,
        "logic": "Correct. Modern safety gear is engineered for high-visibility using specific polymers that 'excite' under UV light."
      },
      {
        "description": "The suspect claims the 'glow' is just residue from his 'Super-White' laundry detergent.",
        "question": "How does a forensic lab distinguish between laundry brighteners and safety-vest pigments?",
        "options": [
          "By smell.",
          "By their 'Excitation-Emission' spectrum; detergents glow in the blue range, while safety pigments have a unique yellow-orange peak.",
          "Laundry detergent does not glow under UV."
        ],
        "answer_index": 1,
        "logic": "Correct. Fluorescence spectroscopy provides a 'light fingerprint' that separates household chemicals from industrial pigments."
      },
      {
        "description": "A microscopic 'smear' on the bumper is found. It contains 'polycarbonate' and 'titanium dioxide'.",
        "question": "The victim's bicycle light was shattered. What is the significance of these two chemicals?",
        "options": [
          "Titanium dioxide is found in all white paint, but polycarbonate is the specific plastic used in 'shatter-proof' lenses.",
          "These chemicals are only found in moon rocks.",
          "They prove the suspect was driving a fast car."
        ],
        "answer_index": 0,
        "logic": "Correct. Matching the 'polymer profile' of the car's smear to the victim's broken equipment creates a 'material link' even without a DNA match."
      },
      {
        "description": "The suspect's tire treads contain 'Diatomaceous Earth' (crushed fossilized algae).",
        "question": "The victim was hit near a construction site using this material for filtration. Where else is it commonly found?",
        "options": [
          "It is a common component of all city asphalt.",
          "It is extremely rare and only found in one construction site in the city.",
          "It is used in garden-grade pesticides and pool filters, but the specific 'mesh size' (particle size) here matches industrial construction grade."
        ],
        "answer_index": 2,
        "logic": "Correct. Size-distribution analysis (sieving) of soil/earth particles can distinguish between 'garden' mud and 'industrial' site mud."
      },
      {
        "description": "The suspect's phone 'pings' a cell tower at the time of the accident. The data shows a 'Signal Strength' (RSSI) of -60dBm.",
        "question": "An RSSI of -60dBm indicates a very strong signal. What does this suggest about his distance from the tower?",
        "options": [
          "He was miles away from the tower.",
          "He was very close to the tower, which happens to be directly over the accident scene.",
          "The phone was turned off."
        ],
        "answer_index": 1,
        "logic": "Correct. RSSI (Received Signal Strength Indicator) values closer to zero indicate higher proximity. This places his phone (and likely him) at the scene."
      }
    ],
    "summary": "UV spectroscopy, polymer analysis, and cell-tower RSSI values combined to place the suspect's car and person at the scene of the hit-and-run."
  },
  {
  "metadata": {
    "case_id": "CA-2026-MET",
    "case_name": "The Copper Coincidence",
    "year": 2026,
    "location": "Chicago, USA",
    "status": "Active Investigation",
    "briefing": "A high-end art gallery's backup generator was stripped of its copper wiring during a blackout. A local scrap dealer flagged a suspicious drop-off later that night."
  },
  "clues": [
    {
      "description": "The thief used a high-tension industrial shear to cut the heavy-gauge cables. The cut patterns show a 'left-handed' serration mark.",
      "question": "What does a 'serration mark' analysis tell a forensic tool investigator?",
      "options": [
        "It identifies the exact retail store where the tool was bought.",
        "It reveals unique 'fingerprint' defects on the blade's edge.",
        "It proves the thief was wearing heavy leather work gloves."
      ],
      "answer_index": 1,
      "logic": "Correct. Toolmark identification treats microscopic nicks in a blade like a fingerprint, allowing investigators to match a tool to a specific cut."
    },
    {
      "description": "At the scrap yard, the suspect sold 50lbs of 'Bright & Shiny' copper. However, his clothes are covered in a fine, pale-green dust.",
      "question": "What is the likely chemical origin of this specific green 'dust' found on the suspect?",
      "options": [
        "It is oxidized copper carbonate from aged outdoor statues.",
        "It is a rare toxic mold found only in damp art gallery basements.",
        "It is dried green spray paint used to mark utility lines."
      ],
      "answer_index": 0,
      "logic": "Correct. Copper turns green (patina) over time due to oxidation. This suggests the suspect didn't just have 'new' wire, but had been handling old, weathered copper."
    },
    {
      "description": "The suspect’s truck bed contains traces of 'Isolene-B,' a specialized synthetic coolant used in high-voltage industrial generators.",
      "question": "Why is 'Isolene-B' more incriminating than standard automotive motor oil?",
      "options": [
        "It is only sold to licensed electrical contractors.",
        "It glows bright purple when exposed to any sunlight.",
        "It is a niche dielectric fluid not found in cars."
      ],
      "answer_index": 2,
      "logic": "Correct. Finding dielectric coolant in a standard pickup truck links the vehicle directly to industrial electrical equipment rather than normal mechanical work."
    },
    {
      "description": "Security footage shows a truck fleeing the gallery. The license plate is obscured, but the muffler emits a high-pitched 'whistle' at 440Hz.",
      "question": "How can forensic audio experts use this 'whistle' to identify the specific vehicle?",
      "options": [
        "By matching the acoustic frequency to a specific engine leak.",
        "By calculating the speed of the truck based on the volume.",
        "By identifying the manufacturer's 'audio-brand' signature."
      ],
      "answer_index": 0,
      "logic": "Correct. Narrow-band frequency analysis can identify unique mechanical 'groans' or 'whistles' that act as an acoustic signature for a specific damaged vehicle."
    },
    {
      "description": "VERDICT: The suspect claims he found the copper in a dumpster behind a construction site. You have the toolmarks, the green dust, the coolant, and the audio signature.",
      "question": "What is the final verdict based on the synthesis of this forensic evidence?",
      "options": [
        "He is innocent; the copper came from a standard renovation.",
        "He is guilty; the coolant and old patina contradict his story.",
        "He is a witness; he saw the real thief leave the art gallery."
      ],
      "answer_index": 1,
      "logic": "Correct. The 'Bright' copper he sold doesn't match the green dust on his clothes, and the industrial coolant proves he was at a generator, not a construction dumpster."
    }
  ],
  "summary": "By linking toolmark impressions, chemical oxidation (patina), and specialized dielectric coolants, the investigation disproved the suspect's 'dumpster diving' alibi."
}
]