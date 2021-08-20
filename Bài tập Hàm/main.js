/**-----Bài 1---- */
document.getElementById("btndiemchuan").onclick = function Diemchuan() {
    var Diemchuan = document.getElementById("inputdiemchuan").value;
    var Diem1 = Number(document.getElementById("inputdiem1").value);
    var Diem2 = Number(document.getElementById("inputdiem2").value);
    var Diem3 = Number(document.getElementById("inputdiem3").value);
    var khuvuc = Number(document.getElementById("khuvuc").value);
    var doituong = Number(document.getElementById("doituong").value);
    console.log(Diemchuan, Diem1, Diem2, Diem3, khuvuc, doituong);
    var total = 0;
    total = Diem1 + Diem2 + Diem3 + khuvuc + doituong;
    console.log(total);
    if (Diemchuan <= total) {
        document.getElementById("txtdiemchuan").innerHTML = "Bạn Đã Đậu Với Số Điểm là : " + total;
    } else {
        document.getElementById("txtdiemchuan").innerHTML = "Điểm Của Bạn Là : " + total + "  .Bạn Đã Rớt Hẹn Bạn Năm Sau ";


    };
    if (Diem1 == 0 || Diem2 == 0 || Diem3 == 0) {
        document.getElementById("txtdiemchuan").innerHTML = "Bạn có Điểm Liệt Hẹn Bạn Năm Sau";
    };

}
/**-----Bài 2---- */
document.getElementById("btndien").onclick = function KW() {
    var hoten = document.getElementById("input1").value;
    var KW = Number(document.getElementById("inputkw").value);
    var kw1 = 500;
    var kw2 = 650;
    var kw3 = 850;
    var kw4 = 1300;
    var total = 0;
    if (KW >= 0 && KW <= 50) {
        total = KW * kw1;
    } else if (KW > 50 && KW <= 100) {
        total = 50 * kw1 + (KW - 50) * kw2;
    } else if (KW > 100 && KW <= 150) {

        total = 50 * kw1 + 50 * kw2 + (KW - 100) * kw3;
    } else if (KW > 150) {
        total = 50 * kw1 + 50 * kw2 + 50 * kw3 + (KW - 150) * kw4;

    } else {
        document.getElementById("txtdien").innerHTML = "Sai Nhập lại";
    }
    document.getElementById("txtdien").innerHTML = "Họ Tên là : " + hoten + " .Số Tiền Tháng Này là " + total;

}
/**-----Bài 3---- */
document.getElementById("btnthunhap").onclick = function Thuethunhap() {
    var hoten = document.getElementById("input2").value;
    var tongthunhap = Number(document.getElementById("inputthunhap").value);
    var songuoi = Number(document.getElementById("inputnguoi").value);
    var tien1 = 4e+6;
    var tien2 = 16e+5;
    var total = tongthunhap - tien1 - songuoi * tien2;
    var totalthue = 0;


    if (total >= 0 && total <= 60e+6) {
        totalthue = total * 0.05;
    } else if (total > 60e+6 && total <= 120e+6) {
        totalthue = total * 0.1;

    } else if (total > 120e+6 && total <= 210e+6) {

        totalthue = total * 0.15;

    } else if (total > 210e+6 && total <= 384e+6) {
        totalthue = total * 0.2;


    } else if (total > 384e+6 && total <= 624e+6) {
        totalthue = total * 0.25;

    } else if (total > 624e+6 && total <= 960e+6) {
        totalthue = total * 0.3;

    } else if (total > 960e+6) {
        totalthue = total * 0.35;

    } else {
        document.getElementById("txtthunhap").innerHTML = "Sai Nhập lại";

    }
    totalthue = totalthue.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    console.log(totalthue);
    document.getElementById("txtthunhap").innerHTML = "Họ Tên là : " + hoten + "</br>" + " Số Tiền Thuế  là " + totalthue;

}
/**-----Bài 4---- */
var hoadon1 = 4.5;
var dichvu1 = 20.5;
var thue1 = 7.5;
var hoadon2 = 15;
var dichvu2 = 75;
var thue2 = 20;
document.getElementById("btnphicap").onclick = function TienCap() {
    var khuvucc = document.getElementById("khuvuc12").value;
    var makhachhang = document.getElementById("inputkhachhang").value;

    var kenhcaocap = document.getElementById("inputtcaocap").value;
    var ketnoi = document.getElementById("inputketnoi").value;
    var total = 0;
    // console.log(khuvucc);
    switch (khuvucc) {
        case "1":
            total = hoadon1 + dichvu1 + (thue1 * kenhcaocap);
            break;
        case "2":
            total = hoadon2 + dichvu2 + (thue2 * kenhcaocap) + thue2 * (ketnoi - 10);
            break;
        default:

    }
    console.log(total);
    document.getElementById("txtthunhap1").innerHTML =makhachhang + "Tiền Cáp là " + total;



}
document.getElementById("khuvuc12").onchange = function Ketnoi() {
    
    var khuvuc = document.getElementById("khuvuc12").value;
   
    // console.log(khuvuc);

    if (khuvuc == 1) {

        document.getElementById("inputketnoi").style.display = "none";
       
    } else if(khuvuc == 2){
        document.getElementById("inputketnoi").style.display = "block";

    }else{
        document.getElementById("inputketnoi").style.display = "none";

    }
}





