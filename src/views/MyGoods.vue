<template>
  <nav>
    <h2>我的購買紀錄</h2>
    <div class="myInfoBox">
      <p><span>會員ID: </span><span>u01</span></p>
      <p><span>會員姓名: </span><span>王小明</span></p>
      <p><span>會員信箱: </span><span>123@mail.com</span></p>
      <p><span>帳號: </span><span>u01_123</span></p>
    </div>

    <div class="box">
      <div class="r02">訂單編號</div>
      <div class="r02">扣款帳號</div>
      <div class="r04">產品名稱</div>
      <div class="r02">產品價格</div>
      <div class="r02">手續費率</div>
      <div class="r01">選取框</div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0%;
}
nav {
  background-color: rgb(68, 197, 180);
}
.myInfoBox {
  width: 80vw;
}
.myInfoBox p {
  text-align: left;
}
.box {
  width: 80vw;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
}
.box div {
  margin-top: 2rem;
}
.r01 {
  flex: 1;
}
.r02 {
  flex: 2;
}
.r04 {
  flex: 4;
}
</style>
