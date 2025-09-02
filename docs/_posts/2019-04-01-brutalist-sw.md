---
layout: post
title: "(Parody) Brutalist Software Development"
date: 2019-04-01 12:00:00 +0100
author: Lucas Farris
categories: software-engineering
permalink: /brut-soft-dev
---

> This article is a collection of bad software engineering practices I've collected during the past 10 years I've been in the industry, consolidated into one single parody. Any resemblance to actual people, companies, or events is probably coincidental ;)

### The art of building raw, disposable, unusable software

When young prospect computer scientists attend the _Software Engineering 101_ class, they learn about different methodologies of software development.

A Software Development Methodology is the process by which an idea can be transformed into a ready product. The ones I've seen in practice are Scrum, Kanban, XP, and Waterfall.

These methodologies may suggest whether programmers will work in teams, in pairs, or by themselves. If an engineer is responsible for deciding how to do his work, or if he is responsible for following strictly a spec. They can establish ceremonies or meetings to be held, testing practices, and the planning and execution of actual work.

I like the analogy of construction. As the son of a construction engineer, I'm only too familiar with the problems that may arise between architects, engineers, and clients. Methodologies and processes come in place to prevent these in a Software Engineering environment.

<img src="/assets/img/brut/brut1.jpeg">

> Fig 1: Brutalist Architecture: simplistic, bare, and short-living.

Let's elaborate on the concept behind __Brutalist Software Development__: the set of software engineering practices that are responsible for creating complex-looking, short-lived, bare technologies. It's suitable for alluring stakeholders, and deluding engineers.

_Not to be confused with the eXtreme Go Horse (XGH) Process._

## Purchase An Outsourcing Legacy Team

Find a team that is affordable to you, preferably one with a lot of experience on old technologies/platforms. It is crucial that you find the team before choosing what you'll build, productivity is not our goal. When the time comes for you to figure out what to build, make them use those old technologies. Don't worry if the solutions they build are not suitable or applicable to the task at hand. Success is not the point here.

## Select Hype Technologies

Pick a couple of hype technologies from Gartner's _Peak Of Inflated Technologies_, and figure out which make more sense to your business. Create a business plan that has no foundation on technical feasibility. Communicate it to your recently built team.

<img src="/assets/img/brut/brut2.png">

> Fig 2: The zone is the part of the curve where hype is growing or high.

Nobody in the team has experience with the technologies? - No problem, just don't tell your investors. The team says these technologies are not fit to solve the problem you want to solve? Tell your engineers to use them anyway, and move on. _Who even gave them a choice, right?_

## Glorify The  "Tech Lead"

<u>Technical leadership doesn't exist in any other methodology</u>. Those focus on delivering accurately and quickly, and our goal is the opposite. It's important to make the distinction between a Lead Programmer, and a Technical Lead. Make sure you're not hiring a Lead Programmer. 

In brutalist engineering they will have a key role. Select someone that has no experience with the underlying technologies, they need to be making the wrong decisions, to keep the project going. Someone without any leadership skills, so the team members quit often and more time will be added. If they have no idea how to extract requirements, it's a plus  -  the more meetings, the merrier.

<img src="/assets/img/brut/brut3.png">

> Fig 3: Information flow in a brutalist team.

Their responsibilities include:

- __Careful time tracking__. There can't be any space for doubts in regards to how busy the team is working on features that will never be used. Ensure the team reports every minute accurately, and at least on 3 different platforms.
- __Report fake project news__ to stake holders. Did the team fail to deliver a feature? Say they succeeded. Is the feature untested? Say that it works perfectly. __Be the sole communication point__ between engineers and salesmen. Nobody must make an attempt to understand the requirements, it may lead to features that were desired.
- __Micromanage the team constantly__. Some methodologies (like Scrum) suggest teams should be self-organized. This could create dangerous productivity. Always force the team to __remake everything__ they build. Unnecessary rework is the heart of brutalist software engineering. __Reject improvements__ to the code/app/service. There is no space in this environment for proactivity or productivity. __Change the requirements__ of every story, after they're done. Be the sole reviewer of pull requests.

__Enforce bad programming practices.__

## Garbage In, Obsolescence Out

Work in brutalism needs to be planned, but not carefully. There needs to be a constant delivery of defective features. Create a backlog of the most useless features you can think of, but make sure they sound very fancy and savvy.

<img src="/assets/img/brut/brut4.png">

> Fig 4: Brutalist software features are redacted to be unintelligible, and unusable.

Making sure nobody outside your team understands the technical side of the project is very important. Whenever possible, create new jargon that don't make technical sense, but sound attractive. Also important is making sure that the tech team won't be able to understand what needs to be done, therefore avoid elaborating user stories, or use cases. This is one of the key differences between Brutalist Software Engineering and Waterfall. While waterfall teams will create and stick to specs, brutalism enforces a no-spec scenario. Never use wireframes or diagrams, __reject all structured documenting practices__.

Try very hard to misunderstand your stakeholder's needs. If they ask for something that doesn't make sense, or is not feasible, even better. You will be making something entirely different anyway.

__Redact tasks shortly and imperatively.__

## Forget About Testing (FAT)

Some other methodologies like XP insist on the utility of unit tests. They preach that TDD is the best way to develop software. Many respected authors, such as the famous Robert "Uncle Bob" Martin also advocate for test-driven-development. It generates stable code, and saves time and money. It's obviously not a good practice to have.

<img src="/assets/img/brut/brut5.png">

> Fig 5: This no-tests policy is commonly called Forget About Testing, or FAT, among brutalists.

This applies to integration tests, smoke tests, behave-driven-development, snapshot tests, and any quality assurance practice. If anyone implements a code coverage test, enforce the lowest coverage possible. Delete tests whenever possible.

__Every test is an overhead.__

## No Hindsight Allowed

Methodologies like Scrum recommend the use of meetings like _Retrospectives_ to adapt and improve the team's current process. As a bastion of anti-progress, such practices need to be abandoned. If someone more agile-minded demands these, just have the Tech Lead collect some feedbacks and completely ignore them.

The no-hindsight rule also applies to complexity estimations. If the team estimates tasks based on story points, never ever let them correlate the current tasks with tasks previously done. When applicable, have the Team Lead change their estimations after they decided on a number.

__Never look back.__

## Future Projections Are A Waste

Many lean startup books will help you create your lean business canvas, or even a concrete roadmap. Brutalist engineering abolishes any practice that potentially aims at a future. To keep a project going for as long as possible, stakeholders need to believe that their vision will take years to be achieved, and any constructive step towards those goals is harmful.

__Never look forward.__
