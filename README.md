# react-native-wli-flatlist

## Getting started

`$ npm install react-native-wli-flatlist --save`

### Mostly automatic installation

`$ react-native link react-native-wli-flatlist`

## Usage
```javascript
import WliFlatlist from 'react-native-wli-flatlist';

// TODO: What to do with the module?

  <WliFlatlist
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />     

```

## Props

| **Props**                 | **Type**              | **Required**       | **Description**                                                               |
|----------------           |-------------------    |--------------------|-------------------------------------------------------------------------------|
| data                      | `array`               | Yes                | Array List to be displayed\.                                                  |
| renderItem                | `function`            | Yes                | Takes an item from data and renders it into the list\.                        |
| keyExtractor              | `function`            | Optional           | Used to extract a unique key for a given item at the specified index\.        |
| ListHeaderComponent       | `component, element`  | Optional           | Rendered at the top of all the items. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />)\.            |
| ListHeaderComponentStyle  | `View Style`          | Optional           | Styling for internal View for ListHeaderComponent\.                           |
| ListFooterComponent       | `component, element`  | Optional           | Rendered at the bottom of all the items. Can be a React Component (e.g. SomeComponent), or a React element (e.g. <SomeComponent />)\.            |
| ListFooterComponentStyle  | `View Style`          | Optional           | Styling for internal View for ListFooterComponent\.                           |
| onEndReached              | `function`            | Optional           | Called once when the scroll position gets within onEndReachedThreshold of the rendered content\.                   |
| onEndReachedThreshold     | `number`              | Optional           | How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the onEndReached callback\.                                           |
| onRefresh                 | `function`            | Optional           | If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.                     |
| refreshing                | `boolean`             | Optional           | Set this true while waiting for new data from a refresh.\.                    |
| ItemSeparatorComponent    | `component`           | Optional           | Rendered in between each item, but not at the top or bottom\.                 |
| horizontal                | `boolean`             | Optional           | If true, renders items next to each other horizontally instead of stacked vertically\.                |
| numColumns                | `number`              | Optional           | Used to show list in grid view\.                                              |


We can also use other properties of FlatList in this component as per our requirment just need to pass as it is as we pass in FlatList.

## Methods

We can use all Methods of FlatList also just need to pass as we pass in FlatList.



