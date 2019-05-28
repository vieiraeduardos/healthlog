
import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';

import {
  Avatar,
  Badge,
  Header,
  Tile,
  Text
} from "react-native-elements";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: 'light-content', backgroundColor: '#3D6DCC' }}
          barStyleP="light-content"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Healthlog', style: { color: '#fff' } }}
          rightComponent={<View>
    <Avatar
      rounded
      source={require('./eduardo.jpg')}
    />

    <Badge
      status="success"
      containerStyle={{ position: 'absolute', top: -4, right: -4 }}
    />
  </View>
    }
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'space-around',
          }}
        />

        <Tile
          imageSrc={require('./boxed-water-is-better-1464078-unsplash.jpg')}
          title="Registros"
          featured
          caption="Veja seus registros cadastrados"
        />

        <Tile
          imageSrc={require('./joanna-kosinska-129039-unsplash.jpg')}
          title="Calendário"
          featured
          caption="Veja seus compromissos marcados na agenda"
        />
      </View>
    );
  }
}
