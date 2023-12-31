#!/bin/sh
performanceThreshold=90
currentBranch=$(git rev-parse --abbrev-ref HEAD)
score=$(jq '.categories.performance.score * 100' report.json)
if (( $(echo "$score < $performanceThreshold" | bc -l) )); then
    # Revertir despliegue
    git revert -m 1 HEAD
    git push origin $currentBranch
fi