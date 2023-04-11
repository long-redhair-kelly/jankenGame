<script lang="ts">
export default {
  data() {
    return {
      handArray: ["ぐー", "ちょき", "ぱー"],
      myHand: "",
      enemyHand: "",
      result: "",
      resultColor: "",
      win: 0,
      lose: 0,
      draw: 0,
      turn: 0,
    };
  },
  methods: {
    judge(myHand: string) {
      const number = Math.floor(Math.random() * this.handArray.length);
      this.enemyHand = this.handArray[number];
      this.myHand = myHand;

      // 勝ちのパターン
      if (
        (myHand === "ぐー" && this.enemyHand === "ちょき") ||
        (myHand === "ちょき" && this.enemyHand === "ぱー") ||
        (myHand === "ぱー" && this.enemyHand === "ぐー")
      ) {
        this.win++;
        this.result = "You Win!!";
        this.resultColor = "win";
      } else if (
        (myHand === "ぐー" && this.enemyHand === "ぱー") ||
        (myHand === "ちょき" && this.enemyHand === "ぐー") ||
        (myHand === "ぱー" && this.enemyHand === "ちょき")
      ) {
        this.lose++;
        this.result = "You lose...";
        this.resultColor = "lose";
      } else {
        this.draw++;
        this.result = "You draw.";
        this.resultColor = "draw";
      }
      this.turn++;
    },
  },
  computed: {
    colorChange() {
      return this.resultColor;
    },
  },
};
</script>

<template>
  <div class="wrap">
    <h2>じゃんけん</h2>
    <p>{{ turn }}回目のじゃんけん</p>
    <p>あなたの手を選んでください</p>
    <div class="judgeWrapper">
      <button @click="judge('ぐー')">ぐー</button>
      <button @click="judge('ちょき')">ちょき</button>
      <button @click="judge('ぱー')">ぱー</button>
    </div>
    <div>
      <p>あなたの手は: {{ myHand }} でした</p>
      <p>相手の手は: {{ enemyHand }} でした</p>
    </div>
    <div>
      <p>
        結果: <span :class="colorChange">{{ result }}</span>
      </p>
      <p>勝ち数: {{ win }}</p>
      <p>負け数: {{ lose }}</p>
      <p>引き分け数: {{ draw }}</p>
    </div>
  </div>
</template>
