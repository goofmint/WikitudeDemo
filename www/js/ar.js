var World = {
  init: function () {
    // 位置情報の指定
    var location = new AR.RelativeLocation(null, 3, 0, 0);
    
    // 表示するモデルの指定
    var modelDragon = new AR.Model("assets/dragon_floating.wt3", {
      scale: {
        x: 0.001,
        y: 0.001,
        z: 0.001
      },
      rotate: {
        roll: 25,
        tilt: 50.0,
      }
    });
    
    var obj = new AR.GeoObject(location, {
      drawables: {
        cam: [modelDragon],
      }
    });
  },
};

World.init();