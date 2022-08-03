/*
In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

 

*/
/* Examples
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]




*/
/*
Constraints:

n == edges.length
3 <= n <= 1000
edges[i].length == 2
1 <= ai < bi <= edges.length
ai != bi
There are no repeated edges.
The given graph is connected.

*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */

var findRedundantConnection = function (edges) {
  ///make a map where every element paired with of array immediate connected nodes
  ///loop from end to start
  ///for each edge check if it is part of cycle return the edge
  ///for each edge initialize set of already visited nodes and add the node1 to the set
};
function checkCycle(map, edge, visited) {
  ///we need to check if we can reach the node2 to node1 from another path(cycle)
  ///for every element of the maping node2 if already visited ignore
  /// if not visited (if equal to node1 [not in the level of node2 first call]  return true)
  /// if not equal to node1 add to visited check the cycle for this element[recursive call ] before calling store temporary set
  ///for what already visited
  ///after the call re-set the already visited set to the temporary set
  /// if all node already visited and no one equal to the node1 return false
}

let graph = {
  1: [2, 4, 5],
  2: [1, 3],
  3: [2, 4],
  4: [1, 3],
  5: [1],
};
///if the current is 5
///there is no other node to test //no other path the other node
///if the current is 4
///we have potential path at 3
///3 have [2,4]
///4 has been visited ,so it is useful to check what has been visited
///2 have potential path
///1 and 3
///we found 1

///continue
///
