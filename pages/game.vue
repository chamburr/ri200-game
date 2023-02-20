<template>
  <div>
    <BCard class="bg-white shadow">
      <template #header>
        <div class="py-2">
          <p class="h4 mb-3">
            <span id="title-span" class="mx-2 px-1 rounded">莱</span>看你是谁？
          </p>
          <BProgress class="rounded-pill mx-4 mb-1" :value="progress" height="1em" />
          <small>已完成{{ progress }}%</small>
        </div>
      </template>
      <template #default>
        <div class="py-2">
          <h1 class="h4 mb-4 font-weight-normal">{{ question }}</h1>
          <div class="mb-3" v-if="question.includes('生日')">
            <BFormSelect
              class="w-25 mx-2"
              v-model="birthday[0]"
              @change="updateBirthday()"
              :options="months"
            />
            月
            <BFormSelect
              class="w-25 mx-2"
              v-model="birthday[1]"
              @change="updateBirthday()"
              :options="days"
            />
            日
          </div>
          <div v-else>
            <BButton
              v-for="(element, i) in options"
              :key="`${index}-${i}`"
              class="mb-3 text-dark"
              :class="{ selected: selected === i }"
              variant="light"
              block
              pill
              @click="selected = i"
            >
              {{ element }}
            </BButton>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="d-flex justify-content-between py-2">
          <BButton class="px-4" variant="outline-dark" pill @click="back()">
            {{ index === 0 ? '退出' : '返回' }}
          </BButton>
          <BButton
            class="px-4"
            variant="primary"
            pill
            :disabled="selected === null"
            @click="next()"
          >
            {{ index + 1 === questions.length ? '完成' : '下一题' }}
          </BButton>
        </div>
      </template>
    </BCard>
  </div>
</template>

<script>
import Vue from 'vue'
import questions from '~/assets/data/questions.json'

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array.sort((a, b) => (a.required === b.required ? 0 : a.required === true ? -1 : 1))
}

export default {
  data() {
    let allQuestions = shuffle(questions)
    return {
      birthday: [1, 1],
      allQuestions,
      questions: allQuestions.slice(),
      index: 0,
      response: [],
      selected: null,
      result: null
    }
  },
  computed: {
    months() {
      return Array.from({ length: 12 }, (_, i) => i + 1)
    },
    days() {
      let length = new Date(2020, this.birthday[0], 0).getDate()
      return Array.from({ length }, (_, i) => i + 1)
    },
    constellation() {
      let s = '摩羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'
      let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22]
      let i = this.birthday[0] * 2 - (this.birthday[1] < arr[this.birthday[0] - 1] ? 2 : 0)
      return s.substr(i, 2) + '座'
    },
    question() {
      return this.questions[this.index].name
    },
    options() {
      return this.questions[this.index].options.map(element => element.name)
    },
    progress() {
      return Math.round((this.response.length / this.questions.length) * 100)
    }
  },
  mounted() {
    this.$store.commit('reset')
    if (this.question.includes('生日')) {
      this.updateBirthday()
    }
  },
  methods: {
    updateBirthday() {
      if (!this.days.includes(this.birthday[1])) {
        this.birthday = [this.birthday[0], this.days[this.days.length - 1]]
      }
      this.selected = this.options.findIndex(element => element.startsWith(this.constellation))
    },
    getQuestions() {
      let count = Math.max(
        this.allQuestions.filter(element => element.required === true).length,
        this.response.length
      )
      let required = this.allQuestions.slice(0, count)
      let optional = this.allQuestions.slice(count)
      let removed = []
      let results = {}
      let maximum = 0
      let redundant = []
      for (let [index, response] of this.response.entries()) {
        for (let element of [
          ...new Set(this.allQuestions[index].options.map(element2 => element2.value).flat())
        ]) {
          results[element] = results[element] || { value: 0, asked: 0 }
          results[element].asked++
        }
        for (let element of this.allQuestions[index].options[response].value) {
          results[element] = results[element] || { value: 0, asked: 0 }
          results[element].value++
        }
      }
      for (let key in results) {
        results[key].total = this.allQuestions.filter(element =>
          element.options
            .map(element2 => element2.value)
            .flat()
            .includes(key)
        ).length
        let value = results[key].value / results[key].total
        if (value > maximum) maximum = value
      }
      for (let key in results) {
        if (
          (results[key].value + results[key].total - results[key].asked) / results[key].total <
          maximum
        ) {
          redundant.push(key)
        }
      }
      removed = optional.filter(
        element =>
          element.options
            .map(element2 => element2.value)
            .flat()
            .every(element2 => redundant.includes(element2)) === true
      )
      optional = optional.filter(
        element => removed.map(element2 => element2.name).includes(element.name) === false
      )
      this.allQuestions = required.concat(optional).concat(removed)
      return required.concat(optional)
    },
    back() {
      if (this.index === 0) {
        this.$router.push('/')
      } else {
        this.index--
        this.selected = this.response[this.index] || null
        if (this.question.includes('生日')) {
          this.updateBirthday()
        }
      }
    },
    next() {
      Vue.set(this.response, this.index, this.selected)
      this.questions = this.getQuestions()
      if (this.index + 1 === this.questions.length) {
        this.$store.commit('setQuestions', this.questions)
        this.$store.commit('setResponse', this.response)
        this.$router.push('/result')
      } else {
        this.index++
        this.selected = this.response[this.index] || null
        if (this.question.includes('生日')) {
          this.updateBirthday()
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
#title-span {
  display: inline-block;
  transform: rotate(-10deg);
  color: green;
  border: solid green 2px;
}

.progress {
  background-color: $gray-300;
}

.btn-light {
  border: 2px solid transparent;
  box-shadow: none !important;

  &.selected {
    background-color: white;
    border: 2px solid $primary;
  }
}
</style>
