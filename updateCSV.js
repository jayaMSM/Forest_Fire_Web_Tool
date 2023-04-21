
      let a, b, c, d, p1, p2, p3, p4, x_1, x_2, x_3;
      const e = 2.71828;

      function calculateCSV() {
        document.getElementById("result1").innerHTML = p1;
        document.getElementById("result2").innerHTML = p2;
        document.getElementById("result3").innerHTML = p3;
        document.getElementById("result4").innerHTML = p4;
      }
      window.onload = () => {
        //FILE READER + HTML ELEMENTS
        var reader = new FileReader();
        var picker = document.getElementById("picker");
        var table = document.getElementById("table");
/*         var table1 = document.getElementById("table1");
 */

        //READ CSV ON FILE PICKER
        picker.onchange = () => reader.readAsText(picker.files[0]);

        /* 
        // (C) READ CSV & GENERATE TABLE
            reader.onloadend = () => {
            table.innerHTML = "";
            for (let row of CSV.parse(reader.result)) {
            let tr = table.insertRow();
              for (let col of row) {
              let td = tr.insertCell();
              td.innerHTML = col;
          }
          }
        }        
        */
        
        //READ THE CSV FILE & GENERATE HTML
        reader.onload = () => {
          let csv = reader.result;

          // CLEAR HTML TABLE
          table.innerHTML = "";

          //SPLIT INTO ROWS
          let rows = csv.split("\r\n");
          //   console.log(rows);

         
          function calculateCsvData() {
            let x_1, x_2, x_3;
            let result = document.getElementById("result");
            let counter = 0;
            for (let i = 1; i < rows.length; i++) {
              x_1 = rows[i].split(",")[1];
              x_2 = rows[i].split(",")[2];
              x_3 = rows[i].split(",")[3];
              counter++;
              if (x_1 && x_2) {
                a = 5.8;
                b = 0.02;
                c = -7.9;
                d = 0;
                p1 = 1 / (1 + e ^ -(a + b * x_1 + c * x_2 ));
                result.innerHTML += `${counter}: ${p1}<br>`;
              } else if (x_2 && x_3) {
                a = 4.5;
                b = 1.0;
                c = -6.4;
                d = -6.8;
                p2 = 1 / (1 + e ^ -(a + c * x_2 + d * x_3));
                result.innerHTML += `${counter}: ${p2}<br>`;
              } else if (x_1 && x_3) {
                a = 0.7;
                b = 2.2;
                c = -0.02;
                d = -6.8;
                p3 = 1 / (1 + e ^ -(a + b * x_1 + d * x_3));
                result.innerHTML += `${counter}: ${p3}<br>`;
              } else if (x_1 && x_2 && x_3) {
                a = 4.6;
                b = 0.96;
                c = 0.02;
                d = -6.8;
                p4 = 1 / (1 + e ^ -(a + b * x_1 + c * x_2 + d * x_3));
                result.innerHTML += `${counter}: ${p4}<br>`;
              }
            }
          }
          calculateCsvData();
        };
      };