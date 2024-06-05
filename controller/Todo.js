const Todo = require('../model/todo');

// create a new todo
exports.create = async (req, res) => {
    try {
        const { title, description, priority, dueDate } = req.body;
        console.log("Title1:", title);
        console.log("Description:", description);
        console.log("Priority:", priority);
        console.log("Due Date:", dueDate);

        const newTodo = new Todo({
            title,
            description,
            priority,
            dueDate
        });

       console.log("newTodo:", newTodo);
        await newTodo.save();
        res.status(201).json({ message: 'Todo task created successfully', todo: newTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    

};

// find all todos
exports.findAll = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// find a todo by id
exports.findOne = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// update a todo by id
exports.update = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        console.log("updatedTodo:", updatedTodo);
        res.status(200).json({ message: 'Todo updated successfully', todo: updatedTodo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//  delete a todo by id
exports.destroy = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        console.log("deletedTodo:", deletedTodo);

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
