
    function getRandomNum(n) {
        var n;
        return Math.floor(Math.random() * n)
    }

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function createTable(row, col) {
        var row=parseInt(row);
        var col=parseInt(col);
        var warp = document.getElementById('warp');
        warp.innerHTML="";


        if((row<1||row>100)||(col<1||col>100)){
            alert("请输入正确的数值：行列数范围【1-100】");
            return false;
        }

        var table = document.createElement("table");

        for (var i = 1; i <= row; i++) {
            //创建tr
            var tr = document.createElement("tr");
            for (var j = 1; j <= col; j++) {
                //创建td
                var td = document.createElement("td");
                // td.innerHTML = i*j;
                td.innerHTML = getRandomNum(10);
                td.style.backgroundColor=getRandomColor();
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        warp.appendChild(table);
    }

    console.log(getRandomNum(10));
    console.log(getRandomColor());
    // createTable(2,10)

