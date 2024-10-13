const { default: api } = require("./api")

const getBanner = async () => {
  try {
    const { data } = await api.get("/home?populate[banner][populate]=image&populate[banner][populate]=button")

    return data
  } catch (error) {
    console.log(error)
  }
}

export { getBanner }