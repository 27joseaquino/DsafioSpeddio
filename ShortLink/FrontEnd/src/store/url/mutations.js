export function setUrlRankingMutation(state, urls) {
    state.urls = urls;
}
export function setShortUrlMutation(state, short) {
    state.shortUrl.short = short;
    state.shortUrl.isUrl = true;
    console.log("mutation", state.shortUrl);
}