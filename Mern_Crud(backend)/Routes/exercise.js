const router = require('express').Router();
let Exercise = require('../Models/Exercises');

router.route('/').get((req,res) => {
Exercise.find()
.then(exercises => res.json(exercises))
.catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    let body = req.body;
// const username = req.body.UserName;
// const description = req.body.Description;
// const duration = Number(req.body.Duration);
// const date = Date.parse(req.body.Date);
const newExercise = new Exercise(body);
newExercise.save()
.then(() => res.json('Exercise added!'))
.catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) => {
Exercise.findById(req.params.id)
.then(exercise => res.json(exercise))
.catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) => {
Exercise.findByIdAndDelete(req.params.id)
.then(exercise => res.json('Exercise deleted'))
.catch(err => res.status(400).json('Error: '+err));
});

router.route("/update/:id").post((req,res)=>{
console.log('Update API is running');
    id=req.params.id;    
    console.log(id);       //parameter used for input in router
    data=req.body;
    console.log(data);    
    Exercise.findByIdAndUpdate(id,{...data},{new:true}).then(()=> 
    {
        res.json({
        success:true,
        message:"done"
    })
    }).catch(err=>{
        res.json(err);
    })
});


// router.route('/update/:id').post((req,res) => {
// let body = req.body;
// Exercise.findById(req.params.id)
// .then(exercise => {
// // exercise.username = req.body.username;
// // exercise.description = req.body.description;
// // exercise.duration = Number(req.body.duration);
// // exercise.date = Date.parse(req.body.date);
// exercise.save()
// .then(() => res.json('Exercise updated !'))
// .catch(err => res.status(400).json('Error: '+err));
// })
// .catch(err => res.status(400).json('Error: '+err));
// });
module.exports = router;