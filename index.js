//touchstart событие при касании элемента пальцем

//touchmove при движении пальца по элементу

//touchend

//touchenter заход пальца на элемент

//touchleave палец ушел за пределы элемента
//touchcanel при серфинге палец вышел за пределы браузера


window.addEventListener('DOMContentLoaded', ()=> {
const box = document.querySelector(".box");
 //Означает, что все элементы дома уже прогрузились
box.addEventListener('touchstart',(e) => {
    e.preventDefault();
    console.log('Start');
    console.log(e.targetTouches);
});
//     // box.addEventListener('touchmove',(e) => {
//     //     e.preventDefault();
//     // console.log('Start');
//
//     box.addEventListener('touchend',(e) => {
//         e.preventDefault();
//     console.log('end');
// });
});

//touches выдаёт весь список пальцев, которые взаимодействуют с экраном

//targetTouches аналогично касаниям, но фильтруется только информация о касаниях пальцев, которые начались в пределах одного и того же узла.

//changedTouches список пальцев, которые участвуют в текущем событии