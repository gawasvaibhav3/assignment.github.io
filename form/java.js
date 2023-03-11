function submit()
        {

            var fname = document.getElementById('fname').value;
            var lname = document.getElementById('lname').value;
            var ele = document.getElementsByName('gender');
            var dob = document.getElementById('dob').value;
            var email = document.getElementById('email').value;
            var sem = document.getElementById('s1').value;
            var mark = document.getElementsByName('cb');
            var box='';

            var table1 = document.getElementById("myTable");
            var new_row_unique_id = email;

            /*for Duplicate element checking*/
            for (var i = 1; i < table1.rows.length; i++) 
            { 
                var row = table1.rows[i];
                var unique_id = row.cells[4].innerHTML; 
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

            for(var checkbox of mark)
            {
                if(checkbox.checked)
                {
                
                    var box = box + checkbox.value + '  ';
                }
            }

            var table = document.getElementsByTagName('table') [0];
            var newRow = table.insertRow();

            var cel0 = newRow.insertCell(0);
            var cel1 = newRow.insertCell(1);
            var cel2 = newRow.insertCell(2);
            var cel3 = newRow.insertCell(3);
            var cel4 = newRow.insertCell(4);
            var cel5 = newRow.insertCell(5);
            var cel6 = newRow.insertCell(6);
                
            cel0.innerHTML = fname;
            cel1.innerHTML = lname;
            cel2.innerHTML = radio;
            cel3.innerHTML = dob;
            cel4.innerHTML = email
            cel5.innerHTML = sem;
            cel6.innerHTML = box;
 
        }