---
title: Categorification
author: Ellis Caird
tags:
    - posts
    - research
date: 2024-11-13
---

The coordinate ring $\mathbb{C}[Gr(k,n)]$ of the Grassmannian has a cluster 
structure [[Scott '03](https://arxiv.org/abs/math/0311148)]. We would like to
understand as much as possible about this structure. What are the cluster variables?
What are the clusters? Cluster monomials? Expansion formulas?

General answers to such questions can be hard to come by if we are confined only
to the algebra itself. The process of *Categorific&shy;ation* aims to free us from
this constraint by 'upgrading' things of interest (in our case functions on the
Grassmannian) to objects in some category. The idea is that you now have a richer
structure to attempt to exploit in such a way to glean more information about the
things you really care about.

I will add some examples of Categorification below and in another post I will
talk about the specific Category 'CM(C)' that categorifies the cluster structure
on the Grassmannian.

***

## The Natural Numbers

I will primarily be following [LS] here (but almost certainly will be more verbose,
if not just for my own sake). The endeavour to categorify $\mathbb{N}$
will envolve picking both a category and picking a way to 'decategorify', i.e. 
recover the naturals from our category. The first port of call might be to notice
that we can already realise the natruals as a category. They form a poset and all 
posets can be thought of as categories. While we *could* do this, it doesn't feel
like we are adding any structure here that wasn't there already. We are just viewing
the natural numbers as a category where each object is just a natural number and 
the arrows refelect the poset. Boring. If we thought for a while about whether we
know any relatively simple structures to which we could associate to each a natural number,
it would not be long before we arrived at our next port.

The category, $\mathrm{Vect}_\mathbb{R}$, of finite dimensional real vector spaces
certainly consist of objects to which we can associate a natural number, dimension.
Thus this categorification of $\mathbb{N}$ consists of assigning to each natural number
$n$, an $n$-dimensional real vector space. What structures on $n$ might be hope are also
lifted to this category? Addition? Direct sums of vector spaces adds their dimensions.
Multiplication? Tensor products of vector spaces multiply their dimension. Order? 
One could think about existence of injections from one vector space to another 
as describing the standard order on the naturals.

Admittedly, while this is a nice and simple example to think about, the natural
numbers have been well understood for quite a while and so this categorification
will not yield us any information that we could not have already known. But this
does raise a coupe of interesting questions.

- How does one make sense of structures in a categorification
that do not have a clear interpretation in the decategorified setting? E.g. what,
if anything, does a basis of a vector space correspond to in $\mathbb{N}$?

- Are there situations in which a categorification can tell us information
about structure *that we could not have known without it*? Or is it merely a tool
for when the going gets tough?

I don't have immediate answers to these questions. Maybe we can start to atleast 
partially answer them by looking at more examples.

***



[Jump Up](#the-natural-numbers)

### References:

- [LS] <https://www.ams.org/journals/notices/202201/rnoti-p11.pdf>

- [Baez] <https://arxiv.org/pdf/math/9802029>
