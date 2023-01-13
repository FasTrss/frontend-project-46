[![Actions Status](https://github.com/FasTrss/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/FasTrss/frontend-projecmaket-46/actions)
<a href="https://codeclimate.com/github/FasTrss/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/440f327b69cfec772aef/maintainability" /></a>
<a href="https://codeclimate.com/github/FasTrss/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/440f327b69cfec772aef/test_coverage" /></a>

[![project-check](https://github.com/FasTrss/frontend-project-46/actions/workflows/gendiff-check.yml/badge.svg)](https://github.com/FasTrss/frontend-project-46/actions/workflows/gendiff-check.yml)

# Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Она поддерживает входные форматы yaml и json, и генерирует отчет в виде plain text, json, stylish.
## Минимальные системные требования
macOS 12.1 NodeJS v18.11.0
## Установка и запуск
 make install

 npm link

 gendiff --format (выбираете нужный формат: plain, json либо stylish по умолчанию) path/to/file1.json path/to/file2.yml

 Показать справку: gendiff -h


### Работа genDiff на файлах file1.JSON и file2.JSON
https://asciinema.org/a/UCpnAg7IAQV2K4kNCTIJ7rXiu

### Работа genDiff на файлах filepath1.yml и filepath2.yml
https://asciinema.org/a/mtwbMe8DmZTG7DHrVZiYdlfvt

### Работа genDiff на файлах с вложенной структурой и форматом 'stylish'
https://asciinema.org/a/g8ivjbjLVSI5brFDeKkO9viga

### Работа genDiff на файлах с вложенной структурой и форматом 'plain'
https://asciinema.org/a/08rMPopoONfHYOXyJomnhIefh

### Работа genDiff на файлах с вложенной структурой и форматом 'json'..
https://asciinema.org/a/V5koZrIbfaxHb2mjGKWplKc7k