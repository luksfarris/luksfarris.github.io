---
layout: post
title:  "A Practical Guide To Scrum"
date:   2019-04-08 12:00:00 +0100
categories: sofware engineering scrum
permalink: /scrum-guide
---

# Introduction: An implementation recipe of an agile methodology
More often than not, I see people on Linkedin sharing materials of the theory of Scrum. This text aims at providing concrete examples of how Scrum can be implemented, what to watch out for, and how to conduct yourself in a Scrum team.

What is the goal of a Scrum team member (or, of software engineering in general)? Is it to deliver working software periodically? No. Your goal in a Scrum team is to deliver the maximum amount of value, in the time you are given. Teams must never forget this, being value-oriented is key to success. Value must be quantified, measured, and increased.

> A piece of Software that generates no revenue and needs to be remade from scratch has no value.

# Roles And Responsibilities

`TODO`

# Processes

## Sprint - Timeboxing

It makes sense to constraint your sprints in weeks. I've seen teams successfully work with 1, 2, and 3 week sprints. It doesn't really matter which week day the sprint starts/ends, as long as it's consistent. During the sprint, it makes sense to keep the meetings to a minimum, to keep the process lean.

Here's an example of a 2-week sprint's calendar:

`Planning` at Week 1 -  Monday, 11:00AM to 12:00PM<br>
`Refinement` at Week 1 - Friday, 1:00PM to 2:00PM<br>
`Review` at Week 2 - Friday, 1:30PM to 2:00PM<br>
`Retrospective` at Week 2 -  Friday, 2:00PM to 3:00PM<br>
`Daily `- Every day, 10:00AM to 10:15AM<br>

Here we see that out of 80 hours of work in each sprint, team members will spend 6 in meetings. That means 7.5% of the sprint's time, not counting the time to prepare for them. This is below the <u>average 12%</u> in the market.

## Ready For Sprint

The top-most tasks in a backlog must be items that meet the criteria of being ready to work on. Tasks that are ready must have business value, and this is the Product Owner's responsibility, to attribute the underlying value. A task can only be moved into a sprint if the following are true:

1. The task contains an Acceptance Criteria that is __Concrete__ and __Non Ambiguous__.
1. The task is __granular__ and __doable__, enough to be done in one Sprint.
1. The task was estimated by the development team.
1. The task contains wireframes, information architecture description, API documentation or any other specs necessary for it to be completed.
1. The task contains a short description of How To Test it.

### Acceptance Criteria

```
As a [insert an actor here], 
I would like to [insert an action here] 
so that I can [insert a realistic and achievable goal here that has business value].
```

> As a sales representative, I would like to be able to record my customers' date of birth, so that I can appropriately prove they are not under age.

### How To Test

```
Given that [insert a condition here], 
when [insert an event here], 
expect to [insert a result here],
and then [insert a consequence of the result here].
```

> Given that I am logged in user, when I am registering a new customer, expect to deny under aged users registration.

## Definition Of Done

Tasks will generally exist in the following statuses: __To Do, Doing, Done__. It is extremely important to be transparent to everyone when something is not being worked on, when it is being worked on, and when it is done. The criteria used to know when a task should be considered Done must be established clearly. Here is an example:

1. Product meets the acceptance criteria.
1. Feature has been peer-reviewed¹ by a colleague.
1. Documentation was added where needed.
1. New version has been approved by QA.
1. Pull request has been code reviewed¹ by at least 3 other members.
1. All tests are passing (automated by CI).
1. Code has been merged to a development branch, and there is a release version of it.

##### [1] Peer and Code Reviews are not particularly part of Scrum, but practices that I consider healthy. There's more information about them below.

## Estimation

Measuring stories in complexity (instead of time) is the best practice I've encountered so far. Generally, this is known as Story Points, and points are assigned to tasks using a scale (i.e. Fibonacci). Team members should vote independently on a value, and reach a consensus. There are many ways to achieve a final estimation, for instance the <u>Delphi method</u>. I've seen successful teams that just discuss the estimates, and change them to reach the final consensus.

> Tip: there are tons of  "Scrum poker" mobile apps.

It is also incredibly important to always keep the same reference of how many points a task should be. For this it is important that all team members share the same reference (possibly can be printed and taken to all estimation sessions). Here's an example:

```
0 Story Points: Change in a configuration file, does not require testing.
1 Story Point: Remove a parameter that was not being used from a web service. Changing the layout of a button to have a different background image, and a different title.
2 SP: A new Boolean parameter in a web service, that orders results ascending or descending. An about page that displays information, and has a few buttons.
3 SP: A new GET web service that selects from the database and returns a JSON with the data. A login page with a few buttons, with all validations, that authenticates users, show errors, and forwards users to their home page.
5 SP: 4 web service calls for Creating, Reading, Updating, and Removing models from the database. A real time dashboard screen that gets data from web sockets and allows for users to filter the data being displayed.
8 SP: A web service that has to use a new (unknown to the team) technology to get data into a weird format and perform complex business logic with it, and has to do all of this in under 10ms. A large data table, with paging, sorting, filtering, reordering, adding new items, removing items, updating fields, exporting, refreshing.
13 SP: This task is possibly to big, and should be broken down into more granular tasks. This task is possibly to big, and should be broken down into more granular tasks.
21 SP: Hope we never meet this monster. ゴジラ, ゴジラ- screamed the villagers in panic, when seeing a 21-point story.
```

# Ceremonies

## Refinement

__When:__ before the sprint starts.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look at the top-most, not estimated, backlog tasks, and clarify the requirements on them. During this meeting the team can discuss technical implementation details, as well as clarifying business details. Things that may take place on a Refinement meeting:

> Items that were too big are decomposed in several tasks.<br>
User stories that were not clearly described can be redacted.<br>
Stories can be postponed, blocked, decommissioned.<br>
Separate investigation or PoC may be needed to figure out if something is technically doable.

## Planning

__When:__ before the sprint starts.<br>
__Who:__ Dev team, and Product Owner.<br>
__Goal:__ the team members should select the amount of items from the top of the backlog that they can commit to (see Definition of Done), during the scope of one sprint.

Ideally, the team has access to its historic evidence of velocity. This must help in understanding how many story points can be done per sprint, approximately. An example of such history may be a table like:

```
| Sprint # | Team Size | Points Commited | Points Delivered |
| Sprint 1 | 7 People  | 32 Story Points | 32 Story Points  |
| Sprint 2 | 7 People  | 35 Story Points | 33 Story Points  |
| Sprint 3 | 8 People  | 38 Story Points | 36 Story Points  |
```

## Daily Meeting

__When:__ once a day.<br>
__Who:__ Everyone is invited. Dev team is talking.<br>
__Goal:__ Catch up with your colleagues. Help them out.

Example of things that may be discussed in a daily (it helps if the team members know what they will say before the meeting starts):

```
What have I done?
What am I doing?
Do I need any help?
What will I do?
Is anything blocking me?
```

## Review

__When:__ when the sprint finishes.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look back on the sprint and figure out what is working and what is not in our process.

The review is the meeting in which the Product Owned is given the chance to see what the team has accomplished. The PO is responsible for investigating the product (or watching a demonstration) and providing his feedback to the output of each task. It is important to know that the review is not the place to reject stories that are done, but to celebrate the team's delivery.

This meeting is a great opportunity to invite clients and stakeholders.

## Retrospective

__When:__ after the Review, before the next sprint starts.<br>
__Who:__ Dev Team, Scrum Master, Product Owner.<br>
__Goal:__ to look back on the sprint and figure out what is working and what is not in our process.

Examples of things to discuss on a Retrospective:

```
How did the estimates turn out?
Did the team meet their sprint goals or not?
Are we happy with the delivery?
Is anything distracting us?
Did we have any unresolved conflicts?
Are there any bottlenecks slowing us down?
```

# Extras

## Peer Review

The Peer Review is important because it allows for members to share their work, and for teammates to catch up on what's being developed, and help review features. To conduct it:

1. Find anyone who knows the requirements.
1. Demonstrate that your solution meets the acceptance criteria.

This should not be a formal meeting, and should not take more than 10 minutes. __If you are the reviewer:__ pay attention to what is being shown to you. Ask questions, and clarify details. You may suggest/discuss other ways to solve the problem. Make sure the definition of Done practices are observed.

## Code Review

The Code Review is a very important part of the Software Development cycle. Keep in mind that code formatting, and unit tests should be handled by the Linting tool, and the Continuous Integration tool. Here is an example checklist of things to check when reviewing someone's code:

- __The code is readable (easily understood)__
- The project's architecture is being respected
- New files match the folder structure
- Classes/functions/variables were given meaningful names
- Coding best practices are being respected
- Design patterns are being respected/used
- No logic duplication is going on
- The code is modular
- Comments make sense and are necessary
- There's no unnecessary debug code, or unnecessary logs
- Unit tests were created
- Code does not introduce security breaches
- There is documentation where needed

## Mini-Scopes

Specially on prints larger than 2 weeks, it makes sense to create informal subdivisions of the sprint's scope. For instance, the team agrees that they expect a 2 out of the 4 stories to be __Done__ in the first week.

## Burndown Charts

Burndowns are effective to help a team visualize the progress mid-sprint. They are only useful if the teams are looking at them constantly, for instance after each daily. Keeping track of the progress constantly is a predictor of success, and the burndown is a great tool for that.

## Deploy Ceremony

`TO DO`

# Troubleshooting & Debugging

### The 3 biggest mistakes of Scrum teams

I can't remember if I hear  this discussion in the [Soft Skills Podcast](softskills.audio), or somewhere else, but this list stuck with me. Here are the mistakes:

1. Allowing the daily meetings to become status reporting.
1. Not looking back when estimating tasks.
1. Not taking action on problems raised at the retrospective.


### Granularity versus delivering continuously

`TO DO`

### Business value versus technical improvement

`TO DO`

### Task, Story, Feature, Bug, Change Request, etc.

`TO DO`

### Estimating Bugs

`TO DO`

### Stories not completed should be re-estimated?

`TO DO`

### Cross-functional Teams

`TO DO`

### Self-management versus Project Managers and Tech Leads

`TO DO`