const list = document.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`);

list.forEach((element) => {
    const title = element.querySelector("h2").textContent;
    const ullist = element.querySelector("ul");
    const items = ullist.querySelectorAll("li").length;
    
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items}`);
})


