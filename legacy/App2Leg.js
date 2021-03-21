// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { PanGestureHandler, State } from "react-native-gesture-handler";
// import { decay, clamp, parsePath, getPointAtLength } from "react-native-redash";
// import Animated from "react-native-reanimated";

// const { Value, event, sub, interpolate } = Animated;
// const TOUCH_SIZE = 200;
// const { width } = Dimensions.get("window");
// const white = "white";

// export default function App2(props) {
//     const { r, d, borderWidth, borderColor } = props;

//     const radius = r + borderWidth / 2;
//     const translationX = new Value(0);
//     const velocityX = new Value(0);
//     const state = new Value(State.UNDETERMINED);
//     const onGestureEvent = event([
//         {
//             nativeEvent: {
//                 translationX,
//                 velocityX,
//                 state
//             }
//         }
//     ])
//     const cx = clamp(decay(translationX, state, velocityX), 0, width);
//     const path = parsePath(d);
//     const length = interpolate(cx, {
//         inputRange: [0, width],
//         outputRange: [0, path.totalLength]
//     });
//     const { y, x } = getPointAtLength(path, length);
//     const translateX = sub(x, TOUCH_SIZE / 2);
//     const translateY = sub(y, TOUCH_SIZE / 2);
//     return (
//         <View style={StyleSheet.absoluteFill}>
//             <PanGestureHandler
//                 onHandlerStateChange={onGestureEvent}
//                 {...{ onGestureEvent }}
//             >
//                 <Animated.View style={[styles.container, { transform: [{ translateX }, { translateY }] }]}>
//                     <View style={[styles.cursor, {
//                         width: radius * 2,
//                         height: radius * 2,
//                         borderRadius: radius,
//                     }]}></View>
//                 </Animated.View>
//             </PanGestureHandler>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         width: TOUCH_SIZE,
//         height: TOUCH_SIZE,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     cursor: {        
//         borderColor,
//         backgroundColor: white,
//     }
// })
