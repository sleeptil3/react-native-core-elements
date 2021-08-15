# React Native CoreElements
### Designed by Shawn Clary

## What is this?

I'm beginning to learn React-Native and created a basic set of custom components for font styles (like heading, title, body, etc.), button styles, a Flex Box component, as well as just some quick access to a couple preconfigured existing React Native Components (like a loading indicator or an Image).

I am desigining purely for iOS at this point, but to my knowledge, I have thus far not used any iOS-only features.

All of the settings are easily changeable to suit your needs and App style.

Expo CLI is the development environment.

## Setup

- Run `yarn install` after forking/cloning
- Run `yarn start` to begin the server

To view the live updates on the computer, be sure and have XCode installed and Simulator open and running. Then when the Expo server HTML page opens, click "Run in iOS Simulator".

To view on your device, download "Expo Go" from the AppStore, then use your iPhone camera to scan the QR code on the Expo server.

## Color Configuration

Use the `styles.js` file in the `CoreElements` folder to setup the colors for your app. This is mostly optional as you can pass string values through the attributes, but having this single source-of-authority for colors is a great best-practice for making easy color changes down the road.

## Components & Attributes

Simply pass the following attributes into the component to apply them. See `app.js` for examples.

\* indicates default value

`override` is used to override the default styling in specific places. For example, the default font size of Heading is `40`, but say you want to use `60` is a specific place and give it `40` on the bottom margin just that one time. Simply set the override attribute to be `override={{ fontSize: 60, marginBottom: 40}}`. Overrides always get applied AFTER other styling so that they will take.

### FontStyles

 `text.js` in `CoreElements`

Included are Heading, Title, Subtitle, and Body as well as a font StyleSheet for customization.

#### Attributes

- align: (string) [auto*, left, right, center, justify]
- override: (object) {property: value, ...}
- color: (string)

### Buttons

 `buttons.js` in `CoreElements`

Included are `ButtonToggle` and `ButtonSetValue`. `ButtonToggle` is for flipping a state variable between `false` or `true`. `ButtonSetValue` is used when you want to update the value of a state variable. It can be used to reassign a value, as well as add the value to an array or object variable.

#### Attributes

- overwrite: (boolean) [false*, true]
  - when set to `true`, whatever value you provide will overwrite the current state. If it is ommitted, or set to `false`, state is assumed to be an Array or Object and will be pushed or added to the state.
- size: (string) [small, large]
  - Small is a simpler text-only button (the default Button component), while large is a custom designed button with a background
- text: (string)
  - display text for the button
- setState: (function)
  - the function to be called to set the state. This is usually the setter from a `useState` hook, but can also be other things, like an `alert` for example.
- state: (state variable)
  - required if the current state is needed to complete the action, like an incrementer or adding to a state array
- value: (any)
  - what is assigned to the setState function
- color: (string)
  - the color of the button background
- pressColor: (string)
  - the color of the button background during a press (only applies to `large` buttons)
- fontSize: (number) default is `18`
- fontColor: (string) default is `colors.white`
- altText: (string)
  - accessibility text for the button
- override: (object)

### Flex Container

 `containers.js` in `CoreElements`

Flex component that will create a `<View>` or `<SafeAreaView>` container with the following attributes. Note that `align-content` is omitted, as I rarely use it. You can easily add it if you need to or include it in the override.

#### Attributes

- direction: (string) [column*, row]
- justify: (string) [flex-start*, flex-end, center, space-between, space-around, space-evenly]
  - This is the `justifyContent` property
- align: (string) [flex-start*, flex-end, center, stetch, baseline]
  - This is the `alignItems` property
- color: (string)
  - the background color of the container. The default is `transparent`
- safe: (boolean) [false*, true]
  - set this to `true` if you want to use a `SafeAreaView` container, which makes sure no content is located under the Status Bar at the top of iOS.
- fill: (number)
  - when stacking components, supplying a fill value will divide the space up proportionally to the elements. For example if you give the first component a `1` and the second component a `2`, that is `3` units total and the first component will take up `1/3` of the available space and the second will take up `2/3` of the available space. This maps to the `flex:` property.
- height: (number or string percentage) default is `auto`
- width: (number or string percentage) default is `auto`
- override: (object)
