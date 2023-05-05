const { Router } = require("express")
const { getToDo, saveToDo, updateToDo, deleteToDo, getSingleToDo } = require("../controllers/ToDoController")

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
router.post('/getTask', getSingleToDo)

// router.get('/', (req,res) => {
//     res.json({message: "Hello There"})
// })

module.exports = router;