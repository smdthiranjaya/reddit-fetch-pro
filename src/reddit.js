const axios = require("axios")
const moment = require("moment")

function Reddit(options) {
    if (!options) {
        throw new TypeError("Can't found search data")
    }

    const search = options.search
    const limits = options.limits
    const type = options.type || 'subreddit'

    if (!search) {
        throw new TypeError("Search parameter is required")
    }

    if (limits && isNaN(limits)) {
        try {
            parseInt(limits)
        } catch {
            throw new TypeError("Limits data must be a number");
        }
    }

    let page;
    if (type === 'user') {
        page = `https://www.reddit.com/user/${search}/submitted.json?sort=new`;
    } else {
        const formattedSearch = typeof search === 'string' ? search.replace(/ /gi, '+') : search;
        page = `https://www.reddit.com/r/${formattedSearch}.json?sort=top&t=daily`;
    }

    return axios({
        method: "get",
        url: page
    }).then(res => {
        let data = res.data
        let basic = data.data.children
        let counting;

        if (limits) {
            counting = limits
        } else if (limits === 0) {
            counting = 1
        } else if (limits > basic.length) {
            counting = basic.length
        } else if (limits < basic.length) {
            counting = limits
        } else {
            counting = basic.length
        }

        let paket = []
        for (let i = 0; i < counting; i++) {
            if (i >= basic.length) break; 
            
            let allData = data.data.children[i].data
            let title = allData.title
            let img = allData.url
            let link = 'https://www.reddit.com' + allData.permalink
            let thumbsup = allData.ups
            let thumbsdown = allData.downs
            let nsfw = allData.over_18
            let comment = allData.num_comments
            let linkFrom = allData.subreddit_name_prefixed
            let authorUser = allData.author
            let timeCreate = moment.unix(allData.created_utc).format('lll')
            let subreddit = allData.subreddit
            let id = allData.id
            let voteRatio = allData.upvote_ratio
            
            let kerangka = {
                "title": title,
                "image": img,
                "link": link,
                "like": thumbsup,
                "dislike": thumbsdown,
                "comment": comment,
                "subredditName": linkFrom,
                "author": authorUser,
                "dateCreated_UTC": timeCreate,
                "subreddit": subreddit,
                "id": id,
                "voteRatio": voteRatio,
                "nsfw": nsfw
            }
            paket.push(kerangka)
        }
        return {
            "data": paket
        };
    }).catch(err => {
        throw new TypeError(`[ Can't found ${type === 'user' ? 'user' : 'your search'} ]`)
    });
}

module.exports = Reddit;