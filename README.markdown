# BASE
# NOTE: you must have Compass and Susy installed to take advantage of the SASS helpers

## This is a simple basic setup for creating a HTML and SASS site

# WIDTH AND HEIGHT

ALL widths and heights, including line heights, should be set relative to the font size ($fs) or the line-height ($lh). This is especially applicable to media queries.

### base.sass

Susy config file. The width of the columns is bases on the font size ($fs)

### helpers.sass

There are some basic takings from the HTML5 boilerplate, Harry Roberts blog and a few simple helpers of my own for SASS.

### includes.sass

The file where everything is included. Comment out or delete files you do not want to show from this file.

### queries.sass

A simple file to show you what media query you're currently viewing. Remove/comment out of includes for production.

### show_grid.sass

A simple file that puts a grid behind the #container so you can see your font-size/line-height grid boxes

