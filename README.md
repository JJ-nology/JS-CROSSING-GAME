# JS road crossing game

Using HTML, SCSS and JS

This game asks the player to help character cross a busy road without being hit by any of the moving vehicles. Using only the up arrow button, once you leave the safe zone, there is no turning back.

#

# HTML requirements

- [x] Set up the game area/ window - maybe canvas element.
- [x] Have clear start and end area.
- [x] Set up an element to hold the crossing item/ animal.
- [x] Set up an element to hold the 'vehicles' on the road - maybe div for multiple vehicles to be created.
- [x] Other elements

  - [x] Score/ level display
  - [x] Game title

    CLASSES AND ID'S

    - - [x] # gameWindow
    - - [x] vehicle-list
    - - [x] #playerCharacter
    - - [x] level-display

#

# SCSS

- [ ] Use background image of a road with at least 10 lanes and white road markings.
- [x] Screen dimensions responsive.
- [x] Use grid rows to ensure vehicles appear and move on the correct area of the background (from left to right).
- [x] Choose color scheme for remaining screen area.
- [x] Same color for display, title and other writing on screen.

#

# JS

1. [ ] When player clicks on START button.
   - [ ] Player character should be on-screen.
   - [ ] Vehicles should be created and should start moving across the screen
     - [ ] Object vehicles created programmatically.
     - [ ] Attributes = color, speed, starting position.
     - [ ] Timing for vehicles starting and moving.
   - [ ] The only active key/ event listener should be the up arrow (for mobile and tablet think about screen tap and how to use it).
2. [ ] When player moves the character.
   - [ ] Player should only be able to move forward/ up the page (no backwards, left or right movement).
   - [ ] If player is too close/ collides with a vehicle GAME OVER.
   - [ ] If player makes it to the opposite safe zone/ ending area the game should continue with the character returning to the bottom of the page safe zone ready to continue playing.
3. [ ] When player reaches the ending zone.
   - [ ] Character resets to the bottom of the screen
   - [ ] Score/ level display increase by 1
   - [ ] Speed of the vehicles should increase
4. [ ] When player is at GAME OVER
   - [ ] game should stop (vehicles stop moving, play character inactive)
   - [ ] Player's current level/ score should be displayed with a 'well done' message.
   - [ ] Player should be given the option to play again from level 1.
5. OOP CONSIDERATIONS
   - Vehicles will need to be objects with color, movement, starting position attributes
   - How will off-screen vehicles be managed?? Delete or just leave them??
   - What about the player character? Object or PNG?
   - If the scoreboard is also an object, increasing score and resetting could be a method.

#

# Special considerations

- Will need to find or create road image for the background back up plan = black background with grid dashed line decoration in SCSS.
- If possible find 3 vehicle shape svg (motocycle, car, truck) back up plan = finding a way to create car shapes using SCSS.

#

# NICE TO HAVE'S

- Timer with time to cross decreasing per level.
- At higher levels, have vehicles moving from the opposite side of the screen.
- Some sort of game item that increases time to cross by 10 seconds.
- Different colors for the vehicles per level.
