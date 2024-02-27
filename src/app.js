const express = require('express');
const app = express();
const port = 8080;

const characters = [
    {
        id: 1,
        name: 'Marty McFly',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg/220px-Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg',
    },
    {
        id: 2,
        name: 'Doc Brown',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Doc_Brown.JPG/220px-Doc_Brown.JPG',
    },
    {
        id: 3,
        name: 'Biff Tannen',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/BiffTannenBackToTheFuture1985.jpg/220px-BiffTannenBackToTheFuture1985.jpg',
    },
    {
        id: 4,
        name: 'Lorraine Baines McFly',
        image: 'https://static.wikia.nocookie.net/p__/images/7/7a/8FC51F9D-0E81-4DD3-B7EC-3D43508532D6.jpg/revision/latest?cb=20220304101815&path-prefix=protagonist'
    }
];

// Endpoint to get all characters
app.get('/', (req, res) => {
    res.json(characters);
});

// Endpoint to get a specific character by ID
app.get('/:id', (req, res) => {
    const characterId = parseInt(req.params.id);
    const character = characters.find((char) => char.id === characterId);

    if (character) {
        res.json(character);
    } else {
        res.status(404).json({ error: 'Character not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
