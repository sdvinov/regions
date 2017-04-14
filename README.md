# Regions app on React Native

## Installation
**[Xcode](https://developer.apple.com/xcode/) 7.0 or higher is required**. 

* Install React Native globally: `npm install -g react-native-cli`
* Create new project: `react-native init myProject`
* Download files from this repo and replace folders and files with them in newly created project
* Run an iOS build: `react-native run-ios`

## Using

**Only for iOS**.

This app is a catalog of regions. In Russia, Belarus, Kazakhstan, and Ukraine, certain numbers or letters on the number plates indicate the region where this car is registered.

* Russia
  * Last 2-3 digits (for example for Krasnodar Oblast: 23, 93, 123)
* Belarus
  * First number (for example for Minsk City: 7)
* Kazakhstan
  * Last 2 digits (for example for Almaty: 02)
* Ukraine
  *  First 2 letters (for example for Odesa Oblast: BH)

It also has a game where a user is given a number and he has to guess, which region of Russia is this. For example, you are given number 777 and variants are: Tula Oblast, Moscow City, Sakha Republic, and Zabaikalsky Krai. If you are signed up, your score (right and wrong answers count) will be sent to [Firebase](https://firebase.google.com/).