"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3003;
const src_1 = require("common/src");
app.get('/', (req, res) => {
    let parsedUser = src_1.UserInput.safeParse(req.body);
    if (!parsedUser.success) {
        res.send('Incorrect Input2');
        return;
    }
    res.send('correct input');
});
app.listen(port, () => {
    console.log(`Example app listing on port ${port}`);
});
