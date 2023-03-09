"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const newsSchema = new mongoose.Schema({
    hat: { type: String },
    tittle: { type: String },
    text: { type: String },
    author: { type: String },
    img: { type: String },
    publishDate: { type: String },
    link: { type: String },
    active: { type: Boolean },
});
exports.default = newsSchema;
