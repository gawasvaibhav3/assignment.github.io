
function submit(){
  fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(result => {

          var products = result.products;
          
            var cat = document.getElementById("s1").value;

            if (cat=='s0')
            {
              alert("Please select a category first !!!");
            }
 
              var Table = document.getElementById("data-output");
              Table.innerHTML="";
              
              for (let x=0; x<30; x++)
              {
                var value = products[x];

                if (value["category"]==cat)
                {
                  const tableBody = document.querySelector('#data-output');
                  const row = document.createElement('tr');
                  const cell0 = document.createElement('img');
                  const cell1 = document.createElement('td');
                  const cell2 = document.createElement('td');
                  const cell3 = document.createElement('td');
                  const cell4 = document.createElement('td');
                  const cell5 = document.createElement('img');
                  cell5.setAttribute("id", "img1");
                  const cell6 = document.createElement('img');
                  cell6.setAttribute("id", "img2");

                  const div1 = document.createElement('div1');
                  const div2 = document.createElement('div2');
                  const div3 = document.createElement('div3');
                  const div4 = document.createElement('div4');

                  div1.innerHTML = value["brand"];
                  div2.innerHTML = value["title"];
                  div3.innerHTML = value["price"];
                  div4.innerHTML = value["category"];

                  var src = value["thumbnail"]
                  cell0.src = src;

                  cell1.appendChild(div1);
                  cell2.appendChild(div2);
                  cell3.appendChild(div3);
                  cell4.appendChild(div4);
                  

                  row.appendChild(cell0);
                  row.appendChild(cell1);
                  row.appendChild(cell2);
                  row.appendChild(cell3);
                  row.appendChild(cell4);
                  

                  tableBody.appendChild(row);   
                  
                  for (let y=0; y<2; y++)
                  {
                    var src1 = (value["images"][y]);
                    var src2 = (value["images"][y+1]);
                    cell5.src=src1;
                    cell6.src=src2;
                    row.appendChild(cell5);
                    row.appendChild(cell6);
                    tableBody.appendChild(row); 

                    console.log(src1)
 
                  }
                }
              }   
      },
      error => {
        console.log(error);
      }
      );
}





