import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TColor} from '../theme/appTheme';

interface PropsBotonCalc {
  texto: string;
  color?: TColor;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const BotonCalc = ({
  texto,
  color = '#2d2d2d',
  ancho = false,
  accion,
}: PropsBotonCalc) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    justifyContent: 'center',
    margin: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
