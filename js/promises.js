"use strict";

// ( async function () {
//     let url = "https://api.github.com/users/Shawnhardin01/received_events/public"
//     let apikey = MY_API_KEY
//     function getLastCommit(userName, apiKey) {
//         const url = "https://api.github.com/users/Shawnhardin01/received_events/public"
//     }
//     fetch(url,
//         {
//             headers:
//                 {
//                     'Athuorization': `token ${apikey}`
//                 }
//         }).then (function(response) {
//         return response.json();
//     }).then( function(data){
//         return data.filter(function(event) {
//         if(event.type === "Pushevent"
//         )[0].created_at;
//         })
//     });
//
//
//  const lastCommitDate = await  getLastcommit
//  ("Shawnhardin01",
//   MY_API_KEY);
// console.log(lastCommitDate)
//
// })();