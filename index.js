#!/usr/bin/env node

var path = require('path');

var browserLessons = require('browser-lessons');

browserLessons( {

	name: 'Jam3 Programmatic Animation Lesson',
	description: 'This is a lesson on programmatic animation.',
	pathLessons: path.join(__dirname, 'lessons')
});