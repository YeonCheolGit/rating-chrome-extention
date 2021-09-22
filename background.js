// 새 탭을 켰을 때
// chrome.tabs.onActivated.addListener(function(activeInfo) {
//     chrome.tabs.query({active: true, currentWindow: true}, tabs => {
//         let newTabUrl = tabs[0].url;
//         console.log("현재 url: " + newTabUrl);
//         activeInfo = newTabUrl;
//
//         fetch('http://localhost:3000/url', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 url: newTabUrl
//             })
//         }).then(function (res) {
//             res.toString();
//             return console.log("newTabUrl 실행")
//         })
//     });
// });

// 현재 탭에서 페이지가 바뀌었을 때 주소 파싱
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     let changedUrl = changeInfo.url;
//     console.log("바뀐 url: " + changedUrl);
//
//     fetch('http://localhost:3000/url', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             url: changedUrl
//         })
//     }).then(function (res) {
//         res.toString();
//         return console.log("changedUrl 실행")
//     })
// });

// 우클릭 시 해당 페이지 주소 파싱
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    let rightClickUrl = info.pageUrl;
    let rightClickRating = info.menuItemId;
    console.log("우클릭 url: " + rightClickUrl);
    console.log("rating: " + rightClickRating);

   fetch('http://localhost:3000/url', {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify({
           url: rightClickUrl,
           rating: rightClickRating
       })
   }).then(function (res) {
       res.toString();
       return console.log("rightClickUrl 실행")
   })
});

// 우클릭 메뉴
chrome.contextMenus.create({
        title: "right click",
        id: "parent",
        contexts: ["all"]
    }
);

chrome.contextMenus.create({
        title: "star",
        id: "star",
        parentId: "parent",
        contexts: ["all"]
    }
);

chrome.contextMenus.create({
        title: "question",
        id: "question",
        parentId: "parent",
        contexts: ["all"]
    }
);


