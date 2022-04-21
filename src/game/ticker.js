let startTime = Date.now()

const tickers = []
function handleTicker() {
  tickers.forEach(ticker => ticker(Date.now() - startTime))
  startTime = Date.now()
  requestAnimationFrame(handleTicker)
}

requestAnimationFrame(handleTicker)

export function addTicker(ticker) {
  tickers.push(ticker)
}
