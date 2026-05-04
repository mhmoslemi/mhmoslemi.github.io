#!/bin/bash
cd "$(dirname "$0")"
LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 bundle exec jekyll serve
