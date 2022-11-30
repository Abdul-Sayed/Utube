# Utube

## Video Player application made with React, React Router V6, Material UI, and Rapid API to fetch YouTube video data

`Live link: https://reactutube.netlify.app/`

### Pages and Routes

```
App
│
│───Navbar.js
│   └───SearchBar.js  <==> navigates to SearchFeed component
│
└───Feed.js
│   │
│   │───SideBar.js
│   └───Videos.js
│       └───ChannelCard.js  <==> links to ChannelDetail component
│       └───VideoCard.js  <==> links to VideoDetail component
│
└───SearchFeed.js
│  └───Videos.js
│       └───ChannelCard.js  <==> links to ChannelDetail component
│       └───VideoCard.js  <==> links to VideoDetail component
│
└───VideoDetail.js
│  └───Videos.js
│      └───ChannelCard.js  <==> links to ChannelDetail component
│      └───VideoCard.js  <==> links to VideoDetail component
│
└───ChannelDetail.js
│  └───ChannelCard.js  <==> links to ChannelDetail component
│  └───Videos.js
│      └───ChannelCard.js  <==> links to ChannelDetail component
│      └───VideoCard.js  <==> links to VideoDetail component
│
└───Footer.js
```

### SearchBar

> The SearchBar component will navigate to the SearchFeed component upon entering the search term.

### Feed

Route="/"

> Renders the Videos component, as well as the SideBar component on the left. Clicking a keyword in the sidebar will fetch the relevant videos and update the video feed.
>
> SideBar component: Renders a list of popular keywords. Clicking a keyword will update the Feed component.
>
> Videos component: Renders the video feed list. Checks the data for each item if its a channel or a video, and will render a ChannelCard or a VideoCard respectively.
>
> > ChannelCard / VideoCard components render the details of that item and clicking it routes to the ChannelDetail / VideoDetail pages, passing the id of the channel / video in the route.

### SearchFeed

Route="/search/:_searchTerm_"

> The SearchFeed component will recieve the search term from route params, and fetch videos related to the search term. It will then render the Videos component, passing in a video feed list.

### VideoDetail

Route="/video/:_id_"

> The VideoDetail component obtains the video id from route params and fetches the video's data as well as related videos. It plays the video and renders the Videos component, passing in a video feed list of related videos.

### ChannelDetail

Route="/channel/:_id_"

> The ChannelDetail component obtains the channel Id from the route params and fetches details of the channel as well as the channel's videos. It renders the ChannelCard component, passing it the channel details, as well as the Videos component, passing it the list of videos.
