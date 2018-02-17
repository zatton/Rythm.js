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

Plan
====

1. L'idée

J'aime le design => L'UX m'interesse => J'ai pas le meilleur temps de l'expérimentation UX === Geocities

https://blog.squareroots.de/en/wp-content/uploads/2016/08/0.png

Découverte de la web audio-api => Puissance over 9000 => Faut que je l'utilise

=> OMG I NEED RYTHM.JS

2. Comment ça marche ?

Web audio api => Analyse de fréquence avec FFT

Minute C'est pas sorcier : Fréquence audio / Shout out https://pudding.cool/2018/02/waveforms/

Demo Analyse de fréquence (inline slide) => Récupérer la puissance d'une fréquence à un instant T

donner un effet de pulse => utilise la fréquence à l'instant T : PB = la puissance est relative

=> Garder un tampon des dernières valeurs, faire la moyenne => compare la puissance à l'instant T à la moyenne : PB = analyser une fréquence, c'est naze (Un son = Ensemble de fréquences)

Détecter bases = Some de fréquences basses

Abonner la réaction non pas à une valeur mais à un ensemble de fréquence (même système mais faut sur une moyenne des fréquences)

Démo Pulse

CA MARCHE !

THE END ?

Pour déconner = considérer que c'est une lib à succès : Gros travail sur la doc, ajout de badges pour faire genre (Code climate + Travis... Echo "test is for weaks")

3. Un premier succès

Diffusion au sein de Z => conseil = poster sur EchoJS & équivalents (EchoJS + JavascriptKicks)

Création d'une page de démo => Screen de la première de démo

Micro succès => 30stars

sbruchmann
Alternative title:
How to Annoy Your Users Part 1: Auto Playing Sound







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
