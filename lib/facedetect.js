var cv = require('opencv');
var _ = require('underscore');

module.exports.getFacialGravity = function (im, callback){

  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){

    if (faces.length > 0)
    {

      var result = {x:0,y:0};
      result.x = _.reduce(faces, function(memo, face){ return memo + face.x + face.width/2 }, 0) / faces.length;
      result.y = _.reduce(faces, function(memo, face){ return memo + face.y + face.height/2 }, 0) / faces.length;
    
      return callback(null, result);

    }
    else
      return callback(null);
  });

}