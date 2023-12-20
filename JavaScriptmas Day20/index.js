const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
   let flatarr = []
function flatten(innerArr){
    for(let item of innerArr){
        if (Array.isArray(item)) {
            // If item is an array, call flatten recursively  
            flatten(item)
        }
        else{
             // If item is not an array, add it to flatArray  
            flatarr.push(item)
        }
        
    }
}
flatten(arr)
flatarr=flatarr.filter(curr =>(curr=="🎅"))
return flatarr
}

// Check the returned results from saveSanta()
console.table(saveSanta(dangerArray))