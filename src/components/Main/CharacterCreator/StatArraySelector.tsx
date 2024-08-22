import React from "react";
import StatAdjuster from "../ManualEditor/StatAdjuster";


function StatArraySelector() {

    return (
        <div id="stat-array-selector">
            <h2>standard: 2, 2, 1, 0, -1</h2>
            <h2>balanced: 2, 1, 1, 1, 0</h2>
            <h2>min-max: 3, 1, 1, 0, -2</h2>
            <StatAdjuster />
        </div>
    )
}

export default StatArraySelector;
