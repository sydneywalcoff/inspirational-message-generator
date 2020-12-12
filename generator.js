const adj = ['smart', 'kind', 'important', 'beautiful', 'intelligent', 'powerful', 'empowered', 'compassionate'];
let rIndex = Math.floor(Math.random() * adj.length);

const generator = arr => {
    let adj1 = adj[rIndex];
    let adj2 = adj[rIndex];
    let adj3 = adj[rIndex];
    if (adj1 === adj2 || adj1 === adj3) {
        
    }
    return `You are ${adj1}, ${adj2}, and ${adj3}. Have a good day <3!`
};

console.log(generator(adj));

