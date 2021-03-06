# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jonathan Villarreal**

Time spent: **7** hours spent in total

Link to project: https://glitch.com/edit/#!/marked-lively-coreopsis?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

### Win with mistake
![](https://github.com/JonathanV1502/codepath-prework/blob/glitch/SitePreworkDemo_WinWithError.gif)
### Loss from too many tries
![](https://github.com/JonathanV1502/codepath-prework/blob/glitch/SitePreworkDemo_LossTooManyTrys.gif)
### Loss from running out of time
![](https://github.com/JonathanV1502/codepath-prework/blob/glitch/SitePreworkDemo_LossNoTime.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* w3schools
* YouTube
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  
The initial walk-through of the prework was very straightforward and informational about specific elements was helpful when developing an understanding of HTML, CSS, and JavaScript. However, I found the JavaScript portion of the project to be the most difficult. In contrast, I had little to no difficulty with the base project. Most of the JavaScript I wrote for the optional portion did pose a challenge at times since I would need to research how to achieve specific tasks. For example, creating the countdown timer was the most researched topic I implemented. The problems I encountered with the countdown timer included updating the page element every second, resetting the timer on each turn, and telling the player they ran out of time. After referring to some code on W3Schoools, I created the initial clock with the help of a setInterval() function. Then after some logic adaptation, I was then able to make the clock rest on each turn and when the player started a new game and alert the player why they lost with an alert() function specific to this way of losing. The second most challenging task was making the game give you multiple attempts per game (not per round). While the initial logic for allowing this was not too difficult, I needed to have an HTML element update to notify the player. To find a solution, I had to do a few searches on W3Schools and found ".innerHTML" to update the innerHTML of my "countDownTimer" element.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  
When I was doing the project, I had thought it might be interesting to have some kind of multiplayer functionality across different computers over the internet. With this in mind, it made me curious to learn how we might implement this type of feature where I see another player's action in real-time. This is similar to what you might see in a shared google doc where someone else is writing in real-time. Furthermore, I'd like to know what makes a website "slow" or "fast" and how we can use this knowledge to create fast and responsive pages. Lastly, it would be interesting to learn how, for example, Apple can develop a product page that has some animation play as you progressively scroll down. Similar to what you see when you look at the [AirPods Pro Page](https://www.apple.com/airpods-pro/).

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)  
If I had a few more hours and knew I would be working on this code long-term. I have added documentation for each function I made so the next person who works on this code would understand what any particular function does. Features I would have liked to add are the ability to change what game mode you are on. For example, you could have a mode that keeps adding to the sequence until you fail to recall the pattern correctly and tracks your high score. Another could have been some multiplayer mode where you and a friend have different sequences, and you are playing to see who can survive the longest. An animation I could have added was when you click a button, and it could provide feedback if it was correct or not by making the button flash a green check if correct or a red X if incorrect. Lastly, I'm a bit unsatisfied with my countdown timer. I would have liked to implement either some bar that progressively was less filled or a circle that did something similar.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/701b927b266e43558230f644d446474d)



## License

    Copyright Jonathan Villarreal

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
