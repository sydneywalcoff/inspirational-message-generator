const adj = ['smart', 'kind', 'important', 'beautiful', 'intelligent', 'powerful', 'empowered', 'compassionate', 'nice', 'articulate', 'hard-working', 'innovative', 'lovely']
const generator = arr => {
    let adj1 = adj[Math.floor(Math.random() * adj.length)];
    let adj2 = adj[Math.floor(Math.random() * adj.length)];
    let adj3 = adj[Math.floor(Math.random() * adj.length)];
    if (adj2 === adj1 || adj2 === adj3) {
        let randIndex = Math.floor(Math.random() * adj.length);
        adj2 = adj[randIndex];
    } else if (adj3 === adj1 || adj3 === adj2) {
        let randIndex = Math.floor(Math.random() * adj.length);
        adj3 = adj[randIndex];
    };
    return `You are ${adj1}, ${adj2}, and ${adj3}. Have a good day <3!`
};

console.log(generator(adj));


