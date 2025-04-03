const express = require('express')

const app = express()
const PORT = 5000

const data = {
    'python' : {
        'First appeared' : '20 February 1991',
        'Developer' : 'Python Software Foundation'
    },
    'c' : {
        'First appeared' : '1972',
        'Developer' : 'ANSI X3J11'
    },
    'c++' : {
        'First appeared' : '1985',
        'Developer' : 'ISO/IEC JTC 1'
    },
    'c#' : {
        'First appeared' : '1987',
        'Developer' : 'Thinking Machines'
    },
    'javascript' : {
        'First appeared' : '4 December 1995',
        'Designed by' : 'Brendan Eich of Netscape initially'
    },
    'php' : {
        'First appeared' : '8 June 1995',
        'Developer' : 'The PHP Development Team'
    },
    'unknown' : {
        'First appeared' : 'unknown',
        'Developer' : 'unknown'
    }
    
// Classic Visual Basic
// MATLAB
// Swift
// Delphi/Object Pascal
// Ruby
// Perl
// Objective-C
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:language', (req,res) => {
    const language = req.params.language
    if (data[language]){
        res.json(data[language]);
    } else {
        res.json(data['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`server live on port ${PORT}`)
})