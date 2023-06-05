
      let a, b, c, d, p1, p2, p3, p4, x_1, x_2, x_3;
      const e = 2.71828;

      function calculateCSV() {
        document.getElementById("result1").innerHTML = p1;
        document.getElementById("result2").innerHTML = p2;
        document.getElementById("result3").innerHTML = p3;
        document.getElementById("result4").innerHTML = p4;
      }
      function createScatterPlot(xData, yData) {
        var trace = {
          x: xData,
          y: yData,
          mode: 'markers',
          type: 'scatter'
        };
  
        var data = [trace];
  
        var layout = {
          title: 'Scatter Plot of Forest_Fire_Prediction'
        };
  
        Plotly.newPlot('plot', data, layout);
      }
      function printResult() {
        let printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Result</title></head><body>');
        printWindow.document.write('<h1>Result</h1>');
        printWindow.document.write(document.getElementById('result').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
  
      function printScatterPlot() {
        let printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Scatter Plot</title></head><body>');
        printWindow.document.write('<h1>Scatter Plot</h1>');
        printWindow.document.write(document.getElementById('plot').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      }
      window.onload = () => {
        //FILE READER + HTML ELEMENTS
        var reader = new FileReader();
        var picker = document.getElementById("picker");
        var table = document.getElementById("table");
        var result = document.getElementById("result");

/*         var table1 = document.getElementById("table1");
 */

        //READ CSV ON FILE PICKER
        picker.onchange = () => reader.readAsText(picker.files[0]);
        
        //READ THE CSV FILE & GENERATE HTML
        reader.onload = () => {
          let csv = reader.result;

          // CLEAR HTML TABLE
          table.innerHTML = "";

          //SPLIT INTO ROWS
          let rows = csv.split("\r\n");
          //   console.log(rows);

         
          function calculateCsvData() {
            let x_0,x_1, x_2, x_3;
            let xData = [];
            let yData = [];
            let counter = 0;
            for (let i = 0; i < rows.length; i++) {
              x_0 = rows[i].split(",")[0];
              x_1 = rows[i].split(",")[1];
              x_2 = rows[i].split(",")[2];
              x_3 = rows[i].split(",")[3];
              counter++;
              if (x_1 && x_2) {
                a = 5.8;
                b = 0.02;
                c = -7.9;
                d = 0;
                p1 = 1 / (1 + Math.exp(-(a + b * x_1 + c * x_2)));
                result.innerHTML += `${counter}: ${p1}<br>`;
                xData.push(x_0);
                yData.push(p1);
              } else if (x_2 && x_3) {
                a = 4.5;
                b = 1.0;
                c = -6.4;
                d = -6.8;
                p2 = 1 / (1 + Math.exp(-(a + c * x_2 + d * x_3)));
                result.innerHTML += `${counter}: ${p2}<br>`;
                xData.push(x_0);
                yData.push(p2);
              } else if (x_1 && x_3) {
                a = 0.7;
                b = 2.2;
                c = -0.02;
                d = -6.8;
                p3 = 1 / (1 + Math.exp(-(a + b * x_1 + d * x_3)));
                result.innerHTML += `${counter}: ${p3}<br>`;
                xData.push(x_0);
                yData.push(p3);
              } else if (x_1 && x_2 && x_3) {
                a = 4.6;
                b = 0.96;
                c = 0.02;
                d = -6.8;
                p4 = 1 / (1 + Math.exp(-(a + b * x_1 + c * x_2 + d * x_3)));
                result.innerHTML += `${counter}: ${p4}<br>`;
                xData.push(x_0);
                yData.push(p4);
              }
            }
            createScatterPlot(xData, yData);
          }
          calculateCsvData();
        };
      };

