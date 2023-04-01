import React, { Component } from 'react'
import NewItems from './NewItems'

export class News extends Component {
  articles= [
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Aaron Gregg",
        "title": "Virgin Orbit to lay off 85 percent of staff amid operational pause - The Washington Post",
        "description": "The rocket company failed to secure enough money from investors to continue funding its operations at the current level.",
        "url": "https://www.washingtonpost.com/technology/2023/03/31/virgin-orbit-layoffs/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ICQJPZWEBMI63AVHNKDVKXAYPA.jpg&w=1440",
        "publishedAt": "2023-03-31T14:26:11Z",
        "content": "Comment on this story\r\nVirgin Orbit, the rocket company spun off from billionaire Richard Bransons spaceflight company, will lay off most of its staff and freeze operations after it failed to raise e… [+2689 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Fox Business"
        },
        "author": "FOX Business",
        "title": "STOCK MARKET NEWS: Fed’s inflation gauge, Virgin Orbit ceases operations, Bed Bath & Beyond spirals - Fox Business",
        "description": "The Federal Reserve’s favorite inflation gauge eases, Virgin Orbit ceasing operations sinking shares, Bed Bath & Beyond’s survival in question, Elon Musk seeks high level China meeting. FOX Business is providing real-time updates on the markets, commodities a…",
        "url": "https://www.foxbusiness.com/live-news/stock-market-news-today-march-31-2023",
        "urlToImage": "https://livenews.foxbusiness.com/images/2023/03/f043b71ce05adfbe0ac0c2637a765034.jpg",
        "publishedAt": "2023-03-31T14:06:36Z",
        "content": "<table><tr><th>Symbol</th><th>Price</th><th>Change</th><th>%Change</th></tr>\r\n<tr><td>DWAC</td><td>$13.06</td><td>-0.03</td><td>-0.23</td></tr><tr><td>PHUN</td><td>$0.64</td><td>-0.02</td><td>-3.46</… [+1288 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CNBC"
        },
        "author": "Morgan Smith",
        "title": "10 in-demand side hustles you can do from home—some can pay as much as $100 an hour - CNBC",
        "description": "The most in-demand remote, part-time gigs employers are are hiring for are in writing, editing and design, according to new research from FlexJobs.",
        "url": "https://www.cnbc.com/2023/03/31/10-in-demand-remote-side-hustlessome-can-pay-as-much-as-100-an-hour.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/107217776-1680186583778-young-woman-working-from-home-talking-2023-03-27-20-27-59-utc.jpg?v=1680271086&w=1920&h=1080",
        "publishedAt": "2023-03-31T13:58:06Z",
        "content": "Remote job opportunities might be dwindling, but there are dozens of side hustles you can do to earn some extra cash without leaving the comfort of your home some of which can pay as much as $100 an … [+3411 chars]"
    },
    {
        "source": {
            "id": "financial-times",
            "name": "Financial Times"
        },
        "author": "Madhumita Murgia, Silvia Sciorilli Borrelli",
        "title": "Italy temporarily bans ChatGPT over privacy concerns - Financial Times",
        "description": "Data protection authority becomes first regulator in world to open investigation into Microsoft-backed OpenAI’s chatbot",
        "url": "https://www.ft.com/content/3ce7ed9d-df95-4f5f-a3c7-ec8398ce9c50",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F817ab3dd-2000-4495-8c7a-645a1285de00.jpg?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2023-03-31T13:48:13Z",
        "content": "Italys privacy watchdog has banned temporarily the popular artificial intelligence service ChatGPT, after launching an investigation into the chatbots Microsoft-backed owner OpenAI.\r\nThe nations data… [+3204 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Protos.com"
        },
        "author": "Aaron Wise",
        "title": "SEC v. Ripple summary judgment expected in April - Protos",
        "description": "A settlement with the SEC may have permanently bankrupted Ripple. Now, a summary judgement is expected within four weeks.",
        "url": "https://protos.com/sec-v-ripple-summary-judgment-expected-in-april/",
        "urlToImage": "https://protos.com/wp-content/uploads/2023/03/Protos-Artwork-RippleSECApril-SIMG.jpg",
        "publishedAt": "2023-03-31T13:42:46Z",
        "content": "Listen to this article.\r\nThe multi-year legal battle led by the Securities and Exchange Commission (SEC) regarding Ripples alleged unregistered securities offering could end in summary judgment by Ap… [+2849 chars]"
    }
 
]
constructor(){
  super();
 this.state={
  articles:this.articles
 }
}
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row my-3">
          {this.state.articles.map((element)=>{

           return <div className="col-md-4">
            <NewItems title={element.title} description={element.description} newsImage={element.urlToImage} url={element.url}/>
            </div>
          })}
        
        </div>

      </div>
    )
  }
}

export default News