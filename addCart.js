
var name, type, tien, mau, style, img, size;
var df = 1;
function getElement() {
	name = document.getElementById("giay").innerHTML;
	type = document.getElementById("type").innerHTML;
	tien = document.getElementById("tien").innerHTML; 
	mau = document.getElementById("tengiay").innerHTML;
	style = document.getElementById("style").innerHTML;
	size = document.getElementById("sizegiay").innerHTML;
	img = document.getElementById("hinhBenefits").src;
}

//function display()
//{
//	for (var i = 0; i < arr.length; i++)
//	{
//		var div = document.createElement("div");
//		div.className="product";
//		// tao the img
//		var img=document.createElement("img");
//		img.src=arr[i].image;
//		// tao the <p>
//		var p=document.createElement("p");
//		p.innerHTML=arr[i].name+"<br>"+arr[i].price+"<br><a href='#' onclick='add("+i+")'>buy</a>"
//		
//		div.appendChild(img);
//		div.appendChild(p);
//		
//		document.body.appendChild(div);
//	}
//}

// hàm này để khởi tạo biến count = 0 trong localStrage;

function khoiTao() {
	if (window.localStorage.getItem("count") == null)
		{
			window.localStorage.setItem("count", 0);
		}
}

function myFind(maCanTim) {
	var c = window.localStorage.getItem("count");
	if (c != null)
		{
			for (var i = 0; i < c; i++)
				{
					var s = window.localStorage.getItem(i);
					if (s != null)
						{	
							var s_con = s.substring(0, s.indexOf(","));
							if (s_con.match(maCanTim) != null)
								return i;
						}
				}
		}
	return -1;
}

// hàm này để thêm 1 sản phẩm vào local Storage

function add() {
	getElement();
	var pos = myFind(name);
	if (pos == -1) // -1 khong tim thay
		{
			var c = window.localStorage.getItem("count");
			window.localStorage.setItem(c, name + "," + type + "," + mau + "," + style + "," + size + "," + tien + "," + img + "," + df);
			
			c++;
			window.localStorage.setItem("count", c);
			window.alert("Added to your cart sucessfully!!!");
		}
	else 
		{
			window.alert("This shoes you have added already. Choose another one!!!");
		}
}

// hàm này để xuất data trog localStorage vào div "d1" của trang chitiet.html

var name1 = name;

function show() {
	var sum = 0;
	var t = "<table>";
	t = t + "<tr>";
	t = t + "<th>Image</th>"
	t = t + "<th>Name</th>";
	t = t + "<th>Type</th>";
	t = t + "<th>Color</th>";
	t = t + "<th>Style</th>";
	t = t + "<th>Size</th>";
	t = t + "<th>Unit price</th>"
	t = t + "<th>Quantity</th>";
	t = t + "<th>Remove</th>";
	t = t + "</tr>";
	
	// lay data trong local
	var c = window.localStorage.getItem("count");
	if (c != null)
		{
			for (var i = 0; i < c; i++)
				{
					var s = window.localStorage.getItem(i);
					if (s != null)
						{
					var mang = s.split(",");
					t = t + "<tr>";
					t = t + "<td>" + "<img src='" + mang[6] + "'</td>";
					t = t + "<td>" + mang[0] + "</td>";
					t = t + "<td>" + mang[1] + "</td>";
					t = t + "<td>" + mang[2] + "</td>";
					t = t + "<td>" + mang[3] + "</td>";
					t = t + "<td>" + mang[4] + "</td>";
					t = t + "<td>" + mang[5] + "</td>";
					t = t + "<td><input type = 'number' min = '1' max = '10' value = '"+ mang[7] +"' onchange = 'capNhap("+i+", this)'></td>";
					t = t + "<td><img id='bin'  src='img/bin_bu.jpg' onclick = 'xoa("+i+")'></td>";
					t = t + "</tr>";
					sum = sum + mang[5] * mang[7];
						}
				}				
		}
			t = t + "</table>";
			t = t + "<p align = 'center'>Total: " + sum + " VND</p>";
	var div = document.getElementById("d1");
	div.innerHTML = t;
		}

// i là vị trí sản phẩm sửa số lượng
// x là the <input type = 'number'>

function capNhap(i,x) {
	var s = window.localStorage.getItem(i);
	var mang = s.split(",");
	mang[7] = x.value;
	window.localStorage.setItem(i, mang[0] + "," + mang[1] + "," + mang[2] + "," + mang[3] + "," + mang[4] + "," + mang[5] + "," + mang[6] + "," + mang[7]);
	show();
}

function xoa (i) {
	window.localStorage.removeItem(i);
	show();
}

function check() {
	var t1 =  document.getElementById("t1");
	var t2 =  document.getElementById("t2");
	if (t1.value.length == 0 || t2.value.length == 0)
		{
			alert("Vui long nhap ten and phone number");
			return false;
		}
	alert("Cam on quy khach da mua hang");
	return true;
}










