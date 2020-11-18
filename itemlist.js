let data=
{
    itemList:[
        {
            id:'1',
            itemName:'茶裏王',
            imgUrl:'./pic/s01.png',
            price:'25'
        },
        {
            id:'2',
            itemName:'珍珠奶茶',
            imgUrl:'./pic/s02.png',
            price:'35'
        },
    ]
}

let vm = new Vue({
    el:"app",
    data:data
})