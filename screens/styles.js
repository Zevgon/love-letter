import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 60,
    fontFamily: 'cortado',
    backgroundColor: 'transparent',
  },
  imageContainer: {
    width: '100%',
    height: '25%',
  },
  image: {
    width: '100%',
  },
  subtitle: {
    fontSize: 36,
    fontFamily: 'Avenir',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textField: {
    backgroundColor: '#fff',
    fontSize: 18,
    padding: 5,
    margin: 10,
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
    margin: 10,
  },
  navBar: {
    backgroundColor: 'transparent',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  backgroundCircle: {
    position: 'absolute',
    borderColor: '#ff0000',
    borderWidth: 3,
    backgroundColor: '#ffbbbb',
  },
});

export default styles;
