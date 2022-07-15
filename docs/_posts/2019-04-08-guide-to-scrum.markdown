---
layout: post
title:  "A Practical Guide To Scrum"
date:   2019-04-08 12:00:00 +0100
categories: sofware engineering scrum
permalink: /scrum-guide
---


##### *NB*: I'm a certified Scrum Master (2014) that has been working with Scrum for almost a decade. This content is not affiliated with or sponsored by any organization. The views expressed here are mine. This document was updated in July 2022.

##### Read time: 20 minutes.

## An implementation recipe of an agile method

More often than not, I see people on Linkedin sharing materials on the theory of Scrum. This text aims at providing concrete examples of how a team can implement Scrum, what to watch out for, and how to conduct yourself in a Scrum team.

What is the goal of a Scrum team member (or, of software engineering in general)? Is it to deliver working software often? No. Your goal in a Scrum team is to deliver the greatest amount of value, in the time you have. Teams must never forget this, being value-oriented is key to success. We must quantify, measure, and increase value.

> A piece of Software that generates no revenue and needs to be remade from scratch has no value.

### Intro: Process Problems

Usually, clients don't understand what they want. Teams have difficulty estimating projects. Scopes change often. Requirements and communication channels are confusing. High turn-over. Client relationships deteriorate. Demotivated team members. Resource constraints.

Scrum aims not at fixing the problems above, they are real, and here to stay. Scrum aims at changing the way we work to address these problems. It changes the mindset of the team. They measure the value delivered, not the amount of features. 

Scrum started in 1994 and it combined disciplines like incremental iterative development, timeboxing, servant leadership, restriction theory, complexity theory, lean development, and more. 

Other methodologies can be great for stable environments, but that's usually not the case. Take waterfall, for instance:

> REQ > ARQ > DSG > COD > TST

Scrum bets on incremental development to deliver value to the stakeholder at every iteration.

#### On Servant Leadership

The leadership theory of Robert K. Greenleaf (1970) describes how a leader is there to facilitate, to serve. It's not the leader's job to control or command - they enable employees to excel at what they're already good at. This renders the role of a "Project Manager" unnecessary. 

The leader is not technical, he's not responsible for the success of the product. He's not responsible for delivering, and he does not demand it from the team. He's empathetic and influential.

#### On The Theory of Constraints, Complexity Theory, and Lean

Drawing from the works of Eliyahu M. Goldratt in *Critical Chain* (1997), the **Theory of Constraints** describes how bottlenecks define the real quality of a product. How interdisciplinary teams working at one thing at a time excel. The team can only be as good as its weakest member.

**Complexity Theory** is about identifying the complexity of the domain one is working on. One can classify their domain by assessing aspects like order vs chaos, stability vs instability, and predictability vs unpredictability. There are four domains: Simple, Complicated, Complex, and Chaotic. Scrum is optimal in the empirical, complex domain. It's about adaptability and agility. Scrum defines time and scope, not which features a team delivers.

**Lean** is about continuous improvement and throwing out wasteful aspects of a process. One could say it's even about throwing away the good ideas. It’s said that users ignore 64% of the features developed. Keep that in mind.

### Roles And Responsibilities

- `Team (DEV)`: cares for the product. Micro management. They design, develop, test, document, and deploy. Self-management. Usually, team sizes range from 3 to 9 people. One of the team members can be the PO, but it’s ideal to have two people for them.

- `Scrum Master (SM)`: cares for the process. People management. Removes obstacles. Does not report the project or sprint status. Develops competence within the team, any skill that the team needs to develop or learn. Coaches the team. Facilitates meetings. Internal feedback. Brings motivation, focus, and alignment. Adds/removes from the process. They're good at methodologies, processes, soft skills, and organizational culture. The SM must never be the same person as the PO.

- `Product Owner (PO)`: cares for the vision. Macro management. Handles clients, users, the vision, the product backlog, the sprint backlog, external feedback, third parties, contracts, finances, PMO, governance, human resources, and so on. He defines goals, together with the team. He's measured by value indicators, not performance. He can change sprint scopes, but never the goal. They're good at business, analysis, and management.


#### On Intrinsic Motivation

According to Jurgen Appelo, founder of Management 3.0, *intrinsic* motivation happens when the PO triggers the team's natural desire to do well and succeed. People have an inner eagerness for self-control and self-direction. In contrast, external motivation takes the shape of stock options, promotions, salary raises, and so on. Which do you think works best in the long term?

He developed the CHAMPFROGS model, which details ten motivators within teams: Curiosity (novelty), Honor (pride), Acceptance (approval), Mastery (competence), Power (influence), Freedom (independence), Relatedness (social), Order (stability), Goal (purpose), and Status (recognition). Can you spot which motivators are intrinsic?

## Processes

### Sprint - Timeboxing

It makes sense to constrain your sprints in weeks. I've seen teams succeed with 1, 2, and 3-week sprints. It doesn't matter which weekday the sprint starts/ends, as long as it's consistent. During the sprint, it makes sense to have as little meetings as possible, to keep the process Lean.

Here's an example of a 2-week sprint's calendar:

`Planning` at Week 1 -  Monday, 11:00 AM to 12:00 PM<br>
`Refinement` at Week 1 - Friday, 1:00 PM to 2:00 PM<br>
`Review` at Week 2 - Friday, 1:30 PM to 2:00 PM<br>
`Retrospective` at Week 2 -  Friday, 2:00 PM to 3:00 PM<br>
`Daily `- Every day, 10:00 AM to 10:15 AM<br>

Here we see that out of 80 hours of work in each sprint, team members will spend 6 in meetings. That means 7.5% of the sprint's time, not counting the time to prepare for them. This is below the <u>average 12%</u> in the market.

### Ready For Sprint (Definition of Ready)

The top-most tasks in a backlog must be items that meet the criteria of being ready to work on. Ready tasks must have business value, and this is the Product Owner's responsibility, to attribute the underlying value. A task can only move into a sprint if the following are true:

1. The task contains Acceptance Criteria that are __Concrete__ and __Non Ambiguous__.
2. The task is __granular__ and __doable__, enough to do in one Sprint.
3. The development team estimated the task.
4. The task contains (low-fidelity) wireframes, information architecture description, API documentation, or any other specs necessary for the team to complete it.
5. The task contains a short description of How To Test it.

#### Acceptance Criteria

```
As a [insert an actor here], 
I would like to [insert action here] 
so that I can [insert a realistic and achievable goal here that has business value].
```

> As a sales representative, I would like to be able to record my customers' date of birth, so that I can prove they are not under age.

#### How To Test

```
Given that [insert a condition here], 
when [insert an event here], 
expect to [insert a result here],
and then [insert a consequence of the result here].
```

> Given that I am a logged-in user, when I am registering a new customer, expect to deny under-aged users' registration.

### Definition Of Done

Tasks will generally exist in the following statuses: __To Do, Doing, Done__. It is paramount to be transparent to everyone when a task is blocked, when it is being worked on, and when it is done. The criteria used to know when a task is considered Done must be transparent. Here is an example:

1. The product meets the acceptance criteria.
1. The feature has been peer-reviewed¹ by a colleague.
2. The team added documentation where needed.
3. The QA team has approved the new version.
4. The pull request has been code reviewed¹ by at least 3 other members.
5. All tests are passing (automated by CI).
6. The code was merged to a development branch, and there is a release version of it.

##### [1] Peer and Code Reviews are not particularly part of Scrum, but practices that are healthy. There's more information about them below.

### Estimation

Measuring stories in complexity (instead of time) is the best practice I've encountered so far. Generally, this is known as Story Points, and points are assigned to tasks using a scale (i.e. Fibonacci). Team members should vote on a value, and reach a consensus. There are many ways to achieve a final estimation, for instance, the <u>Delphi method</u>. I've seen successful teams that only discuss the estimates, and change them to reach the final consensus.

> Tip: there are tons of  "Scrum poker" mobile apps.

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

## Ceremonies

### Refinement

__When:__ before the sprint starts.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look at the top-most, not estimated, backlog tasks, and clarify the requirements on them. During this meeting, the team can discuss technical implementation details, as well as clarify business details. Things that may take place during a Refinement meeting:

> Items that were too big are decomposed into several tasks.<br>
User stories that were not clearly described can be redacted.<br>
Stories can be postponed, blocked, or decommissioned.<br>
A separate investigation or PoC may be needed to figure out if something is technically doable.

### Planning

__When:__ before the sprint starts.<br>
__Who:__ Dev Team and Product Owner.<br>
__Goal:__ the team members should select the number of items from the top of the backlog that they can commit to (see Definition of Done), during the scope of one sprint.

The team should have access to its historic evidence of velocity. This must help in understanding how many story points can be done per sprint, approximately. An example of such history may be a table like:

```
| Sprint # | Team Size | Points Committed | Points Delivered |
| Sprint 1 | 7 People  | 32 Story Points | 32 Story Points  |
| Sprint 2 | 7 People  | 35 Story Points | 33 Story Points  |
| Sprint 3 | 8 People  | 38 Story Points | 36 Story Points  |
```

### Daily Meeting

__When:__ once a day.<br>
__Who:__ Everyone is invited. Dev team is talking.<br>
__Goal:__ Catch up with your colleagues. Help them out.

Examples of things that may be discussed on a daily (it helps if the team members know what they will say before the meeting starts):

```
What have I done?
What am I doing?
Do I need any help?
What will I do?
Is anything blocking me?
```

### Review

__When:__ when the sprint finishes.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look back on the sprint and figure out what is working and what is not in our process.

The review is the meeting in which the Product Owner is given the chance to see what the team has accomplished. The PO investigates the product (or watches a demonstration) and **provides feedback** on the output of each task. It is important to know that the review is not the place to reject stories that are done but to celebrate the team's delivery.

This meeting is a great opportunity to invite clients and stakeholders.

### Retrospective

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

## Extras

### Peer Review

The Peer Review is important because it allows for members to share their work, for teammates to catch up on what's being developed, and help review features. To conduct it:

1. Find anyone who knows the requirements.
2. Show that your solution meets the acceptance criteria.

This should not be a formal meeting, and should not take more than 10 minutes. __If you are the reviewer:__ pay attention to what is being shown to you. Ask questions, and clarify details. You may suggest/discuss other ways to solve the problem. Make sure the definition of Done practices are observed.

### Code Review

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

### Mini-Scopes

Especially on prints larger than 2 weeks, it makes sense to create informal subdivisions of the sprint's scope. For instance, the team agrees that they expect 2 out of the 4 stories to be __Done__ in the first week.

### Burndown Charts

Burndowns are effective to help a team visualize the progress mid-sprint. They are only useful if the teams are looking at them constantly, for instance after each day. Keeping track of the progress is a predictor of success, and a burndown is a great tool for that.

### The Technical Debt Wall

We define technical debt as compromises the team has to make for the sake of delivering on time. It's a technical decision the team knows is not the best. The idea here is to have a wall (that the whole company can see, can be virtual), where each technical debt is added with an owner, a short reason why this decision was made, how it should've been done, and when it will be fixed. 


## Troubleshooting & Debugging (FAQ)

### The 3 biggest mistakes of Scrum teams

I can't remember if I heard this discussion in the [Soft Skills Podcast](softskills.audio), or somewhere else, but this list stuck with me. Here are the mistakes:

1. Allowing the daily meetings to become status reporting.
1. Not looking back when estimating tasks.
1. Not taking action on problems raised at the retrospective.

### What do you mean by Vision?

We can think of vision on three distinct levels: the Product Vision, the Project Vision, and the Process Vision.

- **Product Vision**: define the target audience of your product or application. Define the problems that need to be solved. Define what the users are getting from the solution. How their lives are improving. Define general desired functionality. Define what makes the product unique, compared to the competition. Take inspiration from the Lean Canvas method.

- **Project Vision**: define the project's limitations, in terms of cost and time. Define the required acquisitions (hardware, software, training, resources). Define the risks. Define the necessary human resources. Define technical and architectural aspects of the project.

- **Process Vision**: define and audit the process aspects, in terms of governance, PMO, and certifications. Document the setup of the process, and how it changes. 


### Business value versus technical improvement

Business value refers to new features and things that add value to your client's business. Bug fixes and technical improvements don't add value to the product, but they are expected to happen. I've worked on teams that always left some room for these more technical items (i.e., one day of the week per team member).

### Issue Types: Task, Story, Feature, Bug, Change Request, etc.

I find that each team has its way to call the issues they work on. Also, each tool has its naming conventions. I like to work in terms of Epics subdivided into Stories, and bugs. It doesn't matter how you call your issues, as long as they are small enough to fit in a sprint (remember granularity), can be estimated by the team, and can be documented. Remember the definitions of Ready, and Done.

### Estimating Bugs

I've been a part of debates about whether bugs should be estimated. I don't like making bugs a part of the sprint scope, because they add no value to the product. Keep a separate backlog for bugs. Model and rank bugs based on difficulty versus benefits. Dedicate a couple of days of every sprint to address bugs. Here is a bug template that works:

```
Title: Name of the feature that isn't working as expected.

Environment: what's the device, OS version, build number, browser, screen, ...

Steps to Reproduce: what did you do to make the bug happen?

Expected Result: what did you expect to see?

Actual Result: what did you see that was not expected?
```

I've had the opportunity to work with many great QA professionals. It's very valuable it is to have good QA people on your team. Don't underestimate their value.

### Should incomplete stories be re-estimated?

This is a common question among teams. Given an estimated story that we didn't manage to finish in the sprint, should we re-estimate the effort for the next sprint? The answer is **yes**. Having the story re-estimated will allow you to better prepare the sprint scope and goals.  

### Cross-functional Teams

This concept is tightly related to self-management. The only way the team can be responsible for designing, planning, developing, testing, and releasing is by having all the necessary skills within the team. Companies often think that a Scrum team is only comprised of Software Engineers. This is a misconception. Scrum Teams may contain UI designers, UX designers, Architects, QA, DevOps, and so on. Remember that the whole team must share the same macro goals.

### Self-management versus Project Managers and Tech Leads

When success is measured by the team's progress, as opposed to individual achievement, self-organization comes naturally. Stimulate macro team goals and micro personal goals. The work of the team can only be judged by the PO, only at the review, and it's done based on stakeholder value. Macro goals refer to project milestones, business objectives, and sprint goals. Every other goal and decision that's within a sprint is handled 100% by the team.

> The Scrum Master must never impose rules. He helps the team self-organize via **restrictions**.

Adopting Servant Leadership deprecates the role of the PM. Scrum also doesn't contain the role of a tech lead. A self-organizing team doesn't need technical leadership. They are equipped (and the SM makes sure of that) with all the skills they need to make their decisions.


### Further Reading

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