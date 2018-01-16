import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 42,
    fontFamily: 'Avenir',
  },
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  inlineContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  textField: {
    backgroundColor: '#fff',
    fontSize: 18,
    padding: 5,
    flex: 8,
    margin: 10,
    borderRadius: 5,
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
});

export default styles;
