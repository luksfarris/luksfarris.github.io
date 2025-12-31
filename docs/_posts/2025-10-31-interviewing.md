---
layout: post
title: "Interviewing Notes"
date: 2025-10-31 12:00:00 +0100
modified_date: 2025-11-25
author: Lucas Farris
categories: software-engineering
permalink: /interview
---


*I'm writing this one retroactively, and filing it under October. This is a collection of high-level notes I have for interviewing. I think there's bits that apply to more than just computer science jobs, but it's mostly about SWE.*

----

## Set Your Financial Goal

I believe financial goals are primary to career or culture. Lay yours out clearly, and keep it in mind at all interviews. Set a realistic goal and don't settle for less.
Be prepared to negotiate for your goal with data.

Estimating Total Compensation can be very tricky in some countries (definitely true in the EU), and companies will try to bamboozle you into benefits that don't really matter in the long term. Here are a few things to consider:

- What is the base salary, and how much of that will you be paying in tax? You want to be able to tell your net income from the base salary.
- What other additional financial monthly benefits will you get? Maybe it's a 50 USD personal equipment budget that you can cash, maybe it's a phone that you can cash, maybe a gym membership that you can cash.
- What tax breaks or deductions are available to you?
- What yearly or regular bonuses are available to you? Assuming your performance meets expectations, what percentage of that would you normally receive?
- Are there stock options, equity, virtual shares? What are the conditions for those?
- What private pension plans does the company offer? What percentage of your salary do they match?

Write all of this down. Make sure you know exactly where you are on these, and what the company will offer you. Being upfront about this in the first HR interview is important so nobody's time is wasted.

### Other Career Aspects

Companies are usually free to reassign you to a different role than the one you applied for. This may mean assigning you a more senior role, or a more junior role. This may also mean assigning you to a horizontally different role than the one you applied for. Maybe you applied for marketing but they saw in you a fit for a data analyst. You have to be open to this possibility, as long as your financial goals are met.

There are many secondary aspects about a job to consider, like growth potential, work-life balance, relocation, medical, dental, possibility to work remotely, etc. I will not discuss these as they are secondary in my view, and somewhat personal.

## HR Screening

Prepare to this by reading the job description thoroughly and reading about the company. What they do, what kind of projects they have. Read their whitepapers or posts. See if you know anyone working there.
Understand if what is being offered is what you expect. Be prepared to discuss:

- your current work and your experience
- why you're looking for a new job
- your financial goals and learn what is the range for the position
- your notice period, how soon you can start
- what are all the next steps, and how you can best prepare for them

Be polite and refer to people using their names.


## Technical & System Design Interviews

Make sure you prepare well for this. Maybe it will be a take-home assignment, maybe a whiteboard interview, maybe a pair programming session. You should know what to expect, and what you should know.



{% include admonition.html 
type="Warning" 
body="
Don't spend time on advanced/fringe topics until you mastered the base. Know the basics through and through.
"
%}

You should be very good at producing source code fast. Do as much LeetCode as you can. You should know the basics very well. Some examples:

- For a software engineering role, you should know everything there is to know about data structures and algorithms. 
- For a data science role, you should know all the basic statistical models, how they work, and their parameters.
- For a Python data engineer role, you should know pandas, SQL, data modelling, ETL, and streaming.

For all roles you should be familiar with solution architectures, cloud infrastructure, and basic math (combinatorics, probability, matrix operations).

**Companies will ask tricky questions to test you**. Here are a few things you need to do during the interview:

- Ask clarifying cases.
- Create a list of edge cases.
- Talk through your thought process.
- Explain your choices. Explain the complexity of your solution, and the trade-offs.
- Prepare to solve the problem fast. If you have 45 minutes, aim to complete it in 30 or less.


## Behavioral Interviews

Companies will sometimes have an interview focused on behavior and culture-fit. I think the best way to prepare for these is to practice discussing your past experiences in a structured way. Usually you will want to use the STAR method:

- Situation: what happened
- Task: what were you supposed to do
- Action: what you did
- Result: what was the outcome, try to provide numbers here

Here is a short list of questions you can practice with [[1]](#references):

1. What are your strengths?
1. What are your weaknesses?
1. Tell me about a time when you had to work under pressure
1. What is your most significant professional accomplishment
1. Why do you want to work for us
1. Why should we hire you
1. What are your long-term goals
1. Tell me about a time when you worked within a cross-functional team to complete a project
1. What methods do you use to identify your clients' needs? How do you structure your approach when solving those needs?
1. Tell me about a time when you exceeded expectations.
1. Describe a time when you had to make a decision without having all the facts.
1. Tell me about a time when you failed on a project.
1. Describe a time when you had to persuade a colleague/client to follow your ideas or recommendations.
1. Describe how you would explain a complex or technical issue to a client.
1. Tell me about a time when you had to work with a difficult client on a project engagement.
1. Describe a time when you disagreed with a supervisor or colleague. How did you resolve the situation? 

One tip I think is good is that you can have a set of 3-4 stories that you can adapt to any question.

## Offer Interview

Sometimes, depending on your level, companies will ask you to come in in person to meet your manager and negotiate your offer. If this happens, you'd better come prepared to make sure your needs are met. If you have any doubts about the benefits you will receive, this is the time to clarify them.

I have one personal rule:

{% include admonition.html 
type="Tip" 
body="
<b>You're only allowed to quit when you have a greater challenge ahead.</b>
"
%}

## References

[1] Indeed, "35 Questions for Consulting Interviews" 2025 [link](https://www.indeed.com/career-advice/interviewing/questions-for-consulting-interviews)
