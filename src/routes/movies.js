//DEPENDENCIES
const { Router } = require("express");

// ROUTER
const router = Router();

//DATA
const data = require("../data.json");

// GET
router.get("/", (req, res) => {

    res.status(200).json(data);

})

// POST
router.post("/", (req, res) => {

    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {

        const id = data.length + 1;
        const newMovie = { id, ...req.body }
        data.push(newMovie);
        res.status(201).json(data);

    }
    else {

        res.status(400).json({ "error": "bad request" });

    }

});

// PUT
router.put("/:id", (req, res) => {

    const { title, director, year, rating } = req.body;
    const { id } = req.params;
    let match = false;
    console.log(req.body);

    if (title || director || year || rating) {

        data.forEach((movie, i) => {

            if (movie.id == id) {

                match = true;
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
                res.status(201).json(data);

            }

        })

        if (!match) {

            res.status(404).json({ "error": "404 not found" });

        }

    }
    else {

        res.status(404).json({ "error": "404 not found" });

    }

})

// DELETE
router.delete("/:id", (req, res) => {

    const { id } = req.params;

    data.forEach((movie, i) => {

        if (movie.id == id) {

            data.splice(i, 1);
            res.status(200).json(data);

        }
        else {

            res.status(404).json({ "error": "404 not found" });

        }

    });

});

module.exports = router;