import { createStore } from "redux";
let initialState = {
    home: {
        h1: "Your Favorite Place for Free Bootstrap Themes",
        p: "Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!",
        a: "Find Out More"
    },
    about: {
        h2: "We've got what you need!",
        p: "Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!",
        a: "Get Started!"
    },
    services: {
        h2: "At Your Service",
        service: [
            {
                h3: "Sturdy Themes",
                p: "Our themes are updated regularly to keep them bug free!"
            },
            {
                h3: "Up to Date",
                p: "All dependencies are kept current to keep things fresh."
            },
            {
                h3: "Ready to Publish",
                p: "You can use this design as is, or you can make changes!"
            },
            {
                h3: "Made with Love",
                p: "Is it really open source if it's not made with love?"
            },
        ]
    },
    portfolio: [
        {
            category: "Category",
            name: "Project Name"
        },
        {
            category: "Category",
            name: "Project Name"
        },
        {
            category: "Category",
            name: "Project Name"
        },
        {
            category: "Category",
            name: "Project Name"
        },
        {
            category: "Category",
            name: "Project Name"
        },
        {
            category: "Category",
            name: "Project Name"
        }
    ],
    download: {
        h2: "Free Download at Start Bootstrap!",
        a: "Download Now!"
    },
    contact: {
        h2: "Let's Get In Touch!",
        p: "Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!",
        input: [
            {
                label: "Full name"
            },
            {
                label: "Email address"
            },
            {
                label: "Phone number"
            },
            {
                label: "Message"
            }
        ],
        button: "SUBMIT",
        phono: "+1 (555) 123-4567"
    }
};


const TAGS = {
    GET_DATA: "GET_DATA",
};
/* 
function buscarUser(state,action){
    return(....
}
 */
function reducer(state, action) {
    switch (action.type) {
        case TAGS.GET_DATA:
            return state;
        default:
            return state;
    }
}
let store = createStore(reducer, initialState);

function actionGetData() {
    return {
        type: TAGS.GET_DATA
    }
}
export {
    TAGS,
    actionGetData
}
export default store;