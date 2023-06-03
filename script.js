(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_95A2AAD4_8080_EEC2_41D8_70A52BD4EBE4].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "borderRadius": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97CCBBC9_8081_6EC5_41DB_E73694667143",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -153.37,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_96226B85_8081_6F4D_41D3_1FDD68894419",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -153.7,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_t.jpg"
  }
 ],
 "label": "Cashier",
 "id": "panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_t.jpg",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 26.3,
   "class": "AdjacentPanorama",
   "yaw": -75.99,
   "panorama": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777"
  },
  {
   "backwardYaw": -17.94,
   "class": "AdjacentPanorama",
   "yaw": 2.64,
   "panorama": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_8F1B3E32_8080_A947_41D3_2053EB4AC758",
  "this.overlay_93D528C4_8080_AAC3_41DB_2B73BAA37916",
  "this.overlay_9243E6E8_8083_A6C3_41DC_6AD9A1B939F6"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9768ECD5_8081_6AC2_41D6_63240FE41138",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.01,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97F22C2E_8081_695F_41C4_B33E0D0A5F79",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143.11,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_974E1CA8_8081_6942_41D7_CE3AA6FDE7CE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114.43,
  "pitch": 0
 }
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_acceleration",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_camera"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.panorama_8ACBA61B_8080_F945_41DB_E9448A652084",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_8ACBA61B_8080_F945_41DB_E9448A652084_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9631DBB4_8081_6F43_4194_A8F0A85A8C1E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.61,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "manualRotationSpeed": 400,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_963B8B9F_8081_6F7D_4186_B6C69DCFA5F3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 162.06,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_t.jpg"
  }
 ],
 "label": "AccountantOffice",
 "id": "panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_t.jpg",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 26.63,
   "class": "AdjacentPanorama",
   "yaw": -121.34,
   "panorama": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_93ED702A_8083_9947_41CF_31EB3F492AA2"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_975E4CBD_8081_6942_41D3_088278882DF1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.36,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "manualRotationSpeed": 400,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97E1EC1A_8081_6946_41B0_008E35F6494B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.24,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_t.jpg"
  }
 ],
 "label": "DirecterOffice",
 "id": "panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_t.jpg",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.61,
   "class": "AdjacentPanorama",
   "yaw": 36.89,
   "panorama": "this.panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13",
   "distance": 1
  },
  {
   "backwardYaw": -144.2,
   "class": "AdjacentPanorama",
   "yaw": -65.57,
   "panorama": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
   "distance": 1
  },
  {
   "backwardYaw": 104.76,
   "class": "AdjacentPanorama",
   "yaw": -169.07,
   "panorama": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_8F03259B_8080_BB46_41D8_AFBF67BCA46C",
  "this.overlay_900B9531_8083_7B42_41CC_85AA6B4D0791",
  "this.overlay_90A58A53_8081_E9C5_41D8_BE8D16A70B92"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_979C0C5C_8081_69C3_41AE_7DDC1769F44A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.01,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "manualRotationSpeed": 400,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8B20445B_807F_99C5_41D6_53D06C791E42_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97BEFC8C_8081_6942_41BE_D460FBBF591E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 58.66,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_t.jpg"
  }
 ],
 "label": "WaitingRoom",
 "id": "panorama_8B20445B_807F_99C5_41D6_53D06C791E42",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_t.jpg",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.64,
   "class": "AdjacentPanorama",
   "yaw": -17.94,
   "panorama": "this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E",
   "distance": 1
  },
  {
   "backwardYaw": -47.99,
   "class": "AdjacentPanorama",
   "yaw": 94.71,
   "panorama": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
   "distance": 1
  },
  {
   "backwardYaw": -169.07,
   "class": "AdjacentPanorama",
   "yaw": 104.76,
   "panorama": "this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_8F9BDC06_8080_A94F_41C1_8B4FC2CB74C4",
  "this.overlay_8F2F6CC0_8080_AAC3_41A4_D67926488076",
  "this.overlay_8FE3511E_8080_9B7F_41D1_C5C0EBE1D268"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97AC4C75_8081_69CD_41D5_D11B10190ABB",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.33,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "manualRotationSpeed": 400,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97822C45_8081_69CD_41D2_DD0D937028D7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.29,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_t.jpg"
  }
 ],
 "label": "CoffeeCorner",
 "id": "panorama_8ACBA61B_8080_F945_41DB_E9448A652084",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_t.jpg",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": -158.39,
   "class": "AdjacentPanorama",
   "yaw": 112.67,
   "panorama": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_91474AD8_8080_EEC2_41D0_6C823FB8CD44"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9778CCEA_8081_6AC7_41D1_204AA525F027",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.93,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist, 0, 1)",
   "media": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist, 1, 2)",
   "media": "this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist, 2, 3)",
   "media": "this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist, 3, 4)",
   "media": "this.panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist, 4, 5)",
   "media": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist, 5, 6)",
   "media": "this.panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist, 6, 0)",
   "media": "this.panorama_8ACBA61B_8080_F945_41DB_E9448A652084",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8ACBA61B_8080_F945_41DB_E9448A652084_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97DBBBE1_8081_6EC5_41D5_A08BCD9E82DE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.39,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_t.jpg"
  }
 ],
 "label": "StaffSpace",
 "id": "panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_t.jpg",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 94.71,
   "class": "AdjacentPanorama",
   "yaw": -47.99,
   "panorama": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42",
   "distance": 1
  },
  {
   "backwardYaw": -75.99,
   "class": "AdjacentPanorama",
   "yaw": 26.3,
   "panorama": "this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E",
   "distance": 1
  },
  {
   "backwardYaw": 112.67,
   "class": "AdjacentPanorama",
   "yaw": -158.39,
   "panorama": "this.panorama_8ACBA61B_8080_F945_41DB_E9448A652084",
   "distance": 1
  },
  {
   "backwardYaw": -121.34,
   "class": "AdjacentPanorama",
   "yaw": 26.63,
   "panorama": "this.panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777",
   "distance": 1
  },
  {
   "backwardYaw": -65.57,
   "class": "AdjacentPanorama",
   "yaw": -144.2,
   "panorama": "this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_91C6DA51_8081_69C2_41CD_67B9CFB1439B",
  "this.overlay_906B8519_8080_9B45_41DC_3B51478E5DF0",
  "this.overlay_914A7AD8_8080_EEC3_41D4_D59E7805327A",
  "this.overlay_921A63BE_8080_9EBE_41BF_C00907515746",
  "this.overlay_9442D132_8080_9B46_41D1_C948F83C5C3F"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_97D49C02_8081_6947_41B1_E083AF6D11C3",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.8,
  "pitch": 0
 }
},
{
 "hfovMin": "120%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_t.jpg"
  }
 ],
 "label": "View",
 "id": "panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13",
 "pitch": 0,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_t.jpg",
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "backwardYaw": 36.89,
   "class": "AdjacentPanorama",
   "yaw": -8.61,
   "panorama": "this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42"
  }
 ],
 "overlays": [
  "this.overlay_91185F42_80BF_67C6_41D7_EC342936BE6C",
  "this.overlay_92E4179D_8080_E77D_41DB_F5624353E804",
  "this.overlay_92756369_8087_BFC5_41D2_D001AB429624"
 ],
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_8ACBA61B_8080_F945_41DB_E9448A652084_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "playbackBarHeadShadow": true,
 "id": "MainViewer",
 "left": 0,
 "playbackBarOpacity": 1,
 "progressBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "minHeight": 50,
 "width": "100%",
 "vrPointerColor": "#FFFFFF",
 "propagateClick": false,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "shadow": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressHeight": 10,
 "toolTipShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "toolTipFontColor": "#606060",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipShadowVerticalLength": 0,
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15,
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#000000",
 "paddingBottom": 0,
 "playbackBarBottom": 5,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipDisplayTime": 600,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipPaddingTop": 4,
 "borderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "toolTipBorderRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "minWidth": 100,
 "playbackBarBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "top": 0,
 "playbackBarProgressBorderColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "borderSize": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontWeight": "normal",
 "vrPointerSelectionTime": 2000,
 "toolTipShadowColor": "#333333",
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "progressRight": 0,
 "paddingTop": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0
},
{
 "itemVerticalAlign": "middle",
 "id": "ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779",
 "itemLabelFontWeight": "normal",
 "right": "0%",
 "itemThumbnailShadowBlurRadius": 8,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "itemThumbnailBorderRadius": 50,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "itemLabelFontColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemBackgroundOpacity": 0,
 "itemLabelGap": 9,
 "height": "55.373%",
 "scrollBarColor": "#FFFFFF",
 "itemBackgroundColorDirection": "vertical",
 "gap": 10,
 "itemThumbnailHeight": 75,
 "itemPaddingBottom": 3,
 "itemThumbnailShadowColor": "#000000",
 "horizontalAlign": "left",
 "paddingBottom": 10,
 "itemLabelFontStyle": "normal",
 "itemHorizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "verticalAlign": "top",
 "itemMode": "normal",
 "borderRadius": 5,
 "layout": "vertical",
 "itemLabelFontFamily": "Arial",
 "itemThumbnailOpacity": 1,
 "playList": "this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779_playlist",
 "itemBorderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#FFCC00",
 "minWidth": 20,
 "itemPaddingLeft": 3,
 "bottom": "0.02%",
 "itemThumbnailWidth": 75,
 "itemOpacity": 1,
 "paddingLeft": 20,
 "itemThumbnailShadow": true,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemPaddingTop": 3,
 "itemThumbnailShadowOpacity": 0.54,
 "borderSize": 0,
 "itemBackgroundColor": [],
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowSpread": 1,
 "itemLabelPosition": "bottom",
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "backgroundOpacity": 0.24,
 "data": {
  "name": "ThumbnailList35762"
 },
 "paddingTop": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "rollOverItemLabelFontWeight": "normal",
 "scrollBarMargin": 2
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "id": "IconButton_95A2AAD4_8080_EEC2_41D8_70A52BD4EBE4",
 "toolTipFontStyle": "normal",
 "iconURL": "skin/IconButton_95A2AAD4_8080_EEC2_41D8_70A52BD4EBE4.png",
 "width": 78,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "right": "0.84%",
 "toolTipBorderRadius": 3,
 "propagateClick": false,
 "minHeight": 1,
 "shadow": false,
 "toolTipTextShadowOpacity": 0,
 "transparencyActive": true,
 "toolTipBorderColor": "#767676",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "maxWidth": 128,
 "minWidth": 1,
 "top": "2.83%",
 "maxHeight": 128,
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "toolTipFontSize": 12,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "toolTipTextShadowColor": "#000000",
 "height": 39,
 "toolTipPaddingBottom": 4,
 "toolTipOpacity": 1,
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipBackgroundColor": "#F6F6F6",
 "class": "IconButton",
 "paddingBottom": 0,
 "toolTip": "Fullscreen",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton1493"
 },
 "toolTipShadowColor": "#333333",
 "toolTipBorderSize": 1,
 "backgroundOpacity": 0,
 "toolTipFontWeight": "normal",
 "toolTipPaddingRight": 6,
 "verticalAlign": "middle",
 "paddingTop": 0,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42, this.camera_963B8B9F_8081_6F7D_4186_B6C69DCFA5F3); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "WaitingRoom"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.08
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_93746685_8081_794D_41C7_ABB63BAA5116",
   "pitch": -29.08,
   "yaw": 2.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.98,
   "distance": 100
  }
 ],
 "id": "overlay_8F1B3E32_8080_A947_41D3_2053EB4AC758",
 "data": {
  "label": "Circle Point 01a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Accountant"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F0C641_8081_79C5_41D7_E38CE92931B9",
   "pitch": -9.48,
   "yaw": -72.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.43,
   "distance": 50
  }
 ],
 "id": "overlay_93D528C4_8080_AAC3_41DB_2B73BAA37916",
 "data": {
  "label": "Arrow 01 Right"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9, this.camera_96226B85_8081_6F4D_41D3_1FDD68894419); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Staff"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -75.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0_HS_2_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82,
   "yaw": -75.99
  }
 ],
 "id": "overlay_9243E6E8_8083_A6C3_41DC_6AD9A1B939F6",
 "data": {
  "label": "Arrow Black Right-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9, this.camera_97CCBBC9_8081_6EC5_41DB_E73694667143); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Staff"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.1
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F46643_8081_79C5_41B0_8AA929C939CD",
   "pitch": -8.1,
   "yaw": -121.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.7,
   "distance": 100
  }
 ],
 "id": "overlay_93ED702A_8083_9947_41CF_31EB3F492AA2",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13, this.camera_97DBBBE1_8081_6EC5_41D5_A08BCD9E82DE); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "view"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.42
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_93741685_8081_794D_41D2_1748448D7682",
   "pitch": -21.42,
   "yaw": 36.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.39,
   "distance": 100
  }
 ],
 "id": "overlay_8F03259B_8080_BB46_41D8_AFBF67BCA46C",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42, this.camera_97E1EC1A_8081_6946_41B0_008E35F6494B); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "WaitingRoom"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.61
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9374B685_8081_794D_41BE_68DA253D2D9F",
   "pitch": -10.61,
   "yaw": -169.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.64,
   "distance": 100
  }
 ],
 "id": "overlay_900B9531_8083_7B42_41CC_85AA6B4D0791",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9, this.camera_97D49C02_8081_6947_41B1_E083AF6D11C3); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Staff"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.68,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.1
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_93756685_8081_794D_41C4_26B430882B7C",
   "pitch": -9.1,
   "yaw": -65.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.68,
   "distance": 100
  }
 ],
 "id": "overlay_90A58A53_8081_E9C5_41D8_BE8D16A70B92",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E, this.camera_975E4CBD_8081_6942_41D3_088278882DF1); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Cashier"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_937A4681_8081_7945_41DD_7B04D03494D5",
   "pitch": -9.48,
   "yaw": -17.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.94,
   "distance": 100
  }
 ],
 "id": "overlay_8F9BDC06_8080_A94F_41C1_8B4FC2CB74C4",
 "data": {
  "label": "Circle Point 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1, this.camera_9778CCEA_8081_6AC7_41D1_204AA525F027); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "DirectorOffice"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_937B0684_8081_7943_41AA_64E6D2ACE2B9",
   "pitch": -6.09,
   "yaw": 104.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.74,
   "distance": 100
  }
 ],
 "id": "overlay_8F2F6CC0_8080_AAC3_41A4_D67926488076",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9, this.camera_9768ECD5_8081_6AC2_41D6_63240FE41138); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "StaffRoom"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_937BB684_8081_7943_41D8_D95EA203E235",
   "pitch": 0.69,
   "yaw": 94.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.79,
   "distance": 100
  }
 ],
 "id": "overlay_8FE3511E_8080_9B7F_41D1_C5C0EBE1D268",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9, this.camera_9631DBB4_8081_6F43_4194_A8F0A85A8C1E); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Staff"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.76
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F40643_8081_79C5_41D3_ACBF76D0F382",
   "pitch": -15.76,
   "yaw": 112.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.25,
   "distance": 50
  }
 ],
 "id": "overlay_91474AD8_8080_EEC2_41D0_6C823FB8CD44",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8B20445B_807F_99C5_41D6_53D06C791E42, this.camera_97822C45_8081_69CD_41D2_DD0D937028D7); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "WaitingRoom"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.61
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F68642_8081_79C7_41D2_D6B20AFD2D66",
   "pitch": -10.61,
   "yaw": -47.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.64,
   "distance": 100
  }
 ],
 "id": "overlay_91C6DA51_8081_69C2_41CD_67B9CFB1439B",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777, this.camera_97BEFC8C_8081_6942_41BE_D460FBBF591E); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "AccountantOffice"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.36
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F74642_8081_79C7_41C5_26E90E942601",
   "pitch": -9.36,
   "yaw": 26.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.67,
   "distance": 100
  }
 ],
 "id": "overlay_906B8519_8080_9B45_41DC_3B51478E5DF0",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1, this.camera_974E1CA8_8081_6942_41D7_CE3AA6FDE7CE); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "DirectorOffice"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F7F643_8081_79C5_41CD_A24C25F9D36F",
   "pitch": -13.12,
   "yaw": -144.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.56,
   "distance": 100
  }
 ],
 "id": "overlay_914A7AD8_8080_EEC3_41D4_D59E7805327A",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8ACBA61B_8080_F945_41DB_E9448A652084, this.camera_97AC4C75_8081_69CD_41D5_D11B10190ABB); this.mainPlayList.set('selectedIndex', 6)",
   "toolTip": "CoffeeCorner"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_9481CB44_8083_6FC3_41CA_F823E858BC78",
   "pitch": -19.78,
   "yaw": -158.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.09,
   "distance": 50
  }
 ],
 "id": "overlay_921A63BE_8080_9EBE_41BF_C00907515746",
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E, this.camera_979C0C5C_8081_69C3_41AE_7DDC1769F44A); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Cashier"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.06
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_950A8DF2_8087_AAC7_41CD_0034D514C928",
   "pitch": 5.06,
   "yaw": 26.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.51,
   "distance": 50
  }
 ],
 "id": "overlay_9442D132_8080_9B46_41D1_C948F83C5C3F",
 "data": {
  "label": "Arrow 01 Left"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1, this.camera_97F22C2E_8081_695F_41C4_B33E0D0A5F79); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "MeetingTable"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F18642_8081_79C7_41DC_014DDB39F3AA",
   "pitch": -9.98,
   "yaw": -8.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.98,
   "distance": 100
  }
 ],
 "id": "overlay_91185F42_80BF_67C6_41D7_EC342936BE6C",
 "data": {
  "label": "Circle Point 02a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "WaitingRoom"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F62642_8081_79C7_41D0_2FE991F7CB51",
   "pitch": -1.82,
   "yaw": -31.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.78,
   "distance": 100
  }
 ],
 "id": "overlay_92E4179D_8080_E77D_41DB_F5624353E804",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Staff"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_96F6F642_8081_79C7_41DC_72F2C5FEAC30",
   "pitch": -2.32,
   "yaw": 34.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.78,
   "distance": 100
  }
 ],
 "id": "overlay_92756369_8087_BFC5_41D2_D001AB429624",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_93746685_8081_794D_41C7_ABB63BAA5116",
 "frameCount": 22,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8A3EC258_807F_79C3_41DE_B543F6D60A4E_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_96F0C641_8081_79C5_41D7_E38CE92931B9",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8AD008F8_8080_EAC2_41D8_34252E2BF777_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_96F46643_8081_79C5_41B0_8AA929C939CD",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_93741685_8081_794D_41D2_1748448D7682",
 "frameCount": 20,
 "rowCount": 5
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_9374B685_8081_794D_41BE_68DA253D2D9F",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8AD2408A_8080_9947_41CF_32329EDE9DD1_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_93756685_8081_794D_41C4_26B430882B7C",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_937A4681_8081_7945_41DD_7B04D03494D5",
 "frameCount": 22,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_937B0684_8081_7943_41AA_64E6D2ACE2B9",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8B20445B_807F_99C5_41D6_53D06C791E42_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_937BB684_8081_7943_41D8_D95EA203E235",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACBA61B_8080_F945_41DB_E9448A652084_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_96F40643_8081_79C5_41D3_ACBF76D0F382",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_96F68642_8081_79C7_41D2_D6B20AFD2D66",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_96F74642_8081_79C7_41C5_26E90E942601",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_96F7F643_8081_79C5_41CD_A24C25F9D36F",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_3_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 570
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_9481CB44_8083_6FC3_41CA_F823E858BC78",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACD0BA0_8080_AF43_41DE_83885A80F0A9_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "frameDuration": 62,
 "id": "AnimatedImageResource_950A8DF2_8087_AAC7_41CD_0034D514C928",
 "frameCount": 9,
 "rowCount": 3
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1440
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_96F18642_8081_79C7_41DC_014DDB39F3AA",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_96F62642_8081_79C7_41D0_2FE991F7CB51",
 "frameCount": 24,
 "rowCount": 6
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_8ACDEE0E_8080_A95F_41D8_A64CCE4FDB13_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "frameDuration": 41,
 "id": "AnimatedImageResource_96F6F642_8081_79C7_41DC_72F2C5FEAC30",
 "frameCount": 24,
 "rowCount": 6
}],
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_93685FA0_8081_E742_41D7_C89A002D9779",
  "this.IconButton_95A2AAD4_8080_EEC2_41D8_70A52BD4EBE4"
 ],
 "minHeight": 20,
 "propagateClick": false,
 "downloadEnabled": false,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 0.75,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "paddingLeft": 0,
 "buttonToggleFullscreen": "this.IconButton_95A2AAD4_8080_EEC2_41D8_70A52BD4EBE4",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "height": "100%",
 "gap": 10,
 "scripts": {
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; }
 },
 "class": "Player",
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Player435"
 },
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
