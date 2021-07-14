const quotes =[
    {
        quote : "The early bugs eaten by birds",
        author:"PMS",
    },

    {
        quote : "meat is always right",
        author:"PJH",
    },

    {
        quote : "early bugs eaten by birds",
        author:"PMS",
    },

    {
        quote : "Many a little makes a little",
        author:"PMS",
    },

    {
        quote : "pain makes patients",
        author:"PMS",
    },
    
    {
        quote : "Well begun is meaningless",
        author:"KMS",
    },

    {
        quote : "Nothing stands for eternity",
        author:"PJH",
    },
    {
        quote : "I love cheese",
        author:"PJH",
    },

    {
        quote : "Grrr..",
        author:"PJE",
    },

    {
        quote : "MOMMY!! THE BEAR'S EATING MY LEG !!!",
        author:"lg",
    },



]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.floor.(Math.random()*10)
todaysQuotes=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author; 