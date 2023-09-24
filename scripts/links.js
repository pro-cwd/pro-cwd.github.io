const baseURL = "https://pro-cwd.github.io/wdd230/";
const linksURL = "https://pro-cwd.github.io/wdd230/data/links.json";
const links = document.querySelector('#links');

async function getLinksJson() {
  const request = await fetch(linksURL);
  const response = await request.json();

  return response;
}


async function main () {
  const links = await getLinksJson();
  const weeks = links.weeks;

  let template = '';

  weeks.forEach(week => {
    let templateLinks = "";
    week.links.forEach(link => {
      templateLinks += `<a href="${link.url}">${link.title}</a>`
    })

    template += `<li><h4><strong>${week.week}:</strong></h4>${templateLinks}</li>`
  })

  document.querySelector('#links').innerHTML = template
}

main();


// async function getLinks(linksURL) {
//     const response = await fetch(linksURL);
//     const data = await response.json();
//     //console.log(data);
//     displayLinks(data);
//   }
  
//   getLinks(linksURL);

//   const displayLinks = (data) => {
//     Object.keys(data).forEach(weeks => {
//       // Create elements to add to the div.cards element
//         let li = document.createElement('li');
//         let anchor = document.createElement('a');
//         let week = document.createElement('h4');
//         let title = document.createElement('h4');
        
//         let liTav = [];
//         // Iterate over each week object in the weeks array
//         for (var i = 0; i < data.weeks.length; i++) {
//           let wee = data.weeks[i];
//           week.textContent = `${wee.week}: `;

//           li.appendChild(week);
//           // Generate the HTML for the links within the week
//           for (var j = 0; j < wee.links.length; j++) {
//             let link = wee.links[j];
//             let lnk = link.url;
            
//             title.textContent = ` ${link.title} |`;
//             anchor.setAttribute('href', lnk);
//             li.appendChild(anchor);
//             anchor.appendChild(title);
//           }
          
//           links.appendChild(li);

//         }
      
//     }); // end of arrow function and forEach loop
//   }



  // let icon = data.weeks[0].links[0].url;

  // week.textContent = `${data.weeks[0].week}: `;
  // title.textContent = ` ${data.weeks[0].links[0].title}: |`;
  // anchor.setAttribute('href', icon);


  // li.appendChild(week);
  // li.appendChild(anchor);
  // anchor.appendChild(title);