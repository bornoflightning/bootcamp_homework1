<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Horiseon Marketing</title>
</head>

<body>
    <!------------------------------------- Title and links on top of page ------------------------------------------------------->
    <header>
        <div class="header">
            <h1>Hori<span class="seo">seo</span>n</h1>
            <div>
                <ul class="topLinks">
                    <li>
                        <a href="#search-engine-optimization">Search Engine Optimization</a>
                    </li>
                    <li>
                        <a href="#online-reputation-management">Online Reputation Management</a>
                    </li>
                    <li>
                        <a href="#social-media-marketing">Social Media Marketing</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <!-------------------------------------------- Main display image-------------------------------------------------------------->
    <section>
        <div class="hero">
            <!------ provides alternative text for image used in backgroud, provided span since image was on css page -->
            
            <span role="img" aria-label="Image of a group of people sitting around a table, the leader appears to be in the center going over information
            that is on a piece of paper on the table he is looking at. He is pointing at the paper with his index finger and everyone
            around him is facing in the direction of the paper sitting on the table. They all have glasses of water and appear to be serious
            and in the middle of a meeting"></span>
        </div>
    </section>

    <!----------------------------------- Main content displayed with images on side ---------------------------------------------->
    <section class="middle-page">
        <div class="content">
            <!---------------------------------- search engine article -->
            <article>
                <div class="search-engine-optimization">
                    <img src="./assets/images/search-engine-optimization.jpg" 
                         class="float-left"
                         alt="image of notebook in the ccenter surrounded by color pencils, markers and school supplies, 
                              a laptop and coffee cup on the left side " />    
                    <h2>Search Engine Optimization</h2>
                    <p>
                        The dominance of mobile internet use means that users are searching for the right business as they travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase your visibility and find the right customers for your business.
                    </p>
                </div>
            </article>

            <!--------------------------------- online reputation article -->
            <article>
                <div id="online-reputation-management" class="online-reputation-management">
                    <img src="./assets/images/online-reputation-management.jpg"                          
                         class="float-right"         
                         alt="Image of a laptop in the middle with a person sitting in front of it. There are graphs on the screen and the person
                              is writing with their right hand while doing something else on his phone with his left hand. A cup of coffee sits on the rights
                              hand side of the laptop" />
                    <h2>Online Reputation Management</h2>
                    <p>
                        The web is full of opinions, and some of these can be negative. Social media allows anyone with an internet connection to say whatever they want about your business. Online Reputation Management gives you the control over what potential customers see when they search for your business.
                    </p>
                </div>
            </article>

            <!------------------------------- social media marketing article -->
            <article>
                <div id="social-media-marketing" class="social-media-marketing">
                    <img src="./assets/images/social-media-marketing.jpg" 
                         class="float-left" 
                         alt="1top view of wooden table, 6 people sit around it only showing their hands, there are stickers scattered
                             accross the table and one person has a laptop. The image appears to display a group brainstorming ideas together"/>
                    <h2>Social Media Marketing</h2>
                    <p>
                        Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation.
                    </p>
                </div>
            </article>
        </div>

        <!----------------------------------- Code for side bar stretching vertically --------------------------------------------------->
        
            <div class="benefits">
                <div class="benefit-lead" class="benefit-dimensions" >
                    <h3>Lead Generation</h3>
                    <img src="./assets/images/lead-generation.png"
                         alt="an black image of a gear going through a funnel turning into money" />
                    <p>
                        Inbound strategies for lead generation require less work for your business, bringing customers directly to your website.
                    </p>
                </div>
                <div class="benefit-brand" class="benefit-dimensions">
                    <h3>Brand Awareness</h3>
                    <img src="./assets/images/brand-awareness.png" 
                         alt="an image of a person wearing a sweater and tie, the person's head is replaced by a lighbulb making
                             the impression that the person just had a radiant idea"/>
                    <p>
                        Users find your business through paid and organic searches, increasing the search ranking and visibility for your business.
                    </p>
                </div>
                <div class="benefit-cost" class="benefit-dimensions">
                    <h3>Cost Management</h3>
                    <img src="./assets/images/cost-management.png" 
                         alt=" and image of 3 coins with the dollar sign on them, and a lightbulb standing behind the coins"/>
                    <p>
                        As the search ranking for your business increases, your advertising costs decrease, and you no longer need to advertise your page.
                    </p>
                </div>
            </div>
        
    </section>
    <!-------------------------------------------------- Code for footer ----------------------------------------------------------->
    <footer>
        <div class="footer">
            <h2>Made with ❤️️ by Horiseon</h2>
            <p>
                &copy; 2019 Horiseon Social Solution Services, Inc.
            </p>
        </div>
    </footer>
</body>

</html>
