module.exports = function(app, mongoose, bodyParser){
     var Story = mongoose.model('Story', {
          name : String,
          email : String,
          subject : String,
          description : String,
          submission_date : String,
          img: { data: Buffer, contentType: String }
     });
     app.get('/api/stories', function(req, res) {
          Story.find(function(err, todos) {
               // if there is an error retrieving, send the error. nothing after res.send(err) will execute
               if (err)
                    res.send(err)
               res.json(todos); // return all todos in JSON format
          });
     });
     app.post('/api/stories', function(req, res) {
          if(req.body){
               req.body.submission_date = new Date();
               Story.create(req.body, function(err, stories){
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
          Story.findOneAndUpdate({"_id": req.params.id},{ "$set": { "img": {
               data: req.files.file.data,
               contentType: req.files.file.mimetype
          } } }).exec(function (err, story){
               if(err) {
                      console.log(err);
                      res.status(500).send(err);
               } else {
                    res.send({"state" : "success"});
               }
          });
     });
     app.get('/images/:id', function(req, res){
          Story.findOne({"_id" :req.params.id }, function(err, story){
               console.log(story);
               res.set("Content-Type", story.img.contentType);
               res.send( story.img.data );
          });
     });

     app.put('/app/stories/approve/:id', function(req, res){

     });
     app.put('/app/stories/decline/:id', function(req, res){

     });
}
