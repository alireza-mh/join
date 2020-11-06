#!/bin/bash

# exit immediately if some of command fails
set -e

OUTPUT=`npx ts-prune`

if [ -z "$OUTPUT" ]; then
    echo "No dead code found - happy days"
    exit 0
else 
    echo "Dead code found - sad days"
    echo "${OUTPUT}"
    exit 1
fi
