// import React, { } from 'react';
// import { Dimensions, StyleSheet, Text, View } from 'react-native';
// import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg'

// import * as shape from 'd3-shape';

// import Cursor from './App2'

// const data = [
//   { x: new Date(2018, 9, 1), y: 0 },
//   { x: new Date(2018, 9, 16), y: 0 },
//   { x: new Date(2018, 9, 17), y: 200 },
//   { x: new Date(2018, 10, 1), y: 200 },
//   { x: new Date(2018, 10, 2), y: 300 },
//   { x: new Date(2018, 10, 5), y: 300 },
// ]

// const phi = (1 + Math.sqrt(5)) / 2;
// const { width, height: wHeight } = Dimensions.get('window');
// const height = (1 - 1 / phi) * wHeight;
// const strokeWidth = 4;
// const padding = strokeWidth / 2;
// const CURSOR_RADIUS = 8;
// const STROKE_WIDTH = CURSOR_RADIUS / 2;
// const getDomain = (domain) => [Math.min(...domain), Math.max(...domain)];


// export default function App(props) {
//   const { data } = props;

//   const scaleX = scaleTime().domain(getDomain(data.map(d => d.date))).range([0, width]);
//   const scaleY = scaleLinear().domain(getDomain(data.map(d => d.value))).range([height - padding, 0 + padding]);


//   const d = shape.line()
//     .x(p => scaleX(p.date))
//     .y(p => scaleY(p.value))
//     .curve(shape.curveBasis)(data).toString();

//   return (
//     <View style={styles.container}>
//       <Svg style={StyleSheet.absoluteFill}>
//         <Defs>
//           <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
//             <Stop stopColor="#CDE3F8" offset="0%" />
//             <Stop stopColor="#eef6fd" offset="80%" />
//             <Stop stopColor="#FEFFFF" offset="100%" />
//           </LinearGradient>
//         </Defs>
//         <Path d={`${line} L ${width} ${height} L 0 ${height}`} fill="url(#gradient)" />
//         <Path fill="transparent" stroke="#3977e3" {...{ d, strokeWidth }} />
//       </Svg>
//       <Cursor
//         r={CURSOR_RADIUS}
//         borderWidth={STROKE_WIDTH}
//         borderColor="#3977e3"
//         {...{ d }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width,
//     height,
//   },
//   cursor: {
//     position: "absolute",
//     width: cursorRadius * 2,
//     height: cursorRadius * 2,
//     borderRadius: cursorRadius,
//     borderColor: "#367be2",
//     borderWidth: 3,
//     backgroundColor: "white"
//   },
//   label: {
//     position: 'absolute',
//     top: -45,
//     left: 0,
//     backgroundColor: 'lightgray',
//     width: labelWidth
//   }
// });
