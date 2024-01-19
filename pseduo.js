get('/api/students/12345', (req, res) => {
    // parse the student id val param from url
    let id = req.params.id;

    // use Student model to fetch student record from db
    Student.find(id, (err, student) => {
        if (err) { ... }
        else {
            res.json(student).status(200);
        }
    });

});