---
layout: post
title: "The Safe App Manifesto"
date: 2025-05-17 10:00:00 +0100
categories: startup
permalink: /safe-app-manifesto
---

I've been thinking about this one for ever: apps become less and less usable, with ever more abusive practices.
Now that generated content is becoming ubiquitous, I think it's time for me to write down these principles, formalize them, so I have something to refer back to when needed.

I initially wrote the first 5 guidelines in January 2024, but they had been on my mind much, much longer than that. Each principle represents a responsibility on the part of the app owner, towards the user.

### The Safe App Manifesto

#### Towards long-term user trust and health

**Principle 1: No Soliciting.** Never show the user content they haven't explicitly requested. This includes pop-ups. Recommendation made to users must match, even if partially, what has been queried. 

**Principle 2: Discoverability.** User has easy and unrestricted access to their data, inventory, or catalogue. Whatever the user has the right to see, they should be able to easily reach it.

**Principle 3: Auditability.** The user has a right to an accurate and complete history of their usage. All their views, transactions, and interactions should be recorded and available. All actions should be reversible.

**Principle 4: Opt-Out By Default.** All permissions, notifications, communications are disabled by default. This includes cookies. Legal correspondence is the only exception.

**Principle 5: Data Stewardship.** No data is ever stored outside a user's device. This includes backups. Multi-device synchronization uses e2e encryption, keys are never sent via networks, nothing is ever stored nor logged. Data stored on the user's device is encrypted.

**Principle 6: Continuity.** The right for a user to continue exactly where they left off. If a stops midway through a task, they must be able to return to the exact same point where they left off. 

**Principle 7: Clean Interface.** User-interfaces are flat and vectorized. Border-less design whenever possible. Illustrations are accepted, but not abstract artwork. Limit the use of photos as much as possible, and when used, users are allowed to zoom-in, and download. Real-world objects can be represented in 3D if necessary, as long as the user is able to perform full 3-axis rotation, scaling, and panning.

### Applying the Principles

| App | No Soliciting | Discoverability | Auditability | Opt-out By Default | Data Stewardship | Continuity | Clean Interface | Score |
|-----------|----|----|----|----|----|----|----|-----|
| X         | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 0/7 |
| Google    | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | 4/7 |
| Instagram | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | 1/7 |


### Technical Notes

`TO DO` one day I'm coming back to this section and detailing a technical implementation of these features. But for now, the time is up, and I need to start working on the next post. Cheers