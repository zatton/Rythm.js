Plan
====

L'idée
------

J'aime le design => L'UX m'interesse => J'ai pas le meilleur temps de l'expérimentation UX === Geocities

https://blog.squareroots.de/en/wp-content/uploads/2016/08/0.png

Découverte de la web audio-api => Puissance over 9000 => Faut que je l'utilise

=> OMG I NEED RYTHM.JS

Comment ça marche ?
--------------

Intercontrat 12 Mars 2016

Web audio api => Analyse de fréquence avec FFT

Minute C'est pas sorcier : Fréquence audio / Shout out https://pudding.cool/2018/02/waveforms/

Demo Analyse de fréquence (inline slide) => Récupérer la puissance d'une fréquence à un instant T

donner un effet de pulse => utilise la fréquence à l'instant T : PB = la puissance est relative

=> Garder un tampon des dernières valeurs, faire la moyenne => compare la puissance à l'instant T à la moyenne : PB = analyser une fréquence, c'est naze (Un son = Ensemble de fréquences)

Détecter bases = Some de fréquences basses

Abonner la réaction non pas à une valeur mais à un ensemble de fréquence (même système mais faut sur une moyenne des fréquences)

Démo Pulse

CA MARCHE ! => 170lignes de codes

THE END ?

Pour déconner = fait en mode "Bonne vieille lib" = considérer que c'est une lib à succès : Gros travail sur la doc, ajout de badges pour faire genre (Code climate + Travis... Echo "test is for weaks")

La voie du succès
-------------------

Diffusion au sein de Z => conseil = poster sur EchoJS & équivalents (EchoJS + JavascriptKicks)

Création d'une page de démo => Screen de la première de démo

Micro succès => 30stars

sbruchmann
Alternative title:
How to Annoy Your Users Part 1: Auto Playing Sound

THE END v2.0 ?

Fevrier 2017

Connerie n°2 => plug-in atom qui joue du piano lorsqu'on code. Présentation au RennesJS
=> Refactoring ES6 puis nouveau coup de pub : EchoJS - Javascriptkicks

40aine de star en plus => Réalisé que les trendings github sont à porté de main : 60+star dans la journée = dans les premiers.
Demande de charité @Z pour avoir les stars manquantes

=> Works well => 150Stars en 5jours

=> Sortie des idées dans les issues github => PR de egoist sur la partie building (Rollup)

1 mois plus tard => ~= 600stars

Tentage de v2.0 = Nouvelle page de démo + 6 nouvelles "dances"
=> EchoJS + HackerNews = BOF / Relance foirée

THE END v3.0 ?

6 mois plus tard : IE. 4 septembre 2017

Découverte d'un post Reddit ancien.

Relance => EchoJS / Reddit

On me conseille de retenter hackernews => FLOP => Découverte du tag Show HN => FLOP... en apparence

Lendemain matin => +180 sur HN => +300 stars => Retweet de front-end daily => Engouement twitter => Post Reddit +90 (+ d'autres post en //) => Javascript weekly newsletter

Déclenchement des trendings github => 4ème dans la catégorie JS Image tweet between react/create-react-app (Like du tweet par Mighty Dan)

=> machine hors de controle / +400 stars par jour. Quelques PR (dont sarah drasner)

=> une semaine plus tard => Mail d'une start-up à amsterdam qui essaye de me débaucher (Exemple de la page poki <3 Rythm.js)

Je m'arrête sur les exemples, sinon les chevilles vont plus passer les portes

Succès !

THE END v4.0 ?

Le succès étant au RDV => Pousser à la contribution

Refacto => + guide de contribution dans le readme => Quelques PR => Ajout d'un shoutout pour remercier les contributeurs => des PRs

Resulat => 33 PR

THE END v5.0 ?

=> TO BE CONTINUED

Conclusions que j'en ai tiré :

Trouver des leviers pour atteindre les trendings github

Avoir une démo qui claque pour accrocher les gens (hacker new avec un peu de chance ?(et surtout utiliser les bons labels))

Perseverer !! => THE END v5 ? => 4 fois le projet aurais pu tomber à l'eau, travail de longue alleine => Pousser la chance

Conslusion finale

N'abandonnez pas vos idées, mêmes les plus tordues => La moindre des intiatives peux avoir des répercussions surprenantes


Timeline
========

12 Mars 2016
-------

Idée => Proto => Init v0.0.1

15 Mars 2016
------

echoJS + Javascriptkicks

Mini succès (30stars)

sbruchmann
Alternative title:
How to Annoy Your Users Part 1: Auto Playing Sound

1 Février 2017
--------
Talk Rennes JS => Plug-in atom

4 Février 2017
--------
EchoJS

16 Février 2017
--------
github JS trends => Tweet Frontend Daily
139 stars


4 Mars 2017
-------
v2.0.0 => EchoJS


4 septembre 2017
-------
EchoJS + Reddit

6 Septembre 2017
-------
Show HackerNews => JS Trending (Like de mighty dan)


8 Septembre 2017
-------
github trending (overall)
=> Javascript weekly newsletter
=> Tweet Javascript Daily


L'idée est de mettre l'accent sur les points importants qui ont selon moi ont contribué au succès de la librairie. Outre la part de chance, je veux parler de l'importance de :

La documentation.
Ecrire toutes ses idées en issues.
Avoir une belle démo.
Perserverer.
Tester ses idées, même les plus improbables.
Créer un cadre qui donne envie de contribuer.

Helper
=====
http://www.timqian.com/star-history/#okazari/rythm.js
