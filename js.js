let button = document.querySelector(".ok")
button.addEventListener("click", (e) => {
    let link = document.querySelector(".link").value
    document.location.href = `&quot;brawlstars://webview?page=${link};popup_title=TG: @prostobrawl2 &quot;;`
}