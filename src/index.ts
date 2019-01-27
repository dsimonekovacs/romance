import generatePoem from './generatePoem'

const hotlineBling = `
You used to call me on my
You used to, you used to
Yeah

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city,
You got a reputation for yourself now
Everybody knows and I feel left out
Girl you got me down, you got me stressed out
'Cause ever since I left the city,
you started wearing less and goin' out more
Glasses of champagne out on the dance floor
Hangin' with some girls I've never seen before

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city, you, you, you
You and me we just don't get along
You make me feel like I did you wrong
Going places where you don't belong
Ever since I left the city,
you, you got exactly what you asked for
Running out of pages in your passport
Hanging with some girls I've never seen before

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

These days, all I do is
Wonder if you're bendin' over backwards for someone else
Wonder if you're rollin' up a backwoods for someone else
Doing things I taught you, gettin' nasty for someone else
You don't need no one else
You don't need nobody else, no
Why you never alone
Why you always touching road
Used to always stay at home, be a good girl
You was in a zone, yeah
You should just be yourself
Right now, you're someone else

You used to call me on my cell phone
Late night when you need my love
Call me on my cell phone
Late night when you need my love
And I know when that hotline bling
That can only mean one thing
I know when that hotline bling
That can only mean one thing

Ever since I left the city
`

const they_see_me_rowing = `
Row Row Row your boat,
gently down the stream
`
const coco = `
I'm in love with the coco (coco, coco)
I'm in love with the coco (coco, coco)
I got it for the low low
I'm in love with the coco (coco, coco)
I'm in love with the coco (coco, coco)
I'm in love with the coco (coco, coco)
I got it for the low low
I'm in love with the coco (coco, coco)
Hit my plug, that's my cholo
'Cause he got it for the low low
If you snitchin' I go loco (go crazy)
Hit you with that treinta ocho
Thinkin' that I'm solo
Fifty deep, they're like "oh no" (no no no, please no)
Heard the feds takin' photos
I know nothing, fuck the po' po'
Bakin' soda, I got bakin' soda
Bakin' soda, I got bakin' soda
Whip it through the glass nigga
I'm blowin' money fast, nigga
I'm in love with the coco (coco, coco)
I'm in love with the coco (coco, coco)
I got it for the low low
I'm in love with the coco (coco, coco)
I'm in love with the coco (coco, coco)
I'm in love with the coco (coco, coco)
I got it for the low low (turn off)
I'm in love with the coco (coco, coco)
36, That's a kilo (aqui)
Need a brick, miss my free throw (stay away)
I'm in love, just like Ne-Yo
Bustin' bustin', now he Neo
Free my homies, fuck the C.O.
Fuck the judge, fuck my P.O.
All this coke like I'm Nino
Water whip like I'm Nemo
Bakin' soda, I got bakin' soda
Bakin' soda, I got bakin' soda
Whip it through the glass, nigga
I'm blowin' money fast, nigga
I'm in love with the coco
I'm in love with the coco
I got it for the low low
I'm in love with the coco
I'm in love with the coco (coco, coco)
I'm in love with the coco (coco, coco)
I got it for the low low (turn off)
I'm in love with the coco (coco, coco, coco, coco)`

const trumpSpeech = `
Wow. Whoa. That is some group of people. Thousands.
So nice, thank you very much. That's really nice. Thank you. It's great to be at Trump Tower. It's great to be in a wonderful city, New York. And it's an honor to have everybody here. This is beyond anybody's expectations. There's been no crowd like this.
And, I can tell, some of the candidates, they went in. They didn't know the air-conditioner didn't work. They sweated like dogs.
They didn't know the room was too big, because they didn't have anybody there. How are they going to beat ISIS? I don't think it's gonna happen.
Our country is in serious trouble. We don't have victories anymore. We used to have victories, but we don't have them. When was the last time anybody saw us beating, let's say, China in a trade deal? They kill us. I beat China all the time. All the time.
When did we beat Japan at anything? They send their cars over by the millions, and what do we do? When was the last time you saw a Chevrolet in Tokyo? It doesn't exist, folks. They beat us all the time.
When do we beat Mexico at the border? They're laughing at us, at our stupidity. And now they are beating us economically. They are not our friend, believe me. But they're killing us economically.
The U.S. has become a dumping ground for everybody else's problems.
Thank you. It's true, and these are the best and the finest. When Mexico sends its people, they're not sending their best. They're not sending you. They're not sending you. They're sending people that have lots of problems, and they're bringing those problems with us. They're bringing drugs. They're bringing crime. They're rapists. And some, I assume, are good people.
But I speak to border guards and they tell us what we're getting. And it only makes common sense. It only makes common sense. They're sending us not the right people.
It's coming from more than Mexico. It's coming from all over South and Latin America, and it's coming probably -- probably -- from the Middle East. But we don't know. Because we have no protection and we have no competence, we don't know what's happening. And it's got to stop and it's got to stop fast.
Islamic terrorism is eating up large portions of the Middle East. They've become rich. I'm in competition with them.
They just built a hotel in Syria. Can you believe this? They built a hotel. When I have to build a hotel, I pay interest. They don't have to pay interest, because they took the oil that, when we left Iraq, I said we should've taken.
So now ISIS has the oil, and what they don't have, Iran has. And in 19 -- and I will tell you this, and I said it very strongly, years ago, I said -- and I love the military, and I want to have the strongest military that we've ever had, and we need it more now than ever. But I said, "Don't hit Iraq," because you're going to totally destabilize the Middle East. Iran is going to take over the Middle East, Iran and somebody else will get the oil, and it turned out that Iran is now taking over Iraq. Think of it. Iran is taking over Iraq, and they're taking it over big league.
We spent $2 trillion in Iraq, $2 trillion. We lost thousands of lives, thousands in Iraq. We have wounded soldiers, who I love, I love -- they're great -- all over the place, thousands and thousands of wounded soldiers.
And we have nothing. We can't even go there. We have nothing. And every time we give Iraq equipment, the first time a bullet goes off in the air, they leave it.
Last week, I read 2,300 Humvees -- these are big vehicles -- were left behind for the enemy. 2,000? You would say maybe two, maybe four? 2,300 sophisticated vehicles, they ran, and the enemy took them.`

generatePoem(trumpSpeech, 10)