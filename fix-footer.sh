#!/usr/bin/env bash

cpdf -crop "0mm 8mm 300mm 300mm" doc.pdf -o doc_fixed.pdf
cpdf -add-text "Page %Page sur %EndPage" -bottomright 30pt -font "Times-Roman" -font-size 9 doc_fixed.pdf -o doc_fixed.pdf
cpdf -compress doc_fixed.pdf -o doc_fixed.pdf