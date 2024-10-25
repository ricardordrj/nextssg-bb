const { default: api } = require("./api")

const populateSEO = 'populate[SEO][populate]=*'
const populateImages = 'populate[BannerPrincipal][populate]=Imagem'
const populateBannerButton = 'populate[BannerPrincipal][populate]=Botao'

const getBanner = async () => {
  try {
    const { data } = await api.get(`/pagina-inicial?${populateSEO}&${populateImages}&${populateBannerButton}`)


    return data
  } catch (error) {
    console.log(error)
  }
}

export { getBanner }