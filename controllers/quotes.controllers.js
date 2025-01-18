function getRandomQuote(req,res,next){
    res.json({
        quote:'A quote...'
    });
}

module.exports = {
    getRandomQuote: getRandomQuote
}