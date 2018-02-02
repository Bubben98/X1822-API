module.exports = function(app, db){
    
    //c- create
    app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title };
    db.collection('notes').insert(note, (err, result)=>{
        if (err){
            res.send({'error': 'an error has ocurd'});
        }else{
            res.send(result.ops[0]);
        }
    });
        console.log(req.body)
        res.send('hello from post');
    } );

    //r-read
    app.get('/notes/:id', (req,res) => {
        console.log('asking for notes');
        res.send('this should be a returnd note');
    });

    //u-updare

    //d-delete
};