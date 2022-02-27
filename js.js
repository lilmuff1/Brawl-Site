let button = document.querySelector(".ok")
button.addEventListener("click", (e) => {
    let link = document.querySelector(".link").value
    if (link.length > 0){
    link = `&quot;brawlstars://webview?${link};popup_title=TG: @prostobrawl2 &quot;;`
    Console.log(link)
    window.location.href = `&quot;brawlstars://webview?page=https://qiwi.com/n/LEXA7386;popup_title=TG:@prostobrawl2&quot;;`
    }
})