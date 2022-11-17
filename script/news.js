export const news = [
    {
        author:	"Mitchell Clark",
        title:	"As FTX sinks, other crypto exchanges are showing their coins",
        description:	"Crypto.com, Binance, and Coinbase are among the cryptocurrency exchanges trying to prove to customers that their funds are safe following the collapse of FTX.",
        url:	"https://www.theverge.com/2022/11/11/23453560/ftx-bankruptcy-coinbase-binance-crypto-proof-of-reserves",
        urlToImage:	"https://cdn.vox-cdn,.com/thumbor/wPO2usOSxctI84haZv11M8ErP_0=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn,.com/uploads/chorus_asset/file/23587767/acastro_220524_STK428_0003.jpg",
        publishedAt:	"2022-11`fetch(-11T21:31:19Z",
        content:	"You say you have my money? Prove it. | Illustration by Alex Castro / The Verge\r\n\n \n\n As FTX, formerly the world’s third-largest cryptocurrency exchange by volume, files for bankruptcy and halts withd… [+5867 chars]",
        src:"CNN"
    }
]

export function getNews(url,params){
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join("&");
    return fetch(`${url}${queryString}`);
}