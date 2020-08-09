import React from 'react';
import Cardl from './components/card';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Antes de usar hooks debemos de importar qué hook usaremos en el código.
function App() {
  // Se declaran los estados con hooks el estado types y el estado pokemons
  const [types,setTypes] = useState(["Grass", "Poison", "Fire", "Water", "Flying", "Bug", "Normal"]);
  const [pokemons,setPokemons] = useState([{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://vignette.wikia.nocookie.net/pokemontowerdefense/images/1/12/Bulbasaur_NB.gif/revision/latest/top-crop/width/220/height/220?cb=20130331053956&path-prefix=es",
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  },
  {
    "id": 2,
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草",
      "french": "Herbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://64.media.tumblr.com/7f993e12df62b69d4f1c612d3a8d9b06/tumblr_mf4uovfSz61qmxcsxo1_500.gif",
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      "Speed": 60
    }
  },
  {
    "id": 3,
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花",
      "french": "Florizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://i.gifer.com/4o45.gif",
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      "Speed": 80
    }
  },
  {
    "id": 4,
    "name": {
      "english": "Charmander",
      "japanese": "ヒトカゲ",
      "chinese": "小火龙",
      "french": "Salamèche"
    },
    "type": [
      "Fire"
    ],
    "sprite": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7948d7f-37fa-43f3-b3ad-69390c3ec4ce/d6b3l7g-c8aa2c72-3233-4e86-bb2f-c273cf58e739.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZTc5NDhkN2YtMzdmYS00M2YzLWIzYWQtNjkzOTBjM2VjNGNlXC9kNmIzbDdnLWM4YWEyYzcyLTMyMzMtNGU4Ni1iYjJmLWMyNzNjZjU4ZTczOS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.MKw4QUFSYR50okrLSCkllND7QjcSd9vm4wHYU5-_s2I",
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      "Speed": 65
    }
  },
  {
    "id": 5,
    "name": {
      "english": "Charmeleon",
      "japanese": "リザード",
      "chinese": "火恐龙",
      "french": "Reptincel"
    },
    "type": [
      "Fire"
    ],
    "sprite": "https://66.media.tumblr.com/tumblr_ma4fpfD6Tu1rfjowdo1_500.gif",
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      "Speed": 80
    }
  },
  {
    "id": 6,
    "name": {
      "english": "Charizard",
      "japanese": "リザードン",
      "chinese": "喷火龙",
      "french": "Dracaufeu"
    },
    "type": [
      "Fire",
    "Flying"
    ],
    "sprite": "https://vignette.wikia.nocookie.net/pokemon/images/1/1f/Charizard_BW.gif/revision/latest/top-crop/width/220/height/220?cb=20120627233613",
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      "Speed": 100
    }
  },
  {
    "id": 7,
    "name": {
      "english": "Squirtle",
      "japanese": "ゼニガメ",
      "chinese": "杰尼龟",
      "french": "Carapuce"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://vignette.wikia.nocookie.net/negas/images/4/48/Squirtle_Sprite.gif/revision/latest/top-crop/width/220/height/220?cb=20171212212126&path-prefix=es",
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      "Speed": 43
    }
  },
  {
    "id": 8,
    "name": {
      "english": "Wartortle",
      "japanese": "カメール",
      "chinese": "卡咪龟",
      "french": "Carabaffe"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://66.media.tumblr.com/tumblr_ma4fusgAB01rfjowdo1_500.gif",
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      "Speed": 58
    }
  },
  {
    "id": 9,
    "name": {
      "english": "Blastoise",
      "japanese": "カメックス",
      "chinese": "水箭龟",
      "french": "Tortank"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://i.pinimg.com/originals/f5/7f/51/f57f5132369b8446d4d2588ebb307137.gif",
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      "Speed": 78
    }
  },
  {
    "id": 10,
    "name": {
      "english": "Caterpie",
      "japanese": "キャタピー",
      "chinese": "绿毛虫",
      "french": "Chenipan"
    },
    "type": [
      "Bug"
    ],
    "sprite": "https://66.media.tumblr.com/tumblr_ma9fz0Rb0e1rfjowdo1_500.gif",
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 45
    }
  },
  {
    "id": 11,
    "name": {
      "english": "Metapod",
      "japanese": "トランセル",
      "chinese": "铁甲蛹",
      "french": "Chrysacier"
    },
    "type": [
      "Bug"
    ],
    "sprite": "https://images.wikidexcdn.net/mwuploads/wikidex/6/6b/latest/20200307022334/Metapod.png",
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 30
    }
  },
  {
    "id": 12,
    "name": {
      "english": "Butterfree",
      "japanese": "バタフリー",
      "chinese": "巴大蝶",
      "french": "Papilusion"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "sprite": "https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/butterfree-f.gif",
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "Sp. Attack": 90,
      "Sp. Defense": 80,
      "Speed": 70
    }
  },
  {
    "id": 13,
    "name": {
      "english": "Weedle",
      "japanese": "ビードル",
      "chinese": "独角虫",
      "french": "Aspicot"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://66.media.tumblr.com/tumblr_mafen5D2oe1rfjowdo1_r1_500.gif",
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      "Speed": 50
    }
  },
  {
    "id": 14,
    "name": {
      "english": "Kakuna",
      "japanese": "コクーン",
      "chinese": "铁壳蛹",
      "french": "Coconfort"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://pa1.narvii.com/6724/377d108bf8e6cab94b9356d928e4ab5d42d97ea8_hq.gif",
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "Sp. Attack": 25,
      "Sp. Defense": 25,
      "Speed": 35
    }
  },
  {
    "id": 15,
    "name": {
      "english": "Beedrill",
      "japanese": "スピアー",
      "chinese": "大针蜂",
      "french": "Dardargnan"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://professorlotus.com/Sprites/Beedrill_Mega.gif",
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "Sp. Attack": 45,
      "Sp. Defense": 80,
      "Speed": 75
    }
  },
  {
    "id": 16,
    "name": {
      "english": "Pidgey",
      "japanese": "ポッポ",
      "chinese": "波波",
      "french": "Roucool"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://66.media.tumblr.com/tumblr_maore5pyvZ1rfjowdo1_500.gif",
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "Sp. Attack": 35,
      "Sp. Defense": 35,
      "Speed": 56
    }
  },
  {
    "id": 17,
    "name": {
      "english": "Pidgeotto",
      "japanese": "ピジョン",
      "chinese": "比比鸟",
      "french": "Roucoups"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://66.media.tumblr.com/tumblr_maorewZFZM1rfjowdo1_500.gif",
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "Sp. Attack": 50,
      "Sp. Defense": 50,
      "Speed": 71
    }
  },
  {
    "id": 18,
    "name": {
      "english": "Pidgeot",
      "japanese": "ピジョット",
      "chinese": "大比鸟",
      "french": "Roucarnage"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://66.media.tumblr.com/tumblr_mb4fvyvP2H1rfjowdo1_500.gif",
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "Sp. Attack": 70,
      "Sp. Defense": 70,
      "Speed": 101
    }
  },
  {
    "id": 19,
    "name": {
      "english": "Rattata",
      "japanese": "コラッタ",
      "chinese": "小拉达",
      "french": "Rattata"
    },
    "type": [
      "Normal"
    ],
    "sprite": "https://professorlotus.com/Sprites/Rattata.gif",
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "Sp. Attack": 25,
      "Sp. Defense": 35,
      "Speed": 72
    }
  },
  {
    "id": 20,
    "name": {
      "english": "Raticate",
      "japanese": "ラッタ",
      "chinese": "拉达",
      "french": "Rattatac"
    },
    "type": [
      "Normal"
    ],
    "sprite": "https://professorlotus.com/Sprites/Raticate.gif",
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "Sp. Attack": 50,
      "Sp. Defense": 70,
      "Speed": 97
    }
  }]);  
  // Acabado de declarar el estado debemos utilizarlo.

  // Se declara otro estado para el filtro de pokemons comenzando con Todos un estado inicial general
    const [typeSelected, setTypeSelected] = useState("Todos");
  // se declara una varaible que almacena un evento, depende de cual elijamos este sera el nuevo estado de typeselecteed o sea
  // El tipo de pokemon que queremos filtrar
    const handleTypeSelect = (event) => {
      // aquí actualizamos el estado con lo que seleccionemos
      setTypeSelected(event.target.value);
    };
    // const [search, setSearch] = useState("Pokemon");

    // synChanges(value, property){
    //   let state = {};
    //   state[property] = value;
    //   setSearch(state);
    //   console.log("state")
    // };
  
  // Hora de pintar como se deberia de ver el DOM
    return (
      // Ponemos todo dentro de un container para que no se pegue a la orilla
      <div className="container">
        {/* Este div se divide en tres componentes que son filters, filters y App(que tendra las cards)  */}
        <div className="flex">
        <div className="filters">
          {/*  Aquí comenzamos con el js  */}
          {/* Tenemos un evento escuchando qué seleccionaremos en el filtro y este es que actualizara al estado
          pos cierto la etiqueta select de html es para crear un seleccionador de opciones como una lista */}
          <select onChange={handleTypeSelect}  className="filterr">
            {/* En la primera opción a elejir tenemos a Todos */}
            <option key={0} value="Todos" className="option">Todos</option>
            {
              types.map((type, index) => {
                return (
                  <option key={index + 1} value={type}>{type}</option>
                )
              })
            }
          </select>
  
        </div>
        <div className="filters">
          <form>
            <input type="text" placeholder="Pokemon" />
          </form>
        </div>
        </div>
        {/* Aquí contendra el filter y las cards para mostrar en el DOM */}
        <div className="App">
          {
            /* Si el tipo de pokemon seleccionado tiene un valor igual a "Todos" entonces regresaré todos los pokemones que tenga el arreglo */
            /* Si no regresaré todos los pokemones que incluyan el valor del tipo de pokemon seleccionado  */
            pokemons.filter( pokemon => { return typeSelected === "Todos" ?  true :  pokemon.type.includes(typeSelected) } ).map(pokemon => {
              return (<Cardl name={pokemon.name.english} image={pokemon.sprite} base={pokemon.base} types={pokemon.type} />)
            })
          }        
        </div>
      </div>
      );
    }

  export default App;
