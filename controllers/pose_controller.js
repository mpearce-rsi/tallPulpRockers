const db = require("../models");

app.get("/poses/:id", function (req, res) {
  db.Pose.findOne({
    where: {
      id: req.params.id,
    },
  }).then(function (pose) {
    transArr = [pose.translation_0, pose.translation_1];
    descArr = [pose.description_0];
    if (pose.translation_2 !== null) {
      transArr.push(pose.translation_2);
    }
    if (pose.translation_3 !== null) {
      transArr.push(pose.translation_2);
    }
    if (pose.translation_4 !== null) {
      transArr.push(pose.translation_2);
    }
    if (pose.translation_5 !== null) {
      transArr.push(pose.translation_2);
    }
    if (pose.translation_6 !== null) {
      transArr.push(pose.translation_2);
    }
    if (pose.translation_7 !== null) {
      transArr.push(pose.translation_2);
    }
    if (pose.description_2 !== null) {
      descArr.push(pose.description_2);
    }
    const data = {
      engName: pose.pose_name,
      sanName: pose.sanskrit_name,
      category: pose.category,
      translation: transArr,
      difficulty: pose.difficulty,
      description: descArr,
      benefits: pose.benefits,
      altName: pose.alt_name,
      imgURL: pose.image
    };
    res.render("pose", data);
  });
});

app.get("/search")