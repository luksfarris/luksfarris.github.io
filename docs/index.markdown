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
            background: #d8dee9;
            border-radius: 15px;
            transform: skew(-5deg);
            top:0;
            left:0;
            right:0;
            bottom:0;
            z-index:-1;
        }
        .drop-cap::first-letter, .drop-cap>p:first-child::first-letter {
            font-size: 64pt;
            line-height: 1;
            float: left;
            font-style: normal;
            font-weight: 800;
        }
        .intro {
            width: 90%;
            font-size: 16pt;
            text-align: justify;
            text-justify: inter-word;
            font-family: monospace;
            color: #3b4252;
        }
        .social {
            margin: 10px;
            justify-content: space-between;
            display: flex;
            width: 50%;
        }
        .social img {
            width: 64px;
            heigth: 64px;
        }
    </style>
    <div class="content">
        <img src="../img/me.png" alt="Profile Picture" width="256" height="256" style="border-radius:128px;">
    </div>
    <div class="intro">
        <p class="drop-cap">Hello World! My name is <b>Lucas Farris</b>, 
        I'm a Data Scientist currently based in the EU.
        I'm interested in Machine Learning and Software Engineering.</p>
        <p> Since 2019 I've been focusing my professional and academic career in the direction of applying ML to Recommender Systems. I speak English, Spanish, or Portuguese.
        </p>
    </div>
    <h2><a href="https://docs.google.com/document/d/1jikJtS7kDG84SAIxWMDygbBeO0wAlcurdCig0zQHqxE/edit?usp=sharing" target="_blank">Curriculum Link (Google Docs)</a></h2>
</center>


<center>
    <h3>I am also at:</h3>
    <div class="social">
        <a href="https://linkedin.com/in/lucas-farris-9aa1a829" target="_blank">
            <img src="../img/link.png" alt="Linkedin"></a>
        <a href="https://stackoverflow.com/story/lucasfarris" target="_blank">
            <img src="../img/so.png" alt="Stack Overflow Careers Profile"></a>
        <a href="https://github.com/luksfarris" target="_blank">
            <img src="../img/git.png" alt="Github"></a>
        <a href="https://twitter.com/luksfarris" target="_blank">
            <img src="../img/twitter.png" alt="Twitter"></a>
    </div>
    <h3>Other links:</h3>
    <p>
        <a href="https://www.codewars.com/users/luksfarris" target="_blank">Code Wars Profile</a> |
        <a href="https://scholar.google.com/citations?user=2IBePDwAAAAJ" target="_blank">Google Scholar Profile</a> |
        <a href="https://deepai.org/profile/lucas-farris" target="_blank">Deep AI Profile</a>
    </p>
</center>