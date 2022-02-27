let button = document.querySelector(".ok")
button.addEventListener("click", (e) => {
    let link = document.querySelector(".link").value
    if (link.length > 0){
    document.location.href = `&quot;brawlstars://webview?page=${link};popup_title=TG: @prostobrawl2 &quot;;`
    }
})