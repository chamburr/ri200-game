<template>
  <div>
    <BCard class="bg-white shadow">
      <template #header>
        <div class="py-2">
          <p class="h4 mb-0">人物匹配</p>
        </div>
      </template>
      <template #default>
        <div class="py-2">
          <img class="result-image rounded-circle mb-4" :src="image" alt="" />
          <h1 class="h4 mb-2 font-weight-normal">你和{{ info.name }}最相近！</h1>
          <p>匹配度：{{ result.value }}%</p>
          <p>{{ info.description }}{{ description }}</p>
        </div>
      </template>
      <template #footer>
        <div class="d-flex justify-content-end py-2">
          <BButton class="px-4 mr-3" variant="primary" pill>分享</BButton>
          <BButton class="px-4" variant="outline-primary" pill @click="restart()">重新开始</BButton>
        </div>
      </template>
    </BCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import confetti from 'canvas-confetti'
import characters from '~/assets/data/characters.json'

export default {
  data() {
    return {
      info: {},
      result: {}
    }
  },
  middleware({ store, redirect }) {
    if (store.getters['isEmpty']) redirect('/')
  },
  computed: {
    completed() {
      return Object.keys(this.result).length !== 0
    },
    description() {
      if (!this.completed) return
      let description = this.result.questions
        .map(element => element.description.replace('__', element.response))
        .join('、')
      return `你和${this.info.name}一样${description}。`
    },
    image() {
      if (!this.completed) return
      return require(`~/assets/images/${this.info.image}`)
    },
    ...mapGetters({
      questions: 'getQuestions',
      response: 'getResponse'
    })
  },
  created() {
    let results = {}
    let maximum = 0
    for (let index in this.questions) {
      for (let element of this.questions[index].options[this.response[index]].value) {
        results[element] = results[element] || { value: 0, questions: [] }
        results[element].value++
        results[element].questions.push({
          response: this.questions[index].options[this.response[index]].name,
          ...this.questions[index]
        })
      }
    }
    for (let key in results) {
      results[key].value = Math.round(
        (results[key].value /
          this.questions.reduce(
            (acc, value) =>
              value.options
                .map(element => element.value)
                .flat()
                .includes(key)
                ? acc + 1
                : acc,
            0
          )) *
          100
      )
      if (results[key].value > maximum) {
        maximum = results[key].value
      }
    }
    results = Object.entries(results).filter(([_, value]) => value.value >= maximum)
    let result = results[Math.floor(Math.random() * results.length)]
    this.info = characters.find(element => element.name === result[0])
    this.result = result[1]
    this.result.value = Math.min(
      100,
      Math.floor(this.result.value * (1 + Math.random() * (1 - this.result.value / 100)))
    )
  },
  mounted() {
    setTimeout(() => {
      confetti({
        particleCount: 150,
        angle: 315,
        spread: 100,
        origin: { x: -0.1, y: -0.1 }
      })
      confetti({
        particleCount: 150,
        angle: 225,
        spread: 100,
        origin: { x: 1.1, y: -0.1 }
      })
    }, 250)
  },
  methods: {
    restart() {
      this.$router.push('/game')
    }
  }
}
</script>

<style lang="scss" scoped>
.result-image {
  width: 150px;
}
</style>
