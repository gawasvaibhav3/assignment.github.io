function submit()
        {

            
            // Access the div by its id
            const div1 = document.getElementById("cell1");
            const div2 = document.getElementById("cell2");
            const div3 = document.getElementById("cell3");
            const div4 = document.getElementById("cell4");
            const div5 = document.getElementById("cell5");
            const div6 = document.getElementById("cell6");
            const div7 = document.getElementById("cell7");
            box='';

            
            
            var cel1=document.getElementById("fname").value;
            var cel2=document.getElementById("lname").value;
            var ele=document.getElementsByName("gender");
            var cel4=document.getElementById("dob").value;
            var cel5=document.getElementById("email").value;
            var cel6=document.getElementById("s1").value;
            var cel7=document.getElementsByName("cb");

            /*for Duplicate element checking*/
            var table1 = document.getElementById("cell5");
            var new_row_unique_id = cel5;
            row=table1.childNodes

            for (var i = 0; i < row.length; i++) 
            { 
                var unique_id = row[i].innerHTML;
            }

            if (unique_id == new_row_unique_id)
            {
                alert("User already exist with same email!!! Try another one");
                return false;   
            }


            for(i = 0; i < ele.length; i++) 
            {
                if(ele[i].checked)
                var radio = ele[i].value;
            }

            for(var checkbox of cel7)
            {
                if(checkbox.checked)
                {
                    var box = box + checkbox.value + '  ';
                }
            }

            

            // Create a new p element and set its content
            const new1 = document.createElement("p");
            const new2 = document.createElement("p");
            const new3 = document.createElement("p");
            const new4 = document.createElement("p");
            const new5 = document.createElement("p");
            const new6 = document.createElement("p");
            const new7 = document.createElement("p");

            
            new1.innerHTML = cel1;
            new2.innerHTML = cel2;
            new3.innerHTML = radio;
            new4.innerHTML = cel4;
            new5.innerHTML = cel5;
            new6.innerHTML = cel6;
            new7.innerHTML = box;

            
            // Append the new p element to the div
            div1.appendChild(new1);  
            div2.appendChild(new2);  
            div3.appendChild(new3);  
            div4.appendChild(new4);  
            div5.appendChild(new5);  
            div6.appendChild(new6);  
            div7.appendChild(new7);  
         
            
        }