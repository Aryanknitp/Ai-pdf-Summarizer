#!/bin/bash

mongorestore \
--uri="$DATABASE_URL" \
./backup