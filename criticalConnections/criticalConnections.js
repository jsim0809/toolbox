// There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some server unable to reach some other server.

// Return all critical connections in the network in any order.



// Example 1:



// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.


// Constraints:

// 1 <= n <= 10^5
// n-1 <= connections.length <= 10^5
// connections[i][0] != connections[i][1]
// There are no repeated connections.


// Plan:
// iterate through the array.

// For example, in [[0,1],[1,2],[2,0],[1,3]]

// Remove [0,1]. Try to find the connection 0,1 in the rest of the array [[1,2],[2,0],[1,3]].
const criticalConnections = (n, connections) => {
  const results =[];

  const recursivelyFloodValues = (flood, tuple, value) => {
    if (!flood.has(value)) {
      flood.add(value);
      connectionsWeb[value].forEach((child) => {
            // if this isn't the connection we're trying to test
            if (!(value === tuple[0] && child === tuple[1] || value === tuple[1] && child === tuple[0])) {
              recursivelyFloodValues(flood, tuple, child);
            }
          });
    }
  }

  // This object contains all connections, in both directions.
  const connectionsWeb = {};
  connections.forEach((tuple) => {
    if (connectionsWeb[tuple[0]]) {
      connectionsWeb[tuple[0]].push(tuple[1]);
    } else {
      connectionsWeb[tuple[0]] = [tuple[1]];
    }
    if (connectionsWeb[tuple[1]]) {
      connectionsWeb[tuple[1]].push(tuple[0]);
    } else {
      connectionsWeb[tuple[1]] = [tuple[0]];
    }
  });

  // For each tuple we are trying to test, flood a Set with the possible connections you can reach from the first element.
  connections.forEach((tuple) => {
    const flood = new Set();

    recursivelyFloodValues(flood, tuple, tuple[0]);
    // check flooded object for tail parts of connection
    if (!flood.has(tuple[1])) {
      results.push(tuple);
    }


  });


  return results;
}