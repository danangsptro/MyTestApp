import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
// import MateriFlexBox from './src/pages/materiFlexBox.js';
// import SampleComponent from './src/pages/sampleComponent.js';
import StylingReactNativeComponent from './src/pages/stylingReactNativeComponent.js';
import PositionReactNative from './src/pages/posisitionReactNative.js';
// import PropsDinamis from './src/pages/PropsDinamis.js';
import Communication from './src/pages/comunication.js';
import StateDinamis from './src/pages/StateDinamis.js';
import BasicJavascript from './src/pages/basicJavascript.js';
import ReactNativeSvg from './src/pages/reactNativeSvg.js';
import CallApi from './src/pages/callApi.js';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 3000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        {/* <MateriFlexBox /> */}
        {/* <PropsDinamis /> */}
        {/* <PositionReactNative /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallApi /> */}
        <BasicJavascript />
      </ScrollView>
    </View>
  );
};

export default App;
