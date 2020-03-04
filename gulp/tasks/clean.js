// Clean.js
/* Задание для очистки папки build */

const gulp = require("gulp");
const del = require("del");

module.exports = function clean(cb) {
  return del('build').then(() => {
    cb()
  })
}