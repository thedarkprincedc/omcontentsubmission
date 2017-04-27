module.exports = function(app, mongoose){

     var Story = mongoose.model('Story', {
          name : String,
          email : String,
          subject : String,
          description : String,
          submission_date : String
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
                    Story.find(function(err, stories) {
                          if (err)
                              res.send(err)
                          res.json(stories);
                     });
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
}
