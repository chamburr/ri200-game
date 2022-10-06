export const state = () => ({
  questions: [],
  response: []
})

export const mutations = {
  setQuestions(state, questions) {
    state.questions = [...questions]
  },
  setResponse(state, response) {
    state.response = [...response]
  },
  reset(state) {
    state.questions = []
    state.response = []
  }
}

export const getters = {
  getQuestions(state) {
    return state.questions
  },
  getResponse(state) {
    return state.response
  },
  isEmpty(state) {
    return state.questions.length === 0 && state.response.length === 0
  }
}
