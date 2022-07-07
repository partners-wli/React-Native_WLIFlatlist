// main index.js

// import { NativeModules } from 'react-native';

// const { WliFlatlist } = NativeModules;

// export default WliFlatlist;

import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

const WLIFlatList = (props) => {
  return (
    <>
      <FlatList
        data={props.data}
        style={props.style}
        keyExtractor={props.keyExtractor}
        renderItem={props.renderItem}
        ListHeaderComponent={props.ListHeaderComponent}
        ListHeaderComponentStyle={props.ListHeaderComponentStyle}
        ListFooterComponent={props.ListFooterComponent}
        ListFooterComponentStyle={props.ListFooterComponentStyle}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={props.onEndReachedThreshold}
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
        ItemSeparatorComponent={props.ItemSeparatorComponent}
        horizontal={props.horizontal}
        numColumns={props.numColumns}
        {...props}
      />
    </>
  );
}

WLIFlatList.defaultProps = {
  keyExtractor: ((item: any, index: number) => string) | undefined,
};

WLIFlatList.propTypes = {
  data: PropTypes.array,
  style: PropTypes.any,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.any,
  ItemSeparatorComponent: PropTypes.any,
  ListHeaderComponent: PropTypes.any,
  ListHeaderComponentStyle: PropTypes.any,
  ListFooterComponent: PropTypes.any,
  ListFooterComponent: PropTypes.any,
  onEndReached: PropTypes.func,
  onEndReachedThreshold: PropTypes.number,
  onRefresh: PropTypes.func,
  refreshing: PropTypes.bool,
  horizontal: PropTypes.bool,
  numColumns: PropTypes.number,
}

export default WLIFlatList;
