const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const moviesRoute = require("./routes/moviesRoutes")

app.use(cors())

const router = express.Router()
app.use('/api/v1', router)

router.get('/popularMovies', moviesRoute.popularMovies)
router.get('/popularShows', moviesRoute.popularTVshows)

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})