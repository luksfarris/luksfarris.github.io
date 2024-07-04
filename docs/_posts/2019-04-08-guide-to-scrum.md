---
layout: post
title:  "A Practical Guide To Scrum"
date:   2019-04-08 12:00:00 +0100
categories: sofware engineering scrum
permalink: /scrum-guide
---


##### *NB*: I'm a certified Scrum Master (2014) that has been working with Scrum for almost a decade. This content is not affiliated with or sponsored by any organization. The views expressed here are mine. This document was updated many times over the years.

##### Read time: 20 minutes.

<img src="/assets/img/scrum/rugby.jpeg">

> Fig 1: the term Scrum comes from Rugby players working closely together.

### An implementation recipe of an agile methodology

I often see people on Linkedin sharing materials on Agile. Why create more material on this topic? I feel most articles lack concrete examples of how a team can implement Scrum, what to watch out for, and how to conduct yourself in a Scrum team. Also, they rarely mention the theory behind it.

What is the goal of a Software Engineer (or of Software Engineering in general) inside a team? Is it to deliver working software frequently? No. Your goal is to deliver the greatest amount of value to your stakeholder, within time you are given. Teams must never forget this, being value-oriented is key to success. We must quantify, measure, and increase value.

So ask yourself: is my project an asset or a liability? Does it generate more value than it consumes? 

### 1. Introduction: Pesky Process Problems

Clients don't understand what they want (designers know this well). Teams have difficulty estimating projects. Scopes change often. Requirements and communication channels are confusing. Your business has a high turn-over. Client relationships deteriorate over time. Team members lose motivation. Resources get constrained. Projects get cancelled. People get reallocated.

Sounds familiar? Sorry, but Scrum won't solve these problems by itself. They are part of any business. Scrum changes the way we work, so that we can address them. It shifts the attention of them team, to have them measure value delivered, instead of features. 

Scrum started in 1994 and it combines disciplines like: Incremental Iterative Development, Timeboxing, Servant Leadership, Theory of Constraints, Complexity Theory, Lean, and more. 

Other methodologies are great for stable environments, but that's usually not the case in Software Engineering. Take Waterfall, for instance:

<img src="/assets/img/scrum/waterfall.png">
> Fig 2: the waterfall process in a nutshell. Each step has deliverables, and the last deliverable is a finished product.

Scrum bets on *incremental* development to deliver *value* to the stakeholder at every *iteration*.

The **Servant Leadership** theory of Robert K. Greenleaf (1970) describes how a leader is there to facilitate, to serve. It's not the leader's job to control or command - they enable employees to excel at what they're already good at. This renders the role of a "Project Manager" unnecessary. 

The leader is not technical, he's not responsible for the success of the product. He's not responsible for delivering, and he does not demand it from the team. He's empathetic and influential.

Drawing from the works of Eliyahu M. Goldratt in *Critical Chain* (1997), the **Theory of Constraints** describes how bottlenecks define the real quality of a product. How interdisciplinary teams working at one thing at a time excel. The team can only be as good as its weakest member.

**Complexity Theory** is about identifying the complexity of the domain one is working on. One can classify their domain by assessing aspects like: order vs chaos, stability vs instability, and predictability vs unpredictability. There are four domains: Simple, Complicated, Complex, and Chaotic. Scrum is optimal in the empirical, complex domain. It's about adaptability and agility. Scrum defines time and scope, not which features a team delivers.

**Lean** is about continuous improvement and throwing out wasteful aspects of a process. One could say it's even about throwing away the good ideas. Users ignore 64% of the features developed ([See XP 2002](https://martinfowler.com/articles/xp2002.html)). Keep that in mind.


<img src="/assets/img/scrum/pillars.png">

> Fig 3: the 5 values of Scrum are: Courage, Focus, Commitment, Respect, and Openness. The values are in the middle to make a point. The principles are the ones from the [Agile Manifesto](https://agilemanifesto.org/principles.html). The roles are the Dev team, the Product Owner, and the Scrum Master. The artifacts are the product backlog, the product increments, and the sprint backlog. The ceremonies are the planning, the daily stand-up, the review, and the retrospective. 

I see these values as very practical things, and very close to the daily worries of Software Engineers. Take Courage, for instance: it takes courage to say *no* to colleagues with ad-hoc requests when you're busy. Focus is that constant reminder to work in one thing at a time (or the anxiety of having too much on your plate). Commitment to me is about delivering what you agreed to, even if it requires more work than anticipated. Respect in my experience is not working around others, and giving them the time they need to deliver the best solution they can. Openness is letting your team know when things are not going as expected, it must trump our egos.

### 2. Roles

Scrum traditionally divides people into three roles, with distinct responsibilities.

- `Team (DEV)`: care for the product. Manage the micro. They design, develop, test, document, and deploy. Self-management. Usually, team sizes range from 3 to 9 people. One of the team members can be the PO, but it’s ideal to have two people for them.

- `Scrum Master (SM)`: care for the process. Enable the team. Remove obstacles. Do not report the project or sprint status. Develop competence within the team, any skill that the team needs to learn. Coach the team. Facilitate meetings. Internal feedback. Bring motivation, focus, and alignment. Add and remove from the process. They're good at methodologies, processes, soft skills, and organizational culture. The SM must never be the same person as the PO. Can be shared between teams.

- `Product Owner (PO)`: care for the vision. Manage the macro. Handle clients, users, the vision, the product backlog, the sprint backlog, external feedback, third parties, contracts, finances, PMO, governance, human resources, and so on. They define goals, together with the team. They're measured by value indicators, not performance. They can change sprint scopes, but never the goal. They're good at business, analysis, and management. Can be shared between teams.

#### 2.1 A Word On Intrinsic Motivation, And The Role Of A Leader

According to Jurgen Appelo, founder of Management 3.0, *intrinsic* motivation happens when the environment triggers the team's natural desire to do well and succeed. People have an inner eagerness for self-control and self-direction. In contrast, external motivation takes the shape of stock options, promotions, salary raises, and so on. Which do you think works best in the long term?

He developed the **CHAMPFROGS** model, which details ten motivators within teams: Curiosity (novelty), Honor (pride), Acceptance (approval), Mastery (competence), Power (influence), Freedom (independence), Relatedness (social), Order (stability), Goal (purpose), and Status (recognition). Can you spot which motivators are intrinsic and extrinsic?


### 3. Ceremonies

#### 3.1 Planning

__When:__ before the sprint starts.<br>
__Who:__ Dev Team and Product Owner.<br>
__Goal:__ the team members should select the number of items from the top of the backlog that they can commit to (see Definition of Done), during the scope of one sprint.

The team should have access to its historic evidence of velocity. This must help in understanding how many story points can be done per sprint, approximately. An example of such history may be a table like:


| Sprint # | Team Size | Points Committed | Points Delivered |
| -------- | --------- | ---------------- | ---------------- |
| Sprint 1 | 7 People  | 32 Story Points  | 32 Story Points  |
| Sprint 2 | 7 People  | 35 Story Points  | 33 Story Points  |
| Sprint 3 | 8 People  | 38 Story Points  | 36 Story Points  |


#### 3.2 Daily Meeting

__When:__ once a day.<br>
__Who:__ Everyone is invited. Dev team is talking.<br>
__Goal:__ Catch up with your colleagues. Help them out.

Examples of things that may be discussed on a daily (it helps if the team members know what they will say before the meeting starts):

```
What have I done?
What am I doing?
What will I do?
Do I need any help? Is anything blocking me?
```

#### 3.3 Review

__When:__ when the sprint finishes.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look back on the sprint and figure out what is working and what is not in our process.

The review is the meeting in which the Product Owner is given the chance to see what the team has accomplished. The PO investigates the product (or watches a demonstration) and **provides feedback** on the output of each task. It is important to know that the review is not the place to reject stories that are done but to celebrate the team's delivery.

This meeting is a great opportunity to invite clients and stakeholders.

#### 3.4 Retrospective

__When:__ after the Review, before the next sprint starts.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look back on the sprint and figure out what is working and what is not in our process.

Examples of things to discuss in a Retrospective:

```
How did the estimates turn out?
Did the team meet their sprint goals or not?
Are we happy with the delivery?
Is anything distracting us?
Did we have any unresolved conflicts?
Are there any bottlenecks slowing us down?
```

The retrospective only works when the outcomes of the meeting are agreed, documented, prioritized, and assigned specific owners and timelines. There are many retrospective games out there, but they all seem to revolve around brainstorming things that were done well, and things that can be improved. I've also seen teams break these categories in levels like Team, Department, Company, and External.

#### 3.5 Refinement (Bonus)

__When:__ before the sprint starts.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look at the top-most, not estimated, backlog tasks, and clarify the requirements on them. During this meeting, the team can discuss technical implementation details, as well as clarify business details. Things that may take place during a Refinement meeting:

> Items that were too big are decomposed into several tasks.<br>
User stories that were not clearly described can be redacted.<br>
Stories can be postponed, blocked, or decommissioned.<br>
A separate investigation or PoC may be needed to figure out if something is technically doable.

### 4. Sprint And Artifacts

#### 4.1 Sprint Scheduling

It makes sense to constrain your sprints in weeks. I've seen teams succeed with 1, 2, and 3-week sprints. It doesn't matter which weekday the sprint starts/ends, as long as it's consistent. During the sprint, it makes sense to have as little meetings as possible, to keep the process Lean.

Here's an example of a 2-week sprint's calendar:

`Planning` at Week 1 -  Monday, 11:00 AM to 12:00 PM<br>
`Refinement` at Week 1 - Friday, 1:00 PM to 2:00 PM<br>
`Review` at Week 2 - Friday, 1:30 PM to 2:00 PM<br>
`Retrospective` at Week 2 -  Friday, 2:00 PM to 3:00 PM<br>
`Daily `- Every day, 10:00 AM to 10:15 AM<br>

Here we see that out of 80 hours of work in each sprint, team members will spend 6 in meetings. That means 7.5% of the sprint's time, not counting the time to prepare for them. This is below the <u>average 12%</u> in the market.

#### 4.2 Ready For Sprint (Definition of Ready)

The top-most tasks in a backlog must be items that meet the criteria of being ready to work on. Ready tasks must have business value, and this is the Product Owner's responsibility, to attribute the underlying value. A task can only move into a sprint if the following are true:

1. The task contains Acceptance Criteria that are __Concrete__ and __Non Ambiguous__.
2. The task is __granular__ and __doable__, enough to do in one Sprint.
3. The development team estimated the task.
4. The task contains (low-fidelity) wireframes, information architecture description, API documentation, or any other specs necessary for the team to complete it.
5. The task contains a short description of How To Test it.

#### 4.3 Acceptance Criteria

```
As a [insert an actor here], 
I would like to [insert action here] 
so that I can [insert a realistic and achievable goal here that has business value].
```

> As a sales representative, I would like to be able to record my customers' date of birth, so that I can prove they are not under age.

#### 4.4 How To Test

```
Given that [insert a condition here], 
when [insert an event here], 
expect to [insert a result here],
and then [insert a consequence of the result here].
```

> Given that I am a logged-in user, when I am registering a new customer, expect to deny under-aged users' registration.

#### 4.5 Definition Of Done

Tasks will generally exist in the following statuses: __To Do, Doing, Done__. It is paramount to be transparent to everyone when a task is blocked, when it is being worked on, and when it is done. The criteria used to know when a task is considered Done must be transparent. Here is an example:

1. The product meets the acceptance criteria.
1. The feature has been peer-reviewed¹ by a colleague.
2. The team added documentation where needed.
3. The QA team has approved the new version.
4. The pull request has been code reviewed¹ by at least 3 other members.
5. All tests are passing (automated by CI).
6. The code was merged to a development branch, and there is a release version of it.

##### [1] Peer and Code Reviews are not particularly part of Scrum, but practices that are healthy. There's more information about them below.

#### 4.6 Estimation

Measuring stories in complexity (instead of time) is the best practice I've encountered so far. Generally, this is known as Story Points, and points are assigned to tasks using a scale (i.e. Fibonacci). Team members should vote on a value, and reach a consensus. There are many ways to achieve a final estimation, for instance, the <u>Delphi method</u>. I've seen successful teams that only discuss the estimates, and change them to reach the final consensus 

##### Tip: there are tons of  "Scrum poker" mobile apps.

It is also important to always keep the same reference of how many points a task should be. For this, all team members must share the same reference (the team could print it and take it to all estimation sessions). Here's an example:

```
0 Story Points: Change in a configuration file, does not require testing.
1 Story Point: Remove a parameter that was not being used from a web service. Changing the layout of a button to have a different background image, and a different title.
2 SP: A new Boolean parameter in a web service, that orders results ascending or descending. An about page that displays information, and has a few buttons.
3 SP: A new GET web service that selects from the database and returns a JSON with the data. A login page with a few buttons, with all validations, that authenticates users, shows errors and forwards users to their home page.
5 SP: 4 web service calls for Creating, Reading, Updating, and Removing models from the database. A real-time dashboard screen that gets data from web sockets and allows users to filter the data being displayed.
8 SP: A web service that has to use a new (unknown to the team) technology to get data into a weird format and perform complex business logic with it, and has to do all of this in under 10ms. A large data table, with paging, sorting, filtering, reordering, adding new items, removing items, updating fields, exporting, and refreshing.
13 SP: This task is too big, and should be broken down into more granular tasks.
21 SP: Hope we never meet this monster. ゴジラ, ゴジラ- screamed the villagers in panic, when seeing a 21-point story.
```

### 5. Extras

#### 5.1 Peer Review

The Peer Review is important because it allows for members to share their work, for teammates to catch up on what's being developed, and help review features. To conduct it:

1. Find anyone who knows the requirements.
2. Show that your solution meets the acceptance criteria.

This should not be a formal meeting, and should not take more than 10 minutes. __If you are the reviewer:__ pay attention to what is being shown to you. Ask questions, and clarify details. You may suggest/discuss other ways to solve the problem. Make sure the definition of Done practices are observed.

#### 5.2 Code Review

The Code Review is a very important part of the Software Development cycle. Keep in mind that code formatting and unit tests should be handled by the Linting tool and the Continuous Integration tool. Here is an example checklist of things to check when reviewing someone's code:

- __The code is readable (easily understood)__
- The project's architecture is being respected
- New files match the folder structure
- Classes/functions/variables were given meaningful names
- Coding best practices are being respected
- Design patterns are being respected/used
- No logic duplication is going on
- The code is modular
- Comments make sense and are necessary
- There's no unnecessary debug code or unnecessary logs
- Unit tests were created
- Code does not introduce security breaches
- There is documentation where needed

#### 5.3 Mini-Scopes

Especially on prints larger than 2 weeks, it makes sense to create informal subdivisions of the sprint's scope. For instance, the team agrees that they expect 2 out of the 4 stories to be __Done__ in the first week.

#### 5.4 Burndown Charts

Burndowns are effective to help a team visualize the progress mid-sprint. They are only useful if the teams are looking at them constantly, for instance after each day. Keeping track of the progress is a predictor of success, and a burndown is a great tool for that.

#### 5.5 The Technical Debt Wall

We define technical debt as compromises the team has to make for the sake of delivering on time. It's a technical decision the team knows is not the best. The idea here is to have a wall (that the whole company can see, can be virtual), where each technical debt is added with an owner, a short reason why this decision was made, how it should've been done, and when it will be fixed. 


### 6. Troubleshooting & Debugging (FAQ)

#### 6.1 The 3 biggest mistakes of Scrum teams

I can't remember if I heard this discussion in the [Soft Skills Podcast](softskills.audio), or somewhere else, but this list stuck with me. Here are the mistakes:

1. Allowing the daily meetings to become status reporting.
1. Not looking back when estimating tasks.
1. Not taking action on problems raised at the retrospective.

#### 6.2 What do you mean by Vision?

We can think of vision on three distinct levels: the Product Vision, the Project Vision, and the Process Vision.

- **Product Vision**: define the target audience of your product or application. Define the problems that need to be solved. Define what the users are getting from the solution. How their lives are improving. Define general desired functionality. Define what makes the product unique, compared to the competition. Take inspiration from the Lean Canvas method.

- **Project Vision**: define the project's limitations, in terms of cost and time. Define the required acquisitions (hardware, software, training, resources). Define the risks. Define the necessary human resources. Define technical and architectural aspects of the project.

- **Process Vision**: define and audit the process aspects, in terms of governance, PMO, and certifications. Document the setup of the process, and how it changes. 


#### 6.3 Business value versus technical improvement

Business value refers to new features and things that add value to your client's business. Bug fixes and technical improvements don't add value to the product, but they are expected to happen. I've worked on teams that always left some room for these more technical items (i.e., one day of the week per team member).

#### 6.4 Issue Types: Task, Story, Feature, Bug, Change Request, etc.

I find that each team has its way to call the issues they work on. Also, each tool has its naming conventions. I like to work in terms of Epics subdivided into Stories, and bugs. It doesn't matter how you call your issues, as long as they are small enough to fit in a sprint (remember granularity), can be estimated by the team, and can be documented. Remember the definitions of Ready, and Done.

#### 6.5 Estimating Bugs

I've been a part of debates about whether bugs should be estimated. I don't like making bugs a part of the sprint scope, because they add no value to the product. Keep a separate backlog for bugs. Model and rank bugs based on difficulty versus benefits. Dedicate a couple of days of every sprint to address bugs. Here is a bug template that works:


| **Title** | Name of the feature that isn't working as expected. |
| **Environment** | what's the device, OS version, build number, browser, screen, ... |
| **Steps to Reproduce** | what did you do to make the bug happen? |
| **Expected Result** | what did you expect to see? |
| **Actual Result** | what did you see that was not expected? |


I've had the opportunity to work with many great QA professionals. It's very valuable it is to have good QA people on your team. Don't underestimate their value.

#### 6.6 Should incomplete stories be re-estimated?

This is a common question among teams. Given an estimated story that we didn't manage to finish in the sprint, should we re-estimate the effort for the next sprint? The answer is **yes**. Having the story re-estimated will allow you to better prepare the sprint scope and goals.  

#### 6.7 Cross-functional Teams

This concept is tightly related to self-management. The only way the team can be responsible for designing, planning, developing, testing, and releasing is by having all the necessary skills within the team. Companies often think that a Scrum team is only comprised of Software Engineers. This is a misconception. Scrum Teams may contain UI designers, UX designers, Architects, QA, DevOps, and so on. Remember that the whole team must share the same macro goals.

#### 6.8 Self-management versus Project Managers and Tech Leads

When success is measured by the team's progress, as opposed to individual achievement, self-organization comes naturally. Stimulate macro team goals and micro personal goals. The work of the team can only be judged by the PO, only at the review, and it's done based on stakeholder value. Macro goals refer to project milestones, business objectives, and sprint goals. Every other goal and decision that's within a sprint is handled 100% by the team.

> The Scrum Master must never impose rules. He helps the team self-organize via **restrictions**.

Adopting Servant Leadership deprecates the role of the PM. Scrum also doesn't contain the role of a tech lead. A self-organizing team doesn't need technical leadership. They are equipped (and the SM makes sure of that) with all the skills they need to make their decisions.


### 7. Further Reading

- Servant Leadership ([link](https://www.greenleaf.org/what-is-servant-leadership/))
- Critical Chain ([link](https://en.wikipedia.org/wiki/Critical_Chain_(novel)))
- Management 3.0 ([link](https://management30.com/))
- Project Complexity ([link](https://en.wikipedia.org/wiki/Project_complexity))
- Business Model Canvas ([link](https://en.wikipedia.org/wiki/Business_Model_Canvas))
- The Lean Startup ([link](http://theleanstartup.com/))
- 12 principles of the Agile Manifesto ([link](https://agilemanifesto.org/principles.html))
- Timeboxing ([link](https://en.wikipedia.org/wiki/Timeboxing))
- eXtreme Programming ([link](http://www.extremeprogramming.org/))
- Feature-Driven Development (FDD) ([link](https://en.wikipedia.org/wiki/Feature-driven_development))
- Behavior-Driven Development (BDD) ([link](https://en.wikipedia.org/wiki/Behavior-driven_development))


### 8. Team Health Checks

The following are some forms that I ran in the past, especially nearing the end of larger projects. I recommend running forms anonymously. I also recommend adding a free-form question at the end of each form for open feedback (on the form, the process, the team, the company, ...).

The answers are of these are supposed to be a 5-point likert scale (1 = Disagree, 2 = Somewhat disagree, 3 = Doubt, 4 = Somewhat agree, 5 = Agree). The goal here is to report the median of each answer, and analyse where the team is failing to meet the desired standard. 

The team should discuss concrete improvements on how the process can be improved. The outcome would be a list of action points and owners. Alternatively, the facilitator would pick the points where the team is struggling the most and invite open discussion.


#### 8.1 Agile Temperature

This is an 8-question form for teams of all levels. Every question has a title, context, and a description of what a perfect environment would look like.

> *Note: Not sure who originally translated this from a foreign language, but I revisited the translation recently, and it may not be exactly the same content the original source.*


1) **Meeting agreements** (Alignment, Transparency, and Respect)
   
   *People like to work in an atmosphere of trust. To develop trust inside the team we need to meet agreements and keep small promises. If it is not easy to keep promises and agreements, discuss reasons and options to adapt before abandoning them.*
   
   (max score: Team accepts only rules that are agreed by whole team, and everyone feels involved).

2) **Following Common Goals**  (Synchronization, Clarity, Client Relationship, Focus)
   
   *Being focused on common business goal, increase energy, collaboration and involvement of team members. People focused on result have common vision, and start seeing additional opportunities.*
   
   (max score: All team members clearly understand and follow their goals)
3) **Expression Of Gratitude** (Openness, Positive thinking, Gratitude Recognition)
   
   *People appreciate feeling recognized by other people, for their achievements and contributions. Expression of sincere recognition creates an environment where people respect each other.*
   
   (max score: On a regular basis, people say thank you and appreciate achievements of each other depending on the contribution of each team member)
4) **Using Shared Interestes** (Alignment, Team Collaboration, Win-Win Awareness) 
   
   *Teamwork is more important than personal goals when a team has a similar understanding and common vision; they realize the benefits of working collaboratively rather than competitively. Interests are expressions of values and visions.*
   
   (max score: Team members know each other's goals, their intersection and how to use them when resolving conflicts)

5) **Correct Engagement** (Cross-functional, Minimize Bus factors, Involvement, Engagement, Commitment, Decision making, Team work)
   *People need to feel involved in common work. That happens when they exchange information, delegate tasks, express and take into account different points of view. Typical example of insufficient involvement is making global impact decisions without engaging all team members.*
   
   (max score: Team members exchange information and make decisions. All team members are involved in realization)

6) **Expression of realistic optimism** (Comfort zone, Challenge, Unlock potential, Positive thinking, Courage)
   *It is important to believe in a positive future. Optimism is enhanced through an understanding of benefits and correlation of some difficulties. It needs an open and in-time discussion of problems.  An environment of support for each other, and positive thinking, is also important.*
   
   (max score: All team members understand goals and believe in their achievement. They maintain an optimistic mood even when difficulties appear)

7) **Resistance of blames and complaints** (Shared responsibility, Healthy Communication, Warm heart & Cold Mind, Focus on result)
   *The state of drama costs too much energy. Better to be focused on solving problems instead of searching for the responsible person for some unfortunate circumstance. If you don’t join “the club” of victims and aggressors, team culture will be more healthy.*
   
   (max score: It is not Ok to attack or defend. Team members avoid such ways of not taking responsibility, and help each other by giving feedback. People are mature enough to accept feedback)

8) **Clarification of functions, roles, accountability and authority** (Leadership, Expectations, Transparency, Flat structure, Responsibility)
   *Success is measured by meeting expectations. Clear roles, functions, accountability, and power for their realization, helps the team work more successfully.*

   (max score: Expectations from roles in the team are clear and agreed. Areas of responsibility are distributed and provided with appropriate autonomy and authority)


#### 8.2 Agile Principles Check

This is a form with 12 short questions, meant to be open/broad, for a more mature (mid-senior) team.

1. **Produce value early** - Our highest priority is to satisfy the customer through early and continuous delivery of valuable software
2. **Welcome change** - Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage
3. **Iterative delivery** - Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
4. **Daily business collaboration** - Business people and developers must work together daily throughout the project.
5. **Trusted, motivated team** - Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
6. **Face to face communication** - The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
7. **Working software** - Working software is the primary measure of progress.
8. **Sustainable pace** - Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
9. **Technical excellence** - Continuous attention to technical excellence and good design enhances agility. 
10. **Focus on simplicity** - Simplicity - the art of maximizing the amount of work not done - is essential
11. **Self-organizing team** - The best architectures, requirements, and designs emerge from self-organizing teams.
12. **Reflect & adjust** - At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.