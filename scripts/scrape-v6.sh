#!/bin/bash

#
# Cheeky script that scrapes `http://clients.jackherbert.com/resilify/v6/core-system.html`
#

SCRAPE_URL=http://clients.jackherbert.com/resilify/v6/core-system.html
OUPUT_DIR=client/mockups/v6-scrape
BASE_OUTPUT_DIR=$OUPUT_DIR/clients.jackherbert.com/resilify
OUTPUT_INDEX_PATH=$OUPUT_DIR/index.html

rm -rf $OUPUT_DIR

wget --page-requisites $SCRAPE_URL 	\
	 --directory-prefix=$OUPUT_DIR

#
# Clean up the directory structure a bit
#

mv $BASE_OUTPUT_DIR/v6/css $OUPUT_DIR
mv $BASE_OUTPUT_DIR/assets $OUPUT_DIR
sed 's/\.\.\/assets/\.\/assets/g' $BASE_OUTPUT_DIR/v6/core-system.html >> $OUTPUT_INDEX_PATH

rm -rf $BASE_OUTPUT_DIR
