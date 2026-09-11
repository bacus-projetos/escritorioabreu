var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-reunio",
      "name": "Sala de Reunião",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.22350783887258,
          "pitch": 0.7301999517218078,
          "rotation": 0,
          "target": "2-banheiro-360"
        },
        {
          "yaw": -1.1775757852326283,
          "pitch": 0.768900044838805,
          "rotation": 0,
          "target": "1-escritrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-escritrio",
      "name": "Escritório",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.098463681125109,
          "pitch": 0.7036461268999457,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        },
        {
          "yaw": 1.64955292567205,
          "pitch": 0.8507227060483427,
          "rotation": 0,
          "target": "3-banheiro-360-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-banheiro-360",
      "name": "banheiro 360",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.0017447173998590415,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5310076442962899,
          "pitch": 1.0146185076118872,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-banheiro-360-2",
      "name": "banheiro 360-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3577537951819831,
          "pitch": 0.7211681178498441,
          "rotation": 0,
          "target": "1-escritrio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Escritório",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
