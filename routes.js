(function () {
    var suggestions = [], communities = [];

    suggestions = [
        {
            "courseId": "CRT/205",
            "week": 5,
            "articles": [
                {
                    "assetId": "01-HTML-5216a5371d97b442ef89e067",
                    "url": "http://www.psychologytoday.com/blog/artificial-maturity/201308/five-fallacies-we-must-abandon-we-lead-students",
                    "title": "Five Fallacies We Must Abandon As We Lead Students",
                    "excerpt": "There is a reason why these lies are dangerous. Each of them is built on a fallacy. The false foundations are not stable enough to build a life on, and will ultimately crumble. A young person who buys into a lie will eventually sabotage their future. What's more, the lie will not allow them to become the person they are capable of becoming.",
                    "publishedDateTime": 1377154800000,
                    "imageUrl": "http://rsrc.psychologytoday.com/files/imagecache/article-inline-half/blogs/108181/2013/08/131675-131263.jpg",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 1,
                        "dislikes": 0,
                        "shares": 0
                    },
                    "currentUserRating": 1,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-5213e21e1d974266132fd9d5",
                    "url": "http://saltinme.wordpress.com/2013/08/20/producing-some-children-of-hell-religious-fallacies-entrenched-throughout-the-centuries/",
                    "title": "Producing Some Children of Hell: Religious Fallacies Entrenched throughout the Centuries",
                    "excerpt": "Reblogged from esoriano:\nMisinterpretation and misconception of the Scriptures by supposed scholars have been running throughout the years, which legacy now has drastically produced some children of disobedience bound to hell.\nGALATIANS 5:4\n\"Christ is become of no effect unto you, whosoever of you are justified by the law; ye are fallen from grace.",
                    "publishedDateTime": 1376982000000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-5213c14852509e46d00ad1d1",
                    "url": "http://lokogogodjc.wordpress.com/2013/08/19/logical-fallacies/",
                    "title": "Logical Fallacies",
                    "excerpt": "This is a great poster which can be found at yourlogicalfallacyis.com. Most people do not know what a logical fallacy is, but it is simple an error in logic. Or to say it another way, it is a false argument. I will refrain from a lesson on logic here, but the reason I am putting this on the blog is because it is intimately connected to reading and...",
                    "publishedDateTime": 1376895600000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 1,
                        "dislikes": 0,
                        "shares": 0
                    },
                    "currentUserRating": 1,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-5213c1341d974266132fd584",
                    "url": "http://web2.sys-con.com/node/2757001",
                    "title": "The Fallacies of Big Data",
                    "excerpt": "Combine our natural proclivity to succumb to popular fallacies with the challenge of getting our wetware around just how big Big Data can be, and you have a recipe for disaster. But the good news is that there is hope. The best way to avoid an unseen trap in your path is to know it's there. Fallacies are easy to avoid if you recognize them for...",
                    "publishedDateTime": 1376809200000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 1,
                        "dislikes": 0,
                        "shares": 0
                    },
                    "currentUserRating": 1,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d5a1d974266132fb02b",
                    "url": "http://aviewfromtheright.com/2013/08/14/informal-logic-101-how-to-think-and-argue-better-part-5/",
                    "title": "Informal Logic 101: How to Think and Argue Better, Part 5",
                    "excerpt": "Part 5: Facts Over Feelings\n\"Feelings should never supersede rational thought... so, if you feel that you've got the answer, you should think some more.\"   -  Julie Ann Elliott-Morton\nUp to this point in the series, we have dealt with the basics. We learned about the fundamental laws of logic, categorical propositions and logical relationships.",
                    "publishedDateTime": 1376550000000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d621d974266132fb062",
                    "url": "http://totalklikethisandactlikethat.wordpress.com/2013/08/15/why-i-dont-agree-that-systems-thinking-is-a-fallacy/",
                    "title": "Why I don't agree that systems thinking is a 'fallacy'",
                    "excerpt": "See on Scoop.it  -  FutureTeacher\nIt's been some time since I wrote my counterpoint to Bojan's article on quitting GTD, and in that time I've come to know him a great deal better, to respect his opinion, and I consider him a friend...\nSharrock's insight:\nIt seems that GTD stands for Getting Things Done.",
                    "publishedDateTime": 1376550000000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d5a1d974266132fb01f",
                    "url": "http://gauravtiwari.org/2013/08/11/smart-fallacies-i-squared-equals-to-1-and-1-equals-to-2-and-3/",
                    "title": "Smart Fallacies: i squared equals to 1, 1 equals to 2 and 3",
                    "excerpt": "This mathematical fallacy is due to a simple simple assumption, that .\nProceeding with  and taking square-roots of both sides, we get:\nNow, as the Euler's constant  and , we can have\nThis is complete contradiction to the fact that .\nAgain, as\nor,\nor,\nor,\nor, in general\nAgain using equation  and dividing both sides by 2, we get\nor, in general\nWhere...",
                    "publishedDateTime": 1376204400000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d01bf3e2526b57b8661",
                    "url": "http://www.psychologytoday.com/blog/mood-swings/201308/the-psychological-fallacy",
                    "title": "The psychological fallacy",
                    "excerpt": "Critics make fun of psychiatry for making diagnoses when symptoms are \"obviously\" due to life events, to stresses in life.  This obviousness is based on common sense, which is always wrong as soon as a person crosses the threshold of a mental health clinician's office.  The biggest fallacy of psychology/psychiatry is the psychological fallacy.",
                    "publishedDateTime": 1376031600000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d541d974266132fb00d",
                    "url": "http://blog.tenthamendmentcenter.com/2013/08/judicial-fallacies-that-promote-tyranny/",
                    "title": "Judicial Fallacies That Promote Tyranny",
                    "excerpt": "Three fallacies articulated by Chief Justice Charles Evans Hughes in his article The Court and Constitutional Interpretation, and promoted by the judges, lawyers and others who desire a national government with unlimited powers at the expense of the states and the people are quoted below. I'll address each judicial fallacy in turn starting with -...",
                    "publishedDateTime": 1376031600000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4cf4bf3e2526b57b8604",
                    "url": "http://robertlynd.wordpress.com/2013/08/01/45/",
                    "title": "Old Wives' Tales",
                    "excerpt": "The Mail  -  Saturday 15 July 1939\nOld Wives' Tales\nIt is a popular fallacy, I read the other day, that lightning never strikes in the same place twice. Buildings, it was stated, have been struck as many a dozen times during a single storm.\nOne of the most remarkable characteristics of the human mind is its capacity to continue to entertain...",
                    "publishedDateTime": 1375340400000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 1,
                        "dislikes": 0,
                        "shares": 0
                    },
                    "currentUserRating": 1,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d7852509e46d00aad3e",
                    "url": "http://www.patheos.com/blogs/friendlyatheist/2013/07/19/how-many-logical-fallacies-can-you-spot-in-the-words-of-this-christian-apologist/",
                    "title": "How Many Logical Fallacies Can You Spot in the Words of This Christian Apologist?",
                    "excerpt": "How do Christian apologists like Ravi Zacharias spin logic to suit their needs?\nachilleshoplite compiled a series of his statements in the video below and dares you to spot the fallacies:\nWithout even trying, I heard Pascal's Wager, the claim that atheists are hateful and can't possibly have any meaning in life, the idea that atheists can never...",
                    "publishedDateTime": 1374217200000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d7852509e46d00aad35",
                    "url": "http://raphaelkhoo.wordpress.com/2013/07/16/logical-fallacies-for-the-aq/",
                    "title": "Logical Fallacies (For the AQ!)",
                    "excerpt": "1. Ad Hominem\nDefined as \"to the man\" or a personal attack at the person, instead of at the argument.\nAs exemplified in the cartoon, the lobster is detracting his points from the shrimp's arguments and instead choosing to play on the emotions of the lay people, by citing the personal traits/characteristics of the shrimp.\n2.",
                    "publishedDateTime": 1373958000000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4d7952509e46d00aad72",
                    "url": "http://lizditz.typepad.com/i_speak_of_dreams/2013/05/tools-for-argumentation.html",
                    "title": "Tools for argumentation: Hierarchies of argumentation; Logical Fallacies",
                    "excerpt": "Hierarchy of argumentation:\nImage Source: Facebook page, \"The Internet Offends Me\" https://www.facebook.com/photo.php?fbid=609225245772600&set=a.609225239105934.1073741828.606775609350897&type=1&theater\nThe person who posted the image above wrote,\nI suggest that if you find yourself participating in a posting match with someone who seems...",
                    "publishedDateTime": 1367737200000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 1,
                        "dislikes": 0,
                        "shares": 0
                    },
                    "currentUserRating": 1,
                    "socialShares": []
                },
                {
                    "assetId": "01-HTML-520d4cfbbf3e2526b57b861f",
                    "url": "http://www.3quarksdaily.com/3quarksdaily/2011/07/the-fallacy-of-difference-in-science-and-art-.html",
                    "title": "The Fallacy of Difference, in Science and Art",
                    "excerpt": "Julia Galef over at Rationally Speaking:\nIt's not often that you find something that's a fallacy both logically and creatively  -  that is, a fallacy to which both researchers and artists are susceptible. Perhaps you're tempted to tell me I'm committing a category mistake, that artistic fields like fiction and architecture aren't the sort of thing...",
                    "publishedDateTime": 1310540400000,
                    "imageUrl": "",
                    "counters": {
                        "ratings": 1,
                        "comments": 0,
                        "views": 0,
                        "likes": 0,
                        "dislikes": 1,
                        "shares": 0
                    },
                    "currentUserRating": 0,
                    "socialShares": []
                }
            ]
        }
    ];

    communities = [
        {
            "id": 2040,
            "name": "Campus Life"
        },
        {
            "id": 2041,
            "name": "University of Phoenix"
        },
        {
            "id": 2008,
            "name": "School of Business"
        },
        {
            "id": 2009,
            "name": "Master of Business Administration"
        },
        {
            "id": 2010,
            "name": "Master of Public Administration"
        },
        {
            "id": 2011,
            "name": "Master of Management"
        },
        {
            "id": 2013,
            "name": "Master of Science in Accountancy"
        },
        {
            "id": 2021,
            "name": "Career & Professional Development"
        },
        {
            "id": 2022,
            "name": "Phoenix Success Stories"
        },
        {
            "id": 2025,
            "name": "Learning Communities"
        },
        {
            "id": 2026,
            "name": "Business & Management"
        },
        {
            "id": 2027,
            "name": "Education"
        },
        {
            "id": 2028,
            "name": "School of Advanced Studies"
        },
        {
            "id": 2029,
            "name": "Doctor of Management"
        },
        {
            "id": 2030,
            "name": "Doctor of Management - Information Systems and Technology"
        },
        {
            "id": 2031,
            "name": "Doctor of Education"
        },
        {
            "id": 2032,
            "name": "Doctor of Education - Curriculum & Instruction"
        },
        {
            "id": 2035,
            "name": "Doctor of Education - Instructional Technology"
        },
        {
            "id": 2033,
            "name": "Doctor of Business Administration"
        },
        {
            "id": 2034,
            "name": "Doctor of Health Administration"
        },
        {
            "id": 2036,
            "name": "Education Specialist"
        },
        {
            "id": 2037,
            "name": "Doctor of Philosophy in Industrial/Organizational Psychology"
        },
        {
            "id": 2038,
            "name": "Doctor of Philosophy in Higher Education Administration"
        },
        {
            "id": 2039,
            "name": "Doctor of Philosophy in Nursing"
        },
        {
            "id": 2043,
            "name": "Social Sciences"
        },
        {
            "id": 2044,
            "name": "Information Systems & Technology"
        },
        {
            "id": 2045,
            "name": "Natural Sciences and Health Care Administration"
        },
        {
            "id": 2046,
            "name": "Criminal Justice & Security"
        },
        {
            "id": 2047,
            "name": "Continuing Education"
        },
        {
            "id": 2048,
            "name": "Nursing"
        },
        {
            "id": 2053,
            "name": "Humanities"
        },
        {
            "id": 2150,
            "name": "Faculty Docs"
        },
        {
            "id": 2433,
            "name": "College Extension"
        },
        {
            "id": 2152,
            "name": "Faculty Communities"
        },
        {
            "id": 2153,
            "name": "Schools & Colleges"
        },
        {
            "id": 2158,
            "name": "School of Advanced Studies"
        },
        {
            "id": 2159,
            "name": "School of Business"
        },
        {
            "id": 2160,
            "name": "College of Education"
        },
        {
            "id": 2156,
            "name": "General Faculty Information"
        },
        {
            "id": 2174,
            "name": "HR & Benefits"
        },
        {
            "id": 2175,
            "name": "Policy & Ethics"
        },
        {
            "id": 2176,
            "name": "Scheduling"
        },
        {
            "id": 2157,
            "name": "Career & Professional Development"
        },
        {
            "id": 2177,
            "name": "Networking"
        },
        {
            "id": 2178,
            "name": "Industry Relationships"
        },
        {
            "id": 2179,
            "name": "Academic Enlightenment"
        },
        {
            "id": 2315,
            "name": "Local Communities"
        }
    ];

    module.exports = function (app, options) {
        app.get('/', function (req, res) {
            return res.render("" + options.base + "/index.html");
        });
        app.get('/api/v1/suggestions', function (req, res) {
            return res.json(suggestions);
        });

        app.get('/api/v1/social/my_communities', function (req, res) {
            console.log("get communities");
            return res.json(communities);
        });

        app.post('/api/v1/articles/:assetId/likes', function (req, res) {
            console.log("post is called for " + req.params.assetId);
            for (var i = 0; i < suggestions[0].articles.length; i++) {
                var row = suggestions[0].articles[i];
                if (row.assetId === req.params.assetId) {
                    console.log("Found: " + row);
                    row.counters.likes += 1;
                    return res.json({"assetId":row.assetId,"likes":row.counters.likes});
                }
            }
            return res.json({});
        });

        app.post('/api/v1/articles/:assetId/dislikes', function (req, res) {
            console.log("post is called for " + req.params.assetId);
            for (var i = 0; i < suggestions[0].articles.length; i++) {
                var row = suggestions[0].articles[i];
                if (row.assetId === req.params.assetId) {
                    console.log("Found: " + row);
                    row.counters.dislikes += 1;
                    return res.json({"assetId":row.assetId,"dislikes":row.counters.dislikes});
                }
            }
            return res.json({});
        });

        app.post('/api/v1/articles/:assetId/views', function (req, res) {
            console.log("post is called for " + req.params.assetId);
            for (var i = 0; i < suggestions[0].articles.length; i++) {
                var row = suggestions[0].articles[i];
                if (row.assetId === req.params.assetId) {
                    row.counters.views += 1;
                    return res.json({"assetId":row.assetId,"viewCount":row.counters.views});
                }
            }
            return res.json({});
        });

        app.post('/api/v1/articles/:assetId/shares', function (req, res) {
            console.log("shares post is called for " + req.params.assetId);
            console.log("comment:" + req.body.social.comment);
            for (var i = 0; i < suggestions[0].articles.length; i++) {
                var row = suggestions[0].articles[i];
                if (row.assetId === req.params.assetId) {
                    row.counters.views += 1;
                    return res.json({"assetId":row.assetId,
                        "socialThreadUrl":"https://portal.qaols.phoenix.edu/social/thread/152485",
                        "communityId":req.body.social.communityId,
                        "shareDate":1378860704000});
                }
            }
            return res.json({});
        });

        app.post('/api/v1/articles/:assetId/inappropriate', function (req, res) {
            console.log("post a delete request for " + req.params.assetId);
            console.log(req.url);
            console.log(req.body);
            for (var i = 0; i < suggestions[0].articles.length; i++) {
                var row = suggestions[0].articles[i];
                if (row.assetId === req.params.assetId) {
                    suggestions[0].articles.splice(i,1);
                    console.log("REMOVED:::::");
                    console.log(row);
                    return res.send("OK",200);
                }
            }
            return res.send("BAD Request",400);
        });

    };

}).call(this);
