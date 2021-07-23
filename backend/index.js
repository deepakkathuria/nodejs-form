const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body

app.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    // const [name] = req.body.name;
    // const [rollno] = req.body.rollno;
    // const [country] = req.body.country;
    const { name, rollno , country } = req.body

    const newstudent = await pool.query(
      // "INSERT INTO student (name,rollno,country) VALUES(?,?,?)",
      "INSERT INTO student (name,rollno,country) VALUES($1,$2,$3) RETURNING *",
      [name,rollno,country]
    );

    res.json(newstudent.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// app.get("/student",(req,res)=>{
//   pool.query("SELECT * FROM student",(err,result)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//       res.send(result)
//     }
//   })
// })



// app.getUsers("/")= (req, resp) => {
//   pool.query('SELECT * FROM student ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
//get all todos

// app.get("/get", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT * FROM student");
//     res.json(allstudent.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//get a todo

// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
//       id
//     ]);

//     res.json(todo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//update a todo

// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     res.json("Todo was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//delete a todo

// app.delete("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
//       id
//     ]);
//     res.json("Todo was deleted!");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// const updateUser = (req, resp) => {
//   const id = parseInt(req.params.id)
//   const { name, rollno , country } = request.body

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, rollno, country, id],
//     (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User modified with ID: ${id}`)
//     }
//   )
// }

app.listen(5001, () => {
  console.log("server has started on port 5000");
});
