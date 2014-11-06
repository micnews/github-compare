#!/usr/bin/env node

var fs = require('fs');
var parse = require('github-repo-from-config');
var getBranch = require('resolve-git-branch');
var open = require('open');

var target = process.argv[2] || 'master';

var config = fs.readFileSync('.git/config');
var repo = parse(config).path;

getBranch(function(err, branch){
  if (err) throw err;
  open('https://github.com/' + repo + '/compare/' + branch + '...' + target);
});

