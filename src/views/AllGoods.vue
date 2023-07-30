<script>
new Vue({
  el: "#app",
  data: {
    haveData: true,
    good01: {
      編號: 1,
      名稱: "我是基金01",
      價格: 5000,
      手續費率: 0.5,
    },
    good02: {
      編號: 2,
      名稱: "我是基金02",
      價格: 6000,
      手續費率: 0.6,
    },
    good03: {
      編號: 3,
      名稱: "我是基金03",
      價格: 7000,
      手續費率: 0.7,
    },
    allGoods: [good01, good02, good03],
    myGoods: [],
    iHaveGood: false,
  },
  methods: {
    addGood(item) {
      console.log("我是第" + item.編號 + "個");
      if (!myGoods.includes(item)) {
        myGoods.push(item);
      } else {
        console.log("已經放入囉");
      }
    },
    checkIsNotEmpty() {
      if (myGoods.length > 0) {
        console.log("有東西");
        iHaveGood = true;
      } else {
        console.log("沒有東西");
      }
      myGoods.forEach((obj) => {
        console.log(obj.編號);
        showMyItems();
      });
    },
    showMyItems() {
      iHaveGood = true;
    },
  },
});

export default {};
</script>

<template>
  <nav>
    <h2>所有商品</h2>
    <!-- 資料欄位 -->
    <div class="box">
      <div class="r01">編號</div>
      <div class="r04">產品名稱</div>
      <div class="r02">產品價格</div>
      <div class="r02">手續費率</div>
      <div class="r01">選取框</div>
    </div>

    <div v-if="!haveData" class="textCenter">沒有資料</div>

    <div class="box">
      <div class="r01">000</div>
      <div class="r04">產品123</div>
      <div class="r02">5000</div>
      <div class="r02">0.1</div>
      <div class="r01">555</div>
    </div>
    <!-- <div v-for="item in allGoods" class="outer_box box">
      <div class="r01">{{ item.編號 }}</div>
      <div class="r04">{{ item.名稱 }}</div>
      <div class="r02">{{ item.價格 }}</div>
      <div class="r02">{{ item.手續費率 }}</div>
      <div class="r01 btn" @click="addGood(item)">選取</div>
    </div> -->

    <div class="textCenter" @click="checkIsNotEmpty">確認購買</div>

    <div class="textCenter" @click="showMyItems">顯示我想要的</div>
  </nav>
</template>

<style>
nav {
  /* display: flex; */
  background-color: rgb(81, 229, 180);
}
.outer_box {
  margin: auto;
  width: 70vw;
  display: flex;
}
.box {
  width: 80vw;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
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
.textCenter {
  text-align: center;
}
.btn {
  border-radius: 25px;
  background-color: rgb(77, 177, 167);
  text-align: center;
  color: #fff;
}
</style>
