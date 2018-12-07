const filterTypesState = {
  vocals: {
    active: true,
    filters: {
      Instrumental: false,
      Vocals: false,
      Female: 0,
      Male: 0
    }
  },
  mood: {
    active: false,
    tiles: {
      isTile: { active: false, value: "" },
      andOneTile: { active: false, value: "" },
      andTwoTile: { active: false, value: "" }
    },
    filters: {
      "A Journey": false,
      Aggressive: false,
      Angelic: false,
      Anthemic: false,
      Bouncy: false,
      Bright: false,
      Burdened: false,
      Calm: false,
      Cinematic: false,
      Classic: false,
      Cold: false,
      Confident: false,
      Dark: false,
      Depressed: false,
      Dynamic: false,
      Ecstatic: false,
      Emotional: false,
      Empowering: false,
      Energetic: false,
      Epic: false,
      Ethereal: false,
      Exciting: false,
      Feminine: false,
      Fun: false,
      Gritty: false,
      Honorable: false,
      Hopeful: false,
      Human: false,
      Imaginative: false,
      Industrial: false,
      Inspiring: false,
      Intimate: false,
      Light: false,
      Masculine: false,
      Meandering: false,
      Mechanical: false,
      Minimal: false,
      Mischievous: false,
      Mysterious: false,
      Optimistic: false,
      Organic: false,
      Pensive: false,
      Playful: false,
      Positive: false,
      Powerful: false,
      Precise: false,
      Pumped: false,
      Quirky: false,
      Rebellious: false,
      Reflective: false,
      Revelatory: false,
      Romantic: false,
      Sentimental: false,
      Sexy: false,
      Silly: false,
      Sinister: false,
      Slick: false,
      Somber: false,
      Sparse: false,
      Spiritual: false,
      Sporadic: false,
      Stoic: false,
      Upbeat: false,
      Vulnerable: false,
      Whimsical: false
    }
  },
  energy: {
    active: false,
    filters: {
      Low: false,
      "Low-Medium": false,
      Medium: false,
      "Medium-High": false,
      High: false
    }
  },
  arc: {
    active: false,
    filters: {
      Steady: false,
      Ascending: false,
      Descending: false,
      "Middle Crescendo": false,
      "Multiple Crescendos": false,
      Frenetic: false
    }
  },
  length: {
    active: false,
    filters: {
      min: 0,
      max: 20
    }
  },
  instruments: {
    active: false,
    filters: {
      "Acoustic Guitar": 0,
      Banjo: 0,
      "Big Drums": 0,
      "Drum Machine": 0,
      "Electric Guitar": 0,
      "Glockenspiel/Toy Piano": 0,
      "Horns/Brass": 0,
      Mandolin: 0,
      "Oohs & Ahhs": 0,
      Organ: 0,
      Piano: 0,
      "Stomps/Claps": 0,
      Strings: 0,
      Synthesizer: 0,
      Ukulele: 0
    }
  },
  genres: {
    active: false,
    filters: {
      Ambient: 0,
      Beats: 0,
      "Blues & Jazz": 0,
      Country: 0,
      Dance: 0,
      Electronic: 0,
      Folk: 0,
      "Hip Hop & Rap": 0,
      Orchestral: 0,
      Pop: 0,
      Rock: 0,
      "RnB & Soul": 0,
      Vintage: 0,
      World: 0
    }
  },
  customizable: {
    active: false,
    filters: {
      Yes: false,
      No: false
    }
  },
  internal: {
    active: false,
    filters: {
      "For Marmoset": 0,
      Outpost: 0
    }
  }
}

export default filterTypesState
