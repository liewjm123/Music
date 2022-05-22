var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice-lee-plaza",
      "name": "Alice Lee Plaza",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1105214107200894,
          "pitch": 0.051821097756445056,
          "rotation": 5.497787143782138,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6592763015707277,
          "pitch": -0.08017178233071043,
          "title": "Greenery",
          "text": "Trees"
        }
      ]
    },
    {
      "id": "1-conservatory-foyer",
      "name": "Conservatory Foyer",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.069489046693837,
          "pitch": 0.16498324374096285,
          "rotation": 0.7853981633974483,
          "target": "2-conservatory-lounge"
        },
        {
          "yaw": -0.7409013166469176,
          "pitch": 0.14698834815045103,
          "rotation": 0,
          "target": "0-alice-lee-plaza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3239661304646866,
          "pitch": 0.21495266677000657,
          "title": "Scupture&nbsp;",
          "text": "Circle&nbsp;"
        }
      ]
    },
    {
      "id": "2-conservatory-lounge",
      "name": "Conservatory Lounge",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33373430089850054,
          "pitch": 0.28655168537899733,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9025189905530944,
          "pitch": 0.4766603298301888,
          "title": "Lounge",
          "text": "Free seating"
        }
      ]
    }
  ],
  "name": "Music",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
