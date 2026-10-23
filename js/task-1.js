// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//   Порахує й виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
//   Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль 
// текст заголовка елемента (тегу <h2>) і кількість елементів у категорії 
// (усіх <li>, вкладених у нього)

const list = document.querySelectorAll(".item");

console.log(`Number of categories: ${list.length}`)

list.forEach((element) => {
    const title = element.querySelector("h2").textContent
    const ullist = element.querySelector("ul")
    const items = ullist.querySelectorAll("li").length
    
    console.log(`Category: ${title}`)
    console.log(`Elements: ${items}`);
})


