---
layout: default
---

<center>
    <style>
        div.content {
            width: 100%;
            height: 200px;
            position:relative;
            padding:20px;
            box-sizing:border-box;
            margin-bottom: 80px;
        }
        div.content:before { 
            content:"";
            position:absolute;
            background: #ff8f00;
            border-radius: 15px;
            transform: skew(-5deg);
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:-1;
            /* filter: drop-shadow(4px 4px 8px rgb(50, 50, 50)); */
        }
        .drop-cap::first-letter, .drop-cap>p:first-child::first-letter {
            font-size: 64pt;
            line-height: 1;
            margin: -10pt 5px -20px 0;
            float: left;
            font-style: normal;
            font-weight: 800;
        }
        .intro {
            width: 80%;
            font-size: 16pt;
            text-align: justify;
            text-justify: inter-word;
            font-family: monospace;
        }
    </style>
    <div class="content">
        <img src="../img/me.png" alt="Profile Picture" width="256" height="256" style="border-radius:128px;">
    </div>
    <div class="intro">
        <p class="drop-cap">Hello World! My name is <b>Lucas Farris</b>, 
        I'm a Data Scientist currently based in Poland.
        I'm interested in work that allows me to use Machine Learning for Engineering and Research. In other words, I'd be happy working on proof of concepts that help evaluate certain business hypothesis, or shipping models to production. Since 2019 I've been focusing my professional and academic career in the direction of applying ML to Recommender Systems.
        I'd love to collaborate with other experienced data scientists. I'm happy working in offices or remotely. Legally able to work in the EU (Italian citizenship), I can speak fluently English, Spanish, or Portuguese. I'm available to travel anywhere, and have no problems working in specific hour schedules (i.e., PDT), on a flexible schedule, or working extra hours when necessary.
        </p>
    </div>
    <h2><a href="https://docs.google.com/document/d/1jikJtS7kDG84SAIxWMDygbBeO0wAlcurdCig0zQHqxE/edit?usp=sharing" target="_blank">Curriculum Vitae</a></h2>
    <div class="social">
        <a href="https://pl.linkedin.com/in/lucas-farris-9aa1a829" target="_blank">
            <img src="../img/link.png" alt="Linkedin Profile" width="64" height="64"></a>
        <a href="https://stackoverflow.com/story/lucasfarris" target="_blank">
            <img src="../img/so.png" alt="Stack Overflow Careers Profile" width="64" height="64"></a>
        <a href="https://github.com/luksfarris" target="_blank">
            <img src="../img/git.png" alt="Github Repositories" width="64" height="64"></a>
        <a href="https://www.codewars.com/users/luksfarris" target="_blank">
            <img src="../img/hey.png" alt="Code Wars profile" width="64" height="64"></a>
    </div>
</center>