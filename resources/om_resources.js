module.exports = function(app, mongoose, bodyParser){
     var Story = mongoose.model('Story', {
          name : String,
          email : String,
          subject : String,
          description : String,
          submission_date : { type: Date, default: Date.now },
     });
     var File = mongoose.model("Files", {
          story_id : String,
          img: { data: Buffer, contentType: String }
     })
     app.get('/api/stories', function(req, res) {
          Story.find({}, null, {sort: {submission_date: -1}}, function(err, todos) {
               // if there is an error retrieving, send the error. nothing after res.send(err) will execute
               if (err)
                    res.send(err)
               res.json(todos); // return all todos in JSON format
          });
     });
     app.post('/api/stories', function(req, res) {
          if(req.body){
               //req.body.submission_date = new Date();
               Story.create({
                    name : req.body.name,
                    email : req.body.email,
                    subject : req.body.subject,
                    description : req.body.description
               }, function(err, stories){
                    if (err){
                         res.send(err);
                    }
                         console.log(stories);
                    res.json(stories);

                    /*Story.find(function(err, stories) {
                          if (err)
                              res.send(err)

                     });*/
               });
          }
     });
     app.delete('/api/stories/:id', function(req, res) {
          Story.remove({
               _id : req.params.id
          }, function(err, story) {
               if (err){
                    res.send(err);
               }
               Story.find(function(err, stories) {
                    if (err){
                         res.send(err)
                    }
                    res.json(stories);
               });
          });
     });
     app.post('/api/stories/image/:id',  bodyParser({limit: '5mb'}), function(req, res){
          File.create({
               story_id: req.params.id,
               img: {
                    data: req.files.file.data,
                    contentType: req.files.file.mimetype
               }
          }, function(err, files){
               if(err) {
                      console.log(err);
                      res.status(500).send(err);
               } else {
                    res.send({"state" : "success"});
               }
          });

          /*Files.findOneAndUpdate({"_id": req.params.id},{ "$set": {
               "img": {
                    data: req.files.file.data,
                    contentType: req.files.file.mimetype
               }
          } }).exec(function (err, story){
               if(err) {
                      console.log(err);
                      res.status(500).send(err);
               } else {
                    res.send({"state" : "success"});
               }
          });*/



     });
     app.get('/images/:id', function(req, res){
          File.findOne({"story_id" :req.params.id }, function(err, story){
               res.set("Content-Type", story.img.contentType);
               res.send( story.img.data );
          });
     });

     app.put('/app/stories/approve/:id', function(req, res){

     });
     app.put('/app/stories/decline/:id', function(req, res){

     });
}
