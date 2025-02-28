---
layout: post
title:  "9 Ways To Deliver Value Without Code"
date:   2025-02-22 11:00:00 +0100
categories: management software-engineering
permalink: /non-technical-value
---

The individual contributor's journey often times takes us in the direction of people leadership.
This post is partly inspired by Camille Fourier's excellent book "The Manager's Path". Here is an interesting
passage of the book:


{% include admonition.html 
type="Quote" 
body="If you’re doing all of the interesting work yourself, stop. Look at the tricky, boring, or annoying areas of technical need and see if you can unstick those areas. Working on the less exciting parts of the code base can teach you a lot about where the process is broken. With boring or frustrating projects, there’s often something obvious that can be spotted and fixed if an experienced person takes the time to look at them. If you’re only doing the most boring work, stop that, too. You’re a senior engineer who has a lot of talent as a developer, and it’s reasonable for you to take on some of the harder tasks. You want to encourage others on your team to learn the entire system, and you want to give them chances to stretch themselves, but you needn’t always be self-sacrificing in what you choose to work on. Give yourself a fun task occasionally, as long as you know you have the time to do it well. <br>
<i> ― Camille Fournier, The Manager's Path, Chapter 3 </i>"
%}

I thought I'd collect some recent ways that, as a Tech Lead, I've been able to deliver value to stakeholders (and got recognized for it), 
and briefly discuss approaches and techniques.

## Documentation

This is a particularly important topic for me. I've always prioritized documentation, and reading above writing.
Proactive people will usually, unintentionally, become knowledge wells, accumulating wisdom from several key areas of a business.
The ability to relay that information without dedicating time is precious. People will DM you with questions, and if you don't build
a process around you to handle this constant Q&A, it will drown you. So, foster the culture of reading (as well as culture of writing)
among you peers as much as you can. When you are away, your absence must never be felt. All your knowledge must be accessible with or without you.

🞋 Your goal should be to **never** have to do a handover. When the time comes, all the info is already shared. Never answer the same question twice, especially not to the same person. Always link them back to the right doc.

## Business Context Understanding

Programming is an interdisciplinary skill that doesn't really require people to know the business domain they are working in.
In other words, a Backend engineer could very well work on Finance, Product, Marketing, and Sales areas of company without a deep understanding of how they work.
However, a deep understanding of the business domain is an immensely powerful tool. It enables a kind of sixth sense in a way.
It gives you foresight into architecture design, feature design, and problem solving.
One of the most important abilities a Tech Lead can have is to quickly learn the business domain, and effectively ramp up the team.
This is not only relevant to the dev team, but also Scrum Masters, Product Owners, Project Managers, and even executives all benefit from understanding better the context. 
Curiously, it also goes the other way: digesting technical information to non-technical stakeholders also opens many doors.

🞋 Your goal is for every member of the team to have a precise overview of exactly what it is the business is trying to accomplish.

## Requirement Translation (and Architecture)

A similar, but fundamentally different skill from digesting business context to a dev team is translating requirements.
See, while the business-side of the project gives people purpose, requirements are concrete and actionable.
Being able to materialize the vision of a stakeholder is something that takes years of practice. 
Not only that, but the best architects are the ones that have seen their designs fail over time, and learned from it.

🞋 Your team should always know what is the next most important task, and figure out for themselves exactly how to do it.

## Peer Growth

One of the (sometimes sad) realities of leading a team is that you will likely have to hand over the best implementation tasks to your team.
Likely, you will end up working on the boring support tasks that nobody wants to pick up. One of the beautiful things about this though, is
to witness your team come up with solutions that you would not have thought of, and to see them develop more and more.
Nourishing your team's agency is a very rewarding process, at a deeply human level, that may even evoke pride in your team's accomplishments.

🞋 Your goal is to develop your team members up to the level where they can replace you.

## SWE Process Improvement

When teams come together for the first time, you will often have people who are used to working with different tools.
Maybe it's a linter, maybe a different VCS, dependency manager, you name it. It is very important to get the team to agree
on one unified standard, and review the departments's standards to include new improved practices.
Not only should your team be using great tools, you should push for adjacent teams to improve as well (on their timelines).
Keep track of all decisions, bring different people in, and build a healthy way to adopt and improve your SWE process.

🞋 Your goal should be to have your team happy with the tools they are using, and most importantly to have them decide on those tools themselves.

## Minor Technical Steering

Most software project will inevitably involve hundreds, if not thousands of small decisions. Often times team members will
get together and decide important things as a group. It is important, as the most experienced member, to both empower the team
to make decisions, and gently steer them in the right direction, based on your experience and understanding of the project's needs.
Sometimes it will be hard to find common ground, and there's also a case for letting a team go in a different than the one you think is the right one (let them make mistakes, or not, and learn from their decisions). 

🞋 Your goal is to never be authoritative, but rather serve the team with the knowledge to make the best decisions.

*NB: The only rule I don't break, and something I've discussed in a previous post, is: every time you have a decision between your code, and another team's code, always choose your code.*

## Maturity Assessments

I remember the first time I saw a professional software assessment many years ago. It was a 180-page PDF (I *think* from Adobe) report on
an iOS app my team was developing for a client. It was divided into many categories, including code analysis, security concerns, 
architecture details, and much more. While a thorough analysis like is the business of many companies, as a tech lead there are many such
frameworks (that look more like spreadsheets) that you can use to evaluate where your team is in a particular area, and where it should be.
In my 2024 lecture about search I discussed ways one could rate their company's search maturity on a 2-dimensional scale.

🞋 Working towards a more technologically mature company should be one of the overarching principles of any team.

## Addressing Bottlenecks Or Delays

Unfortunately tech teams aren't always self-sufficient, we often rely on other teams or technologies. Maybe it's your cloud-service provider,
maybe it's an external API you need to use, another internal team that is updating a component you need, an open-source project you are using
that has not yet merged a PR you need, the cybersecurity team that has not yet approved your colleague's request to use a particular tool. The list goes on and on.
These things can be very frustrating for the team, and demoralize them. 

🞋 Being proactive and diligent in addressing delays and bottlenecks is very powerful in keeping the team's morale up.


## Deny Things That Will Hurt The Project

Part of steering the team in the right direction, is sometimes having to say no to things that may hurt the project in some way.
This usually comes in the form of a feature/tech that will delay the project, increase the cost, or make the project harder to maintain.
Nevertheless, these are very subjective (although real) reasons, and certain personality types will have a hard time swallowing this pill.
I find it very important to, whenever I have to say no to something, to spend time developing a complete pros/cons scenario mapping.

Not only this helps make the case, but it also sometime helps us identify when we are wrong about something. On the first years of my career, after
working for a startup for a couple years, I developed the theory that dependency pinning was a bad thing. Of course I was wrong, but I was young and stubborn, and
to this day I remember my tech lead sitting me down and patiently explaining to me why I was wrong, and what was the more professional way to handle dependencies (thanks Sasha).

🞋 It is the tech lead's responsibility to expose both sides of an argument, respectfully educate team members, and make tough calls for the sake of the project's timely and cost-effective delivery. 