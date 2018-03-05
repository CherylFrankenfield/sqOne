# SquirreledAway

##### React / React Native capstone project  

#### By Cheryl Frankenfield, 3/2/18

## Description

_SquirreledAway’s goal is to combat boredom, keep you organized, step-up date night and be your local bucket list/ social events organizer. Have you ever said the phrase, ‘We should do that sometime,’ but then never did? If that sounds like you, check out the SquirreledAway app. It helps you remember the things on your local bucket list, like camping at the folk festival, volunteering at the local beer fest each year, attending roller derby, and more!_

## Setup/Installation Requirements

* Git clone [SqOne - SquirreledAway Repo](https://github.com/CherylFrankenfield/sqOne.git)

Run:
* npm install
* react-native run-ios

Dependencies:
* Emulator for mobile - Expo app or Xcode

## Planning

### 1. Specs
_The app will allow a user to add an event to a master event list._
* _Input: User touches +New and form view is rendered for user's event input._
* _Output: Event details are captured as new entry in master event list._

_The app will allow a user to view the master event list._
* _Input: User touches Events tab (may also just be the home view)._
* _Output: List of master events are displayed in that view._

_The app will allow a user to view a single event._
* _Input: User touches single event displayed on master events lists view._
* _Output: View is rendered to review that event's details._

_The app will allow a user to update a single event._
* _Input: User touches form field and keypad is displayed for editing._
* _Output: User clicks done and new edits are saved to event._

_The app will allow a user to delete a single event._
* _Input: User touches/clicks a delete X or button._
* _Output: Entry is deleted and removed from overall list (future user story here may be an "are you sure?" toaster indicator)._

_The app will allow for events to be saved in database._
* _Input: User adds multiple bucket list items to master list._
* _Output: These are all saved in database and available to view in next session of opening app._

### 2. Future User Stories/Dependencies

1. A user has a specific account login and app allows for multiple users. AuthO and authentication needs to be implemented.
2. A user has a profile page and/or settings functionality with the ability to upload a profile image.
3. A user can search by month for event. Look at UI library for pre-built month UI components.
4. A user can receive notifications of upcoming event(s). Investigate push notification tools for mobile.
5. A user can search by keyword for event. Look into keyword search ability and implement logic. Prebuilt keyword tagging may include: Restaurant, Music, Festival, Sports, Comedy, Arts, Season, Months. Ability for personalization in keywords by user, for example, would include: Mushroom hunting/spots, Camping trips/permits, Bike festivals, etc.
6. Events can have a repeat checkbox to make sure you don’t forget to buy tickets again the following year.
7. Social share component with friends also on the app.
8. Rating system for events/reviews could be hooked up to API (Yelp, other?) if it makes sense.
9. Ticket purchase ability could be hooked up to API (if applicable).
10. Logo, domain and marketing webpage could be designed in React to help promote app.
11. App could have license, T&Cs and privacy statement.
12. App could be deployed to App store.

### 3. UX/UI
* Include UI Library. Options include: Semantic UI, Glamorous, NativeBase.
* Develop custom style using CSS objects and modules with React.
* Main mobile view would contain 5 buttons/icons for:
  1. Account
  2. Search
  3. New
  4. Events List
  5. Calendar View

### Additional Planning Documents

Please find planning [repo here](https://github.com/CherylFrankenfield/squirreledaway-planning.git).

### Component Snapshots - Mobile Views

Available in UI Images folder

  ## Known Bugs

  _Currently I'm working through different navigation types to be able to properly display static components and screens. After adding three new screens and trying to link with TabNavigator, I'm currently getting an error message about Module not existing in module map so troubleshooting this. Also I noticed there are two App folders in GitHub repo whereas in Atom, I only have one. I will have to troubleshoot this duplication?_

  ## Support and contact details

  _If you have any issues, questions, ideas or concerns, please contact me._

  ## Technologies Used

  * React
  * React Native
  * React Navigation Router
  * Redux
  * Native Base - UI Library
  * Webpack
  * Firebase
  * XCode - mobile emulator
  * JavaScript
  * HTML
  * CSS

  ### License

  *MIT*

  Copyright (c) 2018 **_Cheryl Frankenfield_**
