#!/bin/bash

mongodump \
--uri="$DATABASE_URL" \
--out=./backup