var x = "available" ;

function ChangeStatus(){
    if (x ==  "full")
        $(data).removeClass("nothing").addClass("status-full");

    else if (x == "available")
        $(data).removeClass("nothing").addClass("status-available");
    
    else if (x == "current")
        $(data).removeClass("nothing").addClass("status-currentNode");
}
function Generate (){
    list = pythonfile();
    console.log("qWEQWEQWE")

}

//dijkstra solve graph starting at s
function solveMe(start, end) 
{const dijkstra = (edges,source,target) => {
    const Q = new Set(),
          prev = {},
          dist = {},
          adj = {}
 
    const vertex_with_min_dist = (Q,dist) => {
        let min_distance = Infinity,
            u = null
 
        for (let v of Q) {
            if (dist[v] < min_distance) {
                min_distance = dist[v]
                u = v
            }
        }
        return u
    }
 
    for (let i=0;i<edges.length;i++) {
        let v1 = edges[i][0], 
            v2 = edges[i][1],
            len = edges[i][2]
 
        Q.add(v1)
        Q.add(v2)
 
        dist[v1] = Infinity
        dist[v2] = Infinity
 
        if (adj[v1] === undefined) adj[v1] = {}
        if (adj[v2] === undefined) adj[v2] = {}
 
        adj[v1][v2] = len
        adj[v2][v1] = len
    }
 
    dist[source] = 0
 
    while (Q.size) {
        let u = vertex_with_min_dist(Q,dist),
            neighbors = Object.keys(adj[u]).filter(v=>Q.has(v)) //Neighbor still in Q 
 
        Q.delete(u)
 
        if (u===target) break //Break when the target has been found
 
        for (let v of neighbors) {
            let alt = dist[u] + adj[u][v]
            if (alt < dist[v]) {
                dist[v] = alt
                prev[v] = u
            }
        }
    }
 
    {
        let u = target,
        S = [u],
        len = 0
 
        while (prev[u] !== undefined) {
            S.unshift(prev[u])
            len += adj[u][prev[u]]
            u = prev[u]
        }
        return [S,len]
    }   
}
 
//Testing algorithm
let graph = []
graph.push(["A1", "A2", 15]) 
graph.push(["A1", "A3", 10])
graph.push(["A1", "A4", 25]) 
graph.push(["A1", "A5", 35])

graph.push(["A2", "A3", 25])
graph.push(["A2", "A4", 10])
graph.push(["A2", "A5", 20])

graph.push(["A3", "A4", 15])
graph.push(["A3", "A5", 25])

graph.push(["A4", "A5", 10])




graph.push(["B1", "B2", 10])
graph.push(["B1", "B3", 10])
graph.push(["B1", "B4", 20])
graph.push(["B1", "B5", 30])

graph.push(["B2", "B3", 20])
graph.push(["B2", "B4", 40])
graph.push(["B2", "B5", 15])

graph.push(["B3", "B4", 10])
graph.push(["B3", "B5", 20])

graph.push(["B4", "B5", 10])



graph.push(["C1", "C2", 10])
graph.push(["C1", "C3", 20])
graph.push(["C1", "C4", 15])
graph.push(["C1", "C5", 15])
graph.push(["C1", "C6", 25])

graph.push(["C2", "C3", 10])
graph.push(["C2", "C4", 5])
graph.push(["C2", "C5", 5])
graph.push(["C2", "C6", 15])

graph.push(["C3", "C4", 15])
graph.push(["C3", "C5", 15])
graph.push(["C3", "C6", 25])

graph.push(["C4", "C5", 5])
graph.push(["C4", "C6", 15])

graph.push(["C5", "C6", 10])


graph.push(["I1", "I2", 5])
graph.push(["I1", "I3", 10])
graph.push(["I1", "I4", 25])
graph.push(["I1", "I5", 15])

graph.push(["I2", "I3", 5])
graph.push(["I2", "I4", 15])
graph.push(["I2", "I5", 25])

graph.push(["I3", "I4", 10])
graph.push(["I3", "I5", 20])

graph.push(["I4", "I5", 10])




let [path,length] = dijkstra(graph, start, end);
//console.log(path) //[ 'a', 'c', 'f', 'e' ]
//console.log(length) //20
return length

}

var permArr = [],
  usedChars = [];
// for permutation of the combination of all the dustbins and put into the array in one()
function two(input) {
    
var i, ch;
for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
    permArr.push(usedChars.slice());
    }
    two(input);
    input.splice(i, 0, ch);
    usedChars.pop();
}
return permArr
};

/* 
NOTE FROM THE SHADY CODERS aka qz.................
General flow of the code is run One()[general logic] -> Two( get permutation) then solveME(get the distance)
Things we still need to do:
1) Pull the dustbin array from db
2) starting point also need pull from db
*/
function one()
{
    // Take in from parameter
    var index;
    var computedValue = [];
    var temp =null;
    var dustbins = ["A1", "A2", "A3","A4","A5"];
    var startingPoint = "A5";
    var asd = two(dustbins);
    
    //first for loop to loop thru the array list like the one below: 
    // 0: (3) ["A1", "A2", "A3"]
    // 1: (3) ["A1", "A3", "A2"]
    // 2: (3) ["A2", "A1", "A3"]
    // 3: (3) ["A2", "A3", "A1"]
    // 4: (3) ["A3", "A1", "A2"]
    // 5: (3) ["A3", "A2", "A1"]
    
    for (i = 0; i < asd.length; i++) {
        // force any set that is not equals to the startpoint as the maximum value
        if(asd[i][0] != startingPoint){
            computedValue.push(1000)
         } 
         else{
             // entering this means the first element is the same as the starting position of the cleaner
            for (j = 0; j < asd[i].length; j++){
                if(j+2 > asd[i].length){
                    break
                }
                else{
                    // will run the solveme() to get the distance and compute the total cost for that path
                temp +=solveMe(asd[i][j], asd[i][j+1])
                }           
            }
            //push the sum into computed value so that we can know the min amount later.
            computedValue.push(temp)
            temp=0
        }
    

    }  
    console.log(computedValue);
    console.log(asd);
    // get the min value index to refer back to original array
    index = computedValue.indexOf(Math.min(...computedValue))
    
    console.log(index);
    console.log(asd[index]);
    var htmlDatas="<span>Sector 1</span><br><span>Shortest path: "+ asd[index] + " </span>" ;
    $("#Right-side").html(htmlDatas)


}








// To enable CORS in firefox

/* 

1) Open Firefox, and on the address bar, type about:config.

2) Click on I'll be careful,I promise!".

3) Search for security.fileuri.strict_origin_policy.

4) Right-click and select Toggle to change the value from true to false.

5) Close the browser and launch it again. */